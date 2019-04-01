/*
  Highcharts JS v7.1.0 (2019-04-01)

 Indicator series type for Highstock

 (c) 2010-2019 Pawel Fus, Sebastian Bochan

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/indicators",["highcharts","highcharts/modules/stock"],function(e){a(e);a.Highcharts=e;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function e(a,e,t,n){a.hasOwnProperty(e)||(a[e]=n.apply(null,t))}a=a?a._modules:{};e(a,"mixins/indicator-required.js",[a["parts/Globals.js"]],function(a){var m=a.error;return{isParentLoaded:function(a,
e,h,p,l){if(a)return p?p(a):!0;m(l||this.generateMessage(h,e));return!1},generateMessage:function(a,m){return'Error: "'+a+'" indicator type requires "'+m+'" indicator loaded before. Please read docs: https://api.highcharts.com/highstock/plotOptions.'+a}}});e(a,"indicators/indicators.src.js",[a["parts/Globals.js"],a["mixins/indicator-required.js"]],function(a,e){var m=a.pick,n=a.error,h=a.Series,p=a.isArray,l=a.addEvent,u=a.seriesType,r=a.seriesTypes,q=a.seriesTypes.ohlc.prototype,v=e.generateMessage;
l(a.Series,"init",function(d){d=d.options;d.useOhlcData&&"highcharts-navigator-series"!==d.id&&a.extend(this,{pointValKey:q.pointValKey,keys:q.keys,pointArrayMap:q.pointArrayMap,toYData:q.toYData})});l(h,"afterSetOptions",function(a){a=a.options;var d=a.dataGrouping;d&&a.useOhlcData&&"highcharts-navigator-series"!==a.id&&(d.approximation="ohlc")});u("sma","line",{name:void 0,tooltip:{valueDecimals:4},linkedTo:void 0,compareToMain:!1,params:{index:0,period:14}},{processData:function(){var a=this.options.compareToMain,
c=this.linkedParent;h.prototype.processData.apply(this,arguments);c&&c.compareValue&&a&&(this.compareValue=c.compareValue)},bindTo:{series:!0,eventName:"updatedData"},hasDerivedData:!0,useCommonDataGrouping:!0,nameComponents:["period"],nameSuffixes:[],calculateOn:"init",requiredIndicators:[],requireIndicators:function(){var a={allLoaded:!0};this.requiredIndicators.forEach(function(d){r[d]?r[d].prototype.requireIndicators():(a.allLoaded=!1,a.needed=d)});return a},init:function(a,c){function d(){var a=
b.points||[],d=(b.xData||[]).length,c=b.getValues(b.linkedParent,b.options.params)||{values:[],xData:[],yData:[]},e=[],k=!0,f,g;if(d&&!b.hasGroupedData&&b.visible&&b.points)if(b.cropped){b.xAxis&&(f=b.xAxis.min,g=b.xAxis.max);d=b.cropData(c.xData,c.yData,f,g);for(f=0;f<d.xData.length;f++)e.push([d.xData[f],d.yData[f]]);d=c.xData.indexOf(b.xData[0]);f=c.xData.indexOf(b.xData[b.xData.length-1]);-1===d&&f===c.xData.length-2&&e[0][0]===a[0].x&&e.shift();b.updateData(e)}else c.xData.length!==d-1&&c.xData.length!==
d+1&&(k=!1,b.updateData(c.values));k&&(b.xData=c.xData,b.yData=c.yData,b.options.data=c.values);!1===b.bindTo.series&&(delete b.processedXData,b.isDirty=!0,b.redraw());b.isDirtyData=!1}var b=this,e=b.requireIndicators();if(!e.allLoaded)return n(v(b.type,e.needed));h.prototype.init.call(b,a,c);a.linkSeries();b.dataEventsToUnbind=[];if(!b.linkedParent)return n("Series "+b.options.linkedTo+" not found! Check `linkedTo`.",!1,a);b.dataEventsToUnbind.push(l(b.bindTo.series?b.linkedParent:b.linkedParent.xAxis,
b.bindTo.eventName,d));if("init"===b.calculateOn)d();else var g=l(b.chart,b.calculateOn,function(){d();g()});return b},getName:function(){var a=this.name,c=[];a||((this.nameComponents||[]).forEach(function(a,b){c.push(this.options.params[a]+m(this.nameSuffixes[b],""))},this),a=(this.nameBase||this.type.toUpperCase())+(this.nameComponents?" ("+c.join(", ")+")":""));return a},getValues:function(a,c){var d=c.period,b=a.xData;a=a.yData;var e=a.length,g=0,h=0,l=[],m=[],n=[],k=-1,f;if(b.length<d)return!1;
for(p(a[0])&&(k=c.index?c.index:0);g<d-1;)h+=0>k?a[g]:a[g][k],g++;for(c=g;c<e;c++)h+=0>k?a[c]:a[c][k],f=[b[c],h/d],l.push(f),m.push(f[0]),n.push(f[1]),h-=0>k?a[c-g]:a[c-g][k];return{values:l,xData:m,yData:n}},destroy:function(){this.dataEventsToUnbind.forEach(function(a){a()});h.prototype.destroy.call(this)}})});e(a,"masters/indicators/indicators.src.js",[],function(){})});
//# sourceMappingURL=indicators.js.map