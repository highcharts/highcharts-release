!/**
 * Highcharts JS v11.4.2 (2024-05-22)
 *
 * Marker clusters module for Highcharts
 *
 * (c) 2010-2024 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/marker-clusters",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function i(t,e,i,s){t.hasOwnProperty(e)||(t[e]=s.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}i(e,"Extensions/MarkerClusters/MarkerClusterDefaults.js",[],function(){return{cluster:{enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}},tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}}}),i(e,"Extensions/MarkerClusters/MarkerClusterScatter.js",[e["Core/Animation/AnimationUtilities.js"],e["Extensions/MarkerClusters/MarkerClusterDefaults.js"],e["Core/Utilities.js"]],function(t,e,i){let s;let{animObject:a}=t,{cluster:r}=e,{addEvent:o,defined:n,error:l,isArray:p,isFunction:u,isObject:d,isNumber:h,merge:c,objectEach:f,relativeLength:m,syncTimeout:g}=i,x={grid:function(t,e,i,s){let a,r,o,n,l;let p={},u=this.getGridOffset(),d=this.getScaledGridSize(s);for(l=0;l<t.length;l++){let s=Z(this,{x:t[l],y:e[l]});a=s.x-u.plotLeft,r=s.y-u.plotTop,o=Math.floor(a/d),p[n=Math.floor(r/d)+"-"+o]||(p[n]=[]),p[n].push({dataIndex:i[l],x:t[l],y:e[l]})}return p},kmeans:function(t,e,i,s){let a=[],o=[],n={},l=s.processedDistance||r.layoutAlgorithm.distance,p=s.iterations,u=0,d=!0,h=0,c=0,f,m=[];s.processedGridSize=s.processedDistance;let g=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,t,e,i,s):{};for(let t in g)g[t].length>1&&(f=S(g[t]),a.push({posX:f.x,posY:f.y,oldX:0,oldY:0,startPointsLen:g[t].length,points:[]}));for(;d;){for(let t of a)t.points.length=0;o.length=0;for(let s=0;s<t.length;s++)h=t[s],c=e[s],(m=this.getClusterDistancesFromPoint(a,h,c)).length&&m[0].distance<l?a[m[0].clusterIndex].points.push({x:h,y:c,dataIndex:i[s]}):o.push({x:h,y:c,dataIndex:i[s]});for(let t=0;t<a.length;t++)1===a[t].points.length&&(m=this.getClusterDistancesFromPoint(a,a[t].points[0].x,a[t].points[0].y))[1].distance<l&&(a[m[1].clusterIndex].points.push(a[t].points[0]),a[m[0].clusterIndex].points.length=0);d=!1;for(let t=0;t<a.length;t++)f=S(a[t].points),a[t].oldX=a[t].posX,a[t].oldY=a[t].posY,a[t].posX=f.x,a[t].posY=f.y,(a[t].posX>a[t].oldX+1||a[t].posX<a[t].oldX-1||a[t].posY>a[t].oldY+1||a[t].posY<a[t].oldY-1)&&(d=!0);p&&(d=u<p-1),u++}for(let t=0,e=a.length;t<e;++t)n["cluster"+t]=a[t].points;for(let t=0,e=o.length;t<e;++t)n["noise"+t]=[o[t]];return n},optimizedKmeans:function(t,e,i,s){let a=s.processedDistance||r.layoutAlgorithm.gridSize,o=this.getRealExtremes(),l=(this.options.cluster||{}).marker,p,u={},d,h;if(!this.markerClusterInfo||this.initMaxX&&this.initMaxX<o.maxX||this.initMinX&&this.initMinX>o.minX||this.initMaxY&&this.initMaxY<o.maxY||this.initMinY&&this.initMinY>o.minY)this.initMaxX=o.maxX,this.initMinX=o.minX,this.initMaxY=o.maxY,this.initMinY=o.minY,u=this.markerClusterAlgorithms?this.markerClusterAlgorithms.kmeans.call(this,t,e,i,s):{},this.baseClusters=null;else{for(let t of(this.baseClusters||(this.baseClusters={clusters:this.markerClusterInfo.clusters,noise:this.markerClusterInfo.noise}),this.baseClusters.clusters)){for(let e of(t.pointsOutside=[],t.pointsInside=[],t.data)){let i=Z(this,e),s=Z(this,t);p=Math.sqrt(Math.pow(i.x-s.x,2)+Math.pow(i.y-s.y,2)),d=a-(h=t.clusterZone&&t.clusterZone.marker&&t.clusterZone.marker.radius?t.clusterZone.marker.radius:l&&l.radius?l.radius:r.marker.radius)>=0?a-h:h,p>h+d&&n(t.pointsOutside)?t.pointsOutside.push(e):n(t.pointsInside)&&t.pointsInside.push(e)}t.pointsInside.length&&(u[t.id]=t.pointsInside);let e=0;for(let i of t.pointsOutside)u[t.id+"_noise"+e++]=[i]}for(let t of this.baseClusters.noise)u[t.id]=t.data}return u}},y=[],C=0;function k(t,e,i){t.attr({opacity:e}).animate({opacity:1},i)}function M(t,e,i,s){for(let a of(I(t,s,i,!0,!0),e))a.point&&a.point.destroy&&a.point.destroy()}function I(t,e,i,s,a){t.point&&(s&&t.point.graphic&&(t.point.graphic.show(),k(t.point.graphic,e,i)),a&&t.point.dataLabel&&(t.point.dataLabel.show(),k(t.point.dataLabel,e,i)))}function S(t){let e=t.length,i=0,s=0;for(let a=0;a<e;a++)i+=t[a].x,s+=t[a].y;return{x:i/e,y:s/e}}function b(t,e){let i=[];return i.length=e,t.clusters.forEach(function(t){t.data.forEach(function(t){i[t.dataIndex]=t})}),t.noise.forEach(function(t){i[t.data[0].dataIndex]=t.data[0]}),i}function A(){return Math.random().toString(36).substring(2,7)+"-"+C++}function X(t,e,i){t.point&&(e&&t.point.graphic&&t.point.graphic.hide(),i&&t.point.dataLabel&&t.point.dataLabel.hide())}function Y(t){(t.point||t.target).firePointEvent("drillToCluster",t,function(t){let e=t.point||t.target,i=e.series,s=e.series.xAxis,a=e.series.yAxis,r=e.series.chart,{inverted:o,mapView:n,pointer:l}=r;if((i.options.cluster||{}).drillToCluster&&e.clusteredData){let t=e.clusteredData.map(t=>t.x).sort((t,e)=>t-e),i=e.clusteredData.map(t=>t.y).sort((t,e)=>t-e),p=t[0],u=t[t.length-1],d=i[0],h=i[i.length-1],c=Math.abs((u-p)*.1),f=Math.abs((h-d)*.1),m=Math.min(p,u)-c,g=Math.max(p,u)+c,x=Math.min(d,h)-f,y=Math.max(d,h)+f;if(n)n.fitToBounds({x1:m,x2:g,y1:x,y2:y});else if(s&&a){let t=s.toPixels(m),e=s.toPixels(g),i=a.toPixels(x),n=a.toPixels(y);o&&([t,e,i,n]=[i,n,t,e]),t>e&&([t,e]=[e,t]),i>n&&([i,n]=[n,i]),l&&(l.zoomX=!0,l.zoomY=!0),r.transform({from:{x:t,y:i,width:e-t,height:n-i}})}}})}function D(t,e){let{chart:i,xAxis:s,yAxis:a}=t;return i.mapView?i.mapView.pixelsToProjectedUnits(e):{x:s?s.toValue(e.x):0,y:a?a.toValue(e.y):0}}function L(t){let e=this.chart,i=e.mapView,s=a((this.options.cluster||{}).animation),r=s.duration||500,o=(this.markerClusterInfo||{}).pointsState,n=(o||{}).newState,l=(o||{}).oldState,p=[],u,d,h,c=0,f=0,m=0,x=!1,y=!1;if(l&&n){let a=Z(this,d=n[t.stateId]);f=a.x-(i?0:e.plotLeft),m=a.y-(i?0:e.plotTop),1===d.parentsId.length?(u=l[(n||{})[t.stateId].parentsId[0]],d.point&&d.point.graphic&&u&&u.point&&u.point.plotX&&u.point.plotY&&u.point.plotX!==d.point.plotX&&u.point.plotY!==d.point.plotY&&(h=d.point.graphic.getBBox(),c=d.point.graphic&&d.point.graphic.isImg?0:h.width/2,d.point.graphic.attr({x:u.point.plotX-c,y:u.point.plotY-c}),d.point.graphic.animate({x:f-(d.point.graphic.radius||0),y:m-(d.point.graphic.radius||0)},s,function(){y=!0,u.point&&u.point.destroy&&u.point.destroy()}),d.point.dataLabel&&d.point.dataLabel.alignAttr&&u.point.dataLabel&&u.point.dataLabel.alignAttr&&(d.point.dataLabel.attr({x:u.point.dataLabel.alignAttr.x,y:u.point.dataLabel.alignAttr.y}),d.point.dataLabel.animate({x:d.point.dataLabel.alignAttr.x,y:d.point.dataLabel.alignAttr.y},s)))):0===d.parentsId.length?(X(d,!0,!0),g(function(){I(d,.1,s,!0,!0)},r/2)):(X(d,!0,!0),d.parentsId.forEach(function(t){l&&l[t]&&(u=l[t],p.push(u),u.point&&u.point.graphic&&(x=!0,u.point.graphic.show(),u.point.graphic.animate({x:f-(u.point.graphic.radius||0),y:m-(u.point.graphic.radius||0),opacity:.4},s,function(){y=!0,M(d,p,s,.7)}),u.point.dataLabel&&-9999!==u.point.dataLabel.y&&d.point&&d.point.dataLabel&&d.point.dataLabel.alignAttr&&(u.point.dataLabel.show(),u.point.dataLabel.animate({x:d.point.dataLabel.alignAttr.x,y:d.point.dataLabel.alignAttr.y,opacity:.4},s))))}),g(function(){y||M(d,p,s,.85)},r),x||g(function(){M(d,p,s,.1)},r/2))}}function P(){(this.markerClusterSeriesData||[]).forEach(function(t){t&&t.destroy&&t.destroy()}),this.markerClusterSeriesData=null}function z(){let t,e,i,a,l,p,d,c,f,g,x,y,C,k,M,I;let S=this,b=S.chart,A=b.mapView,X=S.xData,L=S.yData,P=S.options.cluster,z=S.getRealExtremes(),w=[],E=[],j=[];if(A&&S.is("mappoint")&&X&&L&&(S.options.data||[]).forEach((t,e)=>{let i=S.projectPoint(t);i&&(X[e]=i.x,L[e]=i.y)}),P&&P.enabled&&X&&X.length&&L&&L.length&&!b.polar){x=P.layoutAlgorithm.type,(k=P.layoutAlgorithm).processedGridSize=m(k.gridSize||r.layoutAlgorithm.gridSize,b.plotWidth),k.processedDistance=m(k.distance||r.layoutAlgorithm.distance,b.plotWidth),a=k.kmeansThreshold||r.layoutAlgorithm.kmeansThreshold;let A=k.processedGridSize/2,O=D(S,{x:0,y:0}),T=D(S,{x:A,y:A});for(I=0,l=Math.abs(O.x-T.x),p=Math.abs(O.y-T.y);I<X.length;I++)!S.dataMaxX&&(n(c)&&n(d)&&n(g)&&n(f)?h(L[I])&&h(g)&&h(f)&&(c=Math.max(X[I],c),d=Math.min(X[I],d),g=Math.max(L[I]||g,g),f=Math.min(L[I]||f,f)):(c=d=X[I],g=f=L[I])),X[I]>=z.minX-l&&X[I]<=z.maxX+l&&(L[I]||z.minY)>=z.minY-p&&(L[I]||z.maxY)<=z.maxY+p&&(w.push(X[I]),E.push(L[I]),j.push(I));n(c)&&n(d)&&h(g)&&h(f)&&(S.dataMaxX=c,S.dataMinX=d,S.dataMaxY=g,S.dataMinY=f),y=(C=(u(x)?x:S.markerClusterAlgorithms?x&&S.markerClusterAlgorithms[x]?S.markerClusterAlgorithms[x]:w.length<a?S.markerClusterAlgorithms.kmeans:S.markerClusterAlgorithms.grid:function(){return!1}).call(this,w,E,j,k))?S.getClusteredData(C,P):C,P.animation&&S.markerClusterInfo&&S.markerClusterInfo.pointsState&&S.markerClusterInfo.pointsState.oldState?(function(t){if(t){let e;for(let i of Object.keys(t))(e=t[i]).point&&e.point.destroy&&e.point.destroy()}}(S.markerClusterInfo.pointsState.oldState),t=S.markerClusterInfo.pointsState.newState):t={},e=X.length,i=S.markerClusterInfo,y&&(S.processedXData=y.groupedXData,S.processedYData=y.groupedYData,S.hasGroupedData=!0,S.markerClusterInfo=y,S.groupMap=y.groupMap),s.apply(this),y&&S.markerClusterInfo&&((S.markerClusterInfo.clusters||[]).forEach(function(t){(M=S.points[t.index]).isCluster=!0,M.clusteredData=t.data,M.clusterPointsAmount=t.data.length,t.point=M,o(M,"click",Y)}),(S.markerClusterInfo.noise||[]).forEach(function(t){t.point=S.points[t.index]}),P.animation&&S.markerClusterInfo&&(S.markerClusterInfo.pointsState={oldState:t,newState:S.getPointsState(y,i,e)}),P.animation?this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else s.apply(this)}function w(t,e,i){let s=[];for(let a=0;a<t.length;a++){let r=Z(this,{x:e,y:i}),o=Z(this,{x:t[a].posX,y:t[a].posY}),n=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2));s.push({clusterIndex:a,distance:n})}return s.sort((t,e)=>t.distance-e.distance)}function E(t,e){let i=[],s=[],a=[],o=[],n=[],h=Math.max(2,e.minimumClusterSize||2),f=0,m,g,x,y,C,k,M,I,b,X,Y,D,L,P;if(u(e.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(t))return l("Highcharts marker-clusters module: The custom algorithm result is not valid!",!1,this.chart),!1;for(P in t)if(t[P].length>=h){if(x=t[P],m=A(),C=x.length,e.zones)for(L=0;L<e.zones.length;L++)C>=e.zones[L].from&&C<=e.zones[L].to&&((Y=e.zones[L]).zoneIndex=L,X=e.zones[L].marker,D=e.zones[L].className);for(b=S(x),"grid"!==e.layoutAlgorithm.type||e.allowOverlap?M={x:b.x,y:b.y}:(k=this.options.marker||{},M=this.preventClusterCollisions({x:b.x,y:b.y,key:P,groupedData:t,gridSize:this.getScaledGridSize(e.layoutAlgorithm),defaultRadius:k.radius||3+(k.lineWidth||0),clusterRadius:X&&X.radius?X.radius:(e.marker||{}).radius||r.marker.radius})),L=0;L<C;L++)x[L].parentStateId=m;if(a.push({x:M.x,y:M.y,id:P,stateId:m,index:f,data:x,clusterZone:Y,clusterZoneClassName:D}),i.push(M.x),s.push(M.y),n.push({options:{formatPrefix:"cluster",dataLabels:e.dataLabels,marker:c(e.marker,{states:e.states},X||{})}}),this.options.data&&this.options.data.length)for(L=0;L<C;L++)d(this.options.data[x[L].dataIndex])&&(x[L].options=this.options.data[x[L].dataIndex]);f++,X=null}else for(L=0;L<t[P].length;L++)g=t[P][L],m=A(),I=null,y=((this.options||{}).data||[])[g.dataIndex],i.push(g.x),s.push(g.y),g.parentStateId=m,o.push({x:g.x,y:g.y,id:P,stateId:m,index:f,data:t[P]}),I=y&&"object"==typeof y&&!p(y)?c(y,{x:g.x,y:g.y}):{userOptions:y,x:g.x,y:g.y},n.push({options:I}),f++;return{clusters:a,noise:o,groupedXData:i,groupedYData:s,groupMap:n}}function j(){let t=this.chart,e=this.xAxis,i=this.yAxis,s=0;return{plotLeft:e&&this.dataMinX&&this.dataMaxX?e.reversed?e.toPixels(this.dataMaxX):e.toPixels(this.dataMinX):t.plotLeft,plotTop:i&&this.dataMinY&&this.dataMaxY?i.reversed?i.toPixels(this.dataMinY):i.toPixels(this.dataMaxY):t.plotTop}}function O(t,e,i){let s,a;let r=e?b(e,i):[],o=b(t,i),n={};y=[],t.clusters.forEach(function(t){n[t.stateId]={x:t.x,y:t.y,id:t.stateId,point:t.point,parentsId:[]}}),t.noise.forEach(function(t){n[t.stateId]={x:t.x,y:t.y,id:t.stateId,point:t.point,parentsId:[]}});for(let t=0;t<o.length;t++)s=o[t],a=r[t],s&&a&&s.parentStateId&&a.parentStateId&&n[s.parentStateId]&&-1===n[s.parentStateId].parentsId.indexOf(a.parentStateId)&&(n[s.parentStateId].parentsId.push(a.parentStateId),-1===y.indexOf(a.parentStateId)&&y.push(a.parentStateId));return n}function T(){let t=this.chart,e=t.mapView?0:t.plotLeft,i=D(this,{x:e,y:t.mapView?0:t.plotTop}),s=D(this,{x:e+t.plotWidth,y:e+t.plotHeight}),a=i.x,r=s.x,o=i.y,n=s.y;return{minX:Math.min(a,r),maxX:Math.max(a,r),minY:Math.min(o,n),maxY:Math.max(o,n)}}function V(t){let e=this.xAxis,i=this.chart.mapView,s=t.processedGridSize||r.layoutAlgorithm.gridSize,a=!0,o=1,n=1;this.gridValueSize||(i?this.gridValueSize=s/i.getScale():this.gridValueSize=Math.abs(e.toValue(s)-e.toValue(0)));let l=+(s/(i?this.gridValueSize*i.getScale():e.toPixels(this.gridValueSize)-e.toPixels(0))).toFixed(14);for(;a&&1!==l;){let t=Math.pow(2,o);l>.75&&l<1.25?a=!1:l>=1/t&&l<1/t*2?(a=!1,n=t):l<=t&&l>t/2&&(a=!1,n=1/t),o++}return s/n/l}function G(){let t=this.markerClusterSeriesData,e=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},i=y.map(t=>(e[t].point||{}).id||"");(t||[]).forEach(function(t){t&&-1!==i.indexOf(t.id)?(t.graphic&&t.graphic.hide(),t.dataLabel&&t.dataLabel.hide()):t&&t.destroy&&t.destroy()})}function v(t){let e=!1,i;return!!d(t)&&(f(t,function(t){if(e=!0,!p(t)||!t.length){e=!1;return}for(i=0;i<t.length;i++)if(!d(t[i])||!t[i].x||!t[i].y){e=!1;return}}),e)}function R(t){let[e,i]=t.key.split("-").map(parseFloat),s=t.gridSize,a=t.groupedData,o=t.defaultRadius,l=t.clusterRadius,p=i*s,u=e*s,d=Z(this,t),h=[],c=(this.options.cluster||{}).marker,f=(this.options.cluster||{}).zones,m=this.getGridOffset(),g=d.x,x=d.y,y=0,C=0,k,M,I,b,A,X,Y,L,P,z,w,E,j;for(g-=m.plotLeft,x-=m.plotTop,Y=1;Y<5;Y++)for(L=0,I=Y%2?-1:1,b=Y<3?-1:1,A=Math.floor((g+I*l)/s),j=[(X=Math.floor((x+b*l)/s))+"-"+A,X+"-"+i,e+"-"+A];L<j.length;L++)-1===h.indexOf(j[L])&&j[L]!==t.key&&h.push(j[L]);for(let t of h)if(a[t]){a[t].posX||(w=S(a[t]),a[t].posX=w.x,a[t].posY=w.y);let d=Z(this,{x:a[t].posX||0,y:a[t].posY||0});if(k=d.x-m.plotLeft,M=d.y-m.plotTop,[z,P]=t.split("-").map(parseFloat),f)for(Y=0,y=a[t].length;Y<f.length;Y++)y>=f[Y].from&&y<=f[Y].to&&(C=n((f[Y].marker||{}).radius)?f[Y].marker.radius||0:c&&c.radius?c.radius:r.marker.radius);a[t].length>1&&0===C&&c&&c.radius?C=c.radius:1===a[t].length&&(C=o),E=l+C,C=0,P!==i&&Math.abs(g-k)<E&&(g=P-i<0?p+l:p+s-l),z!==e&&Math.abs(x-M)<E&&(x=z-e<0?u+l:u+s-l)}let O=D(this,{x:g+m.plotLeft,y:x+m.plotTop});return a[t.key].posX=O.x,a[t.key].posY=O.y,O}function Z(t,e){let{chart:i,xAxis:s,yAxis:a}=t;return i.mapView?i.mapView.projectedUnitsToPixels(e):{x:s?s.toPixels(e.x):0,y:a?a.toPixels(e.y):0}}return{compose:function(t,i){let a=i.prototype;a.markerClusterAlgorithms||(s=a.generatePoints,a.markerClusterAlgorithms=x,a.animateClusterPoint=L,a.destroyClusteredData=P,a.generatePoints=z,a.getClusterDistancesFromPoint=w,a.getClusteredData=E,a.getGridOffset=j,a.getPointsState=O,a.getRealExtremes=T,a.getScaledGridSize=V,a.hideClusteredData=G,a.isValidGroupedDataObject=v,a.preventClusterCollisions=R,o(i,"destroy",a.destroyClusteredData),(t.plotOptions||{}).series=c((t.plotOptions||{}).series,e))}}}),i(e,"Extensions/MarkerClusters/MarkerClusters.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Defaults.js"],e["Core/Globals.js"],e["Extensions/MarkerClusters/MarkerClusterDefaults.js"],e["Extensions/MarkerClusters/MarkerClusterScatter.js"],e["Core/Utilities.js"]],function(t,e,i,s,a,r){let{animObject:o}=t,{defaultOptions:n}=e,{composed:l}=i,{addEvent:p,defined:u,error:d,isFunction:h,merge:c,pushUnique:f,syncTimeout:m}=r;function g(){let t=this.chart,e=0;for(let i of t.series)i.markerClusterInfo&&(e=o((i.options.cluster||{}).animation).duration||0);m(()=>{t.tooltip&&t.tooltip.destroy()},e)}function x(){for(let t of this.series||[])if(t.markerClusterInfo){let e=t.options.cluster,i=((t.markerClusterInfo||{}).pointsState||{}).oldState;if((e||{}).animation&&t.markerClusterInfo&&0===(t.chart.pointer?.pinchDown||[]).length&&"pan"!==((t.xAxis||{}).eventArgs||{}).trigger&&i&&Object.keys(i).length){for(let e of t.markerClusterInfo.clusters)t.animateClusterPoint(e);for(let e of t.markerClusterInfo.noise)t.animateClusterPoint(e)}}}function y(t){let e=(((t.point||t.target).series.options.cluster||{}).events||{}).drillToCluster;h(e)&&e.call(this,t)}function C(){if(this.dataGroup)return d("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1}function k(){let t=(this.options.cluster||{}).drillToCluster;if(this.markerClusterInfo&&this.markerClusterInfo.clusters)for(let e of this.markerClusterInfo.clusters)e.point&&e.point.graphic&&(e.point.graphic.addClass("highcharts-cluster-point"),t&&e.point&&(e.point.graphic.css({cursor:"pointer"}),e.point.dataLabel&&e.point.dataLabel.css({cursor:"pointer"})),u(e.clusterZone)&&e.point.graphic.addClass(e.clusterZoneClassName||"highcharts-cluster-zone-"+e.clusterZone.zoneIndex))}return(n.plotOptions||{}).series=c((n.plotOptions||{}).series,s),{compose:function(t,e,i,s){if(f(l,"MarkerClusters")){let r=s.prototype.pointClass,{scatter:o}=s.types;p(t,"setExtremes",g),p(e,"render",x),p(r,"drillToCluster",y),p(r,"update",C),p(s,"afterRender",k),o&&a.compose(i,o)}}}}),i(e,"Extensions/MarkerClusters/MarkerClusterSymbols.js",[],function(){let t;function e(e,i,s,a){let r=s/2,o=a/2,n=t.arc(e+r,i+o,r-4,o-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),l=t.arc(e+r,i+o,r-3,o-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:r-2,open:!1});return t.arc(e+r,i+o,r-1,o-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:r,open:!1}).concat(l,n)}return{compose:function(i){(t=i.prototype.symbols).cluster=e}}}),i(e,"masters/modules/marker-clusters.src.js",[e["Core/Globals.js"],e["Extensions/MarkerClusters/MarkerClusters.js"],e["Extensions/MarkerClusters/MarkerClusterSymbols.js"]],function(t,e,i){return e.compose(t.Axis,t.Chart,t.defaultOptions,t.Series),i.compose(t.SVGRenderer),t})});