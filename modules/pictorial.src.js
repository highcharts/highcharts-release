/**
 * @license Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/pictorial
 * @requires highcharts
 *
 * Pictorial graph series type for Highcharts
 *
 * (c) 2010-2024 Torstein Honsi, Magdalena Gut
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["Color"], root["_Highcharts"]["Series"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Chart"], root["_Highcharts"]["StackItem"], root["_Highcharts"]["SVGRenderer"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/pictorial", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["Color"],amd1["Series"],amd1["SeriesRegistry"],amd1["Chart"],amd1["StackItem"],amd1["SVGRenderer"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/pictorial"] = factory(root["_Highcharts"], root["_Highcharts"]["Color"], root["_Highcharts"]["Series"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Chart"], root["_Highcharts"]["StackItem"], root["_Highcharts"]["SVGRenderer"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["Color"], root["Highcharts"]["Series"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["Chart"], root["Highcharts"]["StackItem"], root["Highcharts"]["SVGRenderer"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__620__, __WEBPACK_EXTERNAL_MODULE__820__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__960__, __WEBPACK_EXTERNAL_MODULE__184__, __WEBPACK_EXTERNAL_MODULE__540__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 960:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__960__;

/***/ }),

/***/ 620:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__620__;

/***/ }),

/***/ 540:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__540__;

/***/ }),

/***/ 820:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__820__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 184:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__184__;

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pictorial_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Color"],"commonjs":["highcharts","Color"],"commonjs2":["highcharts","Color"],"root":["Highcharts","Color"]}
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_ = __webpack_require__(620);
var highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default = /*#__PURE__*/__webpack_require__.n(highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_);
;// ./code/es-modules/Series/Column/ColumnSeriesDefaults.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * Column series display one column per value along an X axis.
 *
 * @sample {highcharts} highcharts/demo/column-basic/
 *         Column chart
 * @sample {highstock} stock/demo/column/
 *         Column chart
 *
 * @extends      plotOptions.line
 * @excluding    connectEnds, connectNulls, gapSize, gapUnit, linecap,
 *               lineWidth, marker, step, useOhlcData
 * @product      highcharts highstock
 * @optionparent plotOptions.column
 */
const ColumnSeriesDefaults = {
    /**
     * The corner radius of the border surrounding each column or bar. A number
     * signifies pixels. A percentage string, like for example `50%`, signifies
     * a relative size. For columns this is relative to the column width, for
     * pies it is relative to the radius and the inner radius.
     *
     * @sample  {highcharts} highcharts/plotoptions/column-borderradius/
     *          Rounded columns
     * @sample  highcharts/plotoptions/series-border-radius
     *          Column and pie with rounded border
     *
     * @type    {number|string|Highcharts.BorderRadiusOptionsObject}
     * @product highcharts highstock gantt
     */
    borderRadius: 3,
    /**
     * When using automatic point colors pulled from the global
     * [colors](colors) or series-specific
     * [plotOptions.column.colors](series.colors) collections, this option
     * determines whether the chart should receive one color per series or
     * one color per point.
     *
     * In styled mode, the `colors` or `series.colors` arrays are not
     * supported, and instead this option gives the points individual color
     * class names on the form `highcharts-color-{n}`.
     *
     * @see [series colors](#plotOptions.column.colors)
     *
     * @sample {highcharts} highcharts/plotoptions/column-colorbypoint-false/
     *         False by default
     * @sample {highcharts} highcharts/plotoptions/column-colorbypoint-true/
     *         True
     *
     * @type      {boolean}
     * @default   false
     * @since     2.0
     * @product   highcharts highstock gantt
     * @apioption plotOptions.column.colorByPoint
     */
    /**
     * A series specific or series type specific color set to apply instead
     * of the global [colors](#colors) when [colorByPoint](
     * #plotOptions.column.colorByPoint) is true.
     *
     * @type      {Array<Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject>}
     * @since     3.0
     * @product   highcharts highstock gantt
     * @apioption plotOptions.column.colors
     */
    /**
     * When `true`, the columns will center in the category, ignoring null
     * or missing points. When `false`, space will be reserved for null or
     * missing points.
     *
     * @sample {highcharts} highcharts/series-column/centerincategory/
     *         Center in category
     * @sample {highcharts} highcharts/series/stack-centerincategory/
     *         Center in category, stacked and grouped
     *
     * @since   8.0.1
     * @product highcharts highstock gantt
     */
    centerInCategory: false,
    /**
     * Padding between each value groups, in x axis units.
     *
     * @sample {highcharts} highcharts/plotoptions/column-grouppadding-default/
     *         0.2 by default
     * @sample {highcharts} highcharts/plotoptions/column-grouppadding-none/
     *         No group padding - all columns are evenly spaced
     *
     * @product highcharts highstock gantt
     */
    groupPadding: 0.2,
    /**
     * Whether to group non-stacked columns or to let them render
     * independent of each other. Non-grouped columns will be laid out
     * individually and overlap each other.
     *
     * @sample {highcharts} highcharts/plotoptions/column-grouping-false/
     *         Grouping disabled
     * @sample {highstock} highcharts/plotoptions/column-grouping-false/
     *         Grouping disabled
     *
     * @type      {boolean}
     * @default   true
     * @since     2.3.0
     * @product   highcharts highstock gantt
     * @apioption plotOptions.column.grouping
     */
    /** @ignore-option */
    marker: null, // Point options are specified in the base options
    /**
     * The maximum allowed pixel width for a column, translated to the
     * height of a bar in a bar chart. This prevents the columns from
     * becoming too wide when there is a small number of points in the
     * chart.
     *
     * @see [pointWidth](#plotOptions.column.pointWidth)
     *
     * @sample {highcharts} highcharts/plotoptions/column-maxpointwidth-20/
     *         Limited to 50
     * @sample {highstock} highcharts/plotoptions/column-maxpointwidth-20/
     *         Limited to 50
     *
     * @type      {number}
     * @since     4.1.8
     * @product   highcharts highstock gantt
     * @apioption plotOptions.column.maxPointWidth
     */
    /**
     * Padding between each column or bar, in x axis units.
     *
     * @sample {highcharts} highcharts/plotoptions/column-pointpadding-default/
     *         0.1 by default
     * @sample {highcharts} highcharts/plotoptions/column-pointpadding-025/
     *          0.25
     * @sample {highcharts} highcharts/plotoptions/column-pointpadding-none/
     *         0 for tightly packed columns
     *
     * @product highcharts highstock gantt
     */
    pointPadding: 0.1,
    /**
     * A pixel value specifying a fixed width for each column or bar point.
     * When set to `undefined`, the width is calculated from the
     * `pointPadding` and `groupPadding`. The width effects the dimension
     * that is not based on the point value. For column series it is the
     * horizontal length and for bar series it is the vertical length.
     *
     * @see [maxPointWidth](#plotOptions.column.maxPointWidth)
     *
     * @sample {highcharts} highcharts/plotoptions/column-pointwidth-20/
     *         20px wide columns regardless of chart width or the amount of
     *         data points
     *
     * @type      {number}
     * @since     1.2.5
     * @product   highcharts highstock gantt
     * @apioption plotOptions.column.pointWidth
     */
    /**
     * A pixel value specifying a fixed width for the column or bar.
     * Overrides pointWidth on the series.
     *
     * @see [series.pointWidth](#plotOptions.column.pointWidth)
     *
     * @type      {number}
     * @default   undefined
     * @since     7.0.0
     * @product   highcharts highstock gantt
     * @apioption series.column.data.pointWidth
     */
    /**
     * The minimal height for a column or width for a bar. By default,
     * 0 values are not shown. To visualize a 0 (or close to zero) point,
     * set the minimal point length to a pixel value like 3\. In stacked
     * column charts, minPointLength might not be respected for tightly
     * packed values.
     *
     * @sample {highcharts} highcharts/plotoptions/column-minpointlength/
     *         Zero base value
     * @sample {highcharts} highcharts/plotoptions/column-minpointlength-pos-and-neg/
     *         Positive and negative close to zero values
     *
     * @product highcharts highstock gantt
     */
    minPointLength: 0,
    /**
     * When the series contains less points than the crop threshold, all
     * points are drawn, event if the points fall outside the visible plot
     * area at the current zoom. The advantage of drawing all points
     * (including markers and columns), is that animation is performed on
     * updates. On the other hand, when the series contains more points than
     * the crop threshold, the series data is cropped to only contain points
     * that fall within the plot area. The advantage of cropping away
     * invisible points is to increase performance on large series.
     *
     * @product highcharts highstock gantt
     */
    cropThreshold: 50,
    /**
     * The X axis range that each point is valid for. This determines the
     * width of the column. On a categorized axis, the range will be 1
     * by default (one category unit). On linear and datetime axes, the
     * range will be computed as the distance between the two closest data
     * points.
     *
     * The default `null` means it is computed automatically, but this
     * option can be used to override the automatic value.
     *
     * This option is set by default to 1 if data sorting is enabled.
     *
     * @sample {highcharts} highcharts/plotoptions/column-pointrange/
     *         Set the point range to one day on a data set with one week
     *         between the points
     *
     * @type    {number|null}
     * @since   2.3
     * @product highcharts highstock gantt
     */
    pointRange: null,
    states: {
        /**
         * Options for the hovered point. These settings override the normal
         * state options when a point is moused over or touched.
         *
         * @extends   plotOptions.series.states.hover
         * @excluding halo, lineWidth, lineWidthPlus, marker
         * @product   highcharts highstock gantt
         */
        hover: {
            /** @ignore-option */
            halo: false,
            /**
             * A specific border color for the hovered point. Defaults to
             * inherit the normal state border color.
             *
             * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @product   highcharts gantt
             * @apioption plotOptions.column.states.hover.borderColor
             */
            /**
             * A specific color for the hovered point.
             *
             * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @product   highcharts gantt
             * @apioption plotOptions.column.states.hover.color
             */
            /**
             * How much to brighten the point on interaction. Requires the
             * main color to be defined in hex or rgb(a) format.
             *
             * In styled mode, the hover brightening is by default replaced
             * with a fill-opacity set in the `.highcharts-point:hover`
             * rule.
             *
             * @sample {highcharts} highcharts/plotoptions/column-states-hover-brightness/
             *         Brighten by 0.5
             *
             * @product highcharts highstock gantt
             */
            brightness: 0.1
        },
        /**
         * Options for the selected point. These settings override the
         * normal state options when a point is selected.
         *
         * @extends   plotOptions.series.states.select
         * @excluding halo, lineWidth, lineWidthPlus, marker
         * @product   highcharts highstock gantt
         */
        select: {
            /**
             * A specific color for the selected point.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @default #cccccc
             * @product highcharts highstock gantt
             */
            color: "#cccccc" /* Palette.neutralColor20 */,
            /**
             * A specific border color for the selected point.
             *
             * @type    {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
             * @default #000000
             * @product highcharts highstock gantt
             */
            borderColor: "#000000" /* Palette.neutralColor100 */
        }
    },
    dataLabels: {
        align: void 0,
        verticalAlign: void 0,
        /**
         * The y position offset of the label relative to the point in
         * pixels.
         *
         * @type {number}
         */
        y: void 0
    },
    // False doesn't work well: https://jsfiddle.net/highcharts/hz8fopan/14/
    /** @ignore-option */
    startFromThreshold: true,
    stickyTracking: false,
    tooltip: {
        distance: 6
    },
    /**
     * The Y axis value to serve as the base for the columns, for
     * distinguishing between values above and below a threshold. If `null`,
     * the columns extend from the padding Y axis minimum.
     *
     * @type    {number|null}
     * @since   2.0
     * @product highcharts
     */
    threshold: 0,
    /**
     * The width of the border surrounding each column or bar. Defaults to
     * `1` when there is room for a border, but to `0` when the columns are
     * so dense that a border would cover the next column.
     *
     * In styled mode, the stroke width can be set with the
     * `.highcharts-point` rule.
     *
     * @sample {highcharts} highcharts/plotoptions/column-borderwidth/
     *         2px black border
     *
     * @type      {number}
     * @default   undefined
     * @product   highcharts highstock gantt
     * @apioption plotOptions.column.borderWidth
     */
    /**
     * The color of the border surrounding each column or bar.
     *
     * In styled mode, the border stroke can be set with the
     * `.highcharts-point` rule.
     *
     * @sample {highcharts} highcharts/plotoptions/column-bordercolor/
     *         Dark gray border
     *
     * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
     * @default   #ffffff
     * @product   highcharts highstock gantt
     */
    borderColor: "#ffffff" /* Palette.backgroundColor */
};
/**
 * A `column` series. If the [type](#series.column.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.column
 * @excluding connectNulls, dataParser, dataURL, gapSize, gapUnit, linecap,
 *            lineWidth, marker, connectEnds, step
 * @product   highcharts highstock
 * @apioption series.column
 */
