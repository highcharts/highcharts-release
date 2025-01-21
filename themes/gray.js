!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/themes/gray
 * @requires highcharts
 *
 * (c) 2009-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(o._Highcharts):"function"==typeof define&&define.amd?define("highcharts/themes/gray",["highcharts/highcharts"],function(o){return e(o)}):"object"==typeof exports?exports["highcharts/themes/gray"]=e(o._Highcharts):o.Highcharts=e(o.Highcharts)}("undefined"==typeof window?this:window,o=>(()=>{"use strict";var e,r={944:e=>{e.exports=o}},t={};function l(o){var e=t[o];if(void 0!==e)return e.exports;var a=t[o]={exports:{}};return r[o](a,a.exports,l),a.exports}l.n=o=>{var e=o&&o.__esModule?()=>o.default:()=>o;return l.d(e,{a:e}),e},l.d=(o,e)=>{for(var r in e)l.o(e,r)&&!l.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},l.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e);var a={};l.d(a,{default:()=>c});var i=l(944),n=l.n(i);let{setOptions:s}=n();!function(o){o.options={colors:["#DDDF0D","#7798BF","#55BF3B","#DF5353","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"rgb(96, 96, 96)"],[1,"rgb(16, 16, 16)"]]},borderWidth:0,borderRadius:0,plotBackgroundColor:null,plotShadow:!1,plotBorderWidth:0},title:{style:{color:"#FFF",font:"16px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}},subtitle:{style:{color:"#DDD",font:"12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}},xAxis:{gridLineWidth:0,lineColor:"#999",tickColor:"#999",labels:{style:{color:"#999",fontWeight:"bold"}},title:{style:{color:"#AAA",font:"bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}}},yAxis:{alternateGridColor:null,minorTickInterval:null,gridLineColor:"rgba(255, 255, 255, .1)",minorGridLineColor:"rgba(255,255,255,0.07)",lineWidth:0,tickWidth:0,labels:{style:{color:"#999",fontWeight:"bold"}},title:{style:{color:"#AAA",font:"bold 12px Lucida Grande, Lucida Sans Unicode, Verdana, Arial, Helvetica, sans-serif"}}},legend:{backgroundColor:"rgba(48, 48, 48, 0.8)",itemStyle:{color:"#CCC"},itemHoverStyle:{color:"#FFF"},itemHiddenStyle:{color:"#333"},title:{style:{color:"#E0E0E0"}}},tooltip:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"rgba(96, 96, 96, .8)"],[1,"rgba(16, 16, 16, .8)"]]},borderWidth:0,style:{color:"#FFF"}},plotOptions:{series:{dataLabels:{color:"#444"},nullColor:"#444444"},line:{dataLabels:{color:"#CCC"},marker:{lineColor:"#333"}},spline:{marker:{lineColor:"#333"}},scatter:{marker:{lineColor:"#333"}},candlestick:{lineColor:"white"}},navigation:{buttonOptions:{symbolStroke:"#DDDDDD",theme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#606060"],[.6,"#333333"]]},stroke:"#000000"}}},rangeSelector:{buttonTheme:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},stroke:"#000000",style:{color:"#CCC",fontWeight:"bold"},states:{hover:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#BBB"],[.6,"#888"]]},stroke:"#000000",style:{color:"white"}},select:{fill:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.1,"#000"],[.3,"#333"]]},stroke:"#000000",style:{color:"yellow"}}}},inputStyle:{backgroundColor:"#333",color:"silver"},labelStyle:{color:"silver"}},navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},outlineColor:"#CCC",maskFill:"rgba(16, 16, 16, 0.5)",series:{color:"#7798BF",lineColor:"#A6C7ED"}},scrollbar:{barBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},barBorderColor:"#CCC",buttonArrowColor:"#CCC",buttonBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[.4,"#888"],[.6,"#555"]]},buttonBorderColor:"#CCC",rifleColor:"#FFF",trackBackgroundColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#000"],[1,"#333"]]},trackBorderColor:"#666"}},o.apply=function(){s(o.options)}}(e||(e={}));let d=e;n().theme=d.options,d.apply();let c=n();return a.default})());