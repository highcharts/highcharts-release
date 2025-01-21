!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/geoheatmap
 * @requires highcharts
 *
 * (c) 2009-2024
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/geoheatmap",["highcharts/highcharts"],function(t){return e(t,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/geoheatmap"]=e(t._Highcharts,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(t,e)=>(()=>{"use strict";var i={512:t=>{t.exports=e},944:e=>{e.exports=t}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return i[t](r,r.exports,a),r.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};a.d(r,{default:()=>R});var s=a(944),n=a.n(s),h=a(512),l=a.n(h);let{map:{prototype:{pointClass:p}}}=l().seriesTypes,{isNumber:d}=n(),g=class extends p{applyOptions(t,e){let i=super.applyOptions.call(this,t,e),{lat:o,lon:a}=i.options;if(d(a)&&d(o)){let{colsize:t=1,rowsize:e=1}=this.series.options,r=a-t/2,s=o-e/2;i.geometry=i.options.geometry={type:"Polygon",coordinates:[[[r,s],[r+t,s],[r+t,s+e],[r,s+e],[r,s]]]}}return i}},{doc:c}=n(),{defined:u,pick:y}=n(),{animObject:m,stop:f}=n(),{noop:x}=n(),{colorFromPoint:b,getContext:w}={colorFromPoint:function(t,e){let i=e.series.colorAxis;if(i){let o=i.toColor(t||0,e).split(")")[0].split("(")[1].split(",").map(t=>y(parseFloat(t),parseInt(t,10)));return o[3]=255*y(o[3],1),u(t)&&e.visible||(o[3]=0),o}return[0,0,0,0]},getContext:function(t){let{canvas:e,context:i}=t;return e&&i?(i.clearRect(0,0,e.width,e.height),i):(t.canvas=c.createElement("canvas"),t.context=t.canvas.getContext("2d",{willReadFrequently:!0})||void 0,t.context)}},{seriesTypes:{map:v}}=l(),{addEvent:D,extend:C,isNumber:P,isObject:I,merge:j,pick:T}=n();function L(t){return t-360*Math.floor((t+180)/360)}class O extends v{constructor(){super(...arguments),this.isDirtyCanvas=!0}update(){this.options=j(this.options,arguments[0]),this.getInterpolation().enabled&&(this.isDirtyCanvas=!0,this.points.forEach(t=>{t.graphic&&(t.graphic.destroy(),delete t.graphic)})),super.update.apply(this,arguments)}translate(){(!this.getInterpolation().enabled||!this.image||this.isDirty||this.isDirtyData)&&super.translate.apply(this,arguments)}getInterpolation(){return I(this.options.interpolation)?this.options.interpolation:{blur:1,enabled:this.options.interpolation}}drawPoints(){let t=this.chart.mapView,e=this.options;if(this.getInterpolation().enabled&&t&&this.bounds){let i=this.context||w(this),{canvas:o,colorAxis:a,image:r,chart:s,points:n}=this,[h,l]=[T(e.colsize,1),T(e.rowsize,1)],p=t.projectedUnitsToPixels({x:this.bounds.x1,y:this.bounds.y2}),d=t.projectedUnitsToPixels({x:this.bounds.x2,y:this.bounds.y1});if(o&&i&&a&&p&&d){let e={x:p.x,y:p.y,width:d.x-p.x,height:d.y-p.y};if(this.isDirtyCanvas||this.isDirtyData||"Orthographic"===t.projection.options.name){this.isDirtyCanvas=!0;let a=o.width=~~(360/h)+1,r=o.height=~~(180/l)+1,s=new Uint8ClampedArray(a*r*4);this.directTouch=!1;for(let t=0;t<n.length;t++){let e=n[t],i=new Uint8ClampedArray(b(e.value,e)),{lon:o,lat:p}=e.options;P(o)&&P(p)&&s.set(i,4*Math.ceil(a*(r-1-(p+90)/l)+(o+180)/h))}let p=this.getInterpolation().blur,d=0===p?1:11*p,g=~~e.width,c=~~e.height,u=new ImageData(s,a,r);o.width=~~(a*d),o.height=~~(r*d),i.putImageData(u,0,0),i.globalCompositeOperation="copy",i.drawImage(o,0,0,u.width,u.height,0,0,o.width,o.height);let y=i.getImageData(0,0,o.width,o.height),m=new ImageData(this.getProjectedImageData(t,g,c,y,o,e.x,e.y),g,c);i.globalCompositeOperation="copy",o.width=g,o.height=c,i.putImageData(m,0,0)}if(r){if(s.renderer.globalAnimation&&s.hasRendered){let t=Number(r.attr("x")),i=Number(r.attr("y")),a=Number(r.attr("width")),n=Number(r.attr("height")),h=(o,s)=>{r.attr({x:t+(e.x-t)*s.pos,y:i+(e.y-i)*s.pos,width:a+(e.width-a)*s.pos,height:n+(e.height-n)*s.pos})},l=j(m(s.renderer.globalAnimation)),p=l.step;l.step=function(){p&&p.apply(this,arguments),h.apply(this,arguments)},r.attr(j({animator:0},this.isDirtyCanvas?{href:o.toDataURL("image/png",1)}:void 0)).animate({animator:1},l)}else f(r),r.attr(j(e,this.isDirtyCanvas?{href:o.toDataURL("image/png",1)}:void 0))}else this.image=s.renderer.image(o.toDataURL("image/png",1)).attr(e).add(this.group);this.isDirtyCanvas=!1}}else super.drawPoints.apply(this,arguments)}getProjectedImageData(t,e,i,o,a,r,s){let n=new Uint8ClampedArray(e*i*4),h=T(t.projection.options.rotation?.[0],0),l=a.width/360,p=-1*a.height/180,d=-1;for(let i=0;i<n.length;i+=4){let g=i/4%e;0===g&&d++;let c=t.pixelsToLonLat({x:r+g,y:s+d});if(c){c.lon>-180-h&&c.lon<180-h&&(c.lon=L(c.lon));let t=[c.lon,c.lat],e=t[0]*l+a.width/2,r=t[1]*p+a.height/2;if(e>=0&&e<=a.width&&r>=0&&r<=a.height){let t=Math.floor(r)*a.width*4+4*Math.round(e);n[i]=o.data[t],n[i+1]=o.data[t+1],n[i+2]=o.data[t+2],n[i+3]=o.data[t+3]}}}return n}searchPoint(t,e){let i=this.chart,o=i.mapView;if(o&&this.bounds&&this.image&&i.tooltip&&i.tooltip.options.enabled){if(!i.pointer.hasDragged&&(.01>=+this.image.attr("animator")||+this.image.attr("animator")>=.99)){let a=o.projectedUnitsToPixels({x:this.bounds.x1,y:this.bounds.y2}),r=o.projectedUnitsToPixels({x:this.bounds.x2,y:this.bounds.y1});if(i.pointer.normalize(t),t.lon&&t.lat&&a&&r&&t.chartX-i.plotLeft>a.x&&t.chartX-i.plotLeft<r.x&&t.chartY-i.plotTop>a.y&&t.chartY-i.plotTop<r.y)return this.searchKDTree({clientX:t.chartX,lon:L(t.lon),lat:t.lat},e,t)}else i.tooltip.destroy()}}}O.defaultOptions=j(v.defaultOptions,{nullColor:"transparent",tooltip:{pointFormat:"Lat: {point.lat}, Lon: {point.lon}, Value: {point.value}<br/>"},borderWidth:0,colsize:1,rowsize:1,stickyTracking:!0,interpolation:{enabled:!1,blur:1}}),D(O,"afterDataClassLegendClick",function(){this.isDirtyCanvas=!0,this.drawPoints()}),C(O.prototype,{type:"geoheatmap",applyJitter:x,pointClass:g,pointArrayMap:["lon","lat","value"],kdAxisArray:["lon","lat"]}),l().registerSeriesType("geoheatmap",O);let R=n();return r.default})());