!/**
 * Highcharts JS v12.1.2 (2024-12-21)
 * @module highcharts/modules/variable-pie
 * @requires highcharts
 *
 * Variable Pie module for Highcharts
 *
 * (c) 2010-2024 Grzegorz Blachliński
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/variable-pie",["highcharts/highcharts"],function(t){return e(t,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/variable-pie"]=e(t._Highcharts,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(t,e)=>(()=>{"use strict";var i={512:t=>{t.exports=e},944:e=>{e.exports=t}},a={};function r(t){var e=a[t];if(void 0!==e)return e.exports;var s=a[t]={exports:{}};return i[t](s,s.exports,r),s.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var s={};r.d(s,{default:()=>y});var n=r(944),o=r.n(n),h=r(512),l=r.n(h);let{pie:p}=l().seriesTypes,{arrayMax:d,arrayMin:c,clamp:u,extend:g,fireEvent:f,merge:M,pick:x}=o();class m extends p{calculateExtremes(){let t,e;let i=this.chart,a=i.plotWidth,r=i.plotHeight,s=this.options,n=2*(s.slicedOffset||0),o=this.getColumn("z"),h=Math.min(a,r)-n,l={},p=this.center||this.getCenter();for(let t of["minPointSize","maxPointSize"]){let e=s[t],i=/%$/.test(e);e=parseInt(e,10),l[t]=i?h*e/100:2*e}this.minPxSize=p[3]+l.minPointSize,this.maxPxSize=u(p[2],p[3]+l.minPointSize,l.maxPointSize),o.length&&(t=x(s.zMin,c(o.filter(this.zValEval))),e=x(s.zMax,d(o.filter(this.zValEval))),this.getRadii(t,e,this.minPxSize,this.maxPxSize))}getRadii(t,e,i,a){let r,s,n;let o=this.getColumn("z"),h=[],l="radius"!==this.options.sizeBy,p=e-t;for(let d=0;d<o.length;d++)(s=this.zValEval(o[d])?o[d]:t)<=t?n=i/2:s>=e?n=a/2:(r=p>0?(s-t)/p:.5,l&&(r=Math.sqrt(r)),n=Math.ceil(i+r*(a-i))/2),h.push(n);this.radii=h}redraw(){this.center=null,super.redraw()}getDataLabelPosition(t,e){let{center:i,options:a}=this,r=t.angle||0,s=this.radii[t.index],n=i[0]+Math.cos(r)*s,o=i[1]+Math.sin(r)*s,h=Math.min((a.slicedOffset||0)+(a.borderWidth||0),e/5);return{distance:e,natural:{x:n+Math.cos(r)*e,y:o+Math.sin(r)*e},computed:{},alignment:t.half?"right":"left",connectorPosition:{breakAt:{x:n+Math.cos(r)*h,y:o+Math.sin(r)*h},touchingSliceAt:{x:n,y:o}}}}translate(t){this.generatePoints();let e=this.options,i=e.slicedOffset,a=e.startAngle||0,r=Math.PI/180*(a-90),s=Math.PI/180*(x(e.endAngle,a+360)-90),n=s-r,o=this.points,h=e.ignoreHiddenPoint,l=0,p,d,c,u,g,M,m;this.startAngleRad=r,this.endAngleRad=s,this.calculateExtremes(),t||(this.center=t=this.getCenter());for(let e=0;e<o.length;e++)M=o[e],m=this.radii[e],p=r+l*n,(!h||M.visible)&&(l+=M.percentage/100),d=r+l*n,M.shapeType="arc",M.shapeArgs={x:t[0],y:t[1],r:m,innerR:t[3]/2,start:Math.round(1e3*p)/1e3,end:Math.round(1e3*d)/1e3},(c=(d+p)/2)>1.5*Math.PI?c-=2*Math.PI:c<-Math.PI/2&&(c+=2*Math.PI),M.slicedTranslation={translateX:Math.round(Math.cos(c)*i),translateY:Math.round(Math.sin(c)*i)},u=Math.cos(c)*t[2]/2,g=Math.sin(c)*t[2]/2,M.tooltipPos=[t[0]+.7*u,t[1]+.7*g],M.half=c<-Math.PI/2||c>Math.PI/2?1:0,M.angle=c;f(this,"afterTranslate")}zValEval(t){return!("number"!=typeof t||isNaN(t))||null}}m.defaultOptions=M(p.defaultOptions,{minPointSize:"10%",maxPointSize:"100%",zMin:void 0,zMax:void 0,sizeBy:"area",tooltip:{pointFormat:'<span style="color:{point.color}">●</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>'}}),g(m.prototype,{pointArrayMap:["y","z"],parallelArrays:["x","y","z"]}),l().registerSeriesType("variablepie",m);let y=o();return s.default})());