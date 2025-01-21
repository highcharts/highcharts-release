!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/mouse-wheel-zoom
 * @requires highcharts
 *
 * Mousewheel zoom module
 *
 * (c) 2023 Askel Eirik Johansson
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/modules/mouse-wheel-zoom",["highcharts/highcharts"],function(e){return t(e)}):"object"==typeof exports?exports["highcharts/modules/mouse-wheel-zoom"]=t(e._Highcharts):e.Highcharts=t(e.Highcharts)}("undefined"==typeof window?this:window,e=>(()=>{"use strict";let t;var o={944:t=>{t.exports=e}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var s=i[e]={exports:{}};return o[e](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};r.d(s,{default:()=>z});var n=r(944),a=r.n(n);let{defined:h,isNumber:l,pick:u}=a(),d={backgroundColor:"string",borderColor:"string",borderRadius:"string",color:"string",fill:"string",fontSize:"string",labels:"string",name:"string",stroke:"string",title:"string"},{addEvent:c,isObject:f,pick:g,defined:p,merge:m}=a(),{getAssignedAxis:x}={annotationsFieldsTypes:d,getAssignedAxis:function(e){return e.filter(e=>{let t=e.axis.getExtremes(),o=t.min,i=t.max,r=u(e.axis.minPointOffset,0);return l(o)&&l(i)&&e.value>=o-r&&e.value<=i+r&&!e.axis.options.isInternal})[0]},getFieldType:function(e,t){let o=d[e],i=typeof t;return h(o)&&(i=o),({string:"text",number:"number",boolean:"checkbox"})[i]}},y=[],b={enabled:!0,sensitivity:1.1},v=e=>(f(e)||(e={enabled:e??!0}),m(b,e)),w=function(e,o,i,r,s,n,a){let h=g(a.type,e.zooming.type,""),l=[];"x"===h?l=i:"y"===h?l=r:"xy"===h&&(l=e.axes);let u=e.transform({axes:l,to:{x:s-5,y:n-5,width:10,height:10},from:{x:s-5*o,y:n-5*o,width:10*o,height:10*o},trigger:"mousewheel"});return u&&(p(t)&&clearTimeout(t),t=setTimeout(()=>{e.pointer?.drop()},400)),u};function A(){let e=v(this.zooming.mouseWheel);e.enabled&&c(this.container,"wheel",t=>{t=this.pointer?.normalize(t)||t;let{pointer:o}=this,i=o&&!o.inClass(t.target,"highcharts-no-mousewheel");if(this.isInsidePlot(t.chartX-this.plotLeft,t.chartY-this.plotTop)&&i){let i=e.sensitivity||1.1,r=t.detail||(t.deltaY||0)/120,s=x(o.getCoordinates(t).xAxis),n=x(o.getCoordinates(t).yAxis);w(this,Math.pow(i,r),s?[s.axis]:this.xAxis,n?[n.axis]:this.yAxis,t.chartX,t.chartY,e)&&t.preventDefault?.()}})}let C=a();C.MouseWheelZoom=C.MouseWheelZoom||{compose:function(e){-1===y.indexOf(e)&&(y.push(e),c(e,"afterGetContainer",A))}},C.MouseWheelZoom.compose(C.Chart);let z=a();return s.default})());