/**
 * An array of data points for the series. For the `column` series type,
 * points can be given in the following ways:
 *
 * 1. An array of numerical values. In this case, the numerical values will be
 *    interpreted as `y` options. The `x` values will be automatically
 *    calculated, either starting at 0 and incremented by 1, or from
 *    `pointStart` and `pointInterval` given in the series options. If the axis
 *    has categories, these will be used. Example:
 *    ```js
 *    data: [0, 5, 3, 5]
 *    ```
 *
 * 2. An array of arrays with 2 values. In this case, the values correspond to
 *    `x,y`. If the first value is a string, it is applied as the name of the
 *    point, and the `x` value is inferred.
 *    ```js
 *    data: [
 *        [0, 6],
 *        [1, 2],
 *        [2, 6]
 *    ]
 *    ```
 *
 * 3. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.column.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 1,
 *        y: 9,
 *        name: "Point2",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        y: 6,
 *        name: "Point1",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @sample {highcharts} highcharts/chart/reflow-true/
 *         Numerical values
 * @sample {highcharts} highcharts/series/data-array-of-arrays/
 *         Arrays of numeric x and y
 * @sample {highcharts} highcharts/series/data-array-of-arrays-datetime/
 *         Arrays of datetime x and y
 * @sample {highcharts} highcharts/series/data-array-of-name-value/
 *         Arrays of point.name and y
 * @sample {highcharts} highcharts/series/data-array-of-objects/
 *         Config objects
 *
 * @type      {Array<number|Array<(number|string),(number|null)>|null|*>}
 * @extends   series.line.data
 * @excluding marker
 * @product   highcharts highstock
 * @apioption series.column.data
 */
/**
 * The color of the border surrounding the column or bar.
 *
 * In styled mode, the border stroke can be set with the `.highcharts-point`
 * rule.
 *
 * @sample {highcharts} highcharts/plotoptions/column-bordercolor/
 *         Dark gray border
 *
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @product   highcharts highstock
 * @apioption series.column.data.borderColor
 */
/**
 * The width of the border surrounding the column or bar.
 *
 * In styled mode, the stroke width can be set with the `.highcharts-point`
 * rule.
 *
 * @sample {highcharts} highcharts/plotoptions/column-borderwidth/
 *         2px black border
 *
 * @type      {number}
 * @product   highcharts highstock
 * @apioption series.column.data.borderWidth
 */
/**
 * A name for the dash style to use for the column or bar. Overrides
 * dashStyle on the series.
 *
 * In styled mode, the stroke dash-array can be set with the same classes as
 * listed under [data.color](#series.column.data.color).
 *
 * @see [series.pointWidth](#plotOptions.column.dashStyle)
 *
 * @type      {Highcharts.DashStyleValue}
 * @apioption series.column.data.dashStyle
 */
/**
 * A pixel value specifying a fixed width for the column or bar. Overrides
 * pointWidth on the series. The width effects the dimension that is not based
 * on the point value.
 *
 * @see [series.pointWidth](#plotOptions.column.pointWidth)
 *
 * @type      {number}
 * @apioption series.column.data.pointWidth
 */
/**
 * @excluding halo, lineWidth, lineWidthPlus, marker
 * @product   highcharts highstock
 * @apioption series.column.states.hover
 */
/**
 * @excluding halo, lineWidth, lineWidthPlus, marker
 * @product   highcharts highstock
 * @apioption series.column.states.select
 */
''; // Keeps doclets above in JS file
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Column_ColumnSeriesDefaults = (ColumnSeriesDefaults);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Series"],"commonjs":["highcharts","Series"],"commonjs2":["highcharts","Series"],"root":["Highcharts","Series"]}
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_ = __webpack_require__(820);
var highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default = /*#__PURE__*/__webpack_require__.n(highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/Column/ColumnSeries.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { parse: color } = (highcharts_Color_commonjs_highcharts_Color_commonjs2_highcharts_Color_root_Highcharts_Color_default());


const { noop } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());



const { clamp, crisp, defined, extend, fireEvent, isArray, isNumber, merge, pick, objectEach } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The column series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.column
 *
 * @augments Highcharts.Series
 */
