!/**
 * Highcharts JS v12.1.2 (2024-12-21)
 * @module highcharts/modules/tiledwebmap
 * @requires highcharts
 *
 * (c) 2009-2024
 *
 * License: www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/tiledwebmap",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/tiledwebmap"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(e,t)=>(()=>{"use strict";var o={512:e=>{e.exports=t},944:t=>{t.exports=e}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var s=r[e]={exports:{}};return o[e](s,s.exports,i),s.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};i.d(s,{default:()=>v});var a=i(944),n=i.n(a);let p={Esri:class{constructor(){this.defaultCredits="Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS,  Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012",this.initialProjectionName="WebMercator",this.themes={WorldStreetMap:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20},DeLorme:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}",minZoom:1,maxZoom:11,credits:"Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme"},WorldTopoMap:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20,credits:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community"},WorldImagery:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20,credits:"Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"},WorldTerrain:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:13,credits:"Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS"},WorldShadedRelief:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:13,credits:"Tiles &copy; Esri &mdash; Source: Esri"},WorldPhysical:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:8,credits:"Tiles &copy; Esri &mdash; Source: US National Park Service"},NatGeoWorldMap:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:16,credits:"Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"},WorldGrayCanvas:{url:"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:16,credits:"Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"}}}},LimaLabs:class{constructor(){this.defaultCredits='Map data &copy;2023 <a href="https://maps.lima-labs.com/">LimaLabs</a>',this.initialProjectionName="WebMercator",this.requiresApiKey=!0,this.themes={Standard:{url:"https://cdn.lima-labs.com/{zoom}/{x}/{y}.png?api={apikey}",minZoom:0,maxZoom:20}}}},OpenStreetMap:class{constructor(){this.defaultCredits='Map data &copy2023 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',this.initialProjectionName="WebMercator",this.subdomains=["a","b","c"],this.themes={Standard:{url:"https://tile.openstreetmap.org/{zoom}/{x}/{y}.png",minZoom:0,maxZoom:19},Hot:{url:"https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",minZoom:0,maxZoom:19},OpenTopoMap:{url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",minZoom:0,maxZoom:17,credits:`Map data: &copy; <a href="https://www.openstreetmap.org/copyright">
                OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org">SRTM</a> 
                | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> 
                (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)`}}}},Stamen:class{constructor(){this.defaultCredits='&copy; Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://www.openstreetmap.org/copyright">ODbL</a>',this.initialProjectionName="WebMercator",this.subdomains=["a","b","c","d"],this.themes={Toner:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",minZoom:0,maxZoom:20},TonerBackground:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png",minZoom:0,maxZoom:20},TonerLite:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png",minZoom:0,maxZoom:20},Terrain:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png",minZoom:0,maxZoom:18},TerrainBackground:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png",minZoom:0,maxZoom:18},Watercolor:{url:"https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",minZoom:1,maxZoom:16,credits:'&copy Map tiles by <a href="https://stamen.com">Stamen Design</a>, under <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap</a>, under <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>'}}}},Thunderforest:class{constructor(){this.defaultCredits='Maps &copy <a href="https://www.thunderforest.com">Thunderforest</a>, Data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',this.initialProjectionName="WebMercator",this.requiresApiKey=!0,this.subdomains=["a","b","c"],this.themes={OpenCycleMap:{url:"https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Transport:{url:"https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},TransportDark:{url:"https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},SpinalMap:{url:"https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Landscape:{url:"https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Outdoors:{url:"https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Pioneer:{url:"https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},MobileAtlas:{url:"https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22},Neighbourhood:{url:"https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}",minZoom:0,maxZoom:22}}}},USGS:class{constructor(){this.defaultCredits='Tiles courtesy of the <a href="https://usgs.gov/">U.S. GeologicalSurvey</a>',this.initialProjectionName="WebMercator",this.themes={USTopo:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20},USImagery:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20},USImageryTopo:{url:"https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}",minZoom:0,maxZoom:20}}}}};var l=i(512),m=i.n(l);let{composed:h}=n(),{map:c}=m().seriesTypes,{addEvent:d,defined:y,error:u,merge:g,pick:f,pushUnique:x}=n();function M(e){let{geoBounds:t,chart:o}=e,r=(o.options.series||[]).filter(e=>"tiledwebmap"===e.type)[0];if(r&&r.provider&&r.provider.type&&!r.provider.url){let e=p[r.provider.type];if(y(e)){let{initialProjectionName:o}=new e;if(t){let{x1:e,y1:r,x2:i,y2:s}=t;this.recommendedMapView={projection:{name:o,parallels:[r,s],rotation:[-(e+i)/2]}}}else this.recommendedMapView={projection:{name:o},minZoom:0};return!1}u("Highcharts warning: Tiles Provider not defined in the Provider Registry.",!1)}return!0}class S extends c{constructor(){super(...arguments),this.redrawTiles=!1,this.isAnimating=!1}static compose(e){x(h,"TiledWebMapSeries")&&d(e,"onRecommendMapView",M)}lonLatToTile(e,t){let{lon:o,lat:r}=e;return{x:Math.floor((o+180)/360*Math.pow(2,t)),y:Math.floor((1-Math.log(Math.tan(r*Math.PI/180)+1/Math.cos(r*Math.PI/180))/Math.PI)/2*Math.pow(2,t))}}tileToLonLat(e,t,o){let r=e/Math.pow(2,o)*360-180,i=Math.PI-2*Math.PI*t/Math.pow(2,o);return{lon:r,lat:180/Math.PI*Math.atan(.5*(Math.exp(i)-Math.exp(-i)))}}drawPoints(){let e=this.chart,t=e.mapView;if(!t)return;let o=this.tiles=this.tiles||{},r=this.transformGroups=this.transformGroups||[],i=this,s=this.options.provider,{zoom:a}=t,n=f(t.projection.options.rotation&&t.projection.options.rotation[0],0),l=e.renderer.forExport?0:200,m=e=>{for(let r of Object.keys(o))parseFloat(r)===(t.zoom<0?0:Math.floor(t.zoom))||i.minZoom&&(t.zoom<0?0:Math.floor(t.zoom))<i.minZoom&&parseFloat(r)===i.minZoom||i.maxZoom&&(t.zoom<0?0:Math.floor(t.zoom))>i.maxZoom&&parseFloat(r)===i.maxZoom?Object.keys(o[r].tiles).forEach((t,i)=>{o[r].tiles[t].animate({opacity:1},{duration:e},()=>{i===Object.keys(o[r].tiles).length-1&&(o[r].isActive=!0)})}):Object.keys(o[r].tiles).forEach((t,i)=>{o[r].tiles[t].animate({opacity:0},{duration:e,defer:e/2},()=>{o[r].tiles[t].destroy(),delete o[r].tiles[t],i===Object.keys(o[r].tiles).length-1&&(o[r].isActive=!1,o[r].loaded=!1)})})},h=a<0?0:Math.floor(a),c=Math.pow(2,h),d=.638436911716859*Math.pow(2,a)/(.638436911716859*Math.pow(2,h)),g=256*d;if(s&&(s.type||s.url)){if(s.type&&!s.url){let o=p[s.type];if(!y(o)){u("Highcharts warning: Tiles Provider '"+s.type+"' not defined in the ProviderRegistry.",!1);return}let r=new o,i=r.initialProjectionName,a,n="";if(s.theme&&y(r.themes[s.theme]))a=r.themes[s.theme];else{let e=Object.keys(r.themes)[0];a=r.themes[e],u("Highcharts warning: The Tiles Provider's Theme '"+s.theme+"' is not defined in the Provider definition - falling back to '"+e+"'.",!1)}s.subdomain&&r.subdomains&&-1!==r.subdomains.indexOf(s.subdomain)?n=s.subdomain:y(r.subdomains)&&-1!==a.url.indexOf("{s}")&&(n=f(r.subdomains&&r.subdomains[0],""),u("Highcharts warning: The Tiles Provider's Subdomain '"+s.subdomain+"' is not defined in the Provider definition - falling back to '"+n+"'.",!1)),r.requiresApiKey&&(s.apiKey?a.url=a.url.replace("{apikey}",s.apiKey):(u("Highcharts warning: The Tiles Provider requires API Key to use tiles, use provider.apiKey to provide a token.",!1),a.url=a.url.replace("?apikey={apikey}",""))),s.url=a.url.replace("{s}",n),this.minZoom=a.minZoom,this.maxZoom=a.maxZoom;let l=f(e.userOptions.credits&&e.userOptions.credits.text,"Highcharts.com "+f(a.credits,r.defaultCredits));e.credits?e.credits.update({text:l}):e.addCredits({text:l,style:f(e.options.credits?.style,{})}),t.projection.options.name!==i&&u("Highcharts warning: The set projection is different than supported by Tiles Provider.",!1)}else t.projection.options.name||u("Highcharts warning: The set projection is different than supported by Tiles Provider.",!1);if(y(this.minZoom)&&h<this.minZoom?(c=Math.pow(2,h=this.minZoom),g=256*(d=.638436911716859*Math.pow(2,a)/(.638436911716859*Math.pow(2,h)))):y(this.maxZoom)&&h>this.maxZoom&&(c=Math.pow(2,h=this.maxZoom),g=256*(d=.638436911716859*Math.pow(2,a)/(.638436911716859*Math.pow(2,h)))),t.projection&&t.projection.def){t.projection.hasCoordinates=!0,r[h]||(r[h]=e.renderer.g().add(this.group));let a=(e,t,o,r)=>e.replace("{x}",t.toString()).replace("{y}",o.toString()).replace("{zoom}",r.toString()).replace("{z}",r.toString()),p=(n,p,h,d,y)=>{let u=n%c,f=p%c,x=u<0?u+c:u,M=f<0?f+c:f;if(!o[`${h}`].tiles[`${n},${p}`]&&s.url){let c=a(s.url,x,M,h);o[h].loaded=!1,o[`${h}`].tiles[`${n},${p}`]=e.renderer.image(c,n*g-d,p*g-y,g,g).attr({zIndex:2,opacity:0}).on("load",function(){s.onload&&s.onload.apply(this),(h===(t.zoom<0?0:Math.floor(t.zoom))||h===i.minZoom)&&(o[`${h}`].actualTilesCount++,o[`${h}`].howManyTiles===o[`${h}`].actualTilesCount&&(o[h].loaded=!0,i.isAnimating?i.redrawTiles=!0:(i.redrawTiles=!1,m(l)),o[`${h}`].actualTilesCount=0))}).add(r[h]),o[`${h}`].tiles[`${n},${p}`].posX=n,o[`${h}`].tiles[`${n},${p}`].posY=p,o[`${h}`].tiles[`${n},${p}`].originalURL=c}},d=t.pixelsToProjectedUnits({x:0,y:0}),y=t.projection.def.inverse([d.x,d.y]),u={lon:y[0]-n,lat:y[1]},f=t.pixelsToProjectedUnits({x:e.plotWidth,y:e.plotHeight}),x=t.projection.def.inverse([f.x,f.y]),M={lon:x[0]-n,lat:x[1]};(u.lat>t.projection.maxLatitude||M.lat<-1*t.projection.maxLatitude)&&(u.lat=t.projection.maxLatitude,M.lat=-1*t.projection.maxLatitude);let S=this.lonLatToTile(u,h),T=this.lonLatToTile(M,h),v=this.tileToLonLat(S.x,S.y,h),Z=t.projection.def.forward([v.lon+n,v.lat]),b=t.projectedUnitsToPixels({x:Z[0],y:Z[1]}),w=S.x*g-b.x,j=S.y*g-b.y;o[`${h}`]||(o[`${h}`]={tiles:{},isActive:!1,howManyTiles:0,actualTilesCount:0,loaded:!1}),o[`${h}`].howManyTiles=(T.x-S.x+1)*(T.y-S.y+1),o[`${h}`].actualTilesCount=0;for(let e=S.x;e<=T.x;e++)for(let t=S.y;t<=T.y;t++)p(e,t,h,w,j)}for(let r of Object.keys(o))for(let s of Object.keys(o[r].tiles))if(t.projection&&t.projection.def){let p=256*(.638436911716859*Math.pow(2,a)/(.638436911716859*Math.pow(2,parseFloat(r)))),c=o[r].tiles[Object.keys(o[r].tiles)[0]],{posX:d,posY:u}=o[r].tiles[s];if(y(d)&&y(u)&&y(c.posX)&&y(c.posY)){let a=this.tileToLonLat(c.posX,c.posY,parseFloat(r)),y=t.projection.def.forward([a.lon+n,a.lat]),g=t.projectedUnitsToPixels({x:y[0],y:y[1]}),f=c.posX*p-g.x,x=c.posY*p-g.y;if(e.renderer.globalAnimation&&e.hasRendered){let e=Number(o[r].tiles[s].attr("x")),t=Number(o[r].tiles[s].attr("y")),a=Number(o[r].tiles[s].attr("width")),n=Number(o[r].tiles[s].attr("height")),h=(i,l)=>{o[r].tiles[s].attr({x:e+(d*p-f-e)*l.pos,y:t+(u*p-x-t)*l.pos,width:a+(Math.ceil(p)+1-a)*l.pos,height:n+(Math.ceil(p)+1-n)*l.pos})};i.isAnimating=!0,o[r].tiles[s].attr({animator:0}).animate({animator:1},{step:h},function(){i.isAnimating=!1,i.redrawTiles&&(i.redrawTiles=!1,m(l))})}else(i.redrawTiles||parseFloat(r)!==h||(o[r].isActive||parseFloat(r)===h)&&Object.keys(o[r].tiles).map(e=>o[r].tiles[e]).some(e=>0===e.opacity))&&(i.redrawTiles=!1,m(l)),o[r].tiles[s].attr({x:d*p-f,y:u*p-x,width:Math.ceil(p)+1,height:Math.ceil(p)+1})}}}else u("Highcharts warning: Tiles Provider not defined in the Provider Registry.",!1)}update(){let{transformGroups:e}=this,t=this.chart,o=t.mapView,r=arguments[0],{provider:i}=r;if(e&&(e.forEach(e=>{0!==Object.keys(e).length&&e.destroy()}),this.transformGroups=[]),o&&!y(t.userOptions.mapView?.projection)&&i&&i.type){let e=p[i.type];if(e){let{initialProjectionName:t}=new e;o.update({projection:{name:t}})}}super.update.apply(this,arguments)}}S.defaultOptions=g(c.defaultOptions,{states:{inactive:{enabled:!1}}}),m().registerSeriesType("tiledwebmap",S);let T=n();T.TilesProviderRegistry=T.TilesProviderRegistry||p,S.compose(T.MapView);let v=n();return s.default})());