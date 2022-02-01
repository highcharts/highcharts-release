/*
 Highstock JS v9.3.3 (2022-02-01)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon",["highcharts","highcharts/modules/stock"],function(l){a(l);a.Highcharts=l;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function l(a,h,e,l){a.hasOwnProperty(h)||(a[h]=l.apply(null,e))}a=a?a._modules:{};l(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,h){var e=a.seriesTypes.sma,l=h.defined,u=h.error,m=h.merge,k;(function(h){function k(b){var c,a=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((c=e.prototype.getGraphPath.call(this,this.nextPoints))&&c.length){c[0][0]="L";a=e.prototype.getGraphPath.call(this,b);c=c.slice(0,a.length);for(var d=c.length-1;0<=d;d--)a.push(c[d])}}else a=e.prototype.getGraphPath.apply(this,arguments);return a}function n(){var b=this,c=b.linesApiNames,g=b.areaLinesNames,f=b.points,n=b.options,v=b.graph,
h={options:{gapSize:n.gapSize}},p=[],k=b.getTranslatedLinesNames(b.pointValKey),r=f.length,q;k.forEach(function(b,c){for(p[c]=[];r--;)q=f[r],p[c].push({x:q.x,plotX:q.plotX,plotY:q[b],isNull:!l(q[b])});r=f.length});if(this.userOptions.fillColor&&g.length){var t=k.indexOf(d(g[0]));t=p[t];g=1===g.length?f:p[k.indexOf(d(g[1]))];k=b.color;b.points=g;b.nextPoints=t;b.color=this.userOptions.fillColor;b.options=m(f,h);b.graph=b.area;b.fillGraph=!0;a.seriesTypes.sma.prototype.drawGraph.call(b);b.area=b.graph;
delete b.nextPoints;delete b.fillGraph;b.color=k}c.forEach(function(c,a){p[a]?(b.points=p[a],n[c]?b.options=m(n[c].styles,h):u('Error: "There is no '+c+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+c],e.prototype.drawGraph.call(b),b["graph"+c]=b.graph):u('Error: "'+c+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=f;b.options=n;b.graph=
v;e.prototype.drawGraph.call(b)}function v(b){var c=[];(this.pointArrayMap||[]).forEach(function(a){a!==b&&c.push(d(a))});return c}function d(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function f(b){var c=[];(this.pointArrayMap||[]).forEach(function(a){c.push(b[a])});return c}function g(){var b=this,c=b.pointArrayMap,a=[],d;a=b.getTranslatedLinesNames();e.prototype.translate.apply(b,arguments);b.points.forEach(function(g){c.forEach(function(c,f){d=g[c];b.dataModify&&(d=b.dataModify.modifyValue(d));
null!==d&&(g[a[f]]=b.yAxis.toPixels(d,!0))})})}var p=[],r=["bottomLine"],t=["top","bottom"],y=["top"];h.compose=function(b){if(-1===p.indexOf(b)){p.push(b);var c=b.prototype;c.linesApiNames=c.linesApiNames||r.slice();c.pointArrayMap=c.pointArrayMap||t.slice();c.pointValKey=c.pointValKey||"top";c.areaLinesNames=c.areaLinesNames||y.slice();c.drawGraph=n;c.getGraphPath=k;c.toYData=f;c.translate=g;c.getTranslatedLinesNames=v}return b}})(k||(k={}));return k});l(a,"Stock/Indicators/Aroon/AroonIndicator.js",
[a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,h,e){function l(a,e){var d=a[0],f=0,g;for(g=1;g<a.length;g++)if("max"===e&&a[g]>=d||"min"===e&&a[g]<=d)d=a[g],f=g;return f}var u=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var f in d)d.hasOwnProperty(f)&&(a[f]=d[f])};return a(e,d)};return function(e,d){function f(){this.constructor=
e}a(e,d);e.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),m=h.seriesTypes.sma,k=e.extend,x=e.merge,w=e.pick;e=function(a){function e(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}u(e,a);e.prototype.getValues=function(a,e){e=e.period;var d=a.xData,f=(a=a.yData)?a.length:0,h=[],k=[],n=[],b;for(b=e-1;b<f;b++){var c=a.slice(b-e+1,b+2);var m=l(c.map(function(a){return w(a[2],a)}),"min");c=l(c.map(function(a){return w(a[1],
a)}),"max");c=c/e*100;m=m/e*100;d[b+1]&&(h.push([d[b+1],c,m]),k.push(d[b+1]),n.push([c,m]))}return{values:h,xData:k,yData:n}};e.defaultOptions=x(m.defaultOptions,{params:{index:void 0,period:25},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Aroon Up: {point.y}<br/>Aroon Down: {point.aroonDown}<br/>'},aroonDown:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}});return e}(m);k(e.prototype,{areaLinesNames:[],
linesApiNames:["aroonDown"],nameBase:"Aroon",pointArrayMap:["y","aroonDown"],pointValKey:"y"});a.compose(e);h.registerSeriesType("aroon",e);"";return e});l(a,"masters/indicators/aroon.src.js",[],function(){})});
//# sourceMappingURL=aroon.js.map