class ColumnSeries extends (highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()) {
    /* *
     *
     *  Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * Animate the column heights one by one from zero.
     *
     * @private
     * @function Highcharts.seriesTypes.column#animate
     *
     * @param {boolean} init
     *        Whether to initialize the animation or run it
     */
    animate(init) {
        const series = this, yAxis = this.yAxis, yAxisPos = yAxis.pos, reversed = yAxis.reversed, options = series.options, { clipOffset, inverted } = this.chart, attr = {}, translateProp = inverted ?
            'translateX' :
            'translateY';
        let translateStart, translatedThreshold;
        if (init && clipOffset) {
            attr.scaleY = 0.001;
            translatedThreshold = clamp(yAxis.toPixels(options.threshold || 0), yAxisPos, yAxisPos + yAxis.len);
            if (inverted) {
                // Make sure the columns don't cover the axis line during
                // entrance animation
                translatedThreshold += reversed ?
                    -Math.floor(clipOffset[0]) :
                    Math.ceil(clipOffset[2]);
                attr.translateX = translatedThreshold - yAxis.len;
            }
            else {
                // Make sure the columns don't cover the axis line during
                // entrance animation
                translatedThreshold += reversed ?
                    Math.ceil(clipOffset[0]) :
                    -Math.floor(clipOffset[2]);
                attr.translateY = translatedThreshold;
            }
            // Apply final clipping (used in Highcharts Stock) (#7083)
            // animation is done by scaleY, so clipping is for panes
            if (series.clipBox) {
                series.setClip();
            }
            series.group.attr(attr);
        }
        else { // Run the animation
            translateStart = Number(series.group.attr(translateProp));
            series.group.animate({ scaleY: 1 }, extend(animObject(series.options.animation), {
                // Do the scale synchronously to ensure smooth
                // updating (#5030, #7228)
                step: function (val, fx) {
                    if (series.group) {
                        attr[translateProp] = translateStart +
                            fx.pos * (yAxisPos - translateStart);
                        series.group.attr(attr);
                    }
                }
            }));
        }
    }
    /**
     * Initialize the series. Extends the basic Series.init method by
     * marking other series of the same type as dirty.
     *
     * @private
     * @function Highcharts.seriesTypes.column#init
     */
    init(chart, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options) {
        super.init.apply(this, arguments);
        const series = this;
        chart = series.chart;
        // If the series is added dynamically, force redraw of other
        // series affected by a new column
        if (chart.hasRendered) {
            chart.series.forEach(function (otherSeries) {
                if (otherSeries.type === series.type) {
                    otherSeries.isDirty = true;
                }
            });
        }
    }
    /**
     * Return the width and x offset of the columns adjusted for grouping,
     * groupPadding, pointPadding, pointWidth etc.
     *
     * @private
     * @function Highcharts.seriesTypes.column#getColumnMetrics
     */
    getColumnMetrics() {
        const series = this, options = series.options, xAxis = series.xAxis, yAxis = series.yAxis, reversedStacks = xAxis.options.reversedStacks, 
        // Keep backward compatibility: reversed xAxis had reversed
        // stacks
        reverseStacks = (xAxis.reversed && !reversedStacks) ||
            (!xAxis.reversed && reversedStacks), stackGroups = {};
        let stackKey, columnCount = 0;
        // Get the total number of column type series. This is called on
        // every series. Consider moving this logic to a chart.orderStacks()
        // function and call it on init, addSeries and removeSeries
        if (options.grouping === false) {
            columnCount = 1;
        }
        else {
            series.chart.series.forEach(function (otherSeries) {
                const otherYAxis = otherSeries.yAxis, otherOptions = otherSeries.options;
                let columnIndex;
                if (otherSeries.type === series.type &&
                    otherSeries.reserveSpace() &&
                    yAxis.len === otherYAxis.len &&
                    yAxis.pos === otherYAxis.pos) { // #642, #2086
                    if (otherOptions.stacking &&
                        otherOptions.stacking !== 'group') {
                        stackKey = otherSeries.stackKey;
                        if (typeof stackGroups[stackKey] ===
                            'undefined') {
                            stackGroups[stackKey] = columnCount++;
                        }
                        columnIndex = stackGroups[stackKey];
                    }
                    else if (otherOptions.grouping !== false) { // #1162
                        columnIndex = columnCount++;
                    }
                    otherSeries.columnIndex = columnIndex;
                }
            });
        }
        const categoryWidth = Math.min(Math.abs(xAxis.transA) * ((!xAxis.brokenAxis?.hasBreaks && xAxis.ordinal?.slope) ||
            options.pointRange ||
            xAxis.closestPointRange ||
            xAxis.tickInterval ||
            1), // #2610
        xAxis.len // #1535
        ), groupPadding = categoryWidth * options.groupPadding, groupWidth = categoryWidth - 2 * groupPadding, pointOffsetWidth = groupWidth / (columnCount || 1), pointWidth = Math.min(options.maxPointWidth || xAxis.len, pick(options.pointWidth, pointOffsetWidth * (1 - 2 * options.pointPadding))), pointPadding = (pointOffsetWidth - pointWidth) / 2, 
        // #1251, #3737
        colIndex = (series.columnIndex || 0) + (reverseStacks ? 1 : 0), pointXOffset = pointPadding +
            (groupPadding +
                colIndex * pointOffsetWidth -
                (categoryWidth / 2)) * (reverseStacks ? -1 : 1);
        // Save it for reading in linked series (Error bars particularly)
        series.columnMetrics = {
            width: pointWidth,
            offset: pointXOffset,
            paddedWidth: pointOffsetWidth,
            columnCount
        };
        return series.columnMetrics;
    }
    /**
     * Make the columns crisp. The edges are rounded to the nearest full
     * pixel.
     *
     * @private
     * @function Highcharts.seriesTypes.column#crispCol
     */
    crispCol(x, y, width, height) {
        const borderWidth = this.borderWidth, inverted = this.chart.inverted, bottom = crisp(y + height, borderWidth, inverted);
        // Vertical
        y = crisp(y, borderWidth, inverted);
        height = bottom - y;
        // Horizontal. We need to first compute the exact right edge, then
        // round it and compute the width from there.
        if (this.options.crisp) {
            const right = crisp(x + width, borderWidth);
            x = crisp(x, borderWidth);
            width = right - x;
        }
        return { x, y, width, height };
    }
    /**
     * Adjust for missing columns, according to the `centerInCategory`
     * option. Missing columns are either single points or stacks where the
     * point or points are either missing or null.
     *
     * @private
     * @function Highcharts.seriesTypes.column#adjustForMissingColumns
     * @param {number} x
     * The x coordinate of the column, left side
     *
     * @param {number} pointWidth
     * The pointWidth, already computed upstream
     *
     * @param {Highcharts.ColumnPoint} point
     * The point instance
     *
     * @param {Highcharts.ColumnMetricsObject} metrics
     * The series-wide column metrics
     *
     * @return {number}
     * The adjusted x position, or the original if not adjusted
     */
    adjustForMissingColumns(x, pointWidth, point, metrics) {
        if (!point.isNull && metrics.columnCount > 1) {
            const visibleSeries = this.xAxis.series
                .filter((s) => s.visible)
                .map((s) => s.index);
            let indexInCategory = 0, totalInCategory = 0;
            // Loop over all the stacks on the Y axis. When stacking is enabled,
            // these are real point stacks. When stacking is not enabled, but
            // `centerInCategory` is true, there is one stack handling the
            // grouping of points in each category. This is done in the
            // `setGroupedPoints` function.
            objectEach(this.xAxis.stacking?.stacks, (stack) => {
                const points = typeof point.x === 'number' ?
                    stack[point.x.toString()]?.points :
                    void 0, pointValues = points?.[this.index], yStackMap = {};
                // Look for the index
                if (points && isArray(pointValues)) {
                    let baseIndex = this.index;
                    // If there are multiple points with the same X then
                    // gather all series in category, and assign index
                    const seriesIndexes = Object
                        .keys(points)
                        .filter((pointKey) => 
                    // Filter out duplicate X's
                    !pointKey.match(',') &&
                        // Filter out null points
                        points[pointKey] &&
                        points[pointKey].length > 1)
                        .map(parseFloat)
                        .filter((index) => visibleSeries.indexOf(index) !== -1)
                        // When the series `stack` option is defined, assign
                        // all subsequent column of the same stack to the
                        // same index as the base column of the stack, then
                        // filter out the original series index so that
                        // `seriesIndexes` is shortened to the amount of
                        // stacks, not the amount of series (#20550).
                        .filter((index) => {
                        const otherOptions = this.chart.series[index]
                            .options, yStack = otherOptions.stacking &&
                            otherOptions.stack;
                        if (defined(yStack)) {
                            if (isNumber(yStackMap[yStack])) {
                                if (baseIndex === index) {
                                    baseIndex = yStackMap[yStack];
                                }
                                return false;
                            }
                            yStackMap[yStack] = index;
                        }
                        return true;
                    })
                        .sort((a, b) => b - a);
                    indexInCategory = seriesIndexes.indexOf(baseIndex);
                    totalInCategory = seriesIndexes.length;
                }
            });
            indexInCategory = this.xAxis.reversed ?
                totalInCategory - 1 - indexInCategory : indexInCategory;
            // Compute the adjusted x position
            const boxWidth = (totalInCategory - 1) * metrics.paddedWidth +
                pointWidth;
            x = (point.plotX || 0) + boxWidth / 2 - pointWidth -
                indexInCategory * metrics.paddedWidth;
        }
        return x;
    }
    /**
     * Translate each point to the plot area coordinate system and find
     * shape positions
     *
     * @private
     * @function Highcharts.seriesTypes.column#translate
     */
    translate() {
        const series = this, chart = series.chart, options = series.options, dense = series.dense =
            series.closestPointRange * series.xAxis.transA < 2, borderWidth = series.borderWidth = pick(options.borderWidth, dense ? 0 : 1 // #3635
        ), xAxis = series.xAxis, yAxis = series.yAxis, threshold = options.threshold, minPointLength = pick(options.minPointLength, 5), metrics = series.getColumnMetrics(), seriesPointWidth = metrics.width, seriesXOffset = series.pointXOffset = metrics.offset, dataMin = series.dataMin, dataMax = series.dataMax, translatedThreshold = series.translatedThreshold =
            yAxis.getThreshold(threshold);
        // Postprocessed for border width
        let seriesBarW = series.barW =
            Math.max(seriesPointWidth, 1 + 2 * borderWidth);
        // When the pointPadding is 0, we want the columns to be packed
        // tightly, so we allow individual columns to have individual sizes.
        // When pointPadding is greater, we strive for equal-width columns
        // (#2694).
        if (options.pointPadding && options.crisp) {
            seriesBarW = Math.ceil(seriesBarW);
        }
        highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default().prototype.translate.apply(series);
        // Record the new values
        series.points.forEach(function (point) {
            const yBottom = pick(point.yBottom, translatedThreshold), safeDistance = 999 + Math.abs(yBottom), plotX = point.plotX || 0, 
            // Don't draw too far outside plot area (#1303, #2241,
            // #4264)
            plotY = clamp(point.plotY, -safeDistance, yAxis.len + safeDistance);
            let up, barY = Math.min(plotY, yBottom), barH = Math.max(plotY, yBottom) - barY, pointWidth = seriesPointWidth, barX = plotX + seriesXOffset, barW = seriesBarW;
            // Handle options.minPointLength
            if (minPointLength && Math.abs(barH) < minPointLength) {
                barH = minPointLength;
                up = (!yAxis.reversed && !point.negative) ||
                    (yAxis.reversed && point.negative);
                // Reverse zeros if there's no positive value in the series
                // in visible range (#7046)
                if (isNumber(threshold) &&
                    isNumber(dataMax) &&
                    point.y === threshold &&
                    dataMax <= threshold &&
                    // And if there's room for it (#7311)
                    (yAxis.min || 0) < threshold &&
                    // If all points are the same value (i.e zero) not draw
                    // as negative points (#10646), but only if there's room
                    // for it (#14876)
                    (dataMin !== dataMax || (yAxis.max || 0) <= threshold)) {
                    up = !up;
                    point.negative = !point.negative;
                }
                // If stacked...
                barY = (Math.abs(barY - translatedThreshold) > minPointLength ?
                    // ...keep position
                    yBottom - minPointLength :
                    // #1485, #4051
                    translatedThreshold -
                        (up ? minPointLength : 0));
            }
            // Handle point.options.pointWidth
            // @todo Handle grouping/stacking too. Calculate offset properly
            if (defined(point.options.pointWidth)) {
                pointWidth = barW =
                    Math.ceil(point.options.pointWidth);
                barX -= Math.round((pointWidth - seriesPointWidth) / 2);
            }
            // Adjust for null or missing points
            if (options.centerInCategory) {
                barX = series.adjustForMissingColumns(barX, pointWidth, point, metrics);
            }
            // Cache for access in polar
            point.barX = barX;
            point.pointWidth = pointWidth;
            // Fix the tooltip on center of grouped columns (#1216, #424,
            // #3648)
            point.tooltipPos = chart.inverted ?
                [
                    clamp(yAxis.len + yAxis.pos - chart.plotLeft - plotY, yAxis.pos - chart.plotLeft, yAxis.len + yAxis.pos - chart.plotLeft),
                    xAxis.len + xAxis.pos - chart.plotTop - barX - barW / 2,
                    barH
                ] :
                [
                    xAxis.left - chart.plotLeft + barX + barW / 2,
                    clamp(plotY + yAxis.pos -
                        chart.plotTop, yAxis.pos - chart.plotTop, yAxis.len + yAxis.pos - chart.plotTop),
                    barH
                ];
            // Register shape type and arguments to be used in drawPoints. Allow
            // `shapeType` defined on `pointClass` level.
            point.shapeType = series.pointClass.prototype.shapeType ||
                'roundedRect';
            point.shapeArgs = series.crispCol(barX, 
            // #3169, drilldown from null must have a position to work from.
            // #6585, dataLabel should be placed on xAxis, not floating in
            // the middle of the chart.
            point.isNull ? translatedThreshold : barY, barW, point.isNull ? 0 : barH);
        });
        // Fire a specific event after column translate. We could instead apply
        // all the column logic in an `afterTranslate` event handler, but there
        // are so many other series types that use the column translation, that
        // it is more convenient to have a specific event for it.
        fireEvent(this, 'afterColumnTranslate');
    }
    /**
     * Columns have no graph
     *
     * @private
     * @function Highcharts.seriesTypes.column#drawGraph
     */
    drawGraph() {
        this.group[this.dense ? 'addClass' : 'removeClass']('highcharts-dense-data');
    }
    /**
     * Get presentational attributes
     *
     * @private
     * @function Highcharts.seriesTypes.column#pointAttribs
     */
    pointAttribs(point, state) {
        const options = this.options, p2o = this.pointAttrToOptions || {}, strokeOption = p2o.stroke || 'borderColor', strokeWidthOption = p2o['stroke-width'] || 'borderWidth';
        let stateOptions, zone, brightness, fill = (point && point.color) || this.color, 
        // Set to fill when borderColor null:
        stroke = ((point && point[strokeOption]) ||
            options[strokeOption] ||
            fill), dashstyle = (point && point.options.dashStyle) || options.dashStyle, strokeWidth = (point && point[strokeWidthOption]) ||
            options[strokeWidthOption] ||
            this[strokeWidthOption] || 0, opacity = pick(point && point.opacity, options.opacity, 1);
        // Handle zone colors
        if (point && this.zones.length) {
            zone = point.getZone();
            // When zones are present, don't use point.color (#4267).
            // Changed order (#6527), added support for colorAxis (#10670)
            fill = (point.options.color ||
                (zone && (zone.color || point.nonZonedColor)) ||
                this.color);
            if (zone) {
                stroke = zone.borderColor || stroke;
                dashstyle = zone.dashStyle || dashstyle;
                strokeWidth = zone.borderWidth || strokeWidth;
            }
        }
        // Select or hover states
        if (state && point) {
            stateOptions = merge(options.states[state], 
            // #6401
            point.options.states &&
                point.options.states[state] ||
                {});
            brightness = stateOptions.brightness;
            fill =
                stateOptions.color || (typeof brightness !== 'undefined' &&
                    color(fill)
                        .brighten(stateOptions.brightness)
                        .get()) || fill;
            stroke = stateOptions[strokeOption] || stroke;
            strokeWidth =
                stateOptions[strokeWidthOption] || strokeWidth;
            dashstyle = stateOptions.dashStyle || dashstyle;
            opacity = pick(stateOptions.opacity, opacity);
        }
        const ret = {
            fill: fill,
            stroke: stroke,
            'stroke-width': strokeWidth,
            opacity: opacity
        };
        if (dashstyle) {
            ret.dashstyle = dashstyle;
        }
        return ret;
    }
    /**
     * Draw the columns. For bars, the series.group is rotated, so the same
     * coordinates apply for columns and bars. This method is inherited by
     * scatter series.
     *
     * @private
     * @function Highcharts.seriesTypes.column#drawPoints
     */
    drawPoints(points = this.points) {
        const series = this, chart = this.chart, options = series.options, renderer = chart.renderer, animationLimit = options.animationLimit || 250;
        let shapeArgs;
        // Draw the columns
        points.forEach(function (point) {
            const plotY = point.plotY;
            let graphic = point.graphic, hasGraphic = !!graphic, verb = graphic && chart.pointCount < animationLimit ?
                'animate' : 'attr';
            if (isNumber(plotY) && point.y !== null) {
                shapeArgs = point.shapeArgs;
                // When updating a series between 2d and 3d or cartesian and
                // polar, the shape type changes.
                if (graphic && point.hasNewShapeType()) {
                    graphic = graphic.destroy();
                }
                // Set starting position for point sliding animation.
                if (series.enabledDataSorting) {
                    point.startXPos = series.xAxis.reversed ?
                        -(shapeArgs ? (shapeArgs.width || 0) : 0) :
                        series.xAxis.width;
                }
                if (!graphic) {
                    point.graphic = graphic =
                        renderer[point.shapeType](shapeArgs)
                            .add(point.group || series.group);
                    if (graphic &&
                        series.enabledDataSorting &&
                        chart.hasRendered &&
                        chart.pointCount < animationLimit) {
                        graphic.attr({
                            x: point.startXPos
                        });
                        hasGraphic = true;
                        verb = 'animate';
                    }
                }
                if (graphic && hasGraphic) { // Update
                    graphic[verb](merge(shapeArgs));
                }
                // Presentational
                if (!chart.styledMode) {
                    graphic[verb](series.pointAttribs(point, (point.selected && 'select')))
                        .shadow(point.allowShadow !== false && options.shadow);
                }
                if (graphic) {
                    graphic.addClass(point.getClassName(), true);
                    graphic.attr({
                        visibility: point.visible ? 'inherit' : 'hidden'
                    });
                }
            }
            else if (graphic) {
                point.graphic = graphic.destroy(); // #1269
            }
        });
    }
    /**
     * Draw the tracker for a point.
     * @private
     */
    drawTracker(points = this.points) {
        const series = this, chart = series.chart, pointer = chart.pointer, onMouseOver = function (e) {
            pointer?.normalize(e);
            const point = pointer?.getPointFromEvent(e), 
            // Run point events only for points inside plot area, #21136
            isInsidePlot = chart.scrollablePlotArea ?
                chart.isInsidePlot(e.chartX - chart.plotLeft, e.chartY - chart.plotTop, {
                    visiblePlotOnly: true
                }) : true;
            // Undefined on graph in scatterchart
            if (pointer &&
                point &&
                series.options.enableMouseTracking &&
                isInsidePlot) {
                pointer.isDirectTouch = true;
                point.onMouseOver(e);
            }
        };
        let dataLabels;
        // Add reference to the point
        points.forEach(function (point) {
            dataLabels = (isArray(point.dataLabels) ?
                point.dataLabels :
                (point.dataLabel ? [point.dataLabel] : []));
            if (point.graphic) {
                point.graphic.element.point = point;
            }
            dataLabels.forEach(function (dataLabel) {
                (dataLabel.div || dataLabel.element).point = point;
            });
        });
        // Add the event listeners, we need to do this only once
        if (!series._hasTracking) {
            series.trackerGroups.forEach(function (key) {
                if (series[key]) {
                    // We don't always have dataLabelsGroup
                    series[key]
                        .addClass('highcharts-tracker')
                        .on('mouseover', onMouseOver)
                        .on('mouseout', function (e) {
                        pointer?.onTrackerMouseOut(e);
                    })
                        .on('touchstart', onMouseOver);
                    if (!chart.styledMode && series.options.cursor) {
                        series[key]
                            .css({ cursor: series.options.cursor });
                    }
                }
            });
            series._hasTracking = true;
        }
        fireEvent(this, 'afterDrawTracker');
    }
    /**
     * Remove this series from the chart
     *
     * @private
     * @function Highcharts.seriesTypes.column#remove
     */
    remove() {
        const series = this, chart = series.chart;
        // Column and bar series affects other series of the same type
        // as they are either stacked or grouped
        if (chart.hasRendered) {
            chart.series.forEach(function (otherSeries) {
                if (otherSeries.type === series.type) {
                    otherSeries.isDirty = true;
                }
            });
        }
        highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default().prototype.remove.apply(series, arguments);
    }
}
/* *
 *
 *  Static Properties
 *
 * */
