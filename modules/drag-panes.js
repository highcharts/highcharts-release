!/**
 * Highstock JS v12.1.1 (2024-12-20)
 * @module highcharts/modules/drag-panes
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Drag-panes module
 *
 * (c) 2010-2024 Highsoft AS
 * Author: Kacper Madej
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/drag-panes",["highcharts/highcharts"],function(e){return t(e)}):"object"==typeof exports?exports["highcharts/modules/drag-panes"]=t(e._Highcharts):e.Highcharts=t(e.Highcharts)}("undefined"==typeof window?this:window,e=>(()=>{"use strict";var t={944:t=>{t.exports=e}},s={};function i(e){var o=s[e];if(void 0!==o)return o.exports;var r=s[e]={exports:{}};return t[e](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};i.d(o,{default:()=>b});var r=i(944),n=i.n(r);let{addEvent:h,clamp:a,isNumber:l,relativeLength:d}=n();class c{constructor(e){this.init(e)}init(e,t){this.axis=e,this.options=e.options.resize||{},this.render(),t||this.addMouseEvents()}render(){let e=this.axis,t=e.chart,s=this.options,i=s.x||0,o=s.y,r=a(e.top+e.height+o,t.plotTop,t.plotTop+t.plotHeight),n={};t.styledMode||(n={cursor:s.cursor,stroke:s.lineColor,"stroke-width":s.lineWidth,dashstyle:s.lineDashStyle}),this.lastPos=r-o,this.controlLine||(this.controlLine=t.renderer.path().addClass("highcharts-axis-resizer")),this.controlLine.add(e.axisGroup);let h=t.styledMode?this.controlLine.strokeWidth():s.lineWidth;n.d=t.renderer.crispLine([["M",e.left+i,r],["L",e.left+e.width+i,r]],h),this.controlLine.attr(n)}addMouseEvents(){let e,t,s;let i=this,o=i.controlLine.element,r=i.axis.chart.container,n=[];i.mouseMoveHandler=e=e=>i.onMouseMove(e),i.mouseUpHandler=t=e=>i.onMouseUp(e),i.mouseDownHandler=s=()=>i.onMouseDown(),n.push(h(r,"mousemove",e),h(r.ownerDocument,"mouseup",t),h(o,"mousedown",s),h(r,"touchmove",e),h(r.ownerDocument,"touchend",t),h(o,"touchstart",s)),i.eventsToUnbind=n}onMouseMove(e){if(!e.touches||0!==e.touches[0].pageX){let t=this.axis.chart.pointer;this.grabbed&&t&&(this.hasDragged=!0,this.updateAxes(t.normalize(e).chartY-(this.options.y||0)))}}onMouseUp(e){let t=this.axis.chart.pointer;this.hasDragged&&t&&this.updateAxes(t.normalize(e).chartY-(this.options.y||0)),this.grabbed=this.hasDragged=this.axis.chart.activeResizer=void 0}onMouseDown(){this.axis.chart.pointer?.reset(!1,0),this.grabbed=this.axis.chart.activeResizer=!0}updateAxes(e){let t=this.axis.chart,s=this.options.controlledAxis,i=0===s.next.length?[t.yAxis.indexOf(this.axis)+1]:s.next,o=[this.axis].concat(s.prev),r=[],n=t.plotTop,h=t.plotHeight,c=n+h,p=e=>100*e/h+"%",u=(e,t,s)=>Math.round(a(e,t,s));e=a(e,n,c);let f=!1,x=e-this.lastPos;if(x*x<1)return;let g=!0;for(let s of[o,i])for(let o of s){let a,y;let v=l(o)?t.yAxis[o]:g?o:t.get(o),m=v&&v.options,z={};if(!m||m.isInternal){g=!1;continue}y=v.top;let b=Math.round(d(m.minLength||NaN,h)),M=Math.round(d(m.maxLength||NaN,h));if(g||s!==i)(a=u(e-y,b,M))===M&&(f=!0),e=y+a,r.push({axis:v,options:{height:p(a)}});else{if(x=e-this.lastPos,a=u(v.len-x,b,M),(y=v.top+x)+a>c){let t=c-a-y;e+=t,y+=t}y<n&&(y=n)+a>c&&(a=h),a===b&&(f=!0),r.push({axis:v,options:{top:p(y-n),height:p(a)}})}g=!1,z.height=a}if(!f){for(let e of r)e.axis.update(e.options,!1);t.redraw(!1)}}destroy(){let e=this.axis;for(let t of(delete e.resizer,this.eventsToUnbind&&this.eventsToUnbind.forEach(e=>e()),this.controlLine.destroy(),Object.keys(this)))this[t]=null}}c.resizerOptions={minLength:"10%",maxLength:"100%",resize:{controlledAxis:{next:[],prev:[]},enabled:!1,cursor:"ns-resize",lineColor:"#cccccc",lineDashStyle:"Solid",lineWidth:4,x:0,y:0}};let{defaultOptions:p}=n(),{addEvent:u,merge:f,wrap:x}=n();function g(){let e=this.resizer,t=this.options.resize;if(t){let s=!1!==t.enabled;e?s?e.init(this,!0):e.destroy():s&&(this.resizer=new c(this))}}function y(e){!e.keepEvents&&this.resizer&&this.resizer.destroy()}function v(e){this.chart.activeResizer||e.apply(this,[].slice.call(arguments,1))}function m(e){this.chart.activeResizer||e.apply(this,[].slice.call(arguments,1))}let z=n();z.AxisResizer=c,({compose:function(e,t){e.keepProps.includes("resizer")||(f(!0,p.yAxis,c.resizerOptions),e.keepProps.push("resizer"),u(e,"afterRender",g),u(e,"destroy",y),x(t.prototype,"runPointActions",m),x(t.prototype,"drag",v))}}).compose(z.Axis,z.Pointer);let b=n();return o.default})());