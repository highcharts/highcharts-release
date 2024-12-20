!/**
 * Highcharts JS v12.1.1 (2024-12-20)
 * @module highcharts/modules/textpath-support
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/textpath",["highcharts/highcharts"],function(t){return e(t)}):"object"==typeof exports?exports["highcharts/modules/textpath"]=e(t._Highcharts):t.Highcharts=e(t.Highcharts)}("undefined"==typeof window?this:window,t=>(()=>{"use strict";var e={944:e=>{e.exports=t}},r={};function a(t){var h=r[t];if(void 0!==h)return h.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,a),s.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var h={};a.d(h,{default:()=>g});var s=a(944),o=a.n(s);let{deg2rad:n}=o(),{addEvent:i,merge:d,uniqueKey:l,defined:f,extend:c}=o();function x(t,e){e=d(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);let r=this.renderer.url,a=this.text||this,h=a.textPath,{attributes:s,enabled:o}=e;if(t=t||h&&h.path,h&&h.undo(),t&&o){let e=i(a,"afterModifyTree",e=>{if(t&&o){let h=t.attr("id");h||t.attr("id",h=l());let o={x:0,y:0};f(s.dx)&&(o.dx=s.dx,delete s.dx),f(s.dy)&&(o.dy=s.dy,delete s.dy),a.attr(o),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let n=e.nodes.slice(0);e.nodes.length=0,e.nodes[0]={tagName:"textPath",attributes:c(s,{"text-anchor":s.textAnchor,href:`${r}#${h}`}),children:n}}});a.textPath={path:t,undo:e}}else a.attr({dx:0,dy:0}),delete a.textPath;return this.added&&(a.textCache="",this.renderer.buildText(a)),this}function u(t){let e=t.bBox,r=this.element?.querySelector("textPath");if(r){let t=[],{b:a,h}=this.renderer.fontMetrics(this.element),s=h-a,o=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),i=r.innerHTML.replace(o,"").split(/<tspan class="highcharts-br"[^>]*>/),d=i.length,l=(t,e)=>{let{x:h,y:o}=e,i=(r.getRotationOfChar(t)-90)*n,d=Math.cos(i),l=Math.sin(i);return[[h-s*d,o-s*l],[h+a*d,o+a*l]]};for(let e=0,a=0;a<d;a++){let h=i[a].length;for(let s=0;s<h;s+=5)try{let h=e+s+a,[o,n]=l(h,r.getStartPositionOfChar(h));0===s?(t.push(n),t.push(o)):(0===a&&t.unshift(n),a===d-1&&t.push(o))}catch(t){break}e+=h-1;try{let h=e+a,s=r.getEndPositionOfChar(h),[o,n]=l(h,s);t.unshift(n),t.unshift(o)}catch(t){break}}t.length&&t.push(t[0].slice()),e.polygon=t}return e}function p(t){let e=t.labelOptions,r=t.point,a=e[r.formatPrefix+"TextPath"]||e.textPath;a&&!e.useHTML&&(this.setTextPath(r.getDataLabelPath?.(this)||r.graphic,a),r.dataLabelPath&&!a.enabled&&(r.dataLabelPath=r.dataLabelPath.destroy()))}let b=o();b.TextPath={compose:function(t){i(t,"afterGetBBox",u),i(t,"beforeAddingDataLabel",p);let e=t.prototype;e.setTextPath||(e.setTextPath=x)}},b.TextPath.compose(b.SVGElement);let g=o();return h.default})());