ColumnSeries.defaultOptions = merge((highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()).defaultOptions, Column_ColumnSeriesDefaults);
extend(ColumnSeries.prototype, {
    // When tooltip is not shared, this series (and derivatives) requires
    // direct touch/hover. KD-tree does not apply.
    directTouch: true,
    getSymbol: noop,
    // Use separate negative stacks, unlike area stacks where a negative
    // point is subtracted from previous (#1910)
    negStacks: true,
    trackerGroups: ['group', 'dataLabelsGroup']
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('column', ColumnSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Column_ColumnSeries = ((/* unused pure expression or super */ null && (ColumnSeries)));
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Adjusted width and x offset of the columns for grouping.
 *
 * @private
 * @interface Highcharts.ColumnMetricsObject
 */ /**
* Width of the columns.
* @name Highcharts.ColumnMetricsObject#width
* @type {number}
*/ /**
* Offset of the columns.
* @name Highcharts.ColumnMetricsObject#offset
* @type {number}
*/
''; // Detach doclets above

;// ./code/es-modules/Extensions/PatternFill.js
/* *
 *
 *  Module for using patterns or images as point fills.
 *
 *  (c) 2010-2024 Highsoft AS
 *  Author: Torstein Hønsi, Øystein Moseng
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { animObject: PatternFill_animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { getOptions } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { addEvent, defined: PatternFill_defined, erase, extend: PatternFill_extend, merge: PatternFill_merge, pick: PatternFill_pick, removeEvent, wrap } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Constants
 *
 * */
const patterns = createPatterns();
/* *
 *
 *  Functions
 *
 * */
/** @private */
function compose(ChartClass, SeriesClass, SVGRendererClass) {
    const PointClass = SeriesClass.prototype.pointClass, pointProto = PointClass.prototype;
    if (!pointProto.calculatePatternDimensions) {
        addEvent(ChartClass, 'endResize', onChartEndResize);
        addEvent(ChartClass, 'redraw', onChartRedraw);
        PatternFill_extend(pointProto, {
            calculatePatternDimensions: pointCalculatePatternDimensions
        });
        addEvent(PointClass, 'afterInit', onPointAfterInit);
        addEvent(SeriesClass, 'render', onSeriesRender);
        wrap(SeriesClass.prototype, 'getColor', wrapSeriesGetColor);
        // Pattern scale corrections
        addEvent(SeriesClass, 'afterRender', onPatternScaleCorrection);
        addEvent(SeriesClass, 'mapZoomComplete', onPatternScaleCorrection);
        PatternFill_extend(SVGRendererClass.prototype, {
            addPattern: rendererAddPattern
        });
        addEvent(SVGRendererClass, 'complexColor', onRendererComplexColor);
    }
}
/**
 * Add the predefined patterns.
 * @private
 */
function createPatterns() {
    const patterns = [], colors = getOptions().colors;
    // Start with subtle patterns
    let i = 0;
    for (const pattern of [
        'M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5',
        'M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5',
        'M 2 0 L 2 5 M 4 0 L 4 5',
        'M 0 2 L 5 2 M 0 4 L 5 4',
        'M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5'
    ]) {
        patterns.push({
            path: pattern,
            color: colors[i++],
            width: 5,
            height: 5,
            patternTransform: 'scale(1.4 1.4)'
        });
    }
    // Then add the more drastic ones
    i = 5;
    for (const pattern of [
        'M 0 0 L 5 10 L 10 0',
        'M 3 3 L 8 3 L 8 8 L 3 8 Z',
        'M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0',
        'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11',
        'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9'
    ]) {
        patterns.push({
            path: pattern,
            color: colors[i],
            width: 10,
            height: 10
        });
        i = i + 5;
    }
    return patterns;
}
/**
 * Utility function to compute a hash value from an object. Modified Java
 * String.hashCode implementation in JS. Use the preSeed parameter to add an
 * additional seeding step.
 *
 * @private
 * @function hashFromObject
 *
 * @param {Object} obj
 *        The javascript object to compute the hash from.
 *
 * @param {boolean} [preSeed=false]
 *        Add an optional preSeed stage.
 *
 * @return {string}
 *         The computed hash.
 */
function hashFromObject(obj, preSeed) {
    const str = JSON.stringify(obj), strLen = str.length || 0;
    let hash = 0, i = 0, char, seedStep;
    if (preSeed) {
        seedStep = Math.max(Math.floor(strLen / 500), 1);
        for (let a = 0; a < strLen; a += seedStep) {
            hash += str.charCodeAt(a);
        }
        hash = hash & hash;
    }
    for (; i < strLen; ++i) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16).replace('-', '1');
}
/**
 * When animation is used, we have to recalculate pattern dimensions after
 * resize, as the bounding boxes are not available until then.
 * @private
 */
function onChartEndResize() {
    if (this.renderer &&
        (this.renderer.defIds || []).filter((id) => (id &&
            id.indexOf &&
            id.indexOf('highcharts-pattern-') === 0)).length) {
        // We have non-default patterns to fix. Find them by looping through
        // all points.
        for (const series of this.series) {
            if (series.visible) {
                for (const point of series.points) {
                    const colorOptions = point.options && point.options.color;
                    if (colorOptions &&
                        colorOptions.pattern) {
                        colorOptions.pattern
                            ._width = 'defer';
                        colorOptions.pattern
                            ._height = 'defer';
                    }
                }
            }
        }
        // Redraw without animation
        this.redraw(false);
    }
}
/**
 * Add a garbage collector to delete old patterns with autogenerated hashes that
 * are no longer being referenced.
 * @private
 */
function onChartRedraw() {
    const usedIds = {}, renderer = this.renderer, 
    // Get the autocomputed patterns - these are the ones we might delete
    patterns = (renderer.defIds || []).filter((pattern) => (pattern.indexOf &&
        pattern.indexOf('highcharts-pattern-') === 0));
    if (patterns.length) {
        // Look through the DOM for usage of the patterns. This can be points,
        // series, tooltips etc.
        [].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'), (node) => {
            const id = node.getAttribute('fill') ||
                node.getAttribute('color') ||
                node.getAttribute('stroke');
            if (id) {
                const sanitizedId = id
                    .replace(renderer.url, '')
                    .replace('url(#', '')
                    .replace(')', '');
                usedIds[sanitizedId] = true;
            }
        });
        // Loop through the patterns that exist and see if they are used
        for (const id of patterns) {
            if (!usedIds[id]) {
                // Remove id from used id list
                erase(renderer.defIds, id);
                // Remove pattern element
                if (renderer.patternElements[id]) {
                    renderer.patternElements[id].destroy();
                    delete renderer.patternElements[id];
                }
            }
        }
    }
}
/**
 * Merge series color options to points.
 * @private
 */
