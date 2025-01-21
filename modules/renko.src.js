/**
 * @license Highstock JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/renko
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Renko series type for Highcharts Stock
 *
 * (c) 2010-2024 Pawel Lysy
 *
 * License: www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Color"], root["_Highcharts"]["Series"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/renko", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SeriesRegistry"],amd1["Color"],amd1["Series"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/renko"] = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"], root["_Highcharts"]["Color"], root["_Highcharts"]["Series"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["SeriesRegistry"], root["Highcharts"]["Color"], root["Highcharts"]["Series"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__512__, __WEBPACK_EXTERNAL_MODULE__620__, __WEBPACK_EXTERNAL_MODULE__820__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__620__;

/***/ }),

/***/ 820:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__820__;

/***/ }),

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

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
  "default": () => (/* binding */ renko_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/Renko/RenkoPoint.js
/* *
 *
 *  (c) 2010-2024 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */


const { column: { prototype: { pointClass: ColumnPoint } } } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;
/* *
 *
 *  Class
 *
 * */
class RenkoPoint extends ColumnPoint {
    getClassName() {
        return (super.getClassName.call(this) +
            (this.upTrend ? ' highcharts-point-up' : ' highcharts-point-down'));
    }
}
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Renko_RenkoPoint = (RenkoPoint);

;// ./code/es-modules/Series/Renko/RenkoSeriesDefaults.js
/* *
 *
 *  (c) 2010-2024 Pawel Lysy
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
 * A Renko series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per
 * data point.
 *
 * @sample stock/demo/renko/
 *         Renko series
 *
 *
 * @sample stock/series-renko/renko-vs-heikinashi-vs-candlestick
 *         Renko series
 *
 * @extends      plotOptions.column
 * @excluding boost, boostBlending, boostThreshold, centerInCategory,
 * cumulative, cumulativeStart, dashStyle, dragDrop, dataSorting, edgeColor,
 * stacking, getExtremesFromAll, clip, colorByPoint, compare, compareBase,
 * compareStart, compareTo, dataGrouping, edgeWidth, lineColor, linkedTo,
 * pointPadding, pointPlacement, pointRange, pointStart, pointWidth
 * @product      highstock
 * @requires     modules/renko
 * @optionparent plotOptions.renko
 */
const RenkoDefaults = {
    /**
     * The size of the individual box, representing a point. Can be set in yAxis
     * value, or percent value of the first point e.g. if first point's value is
     * 200, and box size is set to `20%`, the box will be 40, so the new point
     * will be drawn when the next value changes for more than 40.
     */
    boxSize: 4,
    groupPadding: 0,
    pointPadding: 0,
    downColor: '#ff0000',
    navigatorOptions: {
        type: 'renko'
    },
    fillColor: 'transparent',
    borderWidth: 2,
    lineWidth: 0,
    stickyTracking: true,
    borderRadius: {
        where: 'all'
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.low:.2f} - {point.y:.2f}</b><br/>'
    }
};
/* *
 *
 *  API Options
 *
 * */
/**
 * A `renko` series. If the [type](#series.renko.type)
 * option is not specified, it is inherited from [chart.type](
 * #chart.type).
 *
 * @type      {*}
 * @extends   series,plotOptions.renko
 * @product   highstock
 * @excluding boost, compare, compareStart, connectNulls, cumulative,
 * cumulativeStart, dataGrouping, dataParser, dataSorting, dataURL,
 * dragDrop, marker, step
 * @requires  modules/renko
 * @apioption series.renko
 */
/**
 * An array of data points for the series. For the `renko` series
 * type, points can be given in the following ways:
 *
 * 1. An array of arrays with 1 or 2 values correspond to `x,close`. If the
 * first value is a string, it is applied as the name of the point, and the
 * `x` value is inferred. The `x` value can also be omitted, in which case
 * the inner arrays should be of length 4. Then the `x` value is
 * automatically calculated, either starting at 0 and incremented by 1, or
 * from `pointStart` and `pointInterval` given in the series options.
 *    ```js
 *    data: [
 *        [0, 7],
 *        [1, 1],
 *        [2, 3]
 *    ]
 *    ```
 *
 * 2. An array of objects with named values. With renko series, the data
 * does not directly correspond to the points in the series. the reason
 * is that the points are calculated based on the trends and boxSize.
 * Setting options for individual point is impossible.
 *
 *    ```js
 *    data: [{
 *        x: 1,
 *        y: 6
 *    }, {
 *        x: 1,
 *        y: 7,
 *    }]
 *    ```
 *
 * @type      {Array<Array<number,number>|*>}
 * @extends series.column.data
 * @product highstock
 * @apioption series.renko.data
 */
