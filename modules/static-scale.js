!/**
 * Highcharts Gantt JS v12.1.1 (2024-12-20)
 * @module highcharts/modules/static-scale
 * @requires highcharts
 *
 * StaticScale
 *
 * (c) 2016-2024 Torstein Honsi, Lars A. V. Cabrera
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/static-scale",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/static-scale"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("undefined"==typeof window?this:window,t=>(()=>{"use strict";var e={944:e=>{e.exports=t}},i={};function r(t){var o=i[t];if(void 0!==o)return o.exports;var a=i[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};r.d(o,{default:()=>f});var a=r(944),s=r.n(a);let{addEvent:h,defined:n,isNumber:l,pick:c}=s();function d(){let t=this.chart.options.chart;!this.horiz&&l(this.options.staticScale)&&(!t.height||t.scrollablePlotArea&&t.scrollablePlotArea.minHeight)&&(this.staticScale=this.options.staticScale)}function p(){if("adjustHeight"!==this.redrawTrigger){for(let t of this.axes||[]){let e=t.chart,i=!!e.initiatedScale&&e.options.animation,r=t.options.staticScale;if(t.staticScale&&n(t.min)){let o=c(t.brokenAxis&&t.brokenAxis.unitLength,t.max+t.tickInterval-t.min)*r,a=(o=Math.max(o,r))-e.plotHeight;!e.scrollablePixelsY&&Math.abs(a)>=1&&(e.plotHeight=o,e.redrawTrigger="adjustHeight",e.setSize(void 0,e.chartHeight+a,i)),t.series.forEach(function(t){let i=t.sharedClipKey&&e.sharedClips[t.sharedClipKey];i&&i.attr(e.inverted?{width:e.plotHeight}:{height:e.plotHeight})})}}this.initiatedScale=!0}this.redrawTrigger=null}let u=s();({compose:function(t,e){let i=e.prototype;i.adjustHeight||(h(t,"afterSetOptions",d),i.adjustHeight=p,h(e,"render",i.adjustHeight))}}).compose(u.Axis,u.Chart);let f=s();return o.default})());