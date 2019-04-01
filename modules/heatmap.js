/*
 Highcharts JS v7.1.0 (2019-04-01)

 (c) 2009-2019 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/heatmap",["highcharts"],function(l){e(l);e.Highcharts=l;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function l(b,e,k,u){b.hasOwnProperty(e)||(b[e]=u.apply(null,k))}e=e?e._modules:{};l(e,"parts-map/ColorAxis.js",[e["parts/Globals.js"]],function(b){var e=b.addEvent,k=b.Axis,u=b.Chart,p=b.color,m,q=b.extend,r=b.isNumber,
c=b.Legend,g=b.LegendSymbolMixin,v=b.noop,l=b.merge,t=b.pick;m=b.ColorAxis=function(){this.init.apply(this,arguments)};q(m.prototype,k.prototype);q(m.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight",
"legendItemWidth","legendItem","legendSymbol"].concat(k.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,h;this.coll="colorAxis";h=l(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,showEmpty:!1,title:null,visible:a.options.legend.enabled});k.prototype.init.call(this,a,h);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,h=0,n=d.options.chart.colorCount,
b=this.options,c=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];a.dataClasses.forEach(function(a,g){a=l(a);f.push(a);if(d.styledMode||!a.color)"category"===b.dataClassColor?(d.styledMode||(g=d.options.colors,n=g.length,a.color=g[h]),a.colorIndex=h,h++,h===n&&(h=0)):a.color=p(b.minColor).tweenTo(p(b.maxColor),2>c?.5:g/(c-1))})},hasData:function(){return!(!this.tickPositions||!this.tickPositions.length)},setTickPositions:function(){if(!this.dataClasses)return k.prototype.setTickPositions.call(this)},
initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=p(a[1])})},setOptions:function(a){k.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,f=d.options.legend||{},h,n;a?(this.left=f=a.attr("x"),this.top=h=a.attr("y"),this.width=n=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-n,this.bottom=d.chartHeight-
h-a,this.len=this.horiz?n:a,this.pos=this.horiz?f:h):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,h,n,b=this.dataClasses,g,c;if(b)for(c=b.length;c--;){if(g=b[c],h=g.from,f=g.to,(void 0===h||a>=h)&&(void 0===f||a<=f)){n=g.color;d&&(d.dataClass=c,d.colorIndex=g.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&
!(a>f[c][0]););h=f[c]||f[c+1];f=f[c+1]||h;a=1-(f[0]-a)/(f[0]-h[0]||1);n=h.color.tweenTo(f.color,a)}return n},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,k.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],
y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,h=a.options,c=this.horiz,b=t(h.symbolWidth,c?this.defaultLegendLength:12),g=t(h.symbolHeight,c?12:this.defaultLegendLength),e=t(h.labelPadding,c?16:30),h=t(h.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,a.baseline-11,b,g).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=b+f+(c?h:e);this.legendItemHeight=g+f+(c?e:0)},setState:function(a){this.series.forEach(function(d){d.setState(a)})},
visible:!0,setVisible:v,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=d&&d.plotX,c=d&&d.plotY,b,g=this.pos,e=this.len;d&&(b=this.toPixels(d[d.series.colorKey]),b<g?b=g-2:b>g+e&&(b=g+e+2),d.plotX=b,d.plotY=this.len-b,k.prototype.drawCrosshair.call(this,a,d),
d.plotX=f,d.plotY=c,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return r(c)?this.horiz?["M",c-4,this.top-6,"L",c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:k.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var c=
this.chart,b=c.legend;this.series.forEach(function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(b.allItems.forEach(function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=l(this.userOptions,a);k.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);k.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,
d=this.chart,c=this.legendItems,h=d.options.legend,e=h.valueDecimals,p=h.valueSuffix||"",m;c.length||this.dataClasses.forEach(function(f,h){var k=!0,n=f.from,l=f.to;m="";void 0===n?m="\x3c ":void 0===l&&(m="\x3e ");void 0!==n&&(m+=b.numberFormat(n,e)+p);void 0!==n&&void 0!==l&&(m+=" - ");void 0!==l&&(m+=b.numberFormat(l,e)+p);c.push(q({chart:d,name:m,options:{},drawLegendSymbol:g.drawRectangle,visible:!0,setState:v,isDataClass:!0,setVisible:function(){k=this.visible=!k;a.series.forEach(function(a){a.points.forEach(function(a){a.dataClass===
h&&a.setVisible(k)})});d.legend.colorizeItem(this,k)}},f))});return c},name:""});["fill","stroke"].forEach(function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,p(this.start).tweenTo(p(this.end),this.pos),null,!0)}});e(u,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new m(this,a)});e(c,"afterGetAllItems",function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),c.series.forEach(function(c){b.erase(a.allItems,
c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])});e(c,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})});e(c,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)})});l(e,"parts-map/ColorSeriesMixin.js",[e["parts/Globals.js"]],function(b){var e=b.defined,k=b.noop,l=b.seriesTypes;b.colorPointMixin={dataLabelOnNull:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==
this.value},setVisible:function(b){var e=this,k=b?"show":"hide";e.visible=!!b;["graphic","dataLabel"].forEach(function(b){if(e[b])e[b][k]()})},setState:function(e){b.Point.prototype.setState.call(this,e);this.graphic&&this.graphic.attr({zIndex:"hover"===e?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:k,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:l.column.prototype.pointAttribs,
translateColors:function(){var b=this,e=this.options.nullColor,k=this.colorAxis,l=this.colorKey;this.data.forEach(function(c){var g=c[l];if(g=c.options.color||(c.isNull?e:k&&void 0!==g?k.toColor(g,c):c.color||b.color))c.color=g})},colorAttribs:function(b){var k={};e(b.color)&&(k[this.colorProp||"fill"]=b.color);return k}}});l(e,"parts-map/HeatmapSeries.js",[e["parts/Globals.js"]],function(b){var e=b.colorPointMixin,k=b.merge,l=b.noop,p=b.pick,m=b.Series,q=b.seriesType,r=b.seriesTypes;q("heatmap",
"scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},k(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var c;r.scatter.prototype.init.apply(this,arguments);
c=this.options;c.pointRange=p(c.pointRange,c.colsize||1);this.yAxis.axisPointRange=c.rowsize||1},translate:function(){var c=this.options,b=this.xAxis,e=this.yAxis,k=c.pointPadding||0,l=function(a,c,b){return Math.min(Math.max(c,a),b)},a=this.pointPlacementToXValue();this.generatePoints();this.points.forEach(function(d){var f=(c.colsize||1)/2,g=(c.rowsize||1)/2,n=l(Math.round(b.len-b.translate(d.x-f,0,1,0,1,-a)),-b.len,2*b.len),f=l(Math.round(b.len-b.translate(d.x+f,0,1,0,1,-a)),-b.len,2*b.len),m=
l(Math.round(e.translate(d.y-g,0,1,0,1)),-e.len,2*e.len),g=l(Math.round(e.translate(d.y+g,0,1,0,1)),-e.len,2*e.len),q=p(d.pointPadding,k);d.plotX=d.clientX=(n+f)/2;d.plotY=(m+g)/2;d.shapeType="rect";d.shapeArgs={x:Math.min(n,f)+q,y:Math.min(m,g)+q,width:Math.abs(f-n)-2*q,height:Math.abs(g-m)-2*q}});this.translateColors()},drawPoints:function(){var c=this.chart.styledMode?"css":"attr";r.column.prototype.drawPoints.call(this);this.points.forEach(function(b){b.graphic[c](this.colorAttribs(b))},this)},
hasData:function(){return!!this.processedXData.length},getValidPoints:function(b,e){return m.prototype.getValidPoints.call(this,b,e,!0)},animate:l,getBox:l,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:r.column.prototype.alignDataLabel,getExtremes:function(){m.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;m.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-
b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},e))});l(e,"masters/modules/heatmap.src.js",[],function(){})});
//# sourceMappingURL=heatmap.js.map