(''); // Adds doclets above to transpiled
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const RenkoSeriesDefaults = (RenkoDefaults);

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
/* harmony default export */ const Column_ColumnSeries = (ColumnSeries);
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

;// ./code/es-modules/Series/Renko/RenkoSeries.js
/* *
 *
 *  (c) 2010-2024 Pawel Lysy
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */






const { extend: RenkoSeries_extend, merge: RenkoSeries_merge, relativeLength, isNumber: RenkoSeries_isNumber } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* *
 *
 *  Class
 *
 * */
/**
 * The renko series type.
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.renko
 *
 * @augments Highcharts.seriesTypes.column
 */
class RenkoSeries extends Column_ColumnSeries {
    constructor() {
        super(...arguments);
        this.hasDerivedData = true;
        this.allowDG = false;
        /* *
         *
         *  Functions
         *
         * */
    }
    init() {
        super.init.apply(this, arguments);
        this.renkoData = [];
    }
    setData(data, redraw, animation) {
        this.renkoData = [];
        super.setData(data, redraw, animation, false);
    }
    getXExtremes(xData) {
        this.processData();
        xData = this.getColumn('x', true);
        return {
            min: xData[0],
            max: xData[xData.length - 1]
        };
    }
    getProcessedData() {
        const modified = this.dataTable.modified;
        const processedXData = [];
        const processedYData = [];
        const processedLowData = [];
        const xData = this.getColumn('x', true);
        const yData = this.getColumn('y', true);
        if (!this.renkoData || this.renkoData.length > 0) {
            return {
                modified,
                closestPointRange: 1,
                cropped: false,
                cropStart: 0
            };
        }
        const boxSize = this.options.boxSize;
        const change = RenkoSeries_isNumber(boxSize) ? boxSize : relativeLength(boxSize, yData[0]);
        const renkoData = [], length = xData.length;
        let prevTrend = 0;
        let prevPrice = yData[0];
        for (let i = 1; i < length; i++) {
            const currentChange = yData[i] - yData[i - 1];
            if (currentChange > change) {
                // Uptrend
                if (prevTrend === 2) {
                    prevPrice += change;
                }
                for (let j = 0; j < currentChange / change; j++) {
                    renkoData.push({
                        x: xData[i] + j,
                        low: prevPrice,
                        y: prevPrice + change,
                        color: this.options.color,
                        upTrend: true
                    });
                    prevPrice += change;
                }
                prevTrend = 1;
            }
            else if (Math.abs(currentChange) > change) {
                if (prevTrend === 1) {
                    prevPrice -= change;
                }
                // Downtrend
                for (let j = 0; j < Math.abs(currentChange) / change; j++) {
                    renkoData.push({
                        x: xData[i] + j,
                        low: prevPrice - change,
                        y: prevPrice,
                        color: this.options.downColor,
                        upTrend: false
                    });
                    prevPrice -= change;
                }
                prevTrend = 2;
            }
        }
        this.renkoData = renkoData;
        for (const point of renkoData) {
            processedXData.push(point.x);
            processedYData.push(point.y);
            processedLowData.push(point.low);
        }
        this.processedData = renkoData;
        modified.setColumn('x', processedXData);
        modified.setColumn('y', processedYData);
        modified.setColumn('low', processedLowData);
        return {
            modified,
            cropped: false,
            cropStart: 0,
            closestPointRange: 1
        };
    }
}
/* *
 *
 *  Static Properties
 *
 * */
RenkoSeries.defaultOptions = RenkoSeries_merge(Column_ColumnSeries.defaultOptions, RenkoSeriesDefaults);
RenkoSeries_extend(RenkoSeries.prototype, {
    pointClass: Renko_RenkoPoint
});
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('renko', RenkoSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const Renko_RenkoSeries = ((/* unused pure expression or super */ null && (RenkoSeries)));

;// ./code/es-modules/masters/modules/renko.src.js




/* harmony default export */ const renko_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});