/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as Highcharts from "../highcharts.src";
declare module "../highcharts.src" {
    interface PlotVectorClusterEventsOptions {
        /**
         * (Highcharts, Highmaps) Fires when the cluster point is clicked and
         * `drillToCluster` is enabled. One parameter, `event`, is passed to the
         * function. The default action is to zoom to the cluster points range.
         * This can be prevented by calling `event.preventDefault()`.
         */
        drillToCluster?: Highcharts.MarkerClusterDrillCallbackFunction;
    }
    /**
     * (Highcharts, Highmaps) Options for marker clusters, the concept of
     * sampling the data values into larger blocks in order to ease readability
     * and increase performance of the JavaScript charts.
     *
     * Note: marker clusters module is not working with `boost` and
     * `draggable-points` modules.
     *
     * The marker clusters feature requires the marker-clusters.js file to be
     * loaded, found in the modules directory of the download package, or online
     * at code.highcharts.com/modules/marker-clusters.js.
     */
    interface PlotVectorClusterOptions {
        /**
         * (Highcharts, Highmaps) When set to `false` prevent cluster
         * overlapping - this option works only when `layoutAlgorithm.type =
         * "grid"`.
         */
        allowOverlap?: boolean;
        /**
         * (Highcharts, Highmaps) Options for the cluster marker animation.
         */
        animation?: (boolean|Partial<Highcharts.AnimationOptionsObject>);
        /**
         * (Highcharts, Highmaps) Options for the cluster data labels.
         */
        dataLabels?: Highcharts.DataLabelsOptions;
        /**
         * (Highcharts, Highmaps) Zoom the plot area to the cluster points range
         * when a cluster is clicked.
         */
        drillToCluster?: boolean;
        /**
         * (Highcharts, Highmaps) Whether to enable the marker-clusters module.
         */
        enabled?: boolean;
        events?: Highcharts.PlotVectorClusterEventsOptions;
        /**
         * (Highcharts, Highmaps) Options for layout algorithm. Inside there are
         * options to change the type of the algorithm, gridSize, distance or
         * iterations.
         */
        layoutAlgorithm?: Highcharts.PlotVectorClusterLayoutAlgorithmOptions;
        /**
         * (Highcharts, Highmaps) Options for the cluster marker.
         */
        marker?: Highcharts.PointMarkerOptionsObject;
        /**
         * (Highcharts, Highmaps) The minimum amount of points to be combined
         * into a cluster. This value has to be greater or equal to 2.
         */
        minimumClusterSize?: number;
        states?: Highcharts.PlotVectorClusterStatesOptions;
        /**
         * (Highcharts, Highmaps) An array defining zones within marker
         * clusters.
         *
         * In styled mode, the color zones are styled with the
         * `.highcharts-cluster-zone-{n}` class, or custom classed from the
         * `className` option.
         */
        zones?: Array<Highcharts.PlotVectorClusterZonesOptions>;
    }
    interface PlotVectorClusterStatesOptions {
        hover?: Highcharts.PlotVectorClusterStatesHoverOptions;
    }
    /**
     * (Highcharts, Highstock, Highmaps, Gantt) Enable or disable the initial
     * animation when a series is displayed for the `dataLabels`. The animation
     * can also be set as a configuration object. Please note that this option
     * only applies to the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface PlotVectorDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
    /**
     * (Highcharts, Highstock) Options for the series data sorting.
     */
    interface PlotVectorDataSortingOptions {
        /**
         * (Highcharts, Highstock) Enable or disable data sorting for the
         * series. Use xAxis.reversed to change the sorting order.
         */
        enabled?: boolean;
        /**
         * (Highcharts, Highstock) Whether to allow matching points by name in
         * an update. If this option is disabled, points will be matched by
         * order.
         */
        matchByName?: boolean;
        /**
         * (Highcharts, Highstock) Determines what data value should be used to
         * sort by.
         */
        sortKey?: string;
    }
    /**
     * (Highcharts, Highstock) Options for the _Series on point_ feature. Only
     * `pie` and `sunburst` series are supported at this moment.
     */
    interface PlotVectorOnPointOptions {
        /**
         * (Highcharts, Highstock) Options for the connector in the _Series on
         * point_ feature.
         *
         * In styled mode, the connector can be styled with the
         * `.highcharts-connector-seriesonpoint` class name.
         */
        connectorOptions?: (Highcharts.PlotVectorOnPointConnectorOptions|Highcharts.SVGAttributes);
        /**
         * (Highcharts, Highstock) The `id` of the point that we connect the
         * series to. Only points with a given `plotX` and `plotY` values and
         * map points are valid.
         */
        id?: string;
        /**
         * (Highcharts, Highstock) Options allowing to set a position and an
         * offset of the series in the _Series on point_ feature.
         */
        position?: (object|Highcharts.PlotVectorOnPointPositionOptions);
    }
    /**
     * (Highcharts, Highstock) A vector plot is a type of cartesian chart where
     * each point has an X and Y position, a length and a direction. Vectors are
     * drawn as arrows.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the
     * plotOptions.series object.
     *
     * 2. Options for all `vector` series are defined in plotOptions.vector.
     *
     * 3. Options for one single series are given in the series instance array.
     * (see online documentation for example)
     */
    interface PlotVectorOptions {
        /**
         * (Highcharts, Highstock) Accessibility options for a series.
         */
        accessibility?: Highcharts.SeriesAccessibilityOptionsObject;
        /**
         * (Highcharts, Highstock) Allow this series' points to be selected by
         * clicking on the graphic (columns, point markers, pie slices, map
         * areas etc).
         *
         * The selected points can be handled by point select and unselect
         * events, or collectively by the getSelectedPoints function.
         *
         * And alternative way of selecting points is through dragging.
         */
        allowPointSelect?: boolean;
        /**
         * (Highcharts, Highstock) Enable or disable the initial animation when
         * a series is displayed. The animation can also be set as a
         * configuration object. Please note that this option only applies to
         * the initial animation of the series itself. For other animations, see
         * chart.animation and the animation parameter under the API methods.
         * The following properties are supported:
         *
         * - `defer`: The animation delay time in milliseconds.
         *
         * - `duration`: The duration of the animation in milliseconds.
         * (Defaults to `1000`)
         *
         * - `easing`: Can be a string reference to an easing function set on
         * the `Math` object or a function. See the _Custom easing function_
         * demo below. (Defaults to `easeInOutSine`)
         *
         * Due to poor performance, animation is disabled in old IE browsers for
         * several chart types.
         */
        animation?: (boolean|Highcharts.AnimationOptionsObject);
        /**
         * (Highcharts, Highstock) For some series, there is a limit that shuts
         * down animation by default when the total number of points in the
         * chart is too high. For example, for a column chart and its
         * derivatives, animation does not run if there is more than 250 points
         * totally. To disable this cap, set `animationLimit` to `Infinity`.
         * This option works if animation is fired on individual points, not on
         * a group of points like e.g. during the initial animation.
         */
        animationLimit?: number;
        /**
         * (Highcharts, Highstock) An additional class name to apply to the
         * series' graphical elements. This option does not replace default
         * class names of the graphical element. Changes to the series' color
         * will also be reflected in a chart's legend and tooltip.
         */
        className?: string;
        /**
         * (Highcharts, Highstock) Disable this option to allow series rendering
         * in the whole plotting area.
         *
         * **Note:** Clipping should be always enabled when chart.zoomType is
         * set
         */
        clip?: boolean;
        /**
         * (Highcharts, Highmaps) Options for marker clusters, the concept of
         * sampling the data values into larger blocks in order to ease
         * readability and increase performance of the JavaScript charts.
         *
         * Note: marker clusters module is not working with `boost` and
         * `draggable-points` modules.
         *
         * The marker clusters feature requires the marker-clusters.js file to
         * be loaded, found in the modules directory of the download package, or
         * online at code.highcharts.com/modules/marker-clusters.js.
         */
        cluster?: Highcharts.PlotVectorClusterOptions;
        /**
         * (Highcharts, Highstock) The main color of the series. In line type
         * series it applies to the line and the point markers unless otherwise
         * specified. In bar type series it applies to the bars unless a color
         * is specified per point. The default value is pulled from the
         * `options.colors` array.
         *
         * In styled mode, the color can be defined by the colorIndex option.
         * Also, the series color can be set with the `.highcharts-series`,
         * `.highcharts-color-{n}`, `.highcharts-{type}-series` or
         * `.highcharts-series-{n}` class, or individual classes given by the
         * `className` option.
         */
        color?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock, Highmaps) When using dual or multiple color
         * axes, this number defines which colorAxis the particular series is
         * connected to. It refers to either the axis id or the index of the
         * axis in the colorAxis array, with 0 being the first. Set this option
         * to false to prevent a series from connecting to the default color
         * axis.
         *
         * Since v7.2.0 the option can also be an axis id or an axis index
         * instead of a boolean flag.
         */
        colorAxis?: (boolean|number|string);
        /**
         * (Highcharts, Highstock) Styled mode only. A specific color index to
         * use for the series, so its graphic representations are given the
         * class name `highcharts-color-{n}`.
         *
         * Since v11, CSS variables on the form `--highcharts-color-{n}` make
         * changing the color scheme very convenient.
         */
        colorIndex?: number;
        /**
         * (Highcharts, Highstock, Highmaps) Determines what data value should
         * be used to calculate point color if `colorAxis` is used. Requires to
         * set `min` and `max` if some custom point property is used or if
         * approximation for data grouping is set to `'sum'`.
         */
        colorKey?: string;
        /**
         * (Highstock) Compare the values of the series against the first
         * non-null, non- zero value in the visible range. The y axis will show
         * percentage or absolute change depending on whether `compare` is set
         * to `"percent"` or `"value"`. When this is applied to multiple series,
         * it allows comparing the development of the series against each other.
         * Adds a `change` field to every point object.
         */
        compare?: Highcharts.OptionsCompareValue;
        /**
         * (Highstock) When compare is `percent`, this option dictates whether
         * to use 0 or 100 as the base of comparison.
         */
        compareBase?: (0|100);
        /**
         * (Highstock) Defines if comparison should start from the first point
         * within the visible range or should start from the last point
         * **before** the range.
         *
         * In other words, this flag determines if first point within the
         * visible range will have 0% (`compareStart=true`) or should have been
         * already calculated according to the previous point
         * (`compareStart=false`).
         */
        compareStart?: boolean;
        /**
         * (Highcharts, Highstock, Gantt) When true, each point or column edge
         * is rounded to its nearest pixel in order to render sharp on screen.
         * In some cases, when there are a lot of densely packed columns, this
         * leads to visible difference in column widths or distance between
         * columns. In these cases, setting `crisp` to `false` may look better,
         * even though each column is rendered blurry.
         */
        crisp?: boolean;
        /**
         * (Highstock) Cumulative Sum feature replaces points' values with the
         * following formula: `sum of all previous points' values + current
         * point's value`. Works only for points in a visible range. Adds the
         * `cumulativeSum` field to each point object that can be accessed e.g.
         * in the tooltip.pointFormat.
         *
         * With `dataGrouping` enabled, default grouping approximation is set to
         * `sum`.
         */
        cumulative?: boolean;
        /**
         * (Highstock) Defines if cumulation should start from the first point
         * within the visible range or should start from the last point
         * **before** the range.
         *
         * In other words, this flag determines if first point within the
         * visible range will start at 0 (`cumulativeStart=true`) or should have
         * been already calculated according to the previous point
         * (`cumulativeStart=false`).
         */
        cumulativeStart?: boolean;
        /**
         * (Highcharts, Highstock) You can set the cursor to "pointer" if you
         * have click events attached to the series, to signal to the user that
         * the points and lines can be clicked.
         *
         * In styled mode, the series cursor can be set with the same classes as
         * listed under series.color.
         */
        cursor?: (string|Highcharts.CursorValue);
        /**
         * (Highcharts, Highstock) A reserved subspace to store options and
         * values for customized functionality. Here you can add additional data
         * for your own event callbacks and formatter callbacks.
         */
        custom?: Highcharts.Dictionary<any>;
        /**
         * (Highcharts, Highstock, Highmaps, Gantt) Options for the series data
         * labels, appearing next to each data point.
         *
         * Since v6.2.0, multiple data labels can be applied to each single
         * point by defining them as an array of configs.
         *
         * In styled mode, the data labels can be styled with the
         * `.highcharts-data-label-box` and `.highcharts-data-label` class names
         * (see example).
         */
        dataLabels?: (Highcharts.PlotVectorDataLabelsOptions|Array<Highcharts.PlotVectorDataLabelsOptions>);
        /**
         * (Highcharts, Highstock) Options for the series data sorting.
         */
        dataSorting?: (Highcharts.DataSortingOptionsObject|Highcharts.PlotVectorDataSortingOptions);
        /**
         * (Highcharts, Highstock) A description of the series to add to the
         * screen reader information about the series.
         */
        description?: string;
        /**
         * (Highcharts, Highstock) Enable or disable the mouse tracking for a
         * specific series. This includes point tooltips and click events on
         * graphs and points. For large datasets it improves performance.
         */
        enableMouseTracking?: boolean;
        /**
         * (Highcharts, Highstock) General event handlers for the series items.
         * These event hooks can also be attached to the series at run time
         * using the `Highcharts.addEvent` function.
         */
        events?: Highcharts.SeriesEventsOptionsObject;
        /**
         * (Highcharts, Highstock) Determines whether the series should look for
         * the nearest point in both dimensions or just the x-dimension when
         * hovering the series. Defaults to `'xy'` for scatter series and `'x'`
         * for most other series. If the data has duplicate x-values, it is
         * recommended to set this to `'xy'` to allow hovering over all points.
         *
         * Applies only to series types using nearest neighbor search (not
         * direct hover) for tooltip.
         */
        findNearestPointBy?: Highcharts.OptionsFindNearestPointByValue;
        /**
         * (Highcharts, Highstock, Gantt) Whether to use the Y extremes of the
         * total chart width or only the zoomed area when zooming in on parts of
         * the X axis. By default, the Y axis adjusts to the min and max of the
         * visible data. Cartesian series only.
         */
        getExtremesFromAll?: boolean;
        /**
         * (Highcharts, Highstock) Highlight only the hovered point and fade the
         * remaining points.
         *
         * Scatter-type series require enabling the 'inactive' marker state and
         * adjusting opacity. Note that this approach could affect performance
         * with large datasets.
         */
        inactiveOtherPoints?: boolean;
        /**
         * (Highcharts, Highstock) When set to `false` will prevent the series
         * data from being included in any form of data export.
         *
         * Since version 6.0.0 until 7.1.0 the option was existing undocumented
         * as `includeInCSVExport`.
         */
        includeInDataExport?: boolean;
        /**
         * (Highcharts, Highstock) An array specifying which option maps to
         * which key in the data point array. This makes it convenient to work
         * with unstructured data arrays from different sources.
         */
        keys?: Array<string>;
        /**
         * (Highcharts, Highstock, Gantt) Series labels are placed as close to
         * the series as possible in a natural way, seeking to avoid other
         * series. The goal of this feature is to make the chart more easily
         * readable, like if a human designer placed the labels in the optimal
         * position.
         *
         * The series labels currently work with series types having a `graph`
         * or an `area`.
         */
        label?: Highcharts.SeriesLabelOptionsObject;
        /**
         * (Highstock) The line marks the last price from all points.
         */
        lastPrice?: Highcharts.SeriesLastPriceOptionsObject;
        /**
         * (Highstock) The line marks the last price from visible range of
         * points.
         */
        lastVisiblePrice?: Highcharts.SeriesLastVisiblePriceOptionsObject;
        /**
         * (Highcharts, Highstock) What type of legend symbol to render for this
         * series. Can be one of `areaMarker`, `lineMarker` or `rectangle`.
         */
        legendSymbol?: Highcharts.OptionsLegendSymbolValue;
        /**
         * (Highcharts, Highstock) The line width for each vector arrow.
         */
        lineWidth?: number;
        /**
         * (Highcharts, Highstock, Gantt) The id of another series to link to.
         * Additionally, the value can be ":previous" to link to the previous
         * series. When two series are linked, only the first one appears in the
         * legend. Toggling the visibility of this also toggles the linked
         * series.
         *
         * If master series uses data sorting and linked series does not have
         * its own sorting definition, the linked series will be sorted in the
         * same order as the master one.
         */
        linkedTo?: string;
        marker?: string;
        /**
         * (Highstock) Options for the corresponding navigator series if
         * `showInNavigator` is `true` for this series. Available options are
         * the same as any series, documented at plotOptions and series.
         *
         * These options are merged with options in navigator.series, and will
         * take precedence if the same option is defined both places.
         */
        navigatorOptions?: Highcharts.PlotSeriesOptions;
        /**
         * (Highcharts, Highstock) The color for the parts of the graph or
         * points that are below the threshold. Note that `zones` takes
         * precedence over the negative color. Using `negativeColor` is
         * equivalent to applying a zone with value of 0.
         */
        negativeColor?: (Highcharts.ColorString|Highcharts.GradientColorObject|Highcharts.PatternObject);
        /**
         * (Highcharts, Highstock) Options for the _Series on point_ feature.
         * Only `pie` and `sunburst` series are supported at this moment.
         */
        onPoint?: (object|Highcharts.PlotVectorOnPointOptions);
        /**
         * (Highcharts, Highstock) Opacity of a series parts: line, fill (e.g.
         * area) and dataLabels.
         */
        opacity?: number;
        /**
         * (Highcharts, Highstock) Properties for each single point.
         */
        point?: Highcharts.PlotSeriesPointOptions;
        /**
         * (Highcharts, Highstock) Same as
         * accessibility.point.descriptionFormat, but for an individual series.
         * Overrides the chart wide configuration.
         */
        pointDescriptionFormat?: Function;
        /**
         * (Highcharts, Highstock) Same as
         * accessibility.series.descriptionFormatter, but for an individual
         * series. Overrides the chart wide configuration.
         */
        pointDescriptionFormatter?: Function;
        /**
         * (Highcharts, Highstock, Gantt) If no x values are given for the
         * points in a series, `pointInterval` defines the interval of the x
         * values. For example, if a series contains one value every decade
         * starting from year 0, set `pointInterval` to `10`. In true `datetime`
         * axes, the `pointInterval` is set in milliseconds.
         *
         * It can be also be combined with `pointIntervalUnit` to draw irregular
         * time intervals.
         *
         * If combined with `relativeXValue`, an x value can be set on each
         * point, and the `pointInterval` is added x times to the `pointStart`
         * setting.
         *
         * Please note that this options applies to the _series data_, not the
         * interval of the axis ticks, which is independent.
         */
        pointInterval?: number;
        /**
         * (Highcharts, Highstock, Gantt) On datetime series, this allows for
         * setting the pointInterval to irregular time units, `day`, `month` and
         * `year`. A day is usually the same as 24 hours, but
         * `pointIntervalUnit` also takes the DST crossover into consideration
         * when dealing with local time. Combine this option with
         * `pointInterval` to draw weeks, quarters, 6 months, 10 years etc.
         *
         * Please note that this options applies to the _series data_, not the
         * interval of the axis ticks, which is independent.
         */
        pointIntervalUnit?: Highcharts.OptionsPointIntervalUnitValue;
        /**
         * (Highstock) The width of each point on the x axis. For example in a
         * column chart with one value each day, the pointRange would be 1 day
         * (= 24 * 3600
         *
         * * 1000 milliseconds). This is normally computed automatically, but
         * this option can be used to override the automatic value.
         */
        pointRange?: number;
        /**
         * (Highcharts, Highstock, Gantt) If no x values are given for the
         * points in a series, pointStart defines on what value to start. For
         * example, if a series contains one yearly value starting from 1945,
         * set pointStart to 1945.
         *
         * If combined with `relativeXValue`, an x value can be set on each
         * point. The x value from the point options is multiplied by
         * `pointInterval` and added to `pointStart` to produce a modified x
         * value.
         */
        pointStart?: number;
        /**
         * (Highcharts, Highstock) When true, X values in the data set are
         * relative to the current `pointStart`, `pointInterval` and
         * `pointIntervalUnit` settings. This allows compression of the data for
         * datasets with irregular X values.
         *
         * The real X values are computed on the formula `f(x) = ax + b`, where
         * `a` is the `pointInterval` (optionally with a time unit given by
         * `pointIntervalUnit`), and `b` is the `pointStart`.
         */
        relativeXValue?: boolean;
        /**
         * (Highcharts, Highstock) What part of the vector it should be rotated
         * around. Can be one of `start`, `center` and `end`. When `start`, the
         * vectors will start from the given [x, y] position, and when `end` the
         * vectors will end in the [x, y] position.
         */
        rotationOrigin?: Highcharts.OptionsRotationOriginValue;
        /**
         * (Highcharts, Highstock) Whether to select the series initially. If
         * `showCheckbox` is true, the checkbox next to the series name in the
         * legend will be checked for a selected series.
         */
        selected?: boolean;
        /**
         * (Highcharts, Highstock) If true, a checkbox is displayed next to the
         * legend item to allow selecting the series. The state of the checkbox
         * is determined by the `selected` option.
         */
        showCheckbox?: boolean;
        /**
         * (Highcharts, Highstock) Whether to display this particular series or
         * series type in the legend. Standalone series are shown in legend by
         * default, and linked series are not. Since v7.2.0 it is possible to
         * show series that use colorAxis by setting this option to `true`.
         */
        showInLegend?: boolean;
        /**
         * (Highstock) Whether or not to show the series in the navigator. Takes
         * precedence over navigator.baseSeries if defined.
         */
        showInNavigator?: boolean;
        /**
         * (Highcharts, Highstock) If set to `true`, the accessibility module
         * will skip past the points in this series for keyboard navigation.
         */
        skipKeyboardNavigation?: boolean;
        /**
         * (Highcharts, Highstock) When this is true, the series will not cause
         * the Y axis to cross the zero plane (or threshold option) unless the
         * data actually crosses the plane.
         *
         * For example, if `softThreshold` is `false`, a series of 0, 1, 2, 3
         * will make the Y axis show negative values according to the
         * `minPadding` option. If `softThreshold` is `true`, the Y axis starts
         * at 0.
         */
        softThreshold?: boolean;
        /**
         * (Highcharts, Highstock) Sonification/audio chart options for a
         * series.
         */
        sonification?: Highcharts.SeriesSonificationOptions;
        states?: Highcharts.SeriesStatesOptionsObject;
        /**
         * (Highcharts, Highstock, Highmaps) Sticky tracking of mouse events.
         * When true, the `mouseOut` event on a series isn't triggered until the
         * mouse moves over another series, or out of the plot area. When false,
         * the `mouseOut` event on a series is triggered when the mouse leaves
         * the area around the series' graph or markers. This also implies the
         * tooltip. When `stickyTracking` is false and `tooltip.shared` is
         * false, the tooltip will be hidden when moving the mouse between
         * series.
         */
        stickyTracking?: boolean;
        /**
         * (Highcharts, Highstock) The threshold, also called zero level or base
         * level. For line type series this is only used in conjunction with
         * negativeColor.
         */
        threshold?: (number|null);
        /**
         * (Highcharts, Highstock, Highmaps) A configuration object for the
         * tooltip rendering of each single series. Properties are inherited
         * from tooltip. Overridable properties are `headerFormat`,
         * `pointFormat`, `yDecimals`, `xDateFormat`, `yPrefix` and `ySuffix`.
         * Unlike other series, in a scatter plot the series.name by default
         * shows in the headerFormat and point.x and point.y in the pointFormat.
         */
        tooltip?: Highcharts.SeriesTooltipOptionsObject;
        /**
         * (Highcharts, Highstock, Gantt) When a series contains a data array
         * that is longer than this, only one dimensional arrays of numbers, or
         * two dimensional arrays with x and y values are allowed. Also, only
         * the first point is tested, and the rest are assumed to be the same
         * format. This saves expensive data checking and indexing in long
         * series. Set it to `0` disable.
         *
         * Note: In boost mode turbo threshold is forced. Only array of numbers
         * or two dimensional arrays are allowed.
         */
        turboThreshold?: number;
        /**
         * (Highcharts, Highstock) Maximum length of the arrows in the vector
         * plot. The individual arrow length is computed between 0 and this
         * value.
         */
        vectorLength?: number;
        /**
         * (Highcharts, Highstock) Set the initial visibility of the series.
         */
        visible?: boolean;
        /**
         * (Highcharts, Highstock) Defines the Axis on which the zones are
         * applied.
         */
        zoneAxis?: string;
        /**
         * (Highcharts, Highstock) An array defining zones within a series.
         * Zones can be applied to the X axis, Y axis or Z axis for bubbles,
         * according to the `zoneAxis` option. The zone definitions have to be
         * in ascending order regarding to the value.
         *
         * In styled mode, the color zones are styled with the
         * `.highcharts-zone-{n}` class, or custom classed from the `className`
         * option (view live demo).
         */
        zones?: Array<Highcharts.SeriesZonesOptionsObject>;
    }
    /**
     * (Highcharts, Highstock, Gantt) Enable or disable the initial animation
     * when a series is displayed for the `dataLabels`. The animation can also
     * be set as a configuration object. Please note that this option only
     * applies to the initial animation.
     *
     * For other animations, see chart.animation and the animation parameter
     * under the API methods. The following properties are supported:
     *
     * - `defer`: The animation delay time in milliseconds.
     */
    interface SeriesVectorDataDataLabelsAnimationOptions {
        /**
         * (Highcharts, Highstock, Gantt) The animation delay time in
         * milliseconds. Set to `0` to render the data labels immediately. As
         * `undefined` inherits defer time from the series.animation.defer.
         */
        defer?: number;
    }
}
