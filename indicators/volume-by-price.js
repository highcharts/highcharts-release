!/**
 * Highstock JS v11.4.5 (2024-07-04)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2024 Paweł Dalek
 *
 * License: www.highcharts.com/license
 */function(e){"object"==typeof module&&module.exports?(e.default=e,module.exports=e):"function"==typeof define&&define.amd?define("highcharts/indicators/volume-by-price",["highcharts","highcharts/modules/stock"],function(t){return e(t),e.Highcharts=t,e}):e("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(e){"use strict";var t=e?e._modules:{};function s(t,s,i,o){t.hasOwnProperty(s)||(t[s]=o.apply(null,i),"function"==typeof CustomEvent&&e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:s,module:t[s]}})))}s(t,"Stock/Indicators/VBP/VBPPoint.js",[t["Core/Series/SeriesRegistry.js"]],function(e){let{sma:{prototype:{pointClass:t}}}=e.seriesTypes;return class extends t{destroy(){this.negativeGraphic&&(this.negativeGraphic=this.negativeGraphic.destroy()),super.destroy.apply(this,arguments)}}}),s(t,"Stock/Indicators/VBP/VBPIndicator.js",[t["Stock/Indicators/VBP/VBPPoint.js"],t["Core/Animation/AnimationUtilities.js"],t["Core/Globals.js"],t["Core/Series/SeriesRegistry.js"],t["Core/Utilities.js"]],function(e,t,s,i,o){let{animObject:a}=t,{noop:n}=s,{column:{prototype:r},sma:l}=i.seriesTypes,{addEvent:p,arrayMax:h,arrayMin:d,correctFloat:u,defined:c,error:m,extend:g,isArray:f,merge:v}=o,y=Math.abs;class V extends l{init(e,t){let s=this;delete t.data,super.init.apply(s,arguments);let i=p(this.chart.constructor,"afterLinkSeries",function(){if(s.options){let t=s.options.params,i=s.linkedParent,o=e.get(t.volumeSeriesID);s.addCustomEvents(i,o)}i()},{order:1});return s}addCustomEvents(e,t){let s=this,i=()=>{s.chart.redraw(),s.setData([]),s.zoneStarts=[],s.zoneLinesSVG&&(s.zoneLinesSVG=s.zoneLinesSVG.destroy())};return s.dataEventsToUnbind.push(p(e,"remove",function(){i()})),t&&s.dataEventsToUnbind.push(p(t,"remove",function(){i()})),s}animate(e){let t=this,s=t.chart.inverted,i=t.group,o={};if(!e&&i){let e=s?t.yAxis.top:t.xAxis.left;s?(i["forceAnimate:translateY"]=!0,o.translateY=e):(i["forceAnimate:translateX"]=!0,o.translateX=e),i.animate(o,g(a(t.options.animation),{step:function(e,s){t.group.attr({scaleX:Math.max(.001,s.pos)})}}))}}drawPoints(){this.options.volumeDivision.enabled&&(this.posNegVolume(!0,!0),r.drawPoints.apply(this,arguments),this.posNegVolume(!1,!1)),r.drawPoints.apply(this,arguments)}posNegVolume(e,t){let s=t?["positive","negative"]:["negative","positive"],i=this.options.volumeDivision,o=this.points.length,a=[],n=[],r=0,l,p,h,d;for(e?(this.posWidths=a,this.negWidths=n):(a=this.posWidths,n=this.negWidths);r<o;r++)(d=this.points[r])[s[0]+"Graphic"]=d.graphic,d.graphic=d[s[1]+"Graphic"],e&&(l=d.shapeArgs.width,(h=(p=this.priceZones[r]).wholeVolumeData)?(a.push(l/h*p.positiveVolumeData),n.push(l/h*p.negativeVolumeData)):(a.push(0),n.push(0))),d.color=t?i.styles.positiveColor:i.styles.negativeColor,d.shapeArgs.width=t?this.posWidths[r]:this.negWidths[r],d.shapeArgs.x=t?d.shapeArgs.x:this.posWidths[r]}translate(){let e=this,t=e.options,s=e.chart,i=e.yAxis,o=i.min,a=e.options.zoneLines,n=e.priceZones,l=0,p,d,c,m,g,f,v,V,x,D;r.translate.apply(e);let S=e.points;S.length&&(v=t.pointPadding<.5?t.pointPadding:.1,p=h(e.volumeDataArray),d=s.plotWidth/2,V=s.plotTop,c=y(i.toPixels(o)-i.toPixels(o+e.rangeStep)),g=y(i.toPixels(o)-i.toPixels(o+e.rangeStep)),v&&(m=y(c*(1-2*v)),l=y((c-m)/2),c=y(m)),S.forEach(function(t,s){x=t.barX=t.plotX=0,D=t.plotY=i.toPixels(n[s].start)-V-(i.reversed?c-g:c)-l,f=u(d*n[s].wholeVolumeData/p),t.pointWidth=f,t.shapeArgs=e.crispCol.apply(e,[x,D,f,c]),t.volumeNeg=n[s].negativeVolumeData,t.volumePos=n[s].positiveVolumeData,t.volumeAll=n[s].wholeVolumeData}),a.enabled&&e.drawZones(s,i,e.zoneStarts,a.styles))}getExtremes(){let e;let t=this.options.compare,s=this.options.cumulative;return this.options.compare?(this.options.compare=void 0,e=super.getExtremes(),this.options.compare=t):this.options.cumulative?(this.options.cumulative=!1,e=super.getExtremes(),this.options.cumulative=s):e=super.getExtremes(),e}getValues(e,t){let s=e.processedXData,i=e.processedYData,o=this.chart,a=t.ranges,n=[],r=[],l=[],p=o.get(t.volumeSeriesID);if(!e.chart){m("Base series not found! In case it has been removed, add a new one.",!0,o);return}if(!p||!p.processedXData.length){let e=p&&!p.processedXData.length?" does not contain any data.":" not found! Check `volumeSeriesID`.";m("Series "+t.volumeSeriesID+e,!0,o);return}let h=f(i[0]);if(h&&4!==i[0].length){m("Type of "+e.name+" series is different than line, OHLC or candlestick.",!0,o);return}return(this.priceZones=this.specifyZones(h,s,i,a,p)).forEach(function(e,t){n.push([e.x,e.end]),r.push(n[t][0]),l.push(n[t][1])}),{values:n,xData:r,yData:l}}specifyZones(e,t,s,i,o){let a=!!e&&function(e){let t=e.length,s=e[0][3],i=s,o=1,a;for(;o<t;o++)(a=e[o][3])<s&&(s=a),a>i&&(i=a);return{min:s,max:i}}(s),n=this.zoneStarts=[],r=[],l=a?a.min:d(s),p=a?a.max:h(s),m=0,g=1,f=this.linkedParent;if(!this.options.compareToMain&&f.dataModify&&(l=f.dataModify.modifyValue(l),p=f.dataModify.modifyValue(p)),!c(l)||!c(p))return this.points.length&&(this.setData([]),this.zoneStarts=[],this.zoneLinesSVG&&(this.zoneLinesSVG=this.zoneLinesSVG.destroy())),[];let v=this.rangeStep=u(p-l)/i;for(n.push(l);m<i-1;m++)n.push(u(n[m]+v));n.push(p);let y=n.length;for(;g<y;g++)r.push({index:g-1,x:t[0],start:n[g-1],end:n[g]});return this.volumePerZone(e,r,o,t,s)}volumePerZone(e,t,s,i,o){let a,n,r,l,p;let h=this,d=s.processedXData,u=s.processedYData,c=t.length-1,m=o.length,g=u.length;return y(m-g)&&(i[0]!==d[0]&&u.unshift(0),i[m-1]!==d[g-1]&&u.push(0)),h.volumeDataArray=[],t.forEach(function(t){for(p=0,t.wholeVolumeData=0,t.positiveVolumeData=0,t.negativeVolumeData=0;p<m;p++){n=!1,r=!1,l=e?o[p][3]:o[p],a=p?e?o[p-1][3]:o[p-1]:l;let s=h.linkedParent;!h.options.compareToMain&&s.dataModify&&(l=s.dataModify.modifyValue(l),a=s.dataModify.modifyValue(a)),l<=t.start&&0===t.index&&(n=!0),l>=t.end&&t.index===c&&(r=!0),(l>t.start||n)&&(l<t.end||r)&&(t.wholeVolumeData+=u[p],a>l?t.negativeVolumeData+=u[p]:t.positiveVolumeData+=u[p])}h.volumeDataArray.push(t.wholeVolumeData)}),t}drawZones(e,t,s,i){let o=e.renderer,a=e.plotWidth,n=e.plotTop,r=this.zoneLinesSVG,l=[],p;s.forEach(function(s){p=t.toPixels(s)-n,l=l.concat(e.renderer.crispLine([["M",0,p],["L",a,p]],i.lineWidth))}),r?r.animate({d:l}):r=this.zoneLinesSVG=o.path(l).attr({"stroke-width":i.lineWidth,stroke:i.color,dashstyle:i.dashStyle,zIndex:this.group.zIndex+.1}).add(this.group)}}return V.defaultOptions=v(l.defaultOptions,{params:{index:void 0,period:void 0,ranges:12,volumeSeriesID:"volume"},zoneLines:{enabled:!0,styles:{color:"#0A9AC9",dashStyle:"LongDash",lineWidth:1}},volumeDivision:{enabled:!0,styles:{positiveColor:"rgba(144, 237, 125, 0.8)",negativeColor:"rgba(244, 91, 91, 0.8)"}},animationLimit:1e3,enableMouseTracking:!1,pointPadding:0,zIndex:-1,crisp:!0,dataGrouping:{enabled:!1},dataLabels:{allowOverlap:!0,enabled:!0,format:"P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}",padding:0,style:{fontSize:"0.5em"},verticalAlign:"top"}}),g(V.prototype,{nameBase:"Volume by Price",nameComponents:["ranges"],calculateOn:{chart:"render",xAxis:"afterSetExtremes"},pointClass:e,markerAttribs:n,drawGraph:n,getColumnMetrics:r.getColumnMetrics,crispCol:r.crispCol}),i.registerSeriesType("vbp",V),V}),s(t,"masters/indicators/volume-by-price.src.js",[t["Core/Globals.js"]],function(e){return e})});