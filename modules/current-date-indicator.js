!/**
 * Highcharts Gantt JS v11.4.2 (2024-05-22)
 *
 * CurrentDateIndicator
 *
 * (c) 2010-2024 Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/current-date-indicator",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function n(t,e,n,o){t.hasOwnProperty(e)||(t[e]=o.apply(null,n),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}n(e,"Extensions/CurrentDateIndication.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(t,e){let{composed:n}=t,{addEvent:o,merge:i,pushUnique:a,wrap:r}=e,s={color:"#ccd3ff",width:2,label:{format:"%a, %b %d %Y, %H:%M",formatter:function(t,e){return this.axis.chart.time.dateFormat(e||"",t)},rotation:0,style:{fontSize:"0.7em"}}};function l(){let t=this.options,e=t.currentDateIndicator;if(e){let n="object"==typeof e?i(s,e):i(s);n.value=Date.now(),n.className="highcharts-current-date-indicator",t.plotLines||(t.plotLines=[]),t.plotLines.push(n)}}function c(){this.label&&this.label.attr({text:this.getLabelText(this.options.label)})}function u(t,e){let n=this.options;return n&&n.className&&-1!==n.className.indexOf("highcharts-current-date-indicator")&&n.label&&"function"==typeof n.label.formatter?(n.value=Date.now(),n.label.formatter.call(this,n.value,n.label.format)):t.call(this,e)}return{compose:function(t,e){a(n,"CurrentDateIndication")&&(o(t,"afterSetOptions",l),o(e,"render",c),r(e.prototype,"getLabelText",u))}}}),n(e,"masters/modules/current-date-indicator.src.js",[e["Core/Globals.js"],e["Extensions/CurrentDateIndication.js"]],function(t,e){return e.compose(t.Axis,t.PlotLineOrBand),t})});