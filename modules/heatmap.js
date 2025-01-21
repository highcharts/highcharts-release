!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/color-axis
 * @requires highcharts
 *
 * ColorAxis module
 *
 * (c) 2012-2024 Pawel Potaczek
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.Axis,t._Highcharts.Color,t._Highcharts.LegendSymbol,t._Highcharts.SeriesRegistry,t._Highcharts.SVGElement,t._Highcharts.SVGRenderer):"function"==typeof define&&define.amd?define("highcharts/modules/heatmap",["highcharts/highcharts"],function(t){return e(t,t.Axis,t.Color,t.LegendSymbol,t.SeriesRegistry,t.SVGElement,t.SVGRenderer)}):"object"==typeof exports?exports["highcharts/modules/heatmap"]=e(t._Highcharts,t._Highcharts.Axis,t._Highcharts.Color,t._Highcharts.LegendSymbol,t._Highcharts.SeriesRegistry,t._Highcharts.SVGElement,t._Highcharts.SVGRenderer):t.Highcharts=e(t.Highcharts,t.Highcharts.Axis,t.Highcharts.Color,t.Highcharts.LegendSymbol,t.Highcharts.SeriesRegistry,t.Highcharts.SVGElement,t.Highcharts.SVGRenderer)}("undefined"==typeof window?this:window,(t,e,s,i,o,r,l)=>(()=>{"use strict";var a,n,h,d={532:t=>{t.exports=e},620:t=>{t.exports=s},500:t=>{t.exports=i},28:t=>{t.exports=r},540:t=>{t.exports=l},512:t=>{t.exports=o},944:e=>{e.exports=t}},p={};function c(t){var e=p[t];if(void 0!==e)return e.exports;var s=p[t]={exports:{}};return d[t](s,s.exports,c),s.exports}c.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return c.d(e,{a:e}),e},c.d=(t,e)=>{for(var s in e)c.o(e,s)&&!c.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},c.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var u={};c.d(u,{default:()=>tM});var g=c(944),m=c.n(g),f=c(532),x=c.n(f),y=c(620),b=c.n(y);let{parse:v}=b(),{addEvent:C,extend:A,merge:M,pick:w,splat:L}=m();!function(t){let e;function s(){let{userOptions:t}=this;this.colorAxis=[],t.colorAxis&&(t.colorAxis=L(t.colorAxis),t.colorAxis.map(t=>new e(this,t)))}function i(t){let e=this.chart.colorAxis||[],s=e=>{let s=t.allItems.indexOf(e);-1!==s&&(this.destroyItem(t.allItems[s]),t.allItems.splice(s,1))},i=[],o,r;for(e.forEach(function(t){o=t.options,o?.showInLegend&&(o.dataClasses&&o.visible?i=i.concat(t.getDataClassLegendSymbols()):o.visible&&i.push(t),t.series.forEach(function(t){(!t.options.showInLegend||o.dataClasses)&&("point"===t.options.legendType?t.points.forEach(function(t){s(t)}):s(t))}))}),r=i.length;r--;)t.allItems.unshift(i[r])}function o(t){t.visible&&t.item.legendColor&&t.item.legendItem.symbol.attr({fill:t.item.legendColor})}function r(t){this.chart.colorAxis?.forEach(e=>{e.update({},t.redraw)})}function l(){(this.chart.colorAxis?.length||this.colorAttribs)&&this.translateColors()}function a(){let t=this.axisTypes;t?-1===t.indexOf("colorAxis")&&t.push("colorAxis"):this.axisTypes=["colorAxis"]}function n(t){let e=this,s=t?"show":"hide";e.visible=e.options.visible=!!t,["graphic","dataLabel"].forEach(function(t){e[t]&&e[t][s]()}),this.series.buildKDTree()}function h(){let t=this,e=this.getPointsCollection(),s=this.options.nullColor,i=this.colorAxis,o=this.colorKey;e.forEach(e=>{let r=e.getNestedProperty(o),l=e.options.color||(e.isNull||null===e.value?s:i&&void 0!==r?i.toColor(r,e):e.color||t.color);l&&e.color!==l&&(e.color=l,"point"===t.options.legendType&&e.legendItem&&e.legendItem.label&&t.chart.legend.colorizeItem(e,e.visible))})}function d(){this.elem.attr("fill",v(this.start).tweenTo(v(this.end),this.pos),void 0,!0)}function p(){this.elem.attr("stroke",v(this.start).tweenTo(v(this.end),this.pos),void 0,!0)}t.compose=function(t,c,u,g,m){let f=c.prototype,x=u.prototype,y=m.prototype;f.collectionsWithUpdate.includes("colorAxis")||(e=t,f.collectionsWithUpdate.push("colorAxis"),f.collectionsWithInit.colorAxis=[f.addColorAxis],C(c,"afterCreateAxes",s),function(t){let s=t.prototype.createAxis;t.prototype.createAxis=function(t,i){if("colorAxis"!==t)return s.apply(this,arguments);let o=new e(this,M(i.axis,{index:this[t].length,isX:!1}));return this.isDirtyLegend=!0,this.axes.forEach(t=>{t.series=[]}),this.series.forEach(t=>{t.bindAxes(),t.isDirtyData=!0}),w(i.redraw,!0)&&this.redraw(i.animation),o}}(c),x.fillSetter=d,x.strokeSetter=p,C(g,"afterGetAllItems",i),C(g,"afterColorizeItem",o),C(g,"afterUpdate",r),A(y,{optionalAxis:"colorAxis",translateColors:h}),A(y.pointClass.prototype,{setVisible:n}),C(m,"afterTranslate",l,{order:1}),C(m,"bindAxes",a))},t.pointSetVisible=n}(a||(a={}));let k=a,{parse:I}=b(),{merge:S}=m();!function(t){t.initDataClasses=function(t){let e=this.chart,s=this.legendItem=this.legendItem||{},i=this.options,o=t.dataClasses||[],r,l,a=e.options.chart.colorCount,n=0,h;this.dataClasses=l=[],s.labels=[];for(let t=0,s=o.length;t<s;++t)r=S(r=o[t]),l.push(r),(e.styledMode||!r.color)&&("category"===i.dataClassColor?(e.styledMode||(a=(h=e.options.colors||[]).length,r.color=h[n]),r.colorIndex=n,++n===a&&(n=0)):r.color=I(i.minColor).tweenTo(I(i.maxColor),s<2?.5:t/(s-1)))},t.initStops=function(){let t=this.options,e=this.stops=t.stops||[[0,t.minColor||""],[1,t.maxColor||""]];for(let t=0,s=e.length;t<s;++t)e[t].color=I(e[t][1])},t.normalizedValue=function(t){let e=this.max||0,s=this.min||0;return this.logarithmic&&(t=this.logarithmic.log2lin(t)),1-(e-t)/(e-s||1)},t.toColor=function(t,e){let s,i,o,r,l,a;let n=this.dataClasses,h=this.stops;if(n){for(a=n.length;a--;)if(i=(l=n[a]).from,o=l.to,(void 0===i||t>=i)&&(void 0===o||t<=o)){r=l.color,e&&(e.dataClass=a,e.colorIndex=l.colorIndex);break}}else{for(s=this.normalizedValue(t),a=h.length;a--&&!(s>h[a][0]););i=h[a]||h[a+1],s=1-((o=h[a+1]||i)[0]-s)/(o[0]-i[0]||1),r=i.color.tweenTo(o.color,s)}return r}}(n||(n={}));let P=n;var T=c(500),D=c.n(T),E=c(512),V=c.n(E);let{defaultOptions:H}=m(),{series:O}=V(),{defined:z,extend:R,fireEvent:G,isArray:_,isNumber:W,merge:N,pick:K,relativeLength:X}=m();H.colorAxis=N(H.xAxis,{lineWidth:0,minPadding:0,maxPadding:0,gridLineColor:"#ffffff",gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{distance:8,overflow:"justify",rotation:0},minColor:"#e6e9ff",maxColor:"#0022ff",tickLength:5,showInLegend:!0});class j extends x(){static compose(t,e,s,i){k.compose(j,t,e,s,i)}constructor(t,e){super(t,e),this.coll="colorAxis",this.visible=!0,this.init(t,e)}init(t,e){let s=t.options.legend||{},i=e.layout?"vertical"!==e.layout:"vertical"!==s.layout;this.side=e.side||i?2:1,this.reversed=e.reversed||!i,this.opposite=!i,super.init(t,e,"colorAxis"),this.userOptions=e,_(t.userOptions.colorAxis)&&(t.userOptions.colorAxis[this.index]=e),e.dataClasses&&this.initDataClasses(e),this.initStops(),this.horiz=i,this.zoomEnabled=!1}hasData(){return!!(this.tickPositions||[]).length}setTickPositions(){if(!this.dataClasses)return super.setTickPositions()}setOptions(t){let e=N(H.colorAxis,t,{showEmpty:!1,title:null,visible:this.chart.options.legend.enabled&&!1!==t.visible});super.setOptions(e),this.options.crosshair=this.options.marker}setAxisSize(){let t=this.chart,e=this.legendItem?.symbol,{width:s,height:i}=this.getSize();e&&(this.left=+e.attr("x"),this.top=+e.attr("y"),this.width=s=+e.attr("width"),this.height=i=+e.attr("height"),this.right=t.chartWidth-this.left-s,this.bottom=t.chartHeight-this.top-i,this.pos=this.horiz?this.left:this.top),this.len=(this.horiz?s:i)||j.defaultLegendLength}getOffset(){let t=this.legendItem?.group,e=this.chart.axisOffset[this.side];if(t){this.axisParent=t,super.getOffset();let s=this.chart.legend;s.allItems.forEach(function(t){t instanceof j&&t.drawLegendSymbol(s,t)}),s.render(),this.chart.getMargins(!0),this.chart.series.some(t=>t.isDrilling)||(this.isDirty=!0),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=e}}setLegendColor(){let t=this.horiz,e=this.reversed,s=e?1:0,i=e?0:1,o=t?[s,0,i,0]:[0,i,0,s];this.legendColor={linearGradient:{x1:o[0],y1:o[1],x2:o[2],y2:o[3]},stops:this.stops}}drawLegendSymbol(t,e){let s=e.legendItem||{},i=t.padding,o=t.options,r=this.options.labels,l=K(o.itemDistance,10),a=this.horiz,{width:n,height:h}=this.getSize(),d=K(o.labelPadding,a?16:30);this.setLegendColor(),s.symbol||(s.symbol=this.chart.renderer.symbol("roundedRect").attr({r:o.symbolRadius??3,zIndex:1}).add(s.group)),s.symbol.attr({x:0,y:(t.baseline||0)-11,width:n,height:h}),s.labelWidth=n+i+(a?l:K(r.x,r.distance)+(this.maxLabelLength||0)),s.labelHeight=h+i+(a?d:0)}setState(t){this.series.forEach(function(e){e.setState(t)})}setVisible(){}getSeriesExtremes(){let t=this.series,e,s,i,o,r=t.length;for(this.dataMin=1/0,this.dataMax=-1/0;r--;){for(let l of(s=(o=t[r]).colorKey=K(o.options.colorKey,o.colorKey,o.pointValKey,o.zoneAxis,"y"),i=o[s+"Min"]&&o[s+"Max"],[s,"value","y"]))if((e=o.getColumn(l)).length)break;if(i)o.minColorValue=o[s+"Min"],o.maxColorValue=o[s+"Max"];else{let t=O.prototype.getExtremes.call(o,e);o.minColorValue=t.dataMin,o.maxColorValue=t.dataMax}z(o.minColorValue)&&z(o.maxColorValue)&&(this.dataMin=Math.min(this.dataMin,o.minColorValue),this.dataMax=Math.max(this.dataMax,o.maxColorValue)),i||O.prototype.applyExtremes.call(o)}}drawCrosshair(t,e){let s;let i=this.legendItem||{},o=e?.plotX,r=e?.plotY,l=this.pos,a=this.len;e&&((s=this.toPixels(e.getNestedProperty(e.series.colorKey)))<l?s=l-2:s>l+a&&(s=l+a+2),e.plotX=s,e.plotY=this.len-s,super.drawCrosshair(t,e),e.plotX=o,e.plotY=r,this.cross&&!this.cross.addedToColorAxis&&i.group&&(this.cross.addClass("highcharts-coloraxis-marker").add(i.group),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!=typeof this.crosshair||this.cross.attr({fill:this.crosshair.color})))}getPlotLinePath(t){let e=this.left,s=t.translatedValue,i=this.top;return W(s)?this.horiz?[["M",s-4,i-6],["L",s+4,i-6],["L",s,i],["Z"]]:[["M",e,s],["L",e-6,s+6],["L",e-6,s-6],["Z"]]:super.getPlotLinePath(t)}update(t,e){let s=this.chart.legend;this.series.forEach(t=>{t.isDirtyData=!0}),(t.dataClasses&&s.allItems||this.dataClasses)&&this.destroyItems(),super.update(t,e),this.legendItem?.label&&(this.setLegendColor(),s.colorizeItem(this,!0))}destroyItems(){let t=this.chart,e=this.legendItem||{};if(e.label)t.legend.destroyItem(this);else if(e.labels)for(let s of e.labels)t.legend.destroyItem(s);t.isDirtyLegend=!0}destroy(){this.chart.isDirtyLegend=!0,this.destroyItems(),super.destroy(...[].slice.call(arguments))}remove(t){this.destroyItems(),super.remove(t)}getDataClassLegendSymbols(){let t;let e=this,s=e.chart,i=e.legendItem&&e.legendItem.labels||[],o=s.options.legend,r=K(o.valueDecimals,-1),l=K(o.valueSuffix,""),a=t=>e.series.reduce((e,s)=>(e.push(...s.points.filter(e=>e.dataClass===t)),e),[]);return i.length||e.dataClasses.forEach((o,n)=>{let h=o.from,d=o.to,{numberFormatter:p}=s,c=!0;t="",void 0===h?t="< ":void 0===d&&(t="> "),void 0!==h&&(t+=p(h,r)+l),void 0!==h&&void 0!==d&&(t+=" - "),void 0!==d&&(t+=p(d,r)+l),i.push(R({chart:s,name:t,options:{},drawLegendSymbol:D().rectangle,visible:!0,isDataClass:!0,setState:t=>{for(let e of a(n))e.setState(t)},setVisible:function(){this.visible=c=e.visible=!c;let t=[];for(let e of a(n))e.setVisible(c),e.hiddenInDataClass=!c,-1===t.indexOf(e.series)&&t.push(e.series);s.legend.colorizeItem(this,c),t.forEach(t=>{G(t,"afterDataClassLegendClick")})}},o))}),i}getSize(){let{chart:t,horiz:e}=this,{height:s,width:i}=this.options,{legend:o}=t.options;return{width:K(z(i)?X(i,t.chartWidth):void 0,o?.symbolWidth,e?j.defaultLegendLength:12),height:K(z(s)?X(s,t.chartHeight):void 0,o?.symbolHeight,e?12:j.defaultLegendLength)}}}j.defaultLegendLength=200,j.keepProps=["legendItem"],R(j.prototype,P),Array.prototype.push.apply(x().keepProps,j.keepProps);let F=m();F.ColorAxis=F.ColorAxis||j,F.ColorAxis.compose(F.Chart,F.Fx,F.Legend,F.Series);var U=c(28),Y=c.n(U);let{column:{prototype:Z}}=V().seriesTypes,{addEvent:q,defined:$}=m();!function(t){function e(t){let e=this.series,s=e.chart.renderer;this.moveToTopOnHover&&this.graphic&&(e.stateMarkerGraphic||(e.stateMarkerGraphic=new(Y())(s,"use").css({pointerEvents:"none"}).add(this.graphic.parentGroup)),t?.state==="hover"?(this.graphic.attr({id:this.id}),e.stateMarkerGraphic.attr({href:`${s.url}#${this.id}`,visibility:"visible"})):e.stateMarkerGraphic.attr({href:""}))}t.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&this.value!==1/0&&this.value!==-1/0&&(void 0===this.value||!isNaN(this.value))}},t.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(t){let e={};return $(t.color)&&(!t.state||"normal"===t.state)&&(e[this.colorProp||"fill"]=t.color),e},pointAttribs:Z.pointAttribs},t.compose=function(t){return q(t.prototype.pointClass,"afterSetState",e),t}}(h||(h={}));let B=h,{scatter:{prototype:{pointClass:J}}}=V().seriesTypes,{clamp:Q,defined:tt,extend:te,pick:ts}=m();class ti extends J{applyOptions(t,e){return(this.isNull||null===this.value)&&delete this.color,super.applyOptions(t,e),this.formatPrefix=this.isNull||null===this.value?"null":"point",this}getCellAttributes(){let t=this.series,e=t.options,s=(e.colsize||1)/2,i=(e.rowsize||1)/2,o=t.xAxis,r=t.yAxis,l=this.options.marker||t.options.marker,a=t.pointPlacementToXValue(),n=ts(this.pointPadding,e.pointPadding,0),h={x1:Q(Math.round(o.len-o.translate(this.x-s,!1,!0,!1,!0,-a)),-o.len,2*o.len),x2:Q(Math.round(o.len-o.translate(this.x+s,!1,!0,!1,!0,-a)),-o.len,2*o.len),y1:Q(Math.round(r.translate(this.y-i,!1,!0,!1,!0)),-r.len,2*r.len),y2:Q(Math.round(r.translate(this.y+i,!1,!0,!1,!0)),-r.len,2*r.len)};for(let t of[["width","x"],["height","y"]]){let e=t[0],s=t[1],i=s+"1",a=s+"2",d=Math.abs(h[i]-h[a]),p=l&&l.lineWidth||0,c=Math.abs(h[i]+h[a])/2,u=l&&l[e];if(tt(u)&&u<d){let t=u/2+p/2;h[i]=c-t,h[a]=c+t}n&&(("x"===s&&o.reversed||"y"===s&&!r.reversed)&&(i=a,a=s+"1"),h[i]+=n,h[a]-=n)}return h}haloPath(t){if(!t)return[];let{x:e=0,y:s=0,width:i=0,height:o=0}=this.shapeArgs||{};return[["M",e-t,s-t],["L",e-t,s+o+t],["L",e+i+t,s+o+t],["L",e+i+t,s-t],["Z"]]}isValid(){return this.value!==1/0&&this.value!==-1/0}}te(ti.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1});let{isNumber:to}=m();var tr=c(540),tl=c.n(tr);let{doc:ta}=m(),{defined:tn,pick:th}=m(),{series:td,seriesTypes:{column:tp,scatter:tc}}=V(),{prototype:{symbols:tu}}=tl(),{addEvent:tg,extend:tm,fireEvent:tf,isNumber:tx,merge:ty,pick:tb}=m(),{colorFromPoint:tv,getContext:tC}={colorFromPoint:function(t,e){let s=e.series.colorAxis;if(s){let i=s.toColor(t||0,e).split(")")[0].split("(")[1].split(",").map(t=>th(parseFloat(t),parseInt(t,10)));return i[3]=255*th(i[3],1),tn(t)&&e.visible||(i[3]=0),i}return[0,0,0,0]},getContext:function(t){let{canvas:e,context:s}=t;return e&&s?(s.clearRect(0,0,e.width,e.height),s):(t.canvas=ta.createElement("canvas"),t.context=t.canvas.getContext("2d",{willReadFrequently:!0})||void 0,t.context)}};class tA extends tc{constructor(){super(...arguments),this.valueMax=NaN,this.valueMin=NaN,this.isDirtyCanvas=!0}drawPoints(){let t=this,e=t.options,s=e.interpolation,i=e.marker||{};if(s){let{image:e,chart:s,xAxis:i,yAxis:o}=t,{reversed:r=!1,len:l}=i,{reversed:a=!1,len:n}=o,h={width:l,height:n};if(!e||t.isDirtyData||t.isDirtyCanvas){let l=tC(t),{canvas:n,options:{colsize:d=1,rowsize:p=1},points:c,points:{length:u}}=t,g=s.colorAxis&&s.colorAxis[0];if(n&&l&&g){let{min:g,max:m}=i.getExtremes(),{min:f,max:x}=o.getExtremes(),y=m-g,b=x-f,v=Math.round(y/d/8*8),C=Math.round(b/p/8*8),[A,M]=[[v,v/y,r,"ceil"],[C,C/b,!a,"floor"]].map(([t,e,s,i])=>s?s=>Math[i](t-e*s):t=>Math[i](e*t)),w=n.width=v+1,L=w*(n.height=C+1),k=(u-1)/L,I=new Uint8ClampedArray(4*L),S=(t,e)=>4*Math.ceil(w*M(e-f)+A(t-g));t.buildKDTree();for(let t=0;t<L;t++){let e=c[Math.ceil(k*t)],{x:s,y:i}=e;I.set(tv(e.value,e),S(s,i))}l.putImageData(new ImageData(I,w),0,0),e?e.attr({...h,href:n.toDataURL("image/png",1)}):(t.directTouch=!1,t.image=s.renderer.image(n.toDataURL("image/png",1)).attr(h).add(t.group))}t.isDirtyCanvas=!1}else(e.width!==l||e.height!==n)&&e.attr(h)}else(i.enabled||t._hasPointMarkers)&&(td.prototype.drawPoints.call(t),t.points.forEach(e=>{e.graphic&&(e.graphic[t.chart.styledMode?"css":"animate"](t.colorAttribs(e)),null===e.value&&e.graphic.addClass("highcharts-null-point"))}))}getExtremes(){let{dataMin:t,dataMax:e}=td.prototype.getExtremes.call(this,this.getColumn("value"));return tx(t)&&(this.valueMin=t),tx(e)&&(this.valueMax=e),td.prototype.getExtremes.call(this)}getValidPoints(t,e){return td.prototype.getValidPoints.call(this,t,e,!0)}hasData(){return!!this.dataTable.rowCount}init(){super.init.apply(this,arguments);let t=this.options;t.pointRange=tb(t.pointRange,t.colsize||1),this.yAxis.axisPointRange=t.rowsize||1,tu.ellipse=tu.circle,t.marker&&tx(t.borderRadius)&&(t.marker.r=t.borderRadius)}markerAttribs(t,e){let s=t.shapeArgs||{};if(t.hasImage)return{x:t.plotX,y:t.plotY};if(e&&"normal"!==e){let i=t.options.marker||{},o=this.options.marker||{},r=o.states?.[e]||{},l=i.states?.[e]||{},a=(l.width||r.width||s.width||0)+(l.widthPlus||r.widthPlus||0),n=(l.height||r.height||s.height||0)+(l.heightPlus||r.heightPlus||0);return{x:(s.x||0)+((s.width||0)-a)/2,y:(s.y||0)+((s.height||0)-n)/2,width:a,height:n}}return s}pointAttribs(t,e){let s=td.prototype.pointAttribs.call(this,t,e),i=this.options||{},o=this.chart.options.plotOptions||{},r=o.series||{},l=o.heatmap||{},a=t?.options.borderColor||i.borderColor||l.borderColor||r.borderColor,n=t?.options.borderWidth||i.borderWidth||l.borderWidth||r.borderWidth||s["stroke-width"];if(s.stroke=t?.marker?.lineColor||i.marker?.lineColor||a||this.color,s["stroke-width"]=n,e&&"normal"!==e){let o=ty(i.states?.[e],i.marker?.states?.[e],t?.options.states?.[e]||{});s.fill=o.color||b().parse(s.fill).brighten(o.brightness||0).get(),s.stroke=o.lineColor||s.stroke}return s}translate(){let{borderRadius:t,marker:e}=this.options,s=e?.symbol||"rect",i=tu[s]?s:"rect",o=-1!==["circle","square"].indexOf(i);for(let e of(this.generatePoints(),this.points)){let r=e.getCellAttributes(),l=Math.min(r.x1,r.x2),a=Math.min(r.y1,r.y2),n=Math.max(Math.abs(r.x2-r.x1),0),h=Math.max(Math.abs(r.y2-r.y1),0);if(e.hasImage=0===(e.marker?.symbol||s||"").indexOf("url"),o){let t=Math.abs(n-h);l=Math.min(r.x1,r.x2)+(n<h?0:t/2),a=Math.min(r.y1,r.y2)+(n<h?t/2:0),n=h=Math.min(n,h)}e.hasImage&&(e.marker={width:n,height:h}),e.plotX=e.clientX=(r.x1+r.x2)/2,e.plotY=(r.y1+r.y2)/2,e.shapeType="path",e.shapeArgs=ty(!0,{x:l,y:a,width:n,height:h},{d:tu[i](l,a,n,h,{r:tx(t)?t:0})})}tf(this,"afterTranslate")}}tA.defaultOptions=ty(tc.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,interpolation:!1,nullColor:"#f7f7f7",dataLabels:{formatter:function(){let{numberFormatter:t}=this.series.chart,{value:e}=this.point;return to(e)?t(e,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:"allow",padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}},legendSymbol:"rectangle"}),tg(tA,"afterDataClassLegendClick",function(){this.isDirtyCanvas=!0,this.drawPoints()}),tm(tA.prototype,{axisTypes:B.seriesMembers.axisTypes,colorKey:B.seriesMembers.colorKey,directTouch:!0,getExtremesFromAll:!0,keysAffectYAxis:["y"],parallelArrays:B.seriesMembers.parallelArrays,pointArrayMap:["y","value"],pointClass:ti,specialGroup:"group",trackerGroups:B.seriesMembers.trackerGroups,alignDataLabel:tp.prototype.alignDataLabel,colorAttribs:B.seriesMembers.colorAttribs,getSymbol:td.prototype.getSymbol}),B.compose(tA),V().registerSeriesType("heatmap",tA);/**
 * @license Highmaps JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/heatmap
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */let tM=m();return u.default})());