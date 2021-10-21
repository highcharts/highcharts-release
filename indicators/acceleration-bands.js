/*
 Highstock JS v9.3.0 (2021-10-21)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/acceleration-bands",["highcharts","highcharts/modules/stock"],function(h){a(h);a.Highcharts=h;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function h(a,k,g,h){a.hasOwnProperty(k)||(a[k]=h.apply(null,g))}a=a?a._modules:{};h(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],
a["Core/Utilities.js"]],function(a,k){var g=a.seriesTypes.sma,h=k.defined,p=k.error,t=k.merge,n;(function(a){function u(){var c=this,a=c.linesApiNames,b=c.points,f=c.options,v=c.graph,u={options:{gapSize:f.gapSize}},e=[],l=c.getTranslatedLinesNames(c.pointValKey),d=b.length,m;l.forEach(function(c,a){for(e[a]=[];d--;)m=b[d],e[a].push({x:m.x,plotX:m.plotX,plotY:m[c],isNull:!h(m[c])});d=b.length});a.forEach(function(a,b){e[b]?(c.points=e[b],f[a]?c.options=t(f[a].styles,u):p('Error: "There is no '+a+
' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),c.graph=c["graph"+a],g.prototype.drawGraph.call(c),c["graph"+a]=c.graph):p('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});c.points=b;c.options=f;c.graph=v;g.prototype.drawGraph.call(c)}function d(c){var a=[];(this.pointArrayMap||[]).forEach(function(b){b!==c&&a.push("plot"+b.charAt(0).toUpperCase()+
b.slice(1))});return a}function b(a){var c=[];(this.pointArrayMap||[]).forEach(function(b){c.push(a[b])});return c}function v(){var a=this,b=a.pointArrayMap,f=[],d;f=a.getTranslatedLinesNames();g.prototype.translate.apply(a,arguments);a.points.forEach(function(c){b.forEach(function(b,e){d=c[b];a.dataModify&&(d=a.dataModify.modifyValue(d));null!==d&&(c[f[e]]=a.yAxis.toPixels(d,!0))})})}var f=[],k=["bottomLine"],n=["top","bottom"];a.compose=function(a){if(-1===f.indexOf(a)){f.push(a);var c=a.prototype;
c.linesApiNames=c.linesApiNames||k.slice();c.pointArrayMap=c.pointArrayMap||n.slice();c.pointValKey=c.pointValKey||"top";c.drawGraph=u;c.toYData=b;c.translate=v;c.getTranslatedLinesNames=d}return a}})(n||(n={}));return n});h(a,"Stock/Indicators/ABands/ABandsIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,k,g){var h=this&&this.__extends||function(){var a=function(d,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(d,b)};return function(d,b){function g(){this.constructor=d}a(d,b);d.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}(),p=k.seriesTypes.sma,t=g.correctFloat,n=g.extend,w=g.merge;g=function(a){function d(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}h(d,a);d.prototype.getValues=function(b,d){var f=d.period,g=d.factor;
d=d.index;var h=b.xData,c=(b=b.yData)?b.length:0,k=[],n=[],p=[],u=[],v=[],e;if(!(c<f)){for(e=0;e<=c;e++){if(e<c){var l=b[e][2];var q=b[e][1];var m=g;l=t(q-l)/(t(q+l)/2)*1E3*m;k.push(b[e][1]*t(1+2*l));n.push(b[e][2]*t(1-2*l))}if(e>=f){l=h.slice(e-f,e);var r=b.slice(e-f,e);m=a.prototype.getValues.call(this,{xData:l,yData:k.slice(e-f,e)},{period:f});q=a.prototype.getValues.call(this,{xData:l,yData:n.slice(e-f,e)},{period:f});r=a.prototype.getValues.call(this,{xData:l,yData:r},{period:f,index:d});l=r.xData[0];
m=m.yData[0];q=q.yData[0];r=r.yData[0];p.push([l,m,r,q]);u.push(l);v.push([m,r,q])}}return{values:p,xData:u,yData:v}}};d.defaultOptions=w(p.defaultOptions,{params:{period:20,factor:.001,index:3},lineWidth:1,topLine:{styles:{lineWidth:1}},bottomLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}});return d}(p);n(g.prototype,{linesApiNames:["topLine","bottomLine"],nameBase:"Acceleration Bands",nameComponents:["period","factor"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"});
a.compose(g);k.registerSeriesType("abands",g);"";return g});h(a,"masters/indicators/acceleration-bands.src.js",[],function(){})});
//# sourceMappingURL=acceleration-bands.js.map