!/**
 * Highstock JS v11.4.2 (2024-05-22)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Sebastian Bochan
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/trendline",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function n(e,t,n,s){e.hasOwnProperty(t)||(e[t]=s.apply(null,n),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:t,module:e[t]}})))}n(t,"Stock/Indicators/TrendLine/TrendLineIndicator.js",[t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t){let{sma:n}=e.seriesTypes,{extend:s,merge:i,isArray:o}=t;class r extends n{constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let n=e.xData,s=e.yData,i=[],r=[],a=[],l=[],d=t.index,u=0,h=0,c=0,p=0,f=0;for(let e=0;e<n.length;e++)(0===e||n[e]!==n[e-1])&&f++,i.push(f);for(let e=0;e<i.length;e++)c+=i[e],p+=o(s[e])?s[e][d]:s[e];let g=c/i.length,m=p/s.length;for(let e=0;e<i.length;e++){let t=o(s[e])?s[e][d]:s[e];u+=(i[e]-g)*(t-m),h+=Math.pow(i[e]-g,2)}for(let e=0;e<i.length;e++){if(n[e]===a[a.length-1])continue;let t=n[e],s=m+u/h*(i[e]-g);r.push([t,s]),a.push(t),l.push(s)}return{xData:a,yData:l,values:r}}}return r.defaultOptions=i(n.defaultOptions,{params:{period:void 0,index:3}}),s(r.prototype,{nameBase:"Trendline",nameComponents:void 0}),e.registerSeriesType("trendline",r),r}),n(t,"masters/indicators/trendline.src.js",[t["Core/Globals.js"]],function(e){return e})});