function onPointAfterInit() {
    const point = this, colorOptions = point.options.color;
    // Only do this if we have defined a specific color on this point. Otherwise
    // we will end up trying to re-add the series color for each point.
    if (colorOptions && colorOptions.pattern) {
        // Move path definition to object, allows for merge with series path
        // definition
        if (typeof colorOptions.pattern.path === 'string') {
            colorOptions.pattern.path = {
                d: colorOptions.pattern.path
            };
        }
        // Merge with series options
        point.color = point.options.color = PatternFill_merge(point.series.options.color, colorOptions);
    }
}
/**
 * Add functionality to SVG renderer to handle patterns as complex colors.
 * @private
 */
function onRendererComplexColor(args) {
    const color = args.args[0], prop = args.args[1], element = args.args[2], chartIndex = (this.chartIndex || 0);
    let pattern = color.pattern, value = "#333333" /* Palette.neutralColor80 */;
    // Handle patternIndex
    if (typeof color.patternIndex !== 'undefined' && patterns) {
        pattern = patterns[color.patternIndex];
    }
    // Skip and call default if there is no pattern
    if (!pattern) {
        return true;
    }
    // We have a pattern.
    if (pattern.image ||
        typeof pattern.path === 'string' ||
        pattern.path && pattern.path.d) {
        // Real pattern. Add it and set the color value to be a reference.
        // Force Hash-based IDs for legend items, as they are drawn before
        // point render, meaning they are drawn before autocalculated image
        // width/heights. We don't want them to highjack the width/height for
        // this ID if it is defined by users.
        let forceHashId = element.parentNode &&
            element.parentNode.getAttribute('class');
        forceHashId = forceHashId &&
            forceHashId.indexOf('highcharts-legend') > -1;
        // If we don't have a width/height yet, handle it. Try faking a point
        // and running the algorithm again.
        if (pattern._width === 'defer' || pattern._height === 'defer') {
            pointCalculatePatternDimensions.call({ graphic: { element: element } }, pattern);
        }
        // If we don't have an explicit ID, compute a hash from the
        // definition and use that as the ID. This ensures that points with
        // the same pattern definition reuse existing pattern elements by
        // default. We combine two hashes, the second with an additional
        // preSeed algorithm, to minimize collision probability.
        if (forceHashId || !pattern.id) {
            // Make a copy so we don't accidentally edit options when setting ID
            pattern = PatternFill_merge({}, pattern);
            pattern.id = 'highcharts-pattern-' + chartIndex + '-' +
                hashFromObject(pattern) + hashFromObject(pattern, true);
        }
        // Add it. This function does nothing if an element with this ID
        // already exists.
        this.addPattern(pattern, !this.forExport && PatternFill_pick(pattern.animation, this.globalAnimation, { duration: 100 }));
        value = `url(${this.url}#${pattern.id + (this.forExport ? '-export' : '')})`;
    }
    else {
        // Not a full pattern definition, just add color
        value = pattern.color || value;
    }
    // Set the fill/stroke prop on the element
    element.setAttribute(prop, value);
    // Allow the color to be concatenated into tooltips formatters etc.
    color.toString = function () {
        return value;
    };
    // Skip default handler
    return false;
}
/**
 * Calculate pattern dimensions on points that have their own pattern.
 * @private
 */
function onSeriesRender() {
    const isResizing = this.chart.isResizing;
    if (this.isDirtyData || isResizing || !this.chart.hasRendered) {
        for (const point of this.points) {
            const colorOptions = point.options && point.options.color;
            if (colorOptions &&
                colorOptions.pattern) {
                // For most points we want to recalculate the dimensions on
                // render, where we have the shape args and bbox. But if we
                // are resizing and don't have the shape args, defer it, since
                // the bounding box is still not resized.
                if (isResizing &&
                    !(point.shapeArgs &&
                        point.shapeArgs.width &&
                        point.shapeArgs.height)) {
                    colorOptions
                        .pattern._width = 'defer';
                    colorOptions
                        .pattern._height = 'defer';
                }
                else {
                    point.calculatePatternDimensions(colorOptions.pattern);
                }
            }
        }
    }
}
/**
 * Set dimensions on pattern from point. This function will set internal
 * pattern._width/_height properties if width and height are not both already
 * set. We only do this on image patterns. The _width/_height properties are set
 * to the size of the bounding box of the point, optionally taking aspect ratio
 * into account. If only one of width or height are supplied as options, the
 * undefined option is calculated as above.
 *
 * @private
 * @function Highcharts.Point#calculatePatternDimensions
 *
 * @param {Highcharts.PatternOptionsObject} pattern
 *        The pattern to set dimensions on.
 *
 * @return {void}
 *
 * @requires modules/pattern-fill
 */
function pointCalculatePatternDimensions(pattern) {
    if (pattern.width && pattern.height) {
        return;
    }
    const bBox = this.graphic && (this.graphic.getBBox &&
        this.graphic.getBBox(true) ||
        this.graphic.element &&
            this.graphic.element.getBBox()) || {}, shapeArgs = this.shapeArgs;
    // Prefer using shapeArgs, as it is animation agnostic
    if (shapeArgs) {
        bBox.width = shapeArgs.width || bBox.width;
        bBox.height = shapeArgs.height || bBox.height;
        bBox.x = shapeArgs.x || bBox.x;
        bBox.y = shapeArgs.y || bBox.y;
    }
    // For images we stretch to bounding box
    if (pattern.image) {
        // If we do not have a bounding box at this point, simply add a defer
        // key and pick this up in the fillSetter handler, where the bounding
        // box should exist.
        if (!bBox.width || !bBox.height) {
            pattern._width = 'defer';
            pattern._height = 'defer';
            // Mark the pattern to be flipped later if upside down (#16810)
            const scaleY = this.series.chart.mapView &&
                this.series.chart.mapView.getSVGTransform().scaleY;
            if (PatternFill_defined(scaleY) && scaleY < 0) {
                pattern._inverted = true;
            }
            return;
        }
        // Handle aspect ratio filling
        if (pattern.aspectRatio) {
            bBox.aspectRatio = bBox.width / bBox.height;
            if (pattern.aspectRatio > bBox.aspectRatio) {
                // Height of bBox will determine width
                bBox.aspectWidth = bBox.height * pattern.aspectRatio;
            }
            else {
                // Width of bBox will determine height
                bBox.aspectHeight = bBox.width / pattern.aspectRatio;
            }
        }
        // We set the width/height on internal properties to differentiate
        // between the options set by a user and by this function.
        pattern._width = pattern.width ||
            Math.ceil(bBox.aspectWidth || bBox.width);
        pattern._height = pattern.height ||
            Math.ceil(bBox.aspectHeight || bBox.height);
    }
    // Set x/y accordingly, centering if using aspect ratio, otherwise adjusting
    // so bounding box corner is 0,0 of pattern.
    if (!pattern.width) {
        pattern._x = pattern.x || 0;
        pattern._x += bBox.x - Math.round(bBox.aspectWidth ?
            Math.abs(bBox.aspectWidth - bBox.width) / 2 :
            0);
    }
    if (!pattern.height) {
        pattern._y = pattern.y || 0;
        pattern._y += bBox.y - Math.round(bBox.aspectHeight ?
            Math.abs(bBox.aspectHeight - bBox.height) / 2 :
            0);
    }
}
/**
 * Add a pattern to the renderer.
 *
 * @private
 * @function Highcharts.SVGRenderer#addPattern
 *
 * @param {Highcharts.PatternObject} options
 * The pattern options.
 *
 * @param {boolean|Partial<Highcharts.AnimationOptionsObject>} [animation]
 * The animation options.
 *
 * @return {Highcharts.SVGElement|undefined}
 * The added pattern. Undefined if the pattern already exists.
 *
 * @requires modules/pattern-fill
 */
