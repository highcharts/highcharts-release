!/**
 * Highstock JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/price-indicator
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Advanced Highcharts Stock tools
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(s,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(s._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/price-indicator",["highcharts/highcharts"],function(s){return e(s)}):"object"==typeof exports?exports["highcharts/modules/price-indicator"]=e(s._Highcharts):s.Highcharts=e(s.Highcharts)}("undefined"==typeof window?this:window,s=>(()=>{"use strict";var e={944:e=>{e.exports=s}},i={};function t(s){var r=i[s];if(void 0!==r)return r.exports;var o=i[s]={exports:{}};return e[s](o,o.exports,t),o.exports}t.n=s=>{var e=s&&s.__esModule?()=>s.default:()=>s;return t.d(e,{a:e}),e},t.d=(s,e)=>{for(var i in e)t.o(e,i)&&!t.o(s,i)&&Object.defineProperty(s,i,{enumerable:!0,get:e[i]})},t.o=(s,e)=>Object.prototype.hasOwnProperty.call(s,e);var r={};t.d(r,{default:()=>p});var o=t(944),a=t.n(o);let{composed:c}=a(),{addEvent:l,merge:h,pushUnique:n}=a();function d(){let s=this.options,e=s.lastVisiblePrice,i=s.lastPrice;if((e||i)&&"highcharts-navigator-series"!==s.id){let t=this.xAxis,r=this.yAxis,o=r.crosshair,a=r.cross,c=r.crossLabel,l=this.points,n=l.length,d=this.dataTable.rowCount,p=this.getColumn("x")[d-1],b=this.getColumn("y")[d-1]??this.getColumn("close")[d-1];if(i&&i.enabled&&(r.crosshair=r.options.crosshair=s.lastPrice,!this.chart.styledMode&&r.crosshair&&r.options.crosshair&&s.lastPrice&&(r.crosshair.color=r.options.crosshair.color=s.lastPrice.color||this.color),r.cross=this.lastPrice,this.lastPriceLabel&&this.lastPriceLabel.destroy(),delete r.crossLabel,r.drawCrosshair(null,{x:p,y:b,plotX:t.toPixels(p,!0),plotY:r.toPixels(b,!0)}),this.yAxis.cross&&(this.lastPrice=this.yAxis.cross,this.lastPrice.addClass("highcharts-color-"+this.colorIndex),this.lastPrice.y=b),this.lastPriceLabel=r.crossLabel),e&&e.enabled&&n>0){r.crosshair=r.options.crosshair=h({color:"transparent"},s.lastVisiblePrice),r.cross=this.lastVisiblePrice;let e=l[n-1].isInside?l[n-1]:l[n-2];this.lastVisiblePriceLabel&&this.lastVisiblePriceLabel.destroy(),delete r.crossLabel,r.drawCrosshair(null,e),r.cross&&(this.lastVisiblePrice=r.cross,e&&"number"==typeof e.y&&(this.lastVisiblePrice.y=e.y)),this.lastVisiblePriceLabel=r.crossLabel}r.crosshair=r.options.crosshair=o,r.cross=a,r.crossLabel=c}}({compose:function(s){n(c,"PriceIndication")&&l(s,"afterRender",d)}}).compose(a().Series);let p=a();return r.default})());