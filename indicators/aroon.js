/*
 Highstock JS v9.0.0 (2021-02-02)

 Indicator series type for Highstock

 (c) 2010-2019 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon",["highcharts","highcharts/modules/stock"],function(k){a(k);a.Highcharts=k;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function k(a,f,e,t){a.hasOwnProperty(f)||(a[f]=t.apply(null,e))}a=a?a._modules:{};k(a,"Mixins/MultipleLines.js",[a["Core/Globals.js"],a["Core/Utilities.js"]],function(a,f){var e=f.defined,
t=f.error,k=f.merge,l=a.seriesTypes.sma;return{pointArrayMap:["top","bottom"],pointValKey:"top",linesApiNames:["bottomLine"],getTranslatedLinesNames:function(m){var a=[];(this.pointArrayMap||[]).forEach(function(d){d!==m&&a.push("plot"+d.charAt(0).toUpperCase()+d.slice(1))});return a},toYData:function(m){var a=[];(this.pointArrayMap||[]).forEach(function(d){a.push(m[d])});return a},translate:function(){var a=this,e=a.pointArrayMap,d=[],g;d=a.getTranslatedLinesNames();l.prototype.translate.apply(a,
arguments);a.points.forEach(function(m){e.forEach(function(b,q){g=m[b];null!==g&&(m[d[q]]=a.yAxis.toPixels(g,!0))})})},drawGraph:function(){var a=this,f=a.linesApiNames,d=a.points,g=d.length,c=a.options,b=a.graph,q={options:{gapSize:c.gapSize}},h=[],r;a.getTranslatedLinesNames(a.pointValKey).forEach(function(a,b){for(h[b]=[];g--;)r=d[g],h[b].push({x:r.x,plotX:r.plotX,plotY:r[a],isNull:!e(r[a])});g=d.length});f.forEach(function(b,g){h[g]?(a.points=h[g],c[b]?a.options=k(c[b].styles,q):t('Error: "There is no '+
b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+b],l.prototype.drawGraph.call(a),a["graph"+b]=a.graph):t('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=d;a.options=c;a.graph=b;l.prototype.drawGraph.call(a)}}});k(a,"Stock/Indicators/Aroon/AroonIndicator.js",[a["Mixins/MultipleLines.js"],a["Core/Series/SeriesRegistry.js"],
a["Core/Utilities.js"]],function(a,f,e){function k(a,c){var b=a[0],q=0,h;for(h=1;h<a.length;h++)if("max"===c&&a[h]>=b||"min"===c&&a[h]<=b)b=a[h],q=h;return q}var u=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(c,b)};return function(c,b){function d(){this.constructor=c}a(c,b);c.prototype=null===b?Object.create(b):(d.prototype=b.prototype,
new d)}}(),l=f.seriesTypes.sma,m=e.extend,v=e.merge,d=e.pick;e=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;return b}u(c,a);c.prototype.getValues=function(a,c){c=c.period;var b=a.xData,e=(a=a.yData)?a.length:0,f=[],g=[],m=[],n;for(n=c-1;n<e;n++){var p=a.slice(n-c+1,n+2);var l=k(p.map(function(a){return d(a[2],a)}),"min");p=k(p.map(function(a){return d(a[1],a)}),"max");p=p/c*100;l=l/c*100;b[n+1]&&(f.push([b[n+1],p,l]),g.push(b[n+
1]),m.push([p,l]))}return{values:f,xData:g,yData:m}};c.defaultOptions=v(l.defaultOptions,{params:{period:25},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Aroon Up: {point.y}<br/>Aroon Down: {point.aroonDown}<br/>'},aroonDown:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}});return c}(l);m(e.prototype,{linesApiNames:["aroonDown"],nameBase:"Aroon",pointArrayMap:["y","aroonDown"],pointValKey:"y",drawGraph:a.drawGraph,
getTranslatedLinesNames:a.getTranslatedLinesNames,toYData:a.toYData,translate:a.translate});f.registerSeriesType("aroon",e);"";return e});k(a,"masters/indicators/aroon.src.js",[],function(){})});
//# sourceMappingURL=aroon.js.map