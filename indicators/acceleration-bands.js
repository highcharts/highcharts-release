!/**
 * Highstock JS v12.1.2-modified (2025-01-21)
 * @module highcharts/indicators/acceleration-bands
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Daniel Studencki
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/acceleration-bands",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/acceleration-bands"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var a,i={512:e=>{e.exports=t},944:t=>{t.exports=e}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={exports:{}};return i[e](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};o.d(s,{default:()=>b});var n=o(944),p=o.n(n),l=o(512),h=o.n(l);let{sma:{prototype:c}}=h().seriesTypes,{defined:d,error:u,merge:f}=p();!function(e){let t=["bottomLine"],a=["top","bottom"],i=["top"];function r(e){return"plot"+e.charAt(0).toUpperCase()+e.slice(1)}function o(e,t){let a=[];return(e.pointArrayMap||[]).forEach(e=>{e!==t&&a.push(r(e))}),a}function s(){let e=this,t=e.pointValKey,a=e.linesApiNames,i=e.areaLinesNames,s=e.points,n=e.options,p=e.graph,l={options:{gapSize:n.gapSize}},h=[],y=o(e,t),g=s.length,m;if(y.forEach((e,t)=>{for(h[t]=[];g--;)m=s[g],h[t].push({x:m.x,plotX:m.plotX,plotY:m[e],isNull:!d(m[e])});g=s.length}),e.userOptions.fillColor&&i.length){let t=h[y.indexOf(r(i[0]))],a=1===i.length?s:h[y.indexOf(r(i[1]))],o=e.color;e.points=a,e.nextPoints=t,e.color=e.userOptions.fillColor,e.options=f(s,l),e.graph=e.area,e.fillGraph=!0,c.drawGraph.call(e),e.area=e.graph,delete e.nextPoints,delete e.fillGraph,e.color=o}a.forEach((t,a)=>{h[a]?(e.points=h[a],n[t]?e.options=f(n[t].styles,l):u('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),e.graph=e["graph"+t],c.drawGraph.call(e),e["graph"+t]=e.graph):u('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),e.points=s,e.options=n,e.graph=p,c.drawGraph.call(e)}function n(e){let t,a=[],i=[];if(e=e||this.points,this.fillGraph&&this.nextPoints){if((t=c.getGraphPath.call(this,this.nextPoints))&&t.length){t[0][0]="L",a=c.getGraphPath.call(this,e),i=t.slice(0,a.length);for(let e=i.length-1;e>=0;e--)a.push(i[e])}}else a=c.getGraphPath.apply(this,arguments);return a}function p(e){let t=[];return(this.pointArrayMap||[]).forEach(a=>{t.push(e[a])}),t}function l(){let e=this.pointArrayMap,t=[],a;t=o(this),c.translate.apply(this,arguments),this.points.forEach(i=>{e.forEach((e,r)=>{a=i[e],this.dataModify&&(a=this.dataModify.modifyValue(a)),null!==a&&(i[t[r]]=this.yAxis.toPixels(a,!0))})})}e.compose=function(e){let r=e.prototype;return r.linesApiNames=r.linesApiNames||t.slice(),r.pointArrayMap=r.pointArrayMap||a.slice(),r.pointValKey=r.pointValKey||"top",r.areaLinesNames=r.areaLinesNames||i.slice(),r.drawGraph=s,r.getGraphPath=n,r.toYData=p,r.translate=l,e}}(a||(a={}));let y=a,{sma:g}=h().seriesTypes,{correctFloat:m,extend:x,merge:A}=p();class D extends g{getValues(e,t){let a,i,r,o,s,n,p,l,h,c,d;let u=t.period,f=t.factor,y=t.index,g=e.xData,x=e.yData,A=x?x.length:0,D=[],b=[],v=[],G=[],M=[];if(!(A<u)){for(d=0;d<=A;d++){if(d<A){var N,O;N=x[d][2],s=m((O=x[d][1])-N)/(m(O+N)/2)*1e3*f,D.push(x[d][1]*m(1+2*s)),b.push(x[d][2]*m(1-2*s))}d>=u&&(h=g.slice(d-u,d),c=x.slice(d-u,d),p=super.getValues.call(this,{xData:h,yData:D.slice(d-u,d)},{period:u}),l=super.getValues.call(this,{xData:h,yData:b.slice(d-u,d)},{period:u}),o=(n=super.getValues.call(this,{xData:h,yData:c},{period:u,index:y})).xData[0],i=p.yData[0],r=l.yData[0],a=n.yData[0],v.push([o,i,a,r]),G.push(o),M.push([i,a,r]))}return{values:v,xData:G,yData:M}}}}D.defaultOptions=A(g.defaultOptions,{params:{period:20,factor:.001,index:3},lineWidth:1,topLine:{styles:{lineWidth:1}},bottomLine:{styles:{lineWidth:1}},dataGrouping:{approximation:"averages"}}),x(D.prototype,{areaLinesNames:["top","bottom"],linesApiNames:["topLine","bottomLine"],nameBase:"Acceleration Bands",nameComponents:["period","factor"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"}),y.compose(D),h().registerSeriesType("abands",D);let b=p();return s.default})());