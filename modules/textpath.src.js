/**
 * @license Highcharts JS v11.4.5 (2024-07-04)
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
(function (factory) {
    if (typeof module === 'object' && module.exports) {
        factory['default'] = factory;
        module.exports = factory;
    } else if (typeof define === 'function' && define.amd) {
        define('highcharts/modules/textpath-support', ['highcharts'], function (Highcharts) {
            factory(Highcharts);
            factory.Highcharts = Highcharts;
            return factory;
        });
    } else {
        factory(typeof Highcharts !== 'undefined' ? Highcharts : undefined);
    }
}(function (Highcharts) {
    'use strict';
    var _modules = Highcharts ? Highcharts._modules : {};
    function _registerModule(obj, path, args, fn) {
        if (!obj.hasOwnProperty(path)) {
            obj[path] = fn.apply(null, args);

            if (typeof CustomEvent === 'function') {
                Highcharts.win.dispatchEvent(new CustomEvent(
                    'HighchartsModuleLoaded',
                    { detail: { path: path, module: obj[path] } }
                ));
            }
        }
    }
    _registerModule(_modules, 'Extensions/TextPath.js', [_modules['Core/Globals.js'], _modules['Core/Utilities.js']], function (H, U) {
        /* *
         *
         *  Highcharts module with textPath functionality.
         *
         *  (c) 2009-2024 Torstein Honsi
         *
         *  License: www.highcharts.com/license
         *
         *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
         *
         * */
        const { deg2rad } = H;
        const { addEvent, merge, uniqueKey, defined, extend } = U;
        /**
         * Set a text path for a `text` or `label` element, allowing the text to
         * flow along a path.
         *
         * In order to unset the path for an existing element, call `setTextPath`
         * with `{ enabled: false }` as the second argument.
         *
         * Text path support is not bundled into `highcharts.js`, and requires the
         * `modules/textpath.js` file. However, it is included in the script files of
         * those series types that use it by default
         *
         * @sample highcharts/members/renderer-textpath/ Text path demonstrated
         *
         * @function Highcharts.SVGElement#setTextPath
         *
         * @param {Highcharts.SVGElement|undefined} path
         *        Path to follow. If undefined, it allows changing options for the
         *        existing path.
         *
         * @param {Highcharts.DataLabelsTextPathOptionsObject} textPathOptions
         *        Options.
         *
         * @return {Highcharts.SVGElement} Returns the SVGElement for chaining.
         */
        function setTextPath(path, textPathOptions) {
            // Defaults
            textPathOptions = merge(true, {
                enabled: true,
                attributes: {
                    dy: -5,
                    startOffset: '50%',
                    textAnchor: 'middle'
                }
            }, textPathOptions);
            const url = this.renderer.url, textWrapper = this.text || this, textPath = textWrapper.textPath, { attributes, enabled } = textPathOptions;
            path = path || (textPath && textPath.path);
            // Remove previously added event
            if (textPath) {
                textPath.undo();
            }
            if (path && enabled) {
                const undo = addEvent(textWrapper, 'afterModifyTree', (e) => {
                    if (path && enabled) {
                        // Set ID for the path
                        let textPathId = path.attr('id');
                        if (!textPathId) {
                            path.attr('id', textPathId = uniqueKey());
                        }
                        // Set attributes for the <text>
                        const textAttribs = {
                            // `dx`/`dy` options must by set on <text> (parent), the
                            // rest should be set on <textPath>
                            x: 0,
                            y: 0
                        };
                        if (defined(attributes.dx)) {
                            textAttribs.dx = attributes.dx;
                            delete attributes.dx;
                        }
                        if (defined(attributes.dy)) {
                            textAttribs.dy = attributes.dy;
                            delete attributes.dy;
                        }
                        textWrapper.attr(textAttribs);
                        // Handle label properties
                        this.attr({ transform: '' });
                        if (this.box) {
                            this.box = this.box.destroy();
                        }
                        // Wrap the nodes in a textPath
                        const children = e.nodes.slice(0);
                        e.nodes.length = 0;
                        e.nodes[0] = {
                            tagName: 'textPath',
                            attributes: extend(attributes, {
                                'text-anchor': attributes.textAnchor,
                                href: `${url}#${textPathId}`
                            }),
                            children
                        };
                    }
                });
                // Set the reference
                textWrapper.textPath = { path, undo };
            }
            else {
                textWrapper.attr({ dx: 0, dy: 0 });
                delete textWrapper.textPath;
            }
            if (this.added) {
                // Rebuild text after added
                textWrapper.textCache = '';
                this.renderer.buildText(textWrapper);
            }
            return this;
        }
        /**
         * Attach a polygon to a bounding box if the element contains a textPath.
         *
         * @function Highcharts.SVGElement#setPolygon
         *
         * @param {any} event
         *        An event containing a bounding box object
         *
         * @return {Highcharts.BBoxObject} Returns the bounding box object.
         */
        function setPolygon(event) {
            const bBox = event.bBox, tp = this.element?.querySelector('textPath');
            if (tp) {
                const polygon = [], { b, h } = this.renderer.fontMetrics(this.element), descender = h - b, lineCleanerRegex = new RegExp('(<tspan>|' +
                    '<tspan(?!\\sclass="highcharts-br")[^>]*>|' +
                    '<\\/tspan>)', 'g'), lines = tp
                    .innerHTML
                    .replace(lineCleanerRegex, '')
                    .split(/<tspan class="highcharts-br"[^>]*>/), numOfLines = lines.length;
                // Calculate top and bottom coordinates for
                // either the start or the end of a single
                // character, and append it to the polygon.
                const appendTopAndBottom = (charIndex, positionOfChar) => {
                    const { x, y } = positionOfChar, rotation = (tp.getRotationOfChar(charIndex) - 90) * deg2rad, cosRot = Math.cos(rotation), sinRot = Math.sin(rotation);
                    return [
                        [
                            x - descender * cosRot,
                            y - descender * sinRot
                        ],
                        [
                            x + b * cosRot,
                            y + b * sinRot
                        ]
                    ];
                };
                for (let i = 0, lineIndex = 0; lineIndex < numOfLines; lineIndex++) {
                    const line = lines[lineIndex], lineLen = line.length;
                    for (let lineCharIndex = 0; lineCharIndex < lineLen; lineCharIndex += 5) {
                        try {
                            const srcCharIndex = (i +
                                lineCharIndex +
                                lineIndex), [lower, upper] = appendTopAndBottom(srcCharIndex, tp.getStartPositionOfChar(srcCharIndex));
                            if (lineCharIndex === 0) {
                                polygon.push(upper);
                                polygon.push(lower);
                            }
                            else {
                                if (lineIndex === 0) {
                                    polygon.unshift(upper);
                                }
                                if (lineIndex === numOfLines - 1) {
                                    polygon.push(lower);
                                }
                            }
                        }
                        catch (e) {
                            // Safari fails on getStartPositionOfChar even if the
                            // character is within the `textContent.length`
                            break;
                        }
                    }
                    i += lineLen - 1;
                    try {
                        const srcCharIndex = i + lineIndex, charPos = tp.getEndPositionOfChar(srcCharIndex), [lower, upper] = appendTopAndBottom(srcCharIndex, charPos);
                        polygon.unshift(upper);
                        polygon.unshift(lower);
                    }
                    catch (e) {
                        // Safari fails on getStartPositionOfChar even if the character
                        // is within the `textContent.length`
                        break;
                    }
                }
                // Close it
                if (polygon.length) {
                    polygon.push(polygon[0].slice());
                }
                bBox.polygon = polygon;
            }
            return bBox;
        }
        /**
         * Draw text along a textPath for a dataLabel.
         *
         * @function Highcharts.SVGElement#setTextPath
         *
         * @param {any} event
         *        An event containing label options
         *
         * @return {void}
         */
        function drawTextPath(event) {
            const labelOptions = event.labelOptions, point = event.point, textPathOptions = (labelOptions[point.formatPrefix + 'TextPath'] ||
                labelOptions.textPath);
            if (textPathOptions && !labelOptions.useHTML) {
                this.setTextPath(point.getDataLabelPath?.(this) || point.graphic, textPathOptions);
                if (point.dataLabelPath &&
                    !textPathOptions.enabled) {
                    // Clean the DOM
                    point.dataLabelPath = (point.dataLabelPath.destroy());
                }
            }
        }
        function compose(SVGElementClass) {
            addEvent(SVGElementClass, 'afterGetBBox', setPolygon);
            addEvent(SVGElementClass, 'beforeAddingDataLabel', drawTextPath);
            const svgElementProto = SVGElementClass.prototype;
            if (!svgElementProto.setTextPath) {
                svgElementProto.setTextPath = setTextPath;
            }
        }
        const TextPath = {
            compose
        };

        return TextPath;
    });
    _registerModule(_modules, 'masters/modules/textpath.src.js', [_modules['Core/Globals.js'], _modules['Extensions/TextPath.js']], function (Highcharts, TextPath) {

        const G = Highcharts;
        G.TextPath = TextPath;
        G.TextPath.compose(G.SVGElement);

        return Highcharts;
    });
}));