function rendererAddPattern(options, animation) {
    const animate = PatternFill_pick(animation, true), animationOptions = PatternFill_animObject(animate), color = options.color || "#333333" /* Palette.neutralColor80 */, defaultSize = 32, height = options.height ||
        (typeof options._height === 'number' ? options._height : 0) ||
        defaultSize, rect = (fill) => this
        .rect(0, 0, width, height)
        .attr({ fill })
        .add(pattern), width = options.width ||
        (typeof options._width === 'number' ? options._width : 0) ||
        defaultSize;
    let attribs, id = options.id, path;
    if (!id) {
        this.idCounter = this.idCounter || 0;
        id = ('highcharts-pattern-' +
            this.idCounter +
            '-' +
            (this.chartIndex || 0));
        ++this.idCounter;
    }
    if (this.forExport) {
        id += '-export';
    }
    // Do nothing if ID already exists
    this.defIds = this.defIds || [];
    if (this.defIds.indexOf(id) > -1) {
        return;
    }
    // Store ID in list to avoid duplicates
    this.defIds.push(id);
    // Calculate pattern element attributes
    const attrs = {
        id: id,
        patternUnits: 'userSpaceOnUse',
        patternContentUnits: options.patternContentUnits || 'userSpaceOnUse',
        width: width,
        height: height,
        x: options._x || options.x || 0,
        y: options._y || options.y || 0
    };
    if (options._inverted) {
        attrs.patternTransform = 'scale(1, -1)'; // (#16810)
        if (options.patternTransform) {
            options.patternTransform += ' scale(1, -1)';
        }
    }
    if (options.patternTransform) {
        attrs.patternTransform = options.patternTransform;
    }
    const pattern = this.createElement('pattern').attr(attrs).add(this.defs);
    // Set id on the SVGRenderer object
    pattern.id = id;
    // Use an SVG path for the pattern
    if (options.path) {
        path = highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default().isObject(options.path) ?
            options.path :
            { d: options.path };
        // The background
        if (options.backgroundColor) {
            rect(options.backgroundColor);
        }
        // The pattern
        attribs = {
            'd': path.d
        };
        if (!this.styledMode) {
            attribs.stroke = path.stroke || color;
            attribs['stroke-width'] = PatternFill_pick(path.strokeWidth, 2);
            attribs.fill = path.fill || 'none';
        }
        if (path.transform) {
            attribs.transform = path.transform;
        }
        this.createElement('path').attr(attribs).add(pattern);
        pattern.color = color;
        // Image pattern
    }
    else if (options.image) {
        if (animate) {
            this.image(options.image, 0, 0, width, height, function () {
                // Onload
                this.animate({
                    opacity: PatternFill_pick(options.opacity, 1)
                }, animationOptions);
                removeEvent(this.element, 'load');
            }).attr({ opacity: 0 }).add(pattern);
        }
        else {
            this.image(options.image, 0, 0, width, height).add(pattern);
        }
    }
    // For non-animated patterns, set opacity now
    if (!(options.image && animate) && typeof options.opacity !== 'undefined') {
        [].forEach.call(pattern.element.childNodes, (child) => {
            child.setAttribute('opacity', options.opacity);
        });
    }
    // Store for future reference
    this.patternElements = this.patternElements || {};
    this.patternElements[id] = pattern;
    return pattern;
}
/**
 * Make sure we have a series color.
 * @private
 */
function wrapSeriesGetColor(proceed) {
    const oldColor = this.options.color;
    // Temporarily remove color options to get defaults
    if (oldColor &&
        oldColor.pattern &&
        !oldColor.pattern.color) {
        delete this.options.color;
        // Get default
        proceed.apply(this, [].slice.call(arguments, 1));
        // Replace with old, but add default color
        oldColor.pattern.color =
            this.color;
        this.color = this.options.color = oldColor;
    }
    else {
        // We have a color, no need to do anything special
        proceed.apply(this, [].slice.call(arguments, 1));
    }
}
/**
 * Scale patterns inversely to the series it's used in.
 * Maintains a visual (1,1) scale regardless of size.
 * @private
 */
function onPatternScaleCorrection() {
    const series = this;
    // If not a series used in a map chart, skip it.
    if (!series.chart?.mapView) {
        return;
    }
    const chart = series.chart, renderer = chart.renderer, patterns = renderer.patternElements;
    // Only scale if we have patterns to scale.
    if (renderer.defIds?.length && patterns) {
        // Filter for points which have patterns that don't use images assigned
        // and has a group scale available.
        series.points.filter(function (p) {
            const point = p;
            // No graphic we can fetch id from, filter out this point.
            if (!point.graphic) {
                return false;
            }
            return (point.graphic.element.hasAttribute('fill') ||
                point.graphic.element.hasAttribute('color') ||
                point.graphic.element.hasAttribute('stroke')) &&
                !point.options.color?.pattern?.image &&
                !!point.group?.scaleX &&
                !!point.group?.scaleY;
        })
            // Map up pattern id's and their scales.
            .map(function (p) {
            const point = p;
            // Parse the id from the graphic element of the point.
            const id = (point.graphic?.element.getAttribute('fill') ||
                point.graphic?.element.getAttribute('color') ||
                point.graphic?.element.getAttribute('stroke') || '')
                .replace(renderer.url, '')
                .replace('url(#', '')
                .replace(')', '');
            return {
                id,
                x: point.group?.scaleX || 1,
                y: point.group?.scaleY || 1
            };
        })
            // Filter out colors and other non-patterns, as well as duplicates.
            .filter(function (pointInfo, index, arr) {
            return pointInfo.id !== '' &&
                pointInfo.id.indexOf('highcharts-pattern-') !== -1 &&
                !arr.some(function (otherInfo, otherIndex) {
                    return otherInfo.id === pointInfo.id && otherIndex < index;
                });
        })
            .forEach(function (pointInfo) {
            const id = pointInfo.id;
            patterns[id].scaleX = 1 / pointInfo.x;
            patterns[id].scaleY = 1 / pointInfo.y;
            patterns[id].updateTransform('patternTransform');
        });
    }
}
/* *
 *
 *  Export
 *
 * */
const PatternFill = {
    compose,
    patterns
};
/* harmony default export */ const Extensions_PatternFill = (PatternFill);
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Pattern options
 *
 * @interface Highcharts.PatternOptionsObject
 */ /**
* Background color for the pattern if a `path` is set (not images).
* @name Highcharts.PatternOptionsObject#backgroundColor
* @type {Highcharts.ColorString|undefined}
*/ /**
* URL to an image to use as the pattern.
* @name Highcharts.PatternOptionsObject#image
* @type {string|undefined}
*/ /**
* Width of the pattern. For images this is automatically set to the width of
* the element bounding box if not supplied. For non-image patterns the default
* is 32px. Note that automatic resizing of image patterns to fill a bounding
* box dynamically is only supported for patterns with an automatically
* calculated ID.
* @name Highcharts.PatternOptionsObject#width
* @type {number|undefined}
*/ /**
* Analogous to pattern.width.
* @name Highcharts.PatternOptionsObject#height
* @type {number|undefined}
*/ /**
* For automatically calculated width and height on images, it is possible to
* set an aspect ratio. The image will be zoomed to fill the bounding box,
* maintaining the aspect ratio defined.
* @name Highcharts.PatternOptionsObject#aspectRatio
* @type {number|undefined}
*/ /**
* Horizontal offset of the pattern. Defaults to 0.
* @name Highcharts.PatternOptionsObject#x
* @type {number|undefined}
*/ /**
* Vertical offset of the pattern. Defaults to 0.
* @name Highcharts.PatternOptionsObject#y
* @type {number|undefined}
*/ /**
* Either an SVG path as string, or an object. As an object, supply the path
* string in the `path.d` property. Other supported properties are standard SVG
* attributes like `path.stroke` and `path.fill`. If a path is supplied for the
* pattern, the `image` property is ignored.
* @name Highcharts.PatternOptionsObject#path
* @type {string|Highcharts.SVGAttributes|undefined}
*/ /**
* SVG `patternTransform` to apply to the entire pattern.
* @name Highcharts.PatternOptionsObject#patternTransform
* @type {string|undefined}
* @see [patternTransform demo](https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/series/pattern-fill-transform)
*/ /**
* Pattern color, used as default path stroke.
* @name Highcharts.PatternOptionsObject#color
* @type {Highcharts.ColorString|undefined}
*/ /**
* Opacity of the pattern as a float value from 0 to 1.
* @name Highcharts.PatternOptionsObject#opacity
* @type {number|undefined}
*/ /**
* ID to assign to the pattern. This is automatically computed if not added, and
* identical patterns are reused. To refer to an existing pattern for a
* Highcharts color, use `color: "url(#pattern-id)"`.
* @name Highcharts.PatternOptionsObject#id
* @type {string|undefined}
*/
/**
 * Holds a pattern definition.
 *
 * @sample highcharts/series/pattern-fill-area/
 *         Define a custom path pattern
 * @sample highcharts/series/pattern-fill-pie/
 *         Default patterns and a custom image pattern
 * @sample maps/demo/pattern-fill-map/
 *         Custom images on map
 *
 * @example
 * // Pattern used as a color option
 * color: {
 *     pattern: {
 *            path: {
 *                 d: 'M 3 3 L 8 3 L 8 8 Z',
 *                fill: '#102045'
 *            },
 *            width: 12,
 *            height: 12,
 *            color: '#907000',
 *            opacity: 0.5
 *     }
 * }
 *
 * @interface Highcharts.PatternObject
 */ /**
* Pattern options
* @name Highcharts.PatternObject#pattern
* @type {Highcharts.PatternOptionsObject}
*/ /**
* Animation options for the image pattern loading.
* @name Highcharts.PatternObject#animation
* @type {boolean|Partial<Highcharts.AnimationOptionsObject>|undefined}
*/ /**
* Optionally an index referencing which pattern to use. Highcharts adds
* 10 default patterns to the `Highcharts.patterns` array. Additional
* pattern definitions can be pushed to this array if desired. This option
* is an index into this array.
* @name Highcharts.PatternObject#patternIndex
* @type {number|undefined}
*/
''; // Keeps doclets above in transpiled file

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","Chart"],"commonjs":["highcharts","Chart"],"commonjs2":["highcharts","Chart"],"root":["Highcharts","Chart"]}
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_ = __webpack_require__(960);
var highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default = /*#__PURE__*/__webpack_require__.n(highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_);
;// ./code/es-modules/Series/Pictorial/PictorialUtilities.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi, Magdalena Gut
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

