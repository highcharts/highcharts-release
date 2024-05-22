!/**
 * Highcharts JS v11.4.2 (2024-05-22)
 *
 * Support for parallel coordinates in Highcharts
 *
 * (c) 2010-2024 Pawel Fus
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/parallel-coordinates",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function s(t,e,s,l){t.hasOwnProperty(e)||(t[e]=l.apply(null,s),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}s(e,"Extensions/ParallelCoordinates/ParallelCoordinatesDefaults.js",[],function(){return{chart:{parallelCoordinates:!1,parallelAxes:{lineWidth:1,title:{text:"",reserveSpace:!1},labels:{x:0,y:4,align:"center",reserveSpace:!1},offset:0}},xAxis:{lineWidth:0,tickLength:0,opposite:!0,type:"category"}}}),s(e,"Extensions/ParallelCoordinates/ParallelAxis.js",[e["Extensions/ParallelCoordinates/ParallelCoordinatesDefaults.js"],e["Core/Utilities.js"]],function(t,e){var s;let{addEvent:l,arrayMax:i,arrayMin:a,isNumber:o,merge:r,pick:n,splat:h}=e;class p{constructor(t){this.axis=t}setPosition(t,e){let s=this.axis,l=s.chart,i=((this.position||0)+.5)/(l.parallelInfo.counter+1);l.polar?e.angle=360*i:(e[t[0]]=100*i+"%",s[t[1]]=e[t[1]]=0,s[t[2]]=e[t[2]]=null,s[t[3]]=e[t[3]]=null)}}return function(e){function s(e){let s=this.chart,l=this.parallelCoordinates,i=["left","width","height","top"];if(s.hasParallelCoordinates){if(s.inverted&&(i=i.reverse()),this.isXAxis)this.options=r(this.options,t.xAxis,e.userOptions);else{let t=s.yAxis.indexOf(this);this.options=r(this.options,this.chart.options.chart.parallelAxes,e.userOptions),l.position=n(l.position,t>=0?t:s.yAxis.length),l.setPosition(i,this.options)}}}function d(t){let e=this.chart,s=this.parallelCoordinates;if(s&&e&&e.hasParallelCoordinates&&!this.isXAxis){let e=s.position,l=[];this.series.forEach(function(t){if(t.yData&&t.visible&&o(e)){let s=t.yData[e];l.push.apply(l,h(s))}}),l=l.filter(o),this.dataMin=a(l),this.dataMax=i(l),t.preventDefault()}}function c(){this.parallelCoordinates||(this.parallelCoordinates=new p(this))}e.compose=function(t){t.keepProps.includes("parallel")||(t.keepProps.push("parallel"),l(t,"init",c),l(t,"afterSetOptions",s),l(t,"getSeriesExtremes",d))}}(s||(s={})),s}),s(e,"Extensions/ParallelCoordinates/ParallelSeries.js",[e["Core/Globals.js"],e["Core/Templating.js"],e["Core/Utilities.js"]],function(t,e,s){var l;let{composed:i}=t,{format:a}=e,{addEvent:o,defined:r,erase:n,extend:h,insertItem:p,isArray:d,isNumber:c,pick:f,pushUnique:u,wrap:x}=s;return function(t){function e(){let t=this.chart,e=this.points,s=e&&e.length,l=Number.MAX_VALUE,i,a;if(this.chart.hasParallelCoordinates){for(let o=0;o<s;o++)r((a=e[o]).y)?(t.polar?a.plotX=t.yAxis[o].angleRad||0:t.inverted?a.plotX=t.plotHeight-t.yAxis[o].top+t.plotTop:a.plotX=t.yAxis[o].left-t.plotLeft,a.clientX=a.plotX,a.plotY=t.yAxis[o].translate(a.y,!1,!0,void 0,!0),c(a.high)&&(a.plotHigh=t.yAxis[o].translate(a.high,!1,!0,void 0,!0)),void 0!==i&&(l=Math.min(l,Math.abs(a.plotX-i))),i=a.plotX,a.isInside=t.isInsidePlot(a.plotX,a.plotY,{inverted:t.inverted})):a.isNull=!0;this.closestPointRangePx=l}}function s(t){let e=this.chart;if(e.hasParallelCoordinates){for(let t of e.axes)p(this,t.series),t.isDirty=!0;this.xAxis=e.xAxis[0],this.yAxis=e.yAxis[0],t.preventDefault()}}function l(){let t=this.chart;if(t.hasParallelCoordinates)for(let e of t.axes||[])e&&e.series&&(n(e.series,this),e.isDirty=e.forceRedraw=!0)}function C(t){let e,s,l,i;let o=this.series&&this.series.chart,n=t.apply(this,[].slice.call(arguments,1));return o&&o.hasParallelCoordinates&&!r(n.formattedValue)&&(e=(l=f((s=(i=o.yAxis[this.x]).options).tooltipValueFormat,s.labels.format))?a(l,h(this,{value:this.y}),o):i.dateTime?o.time.dateFormat(o.time.resolveDTLFormat(s.dateTimeLabelFormats[i.tickPositions.info.unitName]).main,this.y):d(s.categories)?s.categories[this.y]:this.y,n.formattedValue=n.point.formattedValue=e),n}t.compose=function(t){if(u(i,"ParallelSeries")){let{line:{prototype:{pointClass:i}},spline:{prototype:{pointClass:a}}}=t.types;o(t,"afterTranslate",e,{order:1}),o(t,"bindAxes",s),o(t,"destroy",l),i&&x(i.prototype,"getLabelConfig",C),a&&x(a.prototype,"getLabelConfig",C)}}}(l||(l={})),l}),s(e,"Extensions/ParallelCoordinates/ParallelCoordinates.js",[e["Extensions/ParallelCoordinates/ParallelAxis.js"],e["Extensions/ParallelCoordinates/ParallelCoordinatesDefaults.js"],e["Extensions/ParallelCoordinates/ParallelSeries.js"],e["Core/Utilities.js"]],function(t,e,s,l){var i;let{addEvent:a,defined:o,merge:r,splat:n}=l;class h{constructor(t){this.chart=t}setParallelInfo(t){let e=this.chart||this,s=t.series;for(let t of(e.parallelInfo={counter:0},s))t.data&&(e.parallelInfo.counter=Math.max(e.parallelInfo.counter,t.data.length-1))}}return function(l){function i(t){let s=t.args[0],l=n(s.yAxis||{}),i=[],a=l.length;if(this.hasParallelCoordinates=s.chart&&s.chart.parallelCoordinates,this.hasParallelCoordinates){for(this.setParallelInfo(s);a<=this.parallelInfo.counter;a++)i.push({});s.legend||(s.legend={}),s.legend&&void 0===s.legend.enabled&&(s.legend.enabled=!1),r(!0,s,{boost:{seriesThreshold:Number.MAX_VALUE},plotOptions:{series:{boostThreshold:Number.MAX_VALUE}}}),s.yAxis=l.concat(i),s.xAxis=r(e.xAxis,n(s.xAxis||{})[0])}}function p(t){let e=t.options;if(e.chart&&(o(e.chart.parallelCoordinates)&&(this.hasParallelCoordinates=e.chart.parallelCoordinates),this.options.chart.parallelAxes=r(this.options.chart.parallelAxes,e.chart.parallelAxes)),this.hasParallelCoordinates)for(let t of(e.series&&this.setParallelInfo(e),this.yAxis))t.update({},!1)}l.compose=function(l,o,n,d){t.compose(l),s.compose(d);let c=h.prototype,f=o.prototype;f.setParallelInfo||(f.setParallelInfo=c.setParallelInfo,a(o,"init",i),a(o,"update",p),r(!0,n.chart,e.chart))}}(i||(i={})),i}),s(e,"masters/modules/parallel-coordinates.src.js",[e["Core/Globals.js"],e["Extensions/ParallelCoordinates/ParallelCoordinates.js"]],function(t,e){return e.compose(t.Axis,t.Chart,t.defaultOptions,t.Series),t})});