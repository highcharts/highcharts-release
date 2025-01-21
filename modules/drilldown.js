!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/drilldown
 * @requires highcharts
 *
 * Highcharts Drilldown module
 *
 * Author: Torstein Honsi
 * License: www.highcharts.com/license
 *
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.Templating,t._Highcharts.Color):"function"==typeof define&&define.amd?define("highcharts/modules/drilldown",["highcharts/highcharts"],function(t){return e(t,t.Templating,t.Color)}):"object"==typeof exports?exports["highcharts/modules/drilldown"]=e(t._Highcharts,t._Highcharts.Templating,t._Highcharts.Color):t.Highcharts=e(t.Highcharts,t.Highcharts.Templating,t.Highcharts.Color)}("undefined"==typeof window?this:window,(t,e,i)=>(()=>{"use strict";var o,l={620:t=>{t.exports=i},984:t=>{t.exports=e},944:e=>{e.exports=t}},r={};function s(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return l[t](i,i.exports,s),i.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n={};s.d(n,{default:()=>tx});var a=s(944),d=s.n(a);let p={lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}};var h=s(984);let{format:u}=s.n(h)(),{composed:c}=d(),{addEvent:m,defined:w,extend:g,fireEvent:f,isString:b,merge:v,objectEach:y,pick:x,pushUnique:D}=d();function S(){if(this.breadcrumbs){let t=this.resetZoomButton&&this.resetZoomButton.getBBox(),e=this.breadcrumbs.options;t&&"right"===e.position.align&&"plotBox"===e.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-t.width-e.buttonSpacing)}}function B(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function L(){let t=this.breadcrumbs;if(t&&!t.options.floating&&t.level){let e=t.options,i=e.buttonTheme,o=(i.height||0)+2*(i.padding||0)+e.buttonSpacing,l=e.position.verticalAlign;"bottom"===l?(this.marginBottom=(this.marginBottom||0)+o,t.yOffset=o):"middle"!==l?(this.plotTop+=o,t.yOffset=-o):t.yOffset=void 0}}function O(){this.breadcrumbs&&this.breadcrumbs.redraw()}function A(t){!0===t.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}class T{static compose(t,e){D(c,"Breadcrumbs")&&(m(t,"destroy",B),m(t,"afterShowResetZoom",S),m(t,"getMargins",L),m(t,"redraw",O),m(t,"selection",A),g(e.lang,p.lang))}constructor(t,e){this.elementList={},this.isDirty=!0,this.level=0,this.list=[];let i=v(t.options.drilldown&&t.options.drilldown.drillUpButton,T.defaultOptions,t.options.navigation&&t.options.navigation.breadcrumbs,e);this.chart=t,this.options=i||{}}updateProperties(t){this.setList(t),this.setLevel(),this.isDirty=!0}setList(t){this.list=t}setLevel(){this.level=this.list.length&&this.list.length-1}getLevel(){return this.level}getButtonText(t){let e=this.chart,i=this.options,o=e.options.lang,l=x(i.format,i.showFullPath?"{level.name}":"← {level.name}"),r=o&&x(o.drillUpText,o.mainBreadcrumb),s=i.formatter&&i.formatter(t)||u(l,{level:t.levelOptions},e)||"";return(b(s)&&!s.length||"← "===s)&&w(r)&&(s=i.showFullPath?r:"← "+r),s}redraw(){this.isDirty&&this.render(),this.group&&this.group.align(),this.isDirty=!1}render(){let t=this.chart,e=this.options;!this.group&&e&&(this.group=t.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:e.zIndex}).add()),e.showFullPath?this.renderFullPathButtons():this.renderSingleButton(),this.alignBreadcrumbsGroup()}renderFullPathButtons(){this.destroySingleButton(),this.resetElementListState(),this.updateListElements(),this.destroyListElements()}renderSingleButton(){let t=this.chart,e=this.list,i=this.options.buttonSpacing;this.destroyListElements();let o=this.group?this.group.getBBox().width:i,l=e[e.length-2];!t.drillUpButton&&this.level>0?t.drillUpButton=this.renderButton(l,o,i):t.drillUpButton&&(this.level>0?this.updateSingleButton():this.destroySingleButton())}alignBreadcrumbsGroup(t){if(this.group){let e=this.options,i=e.buttonTheme,o=e.position,l="chart"===e.relativeTo||"spacingBox"===e.relativeTo?void 0:"plotBox",r=this.group.getBBox(),s=2*(i.padding||0)+e.buttonSpacing;o.width=r.width+s,o.height=r.height+s;let n=v(o);t&&(n.x+=t),this.options.rtl&&(n.x+=o.width),n.y=x(n.y,this.yOffset,0),this.group.align(n,!0,l)}}renderButton(t,e,i){let o=this,l=this.chart,r=o.options,s=v(r.buttonTheme),n=l.renderer.button(o.getButtonText(t),e,i,function(e){let i;let l=r.events&&r.events.click;l&&(i=l.call(o,e,t)),!1!==i&&(r.showFullPath?e.newLevel=t.level:e.newLevel=o.level-1,f(o,"up",e))},s).addClass("highcharts-breadcrumbs-button").add(o.group);return l.styledMode||n.attr(r.style),n}renderSeparator(t,e){let i=this.chart,o=this.options.separator,l=i.renderer.label(o.text,t,e,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);return i.styledMode||l.css(o.style),l}update(t){v(!0,this.options,t),this.destroy(),this.isDirty=!0}updateSingleButton(){let t=this.chart,e=this.list[this.level-1];t.drillUpButton&&t.drillUpButton.attr({text:this.getButtonText(e)})}destroy(){this.destroySingleButton(),this.destroyListElements(!0),this.group&&this.group.destroy(),this.group=void 0}destroyListElements(t){let e=this.elementList;y(e,(i,o)=>{(t||!e[o].updated)&&((i=e[o]).button&&i.button.destroy(),i.separator&&i.separator.destroy(),delete i.button,delete i.separator,delete e[o])}),t&&(this.elementList={})}destroySingleButton(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)}resetElementListState(){y(this.elementList,t=>{t.updated=!1})}updateListElements(){let t=this.elementList,e=this.options.buttonSpacing,i=this.list,o=this.options.rtl,l=o?-1:1,r=function(t,e){return l*t.getBBox().width+l*e},s=function(t,e,i){t.translate(e-t.getBBox().width,i)},n=this.group?r(this.group,e):e,a,d;for(let p=0,h=i.length;p<h;++p){let u,c;let m=p===h-1;t[(d=i[p]).level]?(u=(a=t[d.level]).button,a.separator||m?a.separator&&m&&(a.separator.destroy(),delete a.separator):(n+=l*e,a.separator=this.renderSeparator(n,e),o&&s(a.separator,n,e),n+=r(a.separator,e)),t[d.level].updated=!0):(u=this.renderButton(d,n,e),o&&s(u,n,e),n+=r(u,e),m||(c=this.renderSeparator(n,e),o&&s(c,n,e),n+=r(c,e)),t[d.level]={button:u,separator:c,updated:!0}),u&&u.setState(m?2:0)}}}T.defaultOptions=p.options;var C=s(620),E=s.n(C);let P={activeAxisLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}},mapZooming:!0},{animObject:M}=d(),{addEvent:I,extend:V,fireEvent:k,merge:_,pick:Z,syncTimeout:G}=d();function N(t,e,i,o){t[i?"addClass":"removeClass"]("highcharts-drilldown-point"),o||t.css({cursor:e})}function U(t){let e=this,i=e.chart,o=i.drilldownLevels,l=M((i.options.drilldown||{}).animation),r=this.xAxis,s=i.styledMode;if(!t){let t;(o||[]).forEach(i=>{e.options._ddSeriesId===i.lowerSeriesOptions._ddSeriesId&&(t=i.shapeArgs,!s&&t&&(t.fill=i.color))}),t.x+=Z(r.oldPos,r.pos)-r.pos,e.points.forEach(i=>{let o=i.shapeArgs;s||(o.fill=i.color),i.graphic&&i.graphic.attr(t).animate(V(i.shapeArgs,{fill:i.color||e.color}),l)}),i.drilldown&&i.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate}}function j(t){let e=this,i=M((e.chart.options.drilldown||{}).animation);(e.trackerGroups||[]).forEach(t=>{e[t]&&e[t].on("mouseover")});let o=e.group,l=o!==e.chart.columnGroup;l&&delete e.group,(this.points||this.data).forEach(r=>{let s=r.graphic,n=t.shapeArgs;if(s&&n){let a=()=>{s.destroy(),o&&l&&(o=o.destroy())};delete r.graphic,e.chart.styledMode||(n.fill=t.color),i.duration?s.animate(n,_(i,{complete:a})):(s.attr(n),a())}})}function F(t){let e=this,i=e.drilldownLevel;t||(e.points.forEach(t=>{let e=t.dataLabel;t.graphic&&t.graphic.hide(),e&&(e.hidden="hidden"===e.attr("visibility"),e.hidden||(e.hide(),e.connector?.hide()))}),G(()=>{if(e.points){let t=[];e.data.forEach(e=>{t.push(e)}),e.nodes&&(t=t.concat(e.nodes)),t.forEach((t,e)=>{let o=e===(i&&i.pointIndex)?"show":"fadeIn",l=t.dataLabel;t.graphic&&t.visible&&t.graphic[o]("show"===o||void 0),l&&!l.hidden&&(l.fadeIn(),l.connector?.fadeIn())})}},Math.max(e.chart.options.drilldown.animation.duration-50,0)),delete this.animate)}function H(t){let e=this,i=e.chart,o=e.group;i&&o&&e.options&&i.options.drilldown&&i.options.drilldown.animation&&(t&&i.mapView?(o.attr({opacity:.01}),i.mapView.allowTransformAnimation=!1,e.options.inactiveOtherPoints=!0,e.options.enableMouseTracking=!1):(o.animate({opacity:1},i.options.drilldown.animation,()=>{e.options&&(e.options.inactiveOtherPoints=!1,e.options.enableMouseTracking=Z(e.userOptions&&e.userOptions.enableMouseTracking,!0))}),i.drilldown&&i.drilldown.fadeInGroup(this.dataLabelsGroup)))}function z(){let t=this.chart;t&&t.mapView&&(t.mapView.allowTransformAnimation=!1),this.options&&(this.options.inactiveOtherPoints=!0)}function R(t){let e=this.chart,i=this.group;e&&i&&(t?(i.attr({opacity:.01}),this.options&&(this.options.inactiveOtherPoints=!0)):(i.animate({opacity:1},(e.options.drilldown||{}).animation),e.drilldown&&e.drilldown.fadeInGroup(this.dataLabelsGroup)))}function W(){return this.drilldown&&!this.unbindDrilldownClick&&(this.unbindDrilldownClick=I(this,"click",J)),this}function q(){let t=this.series,e=t.chart.styledMode;this.drilldown&&t.halo&&"hover"===this.state?N(t.halo,"pointer",!0,e):t.halo&&N(t.halo,"auto",!1,e)}function J(t){let e=this.series;e.xAxis&&!1===(e.chart.options.drilldown||{}).allowPointDrilldown?e.xAxis.drilldownCategory(this.x,t):this.runDrilldown(void 0,void 0,t)}function K(t){let e=t.options||{};e.drilldown&&!this.unbindDrilldownClick?this.unbindDrilldownClick=I(this,"click",J):!e.drilldown&&void 0!==e.drilldown&&this.unbindDrilldownClick&&(this.unbindDrilldownClick=this.unbindDrilldownClick())}function Q(){let t=this.chart,e=t.options.drilldown.activeDataLabelStyle,i=t.renderer,o=t.styledMode;for(let t of this.points){let l=t.options.dataLabels,r=Z(t.dlOptions,l&&l.style,{});t.drilldown&&t.dataLabel&&("contrast"!==e.color||o||(r.color=i.getContrast(t.color||this.color)),l&&l.color&&(r.color=l.color),t.dataLabel.addClass("highcharts-drilldown-data-label"),o||t.dataLabel.css(e).css(r))}}function X(){let t=this.chart.styledMode;for(let e of this.points)e.drilldown&&e.graphic&&N(e.graphic,"pointer",!0,t)}function Y(t){let e=this.chart,i=this.points,o=e.drilldownLevels[e.drilldownLevels.length-1],l=e.options.drilldown.animation;if(this.is("item")&&(l.duration=0),this.center){let r=o.shapeArgs,s=r.start,n=(r.end-s)/this.points.length,a=e.styledMode;if(!t){let t,d;for(let e=0,p=i.length;e<p;++e)t=(d=i[e]).shapeArgs,a||(r.fill=o.color,t.fill=d.color),d.graphic&&d.graphic.attr(_(r,{start:s+e*n,end:s+(e+1)*n}))[l?"animate":"attr"](t,l);e.drilldown&&e.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate}}}function $(){this.runDrilldown()}function tt(t,e,i){let o=this.series,l=o.chart,r=l.options.drilldown||{},s=(r.series||[]).length,n;for(l.ddDupes||(l.ddDupes=[]),l.colorCounter=l.symbolCounter=0;s--&&!n;)r.series&&r.series[s].id===this.drilldown&&this.drilldown&&-1===l.ddDupes.indexOf(this.drilldown)&&(n=r.series[s],l.ddDupes.push(this.drilldown));k(l,"drilldown",{point:this,seriesOptions:n,category:e,originalEvent:i,points:void 0!==e&&o.xAxis.getDDPoints(e).slice(0)},e=>{let i=e.point.series&&e.point.series.chart,o=e.seriesOptions;i&&o&&(t?i.addSingleSeriesAsDrilldown(e.point,o):i.addSeriesAsDrilldown(e.point,o))})}let te={compose:function(t,e){let i=t.prototype.pointClass,o=i.prototype;if(!o.doDrilldown){let{column:l,map:r,pie:s}=e;if(I(i,"afterInit",W),I(i,"afterSetState",q),I(i,"update",K),o.doDrilldown=$,o.runDrilldown=tt,I(t,"afterDrawDataLabels",Q),I(t,"afterDrawTracker",X),l){let t=l.prototype;t.animateDrilldown=U,t.animateDrillupFrom=j,t.animateDrillupTo=F}if(r){let t=r.prototype;t.animateDrilldown=H,t.animateDrillupFrom=z,t.animateDrillupTo=R}if(s){let t=s.prototype;t.animateDrilldown=Y,t.animateDrillupFrom=j,t.animateDrillupTo=F}}}},{animObject:ti}=d(),{noop:to}=d(),{addEvent:tl,defined:tr,diffObjects:ts,extend:tn,fireEvent:ta,merge:td,objectEach:tp,pick:th,removeEvent:tu,syncTimeout:tc}=d(),tm=1;function tw(t,e){this.getDDPoints(t).forEach(function(i){i&&i.series&&i.series.visible&&i.runDrilldown&&i.runDrilldown(!0,t,e)}),this.chart.applyDrilldown()}function tg(t){return this.ddPoints&&this.ddPoints[t]||[]}function tf(t){let e=[],i=t.drilldownLevels;return i&&i.length&&(e[0]||e.push({level:0,levelOptions:i[0].seriesOptions}),i.forEach(function(t){let i=e[e.length-1];t.levelNumber+1>i.level&&e.push({level:t.levelNumber+1,levelOptions:td({name:t.lowerSeries.name},t.pointOptions)})})),e}class tb{constructor(t){this.chart=t}addSeriesAsDrilldown(t,e){let i=this.chart||this;if(ta(this,"addSeriesAsDrilldown",{seriesOptions:e}),i.mapView){if(t.series.isDrilling=!0,i.series.forEach(t=>{t.options.inactiveOtherPoints=!0,t.dataLabelsGroup?.destroy(),delete t.dataLabelsGroup}),i.options.drilldown&&!i.mapView.projection.hasGeoProjection&&P&&!tr(ts(i.options.drilldown,P).mapZooming)&&(i.options.drilldown.mapZooming=!1),i.options.drilldown&&i.options.drilldown.animation&&i.options.drilldown.mapZooming){i.mapView.allowTransformAnimation=!0;let o=ti(i.options.drilldown.animation);if("boolean"!=typeof o){let l=o.complete,r=function(o){o&&o.applyDrilldown&&i.mapView&&(i.addSingleSeriesAsDrilldown(t,e),i.applyDrilldown(),i.mapView.allowTransformAnimation=!1)};o.complete=function(){l&&l.apply(this,arguments),r.apply(this,arguments)}}t.zoomTo(o)}else i.addSingleSeriesAsDrilldown(t,e),i.applyDrilldown()}else i.addSingleSeriesAsDrilldown(t,e),i.applyDrilldown()}addSingleSeriesAsDrilldown(t,e){let i=this.chart||this,o=t.series,l=o.xAxis,r=o.yAxis,s=i.styledMode?{colorIndex:th(t.colorIndex,o.colorIndex)}:{color:t.color||o.color},n=o.options._levelNumber||0;i.drilldownLevels||(i.drilldownLevels=[]),e=tn(tn({_ddSeriesId:tm++},s),e);let a=[],d=[],p;(p=i.drilldownLevels[i.drilldownLevels.length-1])&&p.levelNumber!==n&&(p=void 0),o.chart.series.forEach(t=>{t.xAxis===l&&(t.options._ddSeriesId=t.options._ddSeriesId||tm++,t.options.colorIndex=t.colorIndex,t.options._levelNumber=t.options._levelNumber||n,p?(a=p.levelSeries,d=p.levelSeriesOptions):(a.push(t),t.purgedOptions=td({_ddSeriesId:t.options._ddSeriesId,_levelNumber:t.options._levelNumber,selected:t.options.selected},t.userOptions),d.push(t.purgedOptions)))});let h=tn({levelNumber:n,seriesOptions:o.options,seriesPurgedOptions:o.purgedOptions,levelSeriesOptions:d,levelSeries:a,shapeArgs:t.shapeArgs,bBox:t.graphic?t.graphic.getBBox():{},color:t.isNull?E().parse(s.color).setOpacity(0).get():s.color,lowerSeriesOptions:e,pointOptions:t.options,pointIndex:t.index,oldExtremes:{xMin:l&&l.userMin,xMax:l&&l.userMax,yMin:r&&r.userMin,yMax:r&&r.userMax},resetZoomButton:p&&p.levelNumber===n?void 0:i.resetZoomButton},s);i.drilldownLevels.push(h),l&&l.names&&(l.names.length=0);let u=h.lowerSeries=i.addSeries(e,!1);u.options._levelNumber=n+1,l&&(l.oldPos=l.pos,l.userMin=l.userMax=null,r.userMin=r.userMax=null),u.isDrilling=!0,o.type===u.type&&(u.animate=u.animateDrilldown||to,u.options.animation=!0)}applyDrilldown(){let t;let e=this.chart||this,i=e.drilldownLevels;i&&i.length>0&&(t=i[i.length-1].levelNumber,e.hasCartesianSeries=i.some(t=>t.lowerSeries.isCartesian),(e.drilldownLevels||[]).forEach(i=>{e.mapView&&e.options.drilldown&&e.options.drilldown.mapZooming&&(e.redraw(),i.lowerSeries.isDrilling=!1,e.mapView.fitToBounds(i.lowerSeries.bounds),i.lowerSeries.isDrilling=!0),i.levelNumber===t&&i.levelSeries.forEach(o=>{if(e.mapView){if(o.options&&o.options._levelNumber===t&&o.group){let t={};e.options.drilldown&&(t=e.options.drilldown.animation),o.group.animate({opacity:0},t,()=>{o.remove(!1),i.levelSeries.filter(t=>Object.keys(t).length).length||(e.resetZoomButton&&(e.resetZoomButton.hide(),delete e.resetZoomButton),e.pointer?.reset(),ta(e,"afterDrilldown"),e.mapView&&(e.series.forEach(t=>{t.isDirtyData=!0,t.isDrilling=!1}),e.mapView.fitToBounds(void 0,void 0),e.mapView.allowTransformAnimation=!0),ta(e,"afterApplyDrilldown"))})}}else o.options&&o.options._levelNumber===t&&o.remove(!1)})})),e.mapView||(e.resetZoomButton&&(e.resetZoomButton.hide(),delete e.resetZoomButton),e.pointer?.reset(),ta(e,"afterDrilldown"),e.hasCartesianSeries||e.axes.forEach(t=>{t.destroy(!0),t.init(e,td(t.userOptions,t.options))}),e.redraw(),ta(e,"afterApplyDrilldown"))}drillUp(t){let e=this.chart||this;if(!e.drilldownLevels||0===e.drilldownLevels.length)return;ta(e,"beforeDrillUp");let i=e.drilldownLevels,o=i[i.length-1].levelNumber,l=e.series,r=e.drilldownLevels.length,s=(t,i)=>{let o;if(l.forEach(e=>{e.options._ddSeriesId===t._ddSeriesId&&(o=e)}),(o=o||e.addSeries(t,!1)).type===i.type&&o.animateDrillupTo&&(o.animate=o.animateDrillupTo),t===p.seriesPurgedOptions)return o},n=t=>{t.remove(!1),e.series.forEach(t=>{t.colorAxis&&(t.isDirtyData=!0),t.options.inactiveOtherPoints=!1}),e.redraw()},a=i.length,d,p,h;for(e.symbolCounter=e.colorCounter=0;a--;){let u,c;if((p=i[a]).levelNumber===o){if(i.pop(),!(u=p.lowerSeries).chart){for(d=l.length;d--;)if(l[d].options.id===p.lowerSeriesOptions.id&&l[d].options._levelNumber===o+1){u=l[d];break}}u.dataTable.setColumn("x",[]),u.xAxis&&u.xAxis.names&&(0===r||a===r-1)&&(u.xAxis.names.length=0),p.levelSeriesOptions.forEach(t=>{let e=s(t,u);e&&(c=e)}),ta(e,"drillup",{seriesOptions:p.seriesPurgedOptions||p.seriesOptions}),c&&(c.type===u.type&&(c.drilldownLevel=p,c.options.animation=e.options.drilldown.animation,u.animateDrillupFrom&&u.chart&&u.animateDrillupFrom(p)),c.options._levelNumber=o);let m=u;if(e.mapView||m.remove(!1),c&&c.xAxis&&(h=p.oldExtremes,c.xAxis.setExtremes(h.xMin,h.xMax,!1),c.yAxis.setExtremes(h.yMin,h.yMax,!1)),p.resetZoomButton&&(e.resetZoomButton=p.resetZoomButton),e.mapView){let i=p.levelNumber===o&&t,l=e.options.drilldown&&e.options.drilldown.animation&&e.options.drilldown.mapZooming;i?u.remove(!1):(u.dataLabelsGroup&&(u.dataLabelsGroup.destroy(),delete u.dataLabelsGroup),e.mapView&&c&&(l&&(u.isDrilling=!0,c.isDrilling=!0,e.redraw(!1),e.mapView.fitToBounds(u.bounds,void 0,!0,!1)),e.mapView.allowTransformAnimation=!0,ta(e,"afterDrillUp",{seriesOptions:c?c.userOptions:void 0}),l?(e.mapView.setView(void 0,th(e.mapView.minZoom,1),!0,{complete:function(){Object.prototype.hasOwnProperty.call(this,"complete")&&n(u)}}),c._hasTracking=!1):(e.mapView.allowTransformAnimation=!1,u.group?u.group.animate({opacity:0},e.options.drilldown.animation,()=>{n(u),e.mapView&&(e.mapView.allowTransformAnimation=!0)}):(n(u),e.mapView.allowTransformAnimation=!0)),c.isDrilling=!1))}else ta(e,"afterDrillUp")}}e.mapView||t||e.redraw(),e.ddDupes&&(e.ddDupes.length=0),ta(e,"drillupall")}fadeInGroup(t){let e=ti(this.chart.options.drilldown.animation);t&&(t.hide(),tc(()=>{t&&t.added&&t.fadeIn()},Math.max(e.duration-50,0)))}update(t,e){let i=this.chart;td(!0,i.options.drilldown,t),th(e,!0)&&i.redraw()}}!function(t){function e(t){let e=this.chart,i=this.getLevel()-t.newLevel,o=i>1;for(let t=0;t<i;t++)t===i-1&&(o=!1),e.drillUp(o)}function i(){let t=this.options.drilldown,e=t&&t.breadcrumbs;this.breadcrumbs||(this.breadcrumbs=new T(this,e)),this.breadcrumbs.updateProperties(tf(this))}function o(){this.breadcrumbs&&this.breadcrumbs.updateProperties(tf(this))}function l(){this.drilldown=new tb(this)}function r(){this.resetZoomButton&&(this.resetZoomButton=this.resetZoomButton.destroy())}function s(){this.resetZoomButton&&this.showResetZoom()}function n(){(this.xAxis||[]).forEach(t=>{t.ddPoints={},t.series.forEach(e=>{let i=e.getColumn("x"),o=e.points;for(let l=0,r=i.length,s;l<r;l++)if("number"!=typeof(s=e.options.data[l])&&(s=e.pointClass.prototype.optionsToObject.call({series:e},s)).drilldown){t.ddPoints[i[l]]||(t.ddPoints[i[l]]=[]);let r=l-(e.cropStart||0);t.ddPoints[i[l]].push(!o||!(r>=0)||!(r<o.length)||o[r])}}),tp(t.ticks,t=>t.drillable())})}function a(t){let e=this.breadcrumbs,i=t.options.drilldown&&t.options.drilldown.breadcrumbs;e&&i&&e.update(i)}function d(t){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:th(this.newOpacity,1)},t||{duration:250})}function p(){let t=this.pos,e=this.label,i=this.axis,o="xAxis"===i.coll&&i.getDDPoints,l=o&&i.getDDPoints(t),r=i.chart.styledMode;o&&(e&&l&&l.length?(e.drillable=!0,e.basicStyles||r||(e.basicStyles=td(e.styles)),e.addClass("highcharts-drilldown-axis-label"),e.removeOnDrillableClick&&tu(e.element,"click"),e.removeOnDrillableClick=tl(e.element,"click",function(e){e.preventDefault(),i.drilldownCategory(t,e)}),!r&&i.chart.options.drilldown&&e.css(i.chart.options.drilldown.activeAxisLabelStyle||{})):e&&e.drillable&&e.removeOnDrillableClick&&(r||(e.styles={},e.element.removeAttribute("style"),e.css(e.basicStyles)),e.removeOnDrillableClick(),e.removeClass("highcharts-drilldown-axis-label")))}t.compose=function(t,h,u,c,m,w,g){te.compose(c,m);let f=h.prototype;if(!f.drillUp){let c=w.prototype.Element,m=tb.prototype,b=t.prototype,v=c.prototype,y=g.prototype;b.drilldownCategory=tw,b.getDDPoints=tg,T.compose(h,u),tl(T,"up",e),f.addSeriesAsDrilldown=m.addSeriesAsDrilldown,f.addSingleSeriesAsDrilldown=m.addSingleSeriesAsDrilldown,f.applyDrilldown=m.applyDrilldown,f.drillUp=m.drillUp,tl(h,"afterDrilldown",i),tl(h,"afterDrillUp",o),tl(h,"afterInit",l),tl(h,"drillup",r),tl(h,"drillupall",s),tl(h,"render",n),tl(h,"update",a),u.drilldown=P,v.fadeIn=d,y.drillable=p}}}(o||(o={}));let tv=o,ty=d();ty.Breadcrumbs=ty.Breadcrumbs||T,tv.compose(ty.Axis,ty.Chart,ty.defaultOptions,ty.Series,ty.seriesTypes,ty.SVGRenderer,ty.Tick);let tx=d();return n.default})());