!/**
 * Highcharts JS v12.1.1 (2024-12-20)
 * @module highcharts/modules/dotplot
 * @requires highcharts
 *
 * Dot plot series type for Highcharts
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/dotplot",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/dotplot"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512:e=>{e.exports=t},944:t=>{t.exports=e}},s={};function i(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};i.d(o,{default:()=>y});var a=i(944),h=i.n(a),d=i(512),n=i.n(d);let{column:p}=n().seriesTypes,{extend:l,isNumber:c,merge:g,pick:f}=h();class u extends p{drawPoints(){let e=this.options,t=this.chart.renderer,r=e.marker,s=this.points.reduce((e,t)=>e+Math.abs(t.y||0),0),i=this.points.reduce((e,t)=>e+(t.shapeArgs?.height||0),0),o=e.itemPadding||0,a=this.points[0]?.shapeArgs?.width||0,h=e.slotsPerBar,d=a;if(!c(h))for(h=1;h<s&&!(s/h<i/d*1.2);)d=a/++h;let n=i*h/s;for(let e of this.points){let s=e.marker||{},i=s.symbol||r.symbol,a=f(s.radius,r.radius),p="rect"!==i?n:d,c=e.shapeArgs||{},g=(c.x||0)+((c.width||0)-h*p)/2,u=Math.abs(e.y??0),y=c.y||0,m=c.height||0,v,b=g,x=e.negative?y:y+m-n,A=0;e.graphics=v=e.graphics||[];let w=e.pointAttr?e.pointAttr[e.selected?"selected":""]||this.pointAttr[""]:this.pointAttribs(e,e.selected&&"select");if(delete w.r,this.chart.styledMode&&(delete w.stroke,delete w["stroke-width"]),"number"==typeof e.y){e.graphic||(e.graphic=t.g("point").add(this.group));for(let r=0;r<u;r++){let s={x:b+p*o,y:x+n*o,width:p*(1-2*o),height:n*(1-2*o),r:a},d=v[r];d?d.animate(s):d=t.symbol(i).attr(l(s,w)).add(e.graphic),d.isActive=!0,v[r]=d,b+=p,++A>=h&&(A=0,b=g,x=e.negative?x+n:x-n)}}let H=-1;for(let e of v)++H,e&&(e.isActive?e.isActive=!1:(e.destroy(),v.splice(H,1)))}}}u.defaultOptions=g(p.defaultOptions,{itemPadding:.1,marker:{symbol:"circle",states:{hover:{},select:{}}},slotsPerBar:void 0}),l(u.prototype,{markerAttribs:void 0}),n().registerSeriesType("dotplot",u);let y=h();return o.default})());