const { defined: PictorialUtilities_defined } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/**
 *
 */
function rescalePatternFill(element, stackHeight, width, height, borderWidth = 1) {
    const fill = element && element.attr('fill'), match = fill && fill.match(/url\(([^)]+)\)/);
    if (match) {
        const patternPath = document.querySelector(`${match[1]} path`);
        if (patternPath) {
            let bBox = patternPath.getBBox();
            // Firefox (v108/Mac) is unable to detect the bounding box within
            // defs. Without this block, the pictorial is not rendered.
            if (bBox.width === 0) {
                const parent = patternPath.parentElement;
                // Temporarily append it to the root
                element.renderer.box.appendChild(patternPath);
                bBox = patternPath.getBBox();
                parent.appendChild(patternPath);
            }
            let scaleX = 1 / (bBox.width + borderWidth);
            const scaleY = stackHeight / height / bBox.height, aspectRatio = bBox.width / bBox.height, pointAspectRatio = width / stackHeight, x = -bBox.width / 2;
            if (aspectRatio < pointAspectRatio) {
                scaleX = scaleX * aspectRatio / pointAspectRatio;
            }
            patternPath.setAttribute('stroke-width', borderWidth / (width * scaleX));
            patternPath.setAttribute('transform', 'translate(0.5, 0)' +
                `scale(${scaleX} ${scaleY}) ` +
                `translate(${x + borderWidth * scaleX / 2}, ${-bBox.y})`);
        }
    }
}
/**
 *
 */
function getStackMetrics(yAxis, shape) {
    let height = yAxis.len, y = 0;
    if (shape && PictorialUtilities_defined(shape.max)) {
        y = yAxis.toPixels(shape.max, true);
        height = yAxis.len - y;
    }
    return {
        height,
        y
    };
}
/**
 *
 */
function invertShadowGroup(shadowGroup, yAxis) {
    const inverted = yAxis.chart.inverted;
    if (inverted) {
        shadowGroup.attr({
            rotation: inverted ? 90 : 0,
            scaleX: inverted ? -1 : 1
        });
    }
}
/* harmony default export */ const PictorialUtilities = ({ rescalePatternFill, invertShadowGroup, getStackMetrics });

;// ./code/es-modules/Series/Pictorial/PictorialPoint.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi, Magdalena Gut
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const ColumnPoint = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column.prototype.pointClass;
const { rescalePatternFill: PictorialPoint_rescalePatternFill, getStackMetrics: PictorialPoint_getStackMetrics } = PictorialUtilities;
/* *
 *
 *  Class
 *
 * */
class PictorialPoint extends ColumnPoint {
    /* *
     *
     *  Functions
     *
     * */
    setState() {
        const point = this;
        super.setState.apply(point, arguments);
        const series = point.series, paths = series.options.paths;
        if (point.graphic && point.shapeArgs && paths) {
            const shape = paths[point.index %
                paths.length];
            PictorialPoint_rescalePatternFill(point.graphic, PictorialPoint_getStackMetrics(series.yAxis, shape).height, point.shapeArgs.width || 0, point.shapeArgs.height || Infinity, point.series.options.borderWidth || 0);
        }
    }
}
/* *
 *
 *  Export Default
 *
 * */
/* harmony default export */ const Pictorial_PictorialPoint = (PictorialPoint);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","StackItem"],"commonjs":["highcharts","StackItem"],"commonjs2":["highcharts","StackItem"],"root":["Highcharts","StackItem"]}
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_ = __webpack_require__(184);
var highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default = /*#__PURE__*/__webpack_require__.n(highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SVGRenderer"],"commonjs":["highcharts","SVGRenderer"],"commonjs2":["highcharts","SVGRenderer"],"root":["Highcharts","SVGRenderer"]}
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_ = __webpack_require__(540);
var highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default = /*#__PURE__*/__webpack_require__.n(highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_);
;// ./code/es-modules/Series/Pictorial/PictorialSeries.js
/* *
 *
 *  (c) 2010-2024 Torstein Honsi, Magdalena Gut
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */











const PictorialSeries_ColumnSeries = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes.column;
Extensions_PatternFill.compose((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), (highcharts_Series_commonjs_highcharts_Series_commonjs2_highcharts_Series_root_Highcharts_Series_default()), (highcharts_SVGRenderer_commonjs_highcharts_SVGRenderer_commonjs2_highcharts_SVGRenderer_root_Highcharts_SVGRenderer_default()));
const { animObject: PictorialSeries_animObject } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
const { getStackMetrics: PictorialSeries_getStackMetrics, invertShadowGroup: PictorialSeries_invertShadowGroup, rescalePatternFill: PictorialSeries_rescalePatternFill } = PictorialUtilities;
const { addEvent: PictorialSeries_addEvent, defined: PictorialSeries_defined, merge: PictorialSeries_merge, objectEach: PictorialSeries_objectEach, pick: PictorialSeries_pick } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The pictorial series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.pictorial
 *
 * @augments Highcharts.Series
 */
class PictorialSeries extends PictorialSeries_ColumnSeries {
    /* *
     *
     * Functions
     *
     * */
    /* eslint-disable valid-jsdoc */
    /**
     * Animate in the series. Called internally twice. First with the `init`
     * parameter set to true, which sets up the initial state of the
     * animation. Then when ready, it is called with the `init` parameter
     * undefined, in order to perform the actual animation.
     *
     * @function Highcharts.Series#animate
     *
     * @param {boolean} [init]
     * Initialize the animation.
     */
    animate(init) {
        const { chart, group } = this, animation = PictorialSeries_animObject(this.options.animation), 
        // The key for temporary animation clips
        animationClipKey = [
            this.getSharedClipKey(),
            animation.duration,
            animation.easing,
            animation.defer
        ].join(',');
        let animationClipRect = chart.sharedClips[animationClipKey];
        // Initialize the animation. Set up the clipping rectangle.
        if (init && group) {
            const clipBox = this.getClipBox();
            // Create temporary animation clips
            if (!animationClipRect) {
                clipBox.y = clipBox.height;
                clipBox.height = 0;
                animationClipRect = chart.renderer.clipRect(clipBox);
                chart.sharedClips[animationClipKey] = animationClipRect;
            }
            group.clip(animationClipRect);
            // Run the animation
        }
        else if (animationClipRect &&
            // Only first series in this pane
            !animationClipRect.hasClass('highcharts-animating')) {
            const finalBox = this.getClipBox();
            animationClipRect
                .addClass('highcharts-animating')
                .animate(finalBox, animation);
        }
    }
    animateDrilldown() { }
    animateDrillupFrom() { }
    pointAttribs(point) {
        const pointAttribs = super.pointAttribs.apply(this, arguments), seriesOptions = this.options, series = this, paths = seriesOptions.paths;
        if (point && point.shapeArgs && paths) {
            const shape = paths[point.index % paths.length], { y, height } = PictorialSeries_getStackMetrics(series.yAxis, shape), pathDef = shape.definition;
            // New pattern, replace
            if (pathDef !== point.pathDef) {
                point.pathDef = pathDef;
                pointAttribs.fill = {
                    pattern: {
                        path: {
                            d: pathDef,
                            fill: pointAttribs.fill,
                            strokeWidth: pointAttribs['stroke-width'],
                            stroke: pointAttribs.stroke
                        },
                        x: point.shapeArgs.x,
                        y: y,
                        width: point.shapeArgs.width || 0,
                        height: height,
                        patternContentUnits: 'objectBoundingBox',
                        backgroundColor: 'none',
                        color: '#ff0000'
                    }
                };
            }
            else if (point.pathDef && point.graphic) {
                delete pointAttribs.fill;
            }
        }
        delete pointAttribs.stroke;
        delete pointAttribs.strokeWidth;
        return pointAttribs;
    }
    /**
     * Make sure that path.max is also considered when calculating dataMax.
     */
    getExtremes() {
        const extremes = super.getExtremes.apply(this, arguments), series = this, paths = series.options.paths;
        if (paths) {
            paths.forEach(function (path) {
                if (PictorialSeries_defined(path.max) &&
                    PictorialSeries_defined(extremes.dataMax) &&
                    path.max > extremes.dataMax) {
                    extremes.dataMax = path.max;
                }
            });
        }
        return extremes;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
PictorialSeries.defaultOptions = PictorialSeries_merge(PictorialSeries_ColumnSeries.defaultOptions, 
/**
 * A pictorial chart uses vector images to represents the data.
 * The shape of the data point is taken from the path parameter.
 *
 * @sample       {highcharts} highcharts/demo/pictorial/
 *               Pictorial chart
 *
 * @extends      plotOptions.column
 * @since 11.0.0
 * @product      highcharts
 * @excluding    allAreas, borderRadius,
 *               centerInCategory, colorAxis, colorKey, connectEnds,
 *               connectNulls, crisp, compare, compareBase, dataSorting,
 *               dashStyle, dataAsColumns, linecap, lineWidth, shadow,
 *               onPoint
 * @requires     modules/pictorial
 * @optionparent plotOptions.pictorial
 */
{
    borderWidth: 0
});
/* *
 *
 *  Events
 *
 * */
PictorialSeries_addEvent(PictorialSeries, 'afterRender', function () {
    const series = this, paths = series.options.paths, fillUrlMatcher = /url\(([^)]+)\)/;
    series.points.forEach(function (point) {
        if (point.graphic && point.shapeArgs && paths) {
            const shape = paths[point.index % paths.length], fill = point.graphic.attr('fill'), match = fill && fill.match(fillUrlMatcher), { y, height } = PictorialSeries_getStackMetrics(series.yAxis, shape);
            if (match && series.chart.renderer.patternElements) {
                const currentPattern = series.chart.renderer.patternElements[match[1].slice(1)];
                if (currentPattern) {
                    currentPattern.animate({
                        x: point.shapeArgs.x,
                        y: y,
                        width: point.shapeArgs.width || 0,
                        height: height
                    });
                }
            }
            PictorialSeries_rescalePatternFill(point.graphic, PictorialSeries_getStackMetrics(series.yAxis, shape).height, point.shapeArgs.width || 0, point.shapeArgs.height || Infinity, series.options.borderWidth || 0);
        }
    });
});
/**
 *
 */
function renderStackShadow(stack) {
    // Get first pictorial series
    const stackKeys = Object
        .keys(stack.points)
        .filter((p) => p.split(',').length > 1), allSeries = stack.axis.chart.series, seriesIndexes = stackKeys.map((key) => parseFloat(key.split(',')[0]));
    let seriesIndex = -1;
    seriesIndexes.forEach((index) => {
        if (allSeries[index] && allSeries[index].visible) {
            seriesIndex = index;
        }
    });
    const series = stack.axis.chart.series[seriesIndex];
    if (series &&
        series.is('pictorial') &&
        stack.axis.hasData() &&
        series.xAxis.hasData()) {
        const xAxis = series.xAxis, options = stack.axis.options, chart = stack.axis.chart, stackShadow = stack.shadow, xCenter = xAxis.toPixels(stack.x, true), x = chart.inverted ? xAxis.len - xCenter : xCenter, paths = series.options.paths || [], index = stack.x % paths.length, shape = paths[index], width = series.getColumnMetrics &&
            series.getColumnMetrics().width, { height, y } = PictorialSeries_getStackMetrics(series.yAxis, shape), shadowOptions = options.stackShadow, strokeWidth = PictorialSeries_pick(shadowOptions && shadowOptions.borderWidth, series.options.borderWidth, 1);
        if (!stackShadow &&
            shadowOptions &&
            shadowOptions.enabled &&
            shape) {
            if (!stack.shadowGroup) {
                stack.shadowGroup = chart.renderer.g('shadow-group')
                    .add();
            }
            stack.shadowGroup.attr({
                translateX: chart.inverted ?
                    stack.axis.pos : xAxis.pos,
                translateY: chart.inverted ?
                    xAxis.pos : stack.axis.pos
            });
            stack.shadow = chart.renderer.rect(x, y, width, height)
                .attr({
                fill: {
                    pattern: {
                        path: {
                            d: shape.definition,
                            fill: shadowOptions.color ||
                                '#dedede',
                            strokeWidth: strokeWidth,
                            stroke: shadowOptions.borderColor ||
                                'transparent'
                        },
                        x: x,
                        y: y,
                        width: width,
                        height: height,
                        patternContentUnits: 'objectBoundingBox',
                        backgroundColor: 'none',
                        color: '#dedede'
                    }
                }
            })
                .add(stack.shadowGroup);
            PictorialSeries_invertShadowGroup(stack.shadowGroup, stack.axis);
            PictorialSeries_rescalePatternFill(stack.shadow, height, width, height, strokeWidth);
            stack.setOffset(series.pointXOffset || 0, series.barW || 0);
        }
        else if (stackShadow && stack.shadowGroup) {
            stackShadow.animate({
                x,
                y,
                width,
                height
            });
            const fillUrlMatcher = /url\(([^)]+)\)/, fill = stackShadow.attr('fill'), match = fill && fill.match(fillUrlMatcher);
            if (match && chart.renderer.patternElements) {
                chart.renderer.patternElements[match[1].slice(1)]
                    .animate({
                    x,
                    y,
                    width,
                    height
                });
            }
            stack.shadowGroup.animate({
                translateX: chart.inverted ?
                    stack.axis.pos : xAxis.pos,
                translateY: chart.inverted ?
                    xAxis.pos : stack.axis.pos
            });
            PictorialSeries_invertShadowGroup(stack.shadowGroup, stack.axis);
            PictorialSeries_rescalePatternFill(stackShadow, height, width, height, strokeWidth);
            stack.setOffset(series.pointXOffset || 0, series.barW || 0);
        }
    }
    else if (stack.shadow && stack.shadowGroup) {
        stack.shadow.destroy();
        stack.shadow = void 0;
        stack.shadowGroup.destroy();
        stack.shadowGroup = void 0;
    }
}
/**
 *
 */
function forEachStack(chart, callback) {
    if (chart.axes) {
        chart.axes.forEach(function (axis) {
            if (!axis.stacking) {
                return;
            }
            const stacks = axis.stacking.stacks;
            // Render each stack total
            PictorialSeries_objectEach(stacks, function (type) {
                PictorialSeries_objectEach(type, function (stack) {
                    callback(stack);
                });
            });
        });
    }
}
PictorialSeries_addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'render', function () {
    forEachStack(this, renderStackShadow);
});
PictorialSeries_addEvent((highcharts_StackItem_commonjs_highcharts_StackItem_commonjs2_highcharts_StackItem_root_Highcharts_StackItem_default()), 'afterSetOffset', function (e) {
    if (this.shadow) {
        const { chart, len } = this.axis, { xOffset, width } = e, translateX = chart.inverted ? xOffset - chart.xAxis[0].len : xOffset, translateY = chart.inverted ? -len : 0;
        this.shadow.attr({
            translateX,
            translateY
        });
        this.shadow.animate({ width });
    }
});
/**
 *
 */
