!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/broken-axis
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.StackItem):"function"==typeof define&&define.amd?define("highcharts/modules/broken-axis",["highcharts/highcharts"],function(t){return e(t,t.StackItem)}):"object"==typeof exports?exports["highcharts/modules/broken-axis"]=e(t._Highcharts,t._Highcharts.StackItem):t.Highcharts=e(t.Highcharts,t.Highcharts.StackItem)}("undefined"==typeof window?this:window,(t,e)=>(()=>{"use strict";var i,s={184:t=>{t.exports=e},944:e=>{e.exports=t}},r={};function n(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return s[t](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};n.d(o,{default:()=>v});var a=n(944),f=n.n(a),l=n(184),h=n.n(l);let{addEvent:c,find:u,fireEvent:k,isArray:p,isNumber:x,pick:m}=f();!function(t){function e(){void 0!==this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)}function i(){this.brokenAxis?.hasBreaks&&(this.options.ordinal=!1)}function s(){let t=this.brokenAxis;if(t?.hasBreaks){let e=this.tickPositions,i=this.tickPositions.info,s=[];for(let i=0;i<e.length;i++)t.isInAnyBreak(e[i])||s.push(e[i]);this.tickPositions=s,this.tickPositions.info=i}}function r(){this.brokenAxis||(this.brokenAxis=new l(this))}function n(){let{isDirty:t,options:{connectNulls:e},points:i,xAxis:s,yAxis:r}=this;if(t){let t=i.length;for(;t--;){let n=i[t],o=!(null===n.y&&!1===e)&&(s?.brokenAxis?.isInAnyBreak(n.x,!0)||r?.brokenAxis?.isInAnyBreak(n.y,!0));n.visible=!o&&!1!==n.options.visible}}}function o(){this.drawBreaks(this.xAxis,["x"]),this.drawBreaks(this.yAxis,m(this.pointArrayMap,["y"]))}function a(t,e){let i,s,r;let n=this,o=n.points;if(t?.brokenAxis?.hasBreaks){let a=t.brokenAxis;e.forEach(function(e){i=a?.breakArray||[],s=t.isXAxis?t.min:m(n.options.threshold,t.min);let f=t?.options?.breaks?.filter(function(t){let e=!0;for(let s=0;s<i.length;s++){let r=i[s];if(r.from===t.from&&r.to===t.to){e=!1;break}}return e});o.forEach(function(n){r=m(n["stack"+e.toUpperCase()],n[e]),i.forEach(function(e){if(x(s)&&x(r)){let i="";s<e.from&&r>e.to||s>e.from&&r<e.from?i="pointBreak":(s<e.from&&r>e.from&&r<e.to||s>e.from&&r>e.to&&r<e.from)&&(i="pointInBreak"),i&&k(t,i,{point:n,brk:e})}}),f?.forEach(function(e){k(t,"pointOutsideOfBreak",{point:n,brk:e})})})})}}function f(){let t=this.currentDataGrouping,e=t?.gapSize,i=this.points.slice(),s=this.yAxis,r=this.options.gapSize,n=i.length-1;if(r&&n>0){let t,o;for("value"!==this.options.gapUnit&&(r*=this.basePointRange),e&&e>r&&e>=this.basePointRange&&(r=e);n--;)if(o&&!1!==o.visible||(o=i[n+1]),t=i[n],!1!==o.visible&&!1!==t.visible){if(o.x-t.x>r){let e=(t.x+o.x)/2;i.splice(n+1,0,{isNull:!0,x:e}),s.stacking&&this.options.stacking&&((s.stacking.stacks[this.stackKey][e]=new(h())(s,s.options.stackLabels,!1,e,this.stack)).total=0)}o=t}}return this.getGraphPath(i)}t.compose=function(t,l){if(!t.keepProps.includes("brokenAxis")){t.keepProps.push("brokenAxis"),c(t,"init",r),c(t,"afterInit",e),c(t,"afterSetTickPositions",s),c(t,"afterSetOptions",i);let h=l.prototype;h.drawBreaks=a,h.gappedPath=f,c(l,"afterGeneratePoints",n),c(l,"afterRender",o)}return t};class l{static isInBreak(t,e){let i=t.repeat||1/0,s=t.from,r=t.to-t.from,n=e>=s?(e-s)%i:i-(s-e)%i;return t.inclusive?n<=r:n<r&&0!==n}static lin2Val(t){let e=this.brokenAxis,i=e?.breakArray;if(!i||!x(t))return t;let s=t,r,n;for(n=0;n<i.length&&!((r=i[n]).from>=s);n++)r.to<s?s+=r.len:l.isInBreak(r,s)&&(s+=r.len);return s}static val2Lin(t){let e=this.brokenAxis,i=e?.breakArray;if(!i||!x(t))return t;let s=t,r,n;for(n=0;n<i.length;n++)if((r=i[n]).to<=t)s-=r.len;else if(r.from>=t)break;else if(l.isInBreak(r,t)){s-=t-r.from;break}return s}constructor(t){this.hasBreaks=!1,this.axis=t}findBreakAt(t,e){return u(e,function(e){return e.from<t&&t<e.to})}isInAnyBreak(t,e){let i=this.axis,s=i.options.breaks||[],r=s.length,n,o,a;if(r&&x(t)){for(;r--;)l.isInBreak(s[r],t)&&(n=!0,o||(o=m(s[r].showPoints,!i.isXAxis)));a=n&&e?n&&!o:n}return a}setBreaks(t,e){let i=this,s=i.axis,r=s.chart.time,n=p(t)&&!!t.length&&!!Object.keys(t[0]).length;s.isDirty=i.hasBreaks!==n,i.hasBreaks=n,t?.forEach(t=>{t.from=r.parse(t.from)||0,t.to=r.parse(t.to)||0}),t!==s.options.breaks&&(s.options.breaks=s.userOptions.breaks=t),s.forceRedraw=!0,s.series.forEach(function(t){t.isDirty=!0}),n||s.val2lin!==l.val2Lin||(delete s.val2lin,delete s.lin2val),n&&(s.userOptions.ordinal=!1,s.lin2val=l.lin2Val,s.val2lin=l.val2Lin,s.setExtremes=function(t,e,r,n,o){if(i.hasBreaks){let s;let r=this.options.breaks||[];for(;s=i.findBreakAt(t,r);)t=s.to;for(;s=i.findBreakAt(e,r);)e=s.from;e<t&&(e=t)}s.constructor.prototype.setExtremes.call(this,t,e,r,n,o)},s.setAxisTranslation=function(){if(s.constructor.prototype.setAxisTranslation.call(this),i.unitLength=void 0,i.hasBreaks){let t=s.options.breaks||[],e=[],r=[],n=m(s.pointRangePadding,0),o=0,a,f,h=s.userMin||s.min,c=s.userMax||s.max,u,p;t.forEach(function(t){f=t.repeat||1/0,x(h)&&x(c)&&(l.isInBreak(t,h)&&(h+=t.to%f-h%f),l.isInBreak(t,c)&&(c-=c%f-t.from%f))}),t.forEach(function(t){if(u=t.from,f=t.repeat||1/0,x(h)&&x(c)){for(;u-f>h;)u-=f;for(;u<h;)u+=f;for(p=u;p<c;p+=f)e.push({value:p,move:"in"}),e.push({value:p+t.to-t.from,move:"out",size:t.breakSize})}}),e.sort(function(t,e){return t.value===e.value?("in"===t.move?0:1)-("in"===e.move?0:1):t.value-e.value}),a=0,u=h,e.forEach(function(t){1===(a+="in"===t.move?1:-1)&&"in"===t.move&&(u=t.value),0===a&&x(u)&&(r.push({from:u,to:t.value,len:t.value-u-(t.size||0)}),o+=t.value-u-(t.size||0))}),i.breakArray=r,x(h)&&x(c)&&x(s.min)&&(i.unitLength=c-h-o+n,k(s,"afterBreaks"),s.staticScale?s.transA=s.staticScale:i.unitLength&&(s.transA*=(c-s.min+n)/i.unitLength),n&&(s.minPixelPadding=s.transA*(s.minPointOffset||0)),s.min=h,s.max=c)}}),m(e,!0)&&s.chart.redraw()}}t.Additions=l}(i||(i={}));let b=i,d=f();d.BrokenAxis=d.BrokenAxis||b,d.BrokenAxis.compose(d.Axis,d.Series);let v=f();return o.default})());