function destroyAllStackShadows(chart) {
    forEachStack(chart, function (stack) {
        if (stack.shadow && stack.shadowGroup) {
            stack.shadow.destroy();
            stack.shadowGroup.destroy();
            delete stack.shadow;
            delete stack.shadowGroup;
        }
    });
}
// This is a workaround due to no implementation of the animation drilldown.
PictorialSeries_addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'afterDrilldown', function () {
    destroyAllStackShadows(this);
});
PictorialSeries_addEvent((highcharts_Chart_commonjs_highcharts_Chart_commonjs2_highcharts_Chart_root_Highcharts_Chart_default()), 'afterDrillUp', function () {
    destroyAllStackShadows(this);
});
PictorialSeries.prototype.pointClass = Pictorial_PictorialPoint;
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('pictorial', PictorialSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Pictorial_PictorialSeries = ((/* unused pure expression or super */ null && (PictorialSeries)));
/* *
 *
 * API Options
 *
 * */
/**
 * A `pictorial` series. If the [type](#series.pictorial.type) option is not
 * specified, it is inherited from [chart.type](#chart.type).
 *
 * @extends   series,plotOptions.pictorial
 * @since 11.0.0
 * @product   highcharts
 * @excluding dataParser, borderRadius, boostBlending, boostThreshold,
 *            borderColor, borderWidth, centerInCategory, connectEnds,
 *            connectNulls, crisp, colorKey, dataURL, dataAsColumns, depth,
 *            dragDrop, edgeColor, edgeWidth, linecap, lineWidth,  marker,
 *            dataSorting, dashStyle, onPoint, relativeXValue, shadow, zoneAxis,
 *            zones
 * @requires  modules/pictorial
 * @apioption series.pictorial
 */
/**
 * An array of data points for the series. For the `pictorial` series type,
 * points can be given in the following ways:
 *
 * 1. An array of arrays with 2 values. In this case, the values correspond
 *    to `x,y`. If the first value is a string, it is applied as the name
 *    of the point, and the `x` value is inferred. The `x` value can also be
 *    omitted, in which case the inner arrays should be of length 2. Then the
 *    `x` value is automatically calculated, either starting at 0 and
 *    incremented by 1, or from `pointStart` and `pointInterval` given in the
 *    series options.
 *    ```js
 *    data: [
 *        [0, 40],
 *        [1, 50],
 *        [2, 60]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. The following snippet shows only a
 *    few settings, see the complete options set below. If the total number of
 *    data points exceeds the series'
 *    [turboThreshold](#series.pictorial.turboThreshold), this option is not
 *    available.
 *    ```js
 *    data: [{
 *        x: 0,
 *        y: 40,
 *        name: "Point1",
 *        color: "#00FF00"
 *    }, {
 *        x: 1,
 *        y: 60,
 *        name: "Point2",
 *        color: "#FF00FF"
 *    }]
 *    ```
 *
 * @type      {Array<Array<(number|string),number>|Array<(number|string),number,number>|*>}
 * @extends   series.column.data
 *
 * @sample {highcharts} highcharts/demo/pictorial/
 *         Pictorial chart
 * @sample {highcharts} highcharts/demo/pictorial-stackshadow/
 *         Pictorial stackShadow option
 * @sample {highcharts} highcharts/series-pictorial/paths-max/
 *         Pictorial max option
 *
 * @excluding borderColor, borderWidth, dashStyle, dragDrop
 * @since 11.0.0
 * @product   highcharts
 * @apioption series.pictorial.data
 */
/**
 * The paths include options describing the series image. For further details on
 * preparing the SVG image, please refer to the [pictorial
 * documentation](https://www.highcharts.com/docs/chart-and-series-types/pictorial).
 *
 * @declare   Highcharts.SeriesPictorialPathsOptionsObject
 * @type      {Array<*>}
 *
 * @sample    {highcharts} highcharts/demo/pictorial/
 *            Pictorial chart
 *
 * @since     11.0.0
 * @product   highcharts
 * @apioption series.pictorial.paths
 */
/**
 * The definition defines a path to be drawn. It corresponds `d` SVG attribute.
 *
 * @type      {string}
 *
 * @sample    {highcharts} highcharts/demo/pictorial/
 *            Pictorial chart
 *
 * @product   highcharts
 * @apioption series.pictorial.paths.definition
 */
/**
 * The max option determines height of the image. It is the ratio of
 * `yAxis.max` to the `paths.max`.
 *
 * @sample {highcharts} highcharts/series-pictorial/paths-max
 *         Pictorial max option
 *
 * @type      {number}
 * @default   yAxis.max
 * @product   highcharts
 * @apioption series.pictorial.paths.max
 */
/**
 * Relevant only for pictorial series. The `stackShadow` forms the background of
 * stacked points. Requires `series.stacking` to be defined.
 *
 * @sample {highcharts} highcharts/demo/pictorial-stackshadow/ Pictorial
 *         stackShadow option
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {*}
 * @since 11.0.0
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow
 */
/**
 * The color of the `stackShadow` border.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @default   transparent
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.borderColor
 */
/**
 * The width of the `stackShadow` border.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {number}
 * @default   0
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.borderWidth
 */
/**
 * The color of the `stackShadow`.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject}
 * @default   #dedede
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.color
 */
/**
 * Enable or disable `stackShadow`.
 *
 * @declare   Highcharts.YAxisOptions
 * @type      {boolean}
 * @default   undefined
 * @product   highcharts
 * @requires  modules/pictorial
 * @apioption yAxis.stackShadow.enabled
 */
''; // Adds doclets above to transpiled file

;// ./code/es-modules/masters/modules/pictorial.src.js




/* harmony default export */ const pictorial_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});