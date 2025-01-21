!/**
 * Highcharts JS v12.1.2-modified (2025-01-21)
 * @module highcharts/modules/networkgraph
 * @requires highcharts
 *
 * Force directed graph module
 *
 * (c) 2010-2024 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(t._Highcharts,t._Highcharts.SVGElement,t._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/modules/networkgraph",["highcharts/highcharts"],function(t){return e(t,t.SVGElement,t.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/modules/networkgraph"]=e(t._Highcharts,t._Highcharts.SVGElement,t._Highcharts.SeriesRegistry):t.Highcharts=e(t.Highcharts,t.Highcharts.SVGElement,t.Highcharts.SeriesRegistry)}("undefined"==typeof window?this:window,(t,e,i)=>(()=>{"use strict";var s,o={28:t=>{t.exports=e},512:t=>{t.exports=i},563:e=>{e.exports=t}},r={};function a(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return o[t](i,i.exports,a),i.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n={};a.d(n,{default:()=>tS});var h=a(563),l=a.n(h),d=a(28),p=a.n(d);let{composed:c}=l(),{addEvent:u,pushUnique:f}=l();function m(){let t,e,i;let s=this;s.container&&(t=u(s.container,"mousedown",t=>{let o=s.hoverPoint;o&&o.series&&o.series.hasDraggableNodes&&o.series.options.draggable&&(o.series.onMouseDown(o,t),e=u(s.container,"mousemove",t=>o&&o.series&&o.series.onMouseMove(o,t)),i=u(s.container.ownerDocument,"mouseup",t=>(e(),i(),o&&o.series&&o.series.onMouseUp(o,t))))})),u(s,"destroy",function(){t()})}let g={compose:function(t){f(c,"DragNodes")&&u(t,"load",m)},onMouseDown:function(t,e){let i=this.chart.pointer?.normalize(e)||e;t.fixedPosition={chartX:i.chartX,chartY:i.chartY,plotX:t.plotX,plotY:t.plotY},t.inDragMode=!0},onMouseMove:function(t,e){if(t.fixedPosition&&t.inDragMode){let i,s;let o=this.chart,r=o.pointer?.normalize(e)||e,a=t.fixedPosition.chartX-r.chartX,n=t.fixedPosition.chartY-r.chartY,h=o.graphLayoutsLookup;(Math.abs(a)>5||Math.abs(n)>5)&&(i=t.fixedPosition.plotX-a,s=t.fixedPosition.plotY-n,o.isInsidePlot(i,s)&&(t.plotX=i,t.plotY=s,t.hasDragged=!0,this.redrawHalo(t),h.forEach(t=>{t.restartSimulation()})))}},onMouseUp:function(t){t.fixedPosition&&(t.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),t.inDragMode=t.hasDragged=!1,this.options.fixedDraggable||delete t.fixedPosition)},redrawHalo:function(t){t&&this.halo&&this.halo.attr({d:t.haloPath(this.options.states.hover.halo.size)})}},{setAnimation:y}=l(),{composed:x}=l(),{addEvent:b,pushUnique:k}=l();function v(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(t=>{t.updateSimulation()}),this.redraw())}function N(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(t=>{t.updateSimulation(!1)}),this.redraw())}function L(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(t=>{t.stop()})}function P(){let t,e=!1,i=i=>{i.maxIterations--&&isFinite(i.temperature)&&!i.isStable()&&!i.enableSimulation&&(i.beforeStep&&i.beforeStep(),i.step(),t=!1,e=!0)};if(this.graphLayoutsLookup){for(y(!1,this),this.graphLayoutsLookup.forEach(t=>t.start());!t;)t=!0,this.graphLayoutsLookup.forEach(i);e&&this.series.forEach(t=>{t&&t.layout&&t.render()})}}let w={compose:function(t){k(x,"GraphLayout")&&(b(t,"afterPrint",v),b(t,"beforePrint",N),b(t,"predraw",L),b(t,"render",P))},integrations:{},layouts:{}};var S=a(512),M=a.n(S);let{series:{prototype:X,prototype:{pointClass:{prototype:T}}}}=M(),{defined:Y,extend:D,find:E,merge:F,pick:C}=l();!function(t){function e(){return this.data=[].concat(this.points||[],this.nodes),X.destroy.apply(this,arguments)}function i(){this.nodes&&(this.nodes.forEach(t=>{t.destroy()}),this.nodes.length=0),X.setData.apply(this,arguments)}function s(t){let e=arguments,i=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==t&&i.forEach(t=>{t&&t.series&&(T.setState.apply(t,e),!t.isNode&&(t.fromNode.graphic&&T.setState.apply(t.fromNode,e),t.toNode&&t.toNode.graphic&&T.setState.apply(t.toNode,e)))}),T.setState.apply(this,e)}function o(t,e,i,s){let o=this.series.options.nodes,r=this.series.options.data,a=r?.length||0,n=r?.[this.index];if(T.update.call(this,t,!this.isNode&&e,i,s),this.isNode){let t=(o||[]).reduce((t,e,i)=>this.id===e.id?i:t,-1),s=F(o&&o[t]||{},r?.[this.index]||{});r&&(n?r[this.index]=n:r.length=a),o?t>=0?o[t]=s:o.push(s):this.series.options.nodes=[s],C(e,!0)&&this.series.chart.redraw(i)}}t.compose=function(t,r){let a=t.prototype,n=r.prototype;return a.setNodeState=s,a.setState=s,a.update=o,n.destroy=e,n.setData=i,r},t.createNode=function(t){let e=this.pointClass,i=(t,e)=>E(t,t=>t.id===e),s=i(this.nodes,t),o;if(!s){o=this.options.nodes&&i(this.options.nodes,t);let r=new e(this,D({className:"highcharts-node",isNode:!0,id:t,y:1},o));r.linksTo=[],r.linksFrom=[],r.getSum=function(){let t=0,e=0;return r.linksTo.forEach(e=>{t+=e.weight||0}),r.linksFrom.forEach(t=>{e+=t.weight||0}),Math.max(t,e)},r.offset=function(t,e){let i=0;for(let s=0;s<r[e].length;s++){if(r[e][s]===t)return i;i+=r[e][s].weight}},r.hasShape=function(){let t=0;return r.linksTo.forEach(e=>{e.outgoing&&t++}),!r.linksTo.length||t!==r.linksTo.length},r.index=this.nodes.push(r)-1,s=r}return s.formatPrefix="node",s.name=s.name||s.options.id||"",s.mass=C(s.options.mass,s.options.marker&&s.options.marker.radius,this.options.marker&&this.options.marker.radius,4),s},t.destroy=e,t.generatePoints=function(){let t=this.chart,e={};X.generatePoints.call(this),this.nodes||(this.nodes=[]),this.colorCounter=0,this.nodes.forEach(t=>{t.linksFrom.length=0,t.linksTo.length=0,t.level=t.options.level}),this.points.forEach(i=>{Y(i.from)&&(e[i.from]||(e[i.from]=this.createNode(i.from)),e[i.from].linksFrom.push(i),i.fromNode=e[i.from],t.styledMode?i.colorIndex=C(i.options.colorIndex,e[i.from].colorIndex):i.color=i.options.color||e[i.from].color),Y(i.to)&&(e[i.to]||(e[i.to]=this.createNode(i.to)),e[i.to].linksTo.push(i),i.toNode=e[i.to]),i.name=i.name||i.id},this),this.nodeLookup=e},t.setNodeState=s,t.updateNode=o}(s||(s={}));let I=s,{series:{prototype:A,prototype:{pointClass:O}}}=M(),{addEvent:R,css:H,defined:B,extend:G,pick:q}=l();class _ extends O{destroy(){return this.isNode&&this.linksFrom.concat(this.linksTo).forEach(function(t){t.destroyElements&&t.destroyElements()}),this.series.layout.removeElementFromCollection(this,this.series.layout[this.isNode?"nodes":"links"]),O.prototype.destroy.apply(this,arguments)}getDegree(){let t=this.isNode?this.linksFrom.length+this.linksTo.length:0;return 0===t?1:t}getLinkAttributes(){let t=this.series.options.link,e=this.options;return{"stroke-width":q(e.width,t.width),stroke:e.color||t.color,dashstyle:e.dashStyle||t.dashStyle,opacity:q(e.opacity,t.opacity,1)}}getLinkPath(){let t=this.fromNode,e=this.toNode;return t.plotX>e.plotX&&(t=this.toNode,e=this.fromNode),[["M",t.plotX||0,t.plotY||0],["L",e.plotX||0,e.plotY||0]]}getMass(){let t=this.fromNode.mass,e=this.toNode.mass,i=t+e;return{fromNode:1-t/i,toNode:1-e/i}}constructor(t,e,i){super(t,e,i),this.series.options.draggable&&!this.series.chart.styledMode&&(R(this,"mouseOver",function(){H(this.series.chart.container,{cursor:"move"})}),R(this,"mouseOut",function(){H(this.series.chart.container,{cursor:"default"})}))}isValid(){return!this.isNode||B(this.id)}redrawLink(){let t;let e=this.getLinkPath();if(this.graphic){this.shapeArgs={d:e},this.series.chart.styledMode||(t=this.series.pointAttribs(this),this.graphic.attr(t),(this.dataLabels||[]).forEach(function(e){e&&e.attr({opacity:t.opacity})})),this.graphic.animate(this.shapeArgs);let i=e[0],s=e[1];"M"===i[0]&&"L"===s[0]&&(this.plotX=(i[1]+s[1])/2,this.plotY=(i[2]+s[2])/2)}}remove(t,e){let i=this.series,s=i.options.nodes||[],o,r=s.length;if(this.isNode){for(i.points=[],[].concat(this.linksFrom).concat(this.linksTo).forEach(function(t){(o=t.fromNode.linksFrom.indexOf(t))>-1&&t.fromNode.linksFrom.splice(o,1),(o=t.toNode.linksTo.indexOf(t))>-1&&t.toNode.linksTo.splice(o,1),A.removePoint.call(i,i.data.indexOf(t),!1,!1)}),i.points=i.data.slice(),i.nodes.splice(i.nodes.indexOf(this),1);r--;)if(s[r].id===this.options.id){i.options.nodes.splice(r,1);break}this&&this.destroy(),i.isDirty=!0,i.isDirtyData=!0,t&&i.chart.redraw(t)}else i.removePoint(i.data.indexOf(this),t,e)}renderLink(){let t;this.graphic||(this.graphic=this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(),!0).add(this.series.group),this.series.chart.styledMode||(t=this.series.pointAttribs(this),this.graphic.attr(t),(this.dataLabels||[]).forEach(function(e){e&&e.attr({opacity:t.opacity})})))}}G(_.prototype,{setState:I.setNodeState});let K={attractive:function(t,e,i,s){let o=t.getMass(),r=i.x/s*e,a=i.y/s*e;t.fromNode.fixedPosition||(t.fromNode.dispX-=r*o.fromNode/t.fromNode.degree,t.fromNode.dispY-=a*o.fromNode/t.fromNode.degree),t.toNode.fixedPosition||(t.toNode.dispX+=r*o.toNode/t.toNode.degree,t.toNode.dispY+=a*o.toNode/t.toNode.degree)},attractiveForceFunction:function(t,e){return t*t/e},barycenter:function(){let t=this.options.gravitationalConstant,e=this.barycenter.xFactor,i=this.barycenter.yFactor;this.nodes.forEach(function(s){if(!s.fixedPosition){let o=s.getDegree(),r=o*(1+o/2);s.dispX+=(e-s.plotX)*t*r/s.degree,s.dispY+=(i-s.plotY)*t*r/s.degree}})},getK:function(t){return Math.pow(t.box.width*t.box.height/t.nodes.length,.3)},integrate:function(t,e){e.dispX+=e.dispX*t.options.friction,e.dispY+=e.dispY*t.options.friction;let i=e.temperature=t.vectorLength({x:e.dispX,y:e.dispY});0!==i&&(e.plotX+=e.dispX/i*Math.min(Math.abs(e.dispX),t.temperature),e.plotY+=e.dispY/i*Math.min(Math.abs(e.dispY),t.temperature))},repulsive:function(t,e,i,s){t.dispX+=i.x/s*e/t.degree,t.dispY+=i.y/s*e/t.degree},repulsiveForceFunction:function(t,e){return e*e/t}};class U{constructor(t){this.body=!1,this.isEmpty=!1,this.isInternal=!1,this.nodes=[],this.box=t,this.boxSize=Math.min(t.width,t.height)}divideBox(){let t=this.box.width/2,e=this.box.height/2;this.nodes[0]=new U({left:this.box.left,top:this.box.top,width:t,height:e}),this.nodes[1]=new U({left:this.box.left+t,top:this.box.top,width:t,height:e}),this.nodes[2]=new U({left:this.box.left+t,top:this.box.top+e,width:t,height:e}),this.nodes[3]=new U({left:this.box.left,top:this.box.top+e,width:t,height:e})}getBoxPosition(t){let e=t.plotX<this.box.left+this.box.width/2,i=t.plotY<this.box.top+this.box.height/2;return e?i?0:3:i?1:2}insert(t,e){let i;this.isInternal?this.nodes[this.getBoxPosition(t)].insert(t,e-1):(this.isEmpty=!1,this.body?e?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,e-1),this.body=!0),this.nodes[this.getBoxPosition(t)].insert(t,e-1)):((i=new U({top:t.plotX||NaN,left:t.plotY||NaN,width:.1,height:.1})).body=t,i.isInternal=!1,this.nodes.push(i)):(this.isInternal=!1,this.body=t))}updateMassAndCenter(){let t=0,e=0,i=0;if(this.isInternal){for(let s of this.nodes)s.isEmpty||(t+=s.mass,e+=s.plotX*s.mass,i+=s.plotY*s.mass);e/=t,i/=t}else this.body&&(t=this.body.mass,e=this.body.plotX,i=this.body.plotY);this.mass=t,this.plotX=e,this.plotY=i}}let j=class{constructor(t,e,i,s){this.box={left:t,top:e,width:i,height:s},this.maxDepth=25,this.root=new U(this.box),this.root.isInternal=!0,this.root.isRoot=!0,this.root.divideBox()}calculateMassAndCenter(){this.visitNodeRecursive(null,null,function(t){t.updateMassAndCenter()})}insertNodes(t){for(let e of t)this.root.insert(e,this.maxDepth)}visitNodeRecursive(t,e,i){let s;if(t||(t=this.root),t===this.root&&e&&(s=e(t)),!1!==s){for(let o of t.nodes){if(o.isInternal){if(e&&(s=e(o)),!1===s)continue;this.visitNodeRecursive(o,e,i)}else o.body&&e&&e(o.body);i&&i(o)}t===this.root&&i&&i(t)}}},z={attractive:function(t,e,i){let s=t.getMass(),o=-i.x*e*this.diffTemperature,r=-i.y*e*this.diffTemperature;t.fromNode.fixedPosition||(t.fromNode.plotX-=o*s.fromNode/t.fromNode.degree,t.fromNode.plotY-=r*s.fromNode/t.fromNode.degree),t.toNode.fixedPosition||(t.toNode.plotX+=o*s.toNode/t.toNode.degree,t.toNode.plotY+=r*s.toNode/t.toNode.degree)},attractiveForceFunction:function(t,e){return(e-t)/t},barycenter:function(){let t=this.options.gravitationalConstant||0,e=(this.barycenter.xFactor-(this.box.left+this.box.width)/2)*t,i=(this.barycenter.yFactor-(this.box.top+this.box.height)/2)*t;this.nodes.forEach(function(t){t.fixedPosition||(t.plotX-=e/t.mass/t.degree,t.plotY-=i/t.mass/t.degree)})},getK:function(t){return Math.pow(t.box.width*t.box.height/t.nodes.length,.5)},integrate:function(t,e){let i=-t.options.friction,s=t.options.maxSpeed,o=e.prevX,r=e.prevY,a=(e.plotX+e.dispX-o)*i,n=(e.plotY+e.dispY-r)*i,h=Math.abs,l=h(a)/(a||1),d=h(n)/(n||1),p=l*Math.min(s,Math.abs(a)),c=d*Math.min(s,Math.abs(n));e.prevX=e.plotX+e.dispX,e.prevY=e.plotY+e.dispY,e.plotX+=p,e.plotY+=c,e.temperature=t.vectorLength({x:p,y:c})},repulsive:function(t,e,i){let s=e*this.diffTemperature/t.mass/t.degree;t.fixedPosition||(t.plotX+=i.x*s,t.plotY+=i.y*s)},repulsiveForceFunction:function(t,e){return(e-t)/t*(e>t?1:0)}},{win:V}=l(),{clamp:Q,defined:$,isFunction:W,fireEvent:J,pick:Z}=l();class tt{constructor(){this.box={},this.currentStep=0,this.initialRendering=!0,this.links=[],this.nodes=[],this.series=[],this.simulation=!1}static compose(t){w.compose(t),w.integrations.euler=K,w.integrations.verlet=z,w.layouts["reingold-fruchterman"]=tt}init(t){this.options=t,this.nodes=[],this.links=[],this.series=[],this.box={x:0,y:0,width:0,height:0},this.setInitialRendering(!0),this.integration=w.integrations[t.integration],this.enableSimulation=t.enableSimulation,this.attractiveForce=Z(t.attractiveForce,this.integration.attractiveForceFunction),this.repulsiveForce=Z(t.repulsiveForce,this.integration.repulsiveForceFunction),this.approximation=t.approximation}updateSimulation(t){this.enableSimulation=Z(t,this.options.enableSimulation)}start(){let t=this.series,e=this.options;this.currentStep=0,this.forces=t[0]&&t[0].forces||[],this.chart=t[0]&&t[0].chart,this.initialRendering&&(this.initPositions(),t.forEach(function(t){t.finishedAnimating=!0,t.render()})),this.setK(),this.resetSimulation(e),this.enableSimulation&&this.step()}step(){let t=this.series;for(let t of(this.currentStep++,"barnes-hut"===this.approximation&&(this.createQuadTree(),this.quadTree.calculateMassAndCenter()),this.forces||[]))this[t+"Forces"](this.temperature);if(this.applyLimits(),this.temperature=this.coolDown(this.startTemperature,this.diffTemperature,this.currentStep),this.prevSystemTemperature=this.systemTemperature,this.systemTemperature=this.getSystemTemperature(),this.enableSimulation){for(let e of t)e.chart&&e.render();this.maxIterations--&&isFinite(this.temperature)&&!this.isStable()?(this.simulation&&V.cancelAnimationFrame(this.simulation),this.simulation=V.requestAnimationFrame(()=>this.step())):(this.simulation=!1,this.series.forEach(t=>{J(t,"afterSimulation")}))}}stop(){this.simulation&&V.cancelAnimationFrame(this.simulation)}setArea(t,e,i,s){this.box={left:t,top:e,width:i,height:s}}setK(){this.k=this.options.linkLength||this.integration.getK(this)}addElementsToCollection(t,e){for(let i of t)-1===e.indexOf(i)&&e.push(i)}removeElementFromCollection(t,e){let i=e.indexOf(t);-1!==i&&e.splice(i,1)}clear(){this.nodes.length=0,this.links.length=0,this.series.length=0,this.resetSimulation()}resetSimulation(){this.forcedStop=!1,this.systemTemperature=0,this.setMaxIterations(),this.setTemperature(),this.setDiffTemperature()}restartSimulation(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))}setMaxIterations(t){this.maxIterations=Z(t,this.options.maxIterations)}setTemperature(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)}setDiffTemperature(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)}setInitialRendering(t){this.initialRendering=t}createQuadTree(){this.quadTree=new j(this.box.left,this.box.top,this.box.width,this.box.height),this.quadTree.insertNodes(this.nodes)}initPositions(){let t=this.options.initialPositions;if(W(t))for(let e of(t.call(this),this.nodes))$(e.prevX)||(e.prevX=e.plotX),$(e.prevY)||(e.prevY=e.plotY),e.dispX=0,e.dispY=0;else"circle"===t?this.setCircularPositions():this.setRandomPositions()}setCircularPositions(){let t;let e=this.box,i=this.nodes,s=2*Math.PI/(i.length+1),o=i.filter(function(t){return 0===t.linksTo.length}),r={},a=this.options.initialPositionRadius,n=t=>{for(let e of t.linksFrom||[])r[e.toNode.id]||(r[e.toNode.id]=!0,h.push(e.toNode),n(e.toNode))},h=[];for(let t of o)h.push(t),n(t);if(h.length)for(let t of i)-1===h.indexOf(t)&&h.push(t);else h=i;for(let i=0,o=h.length;i<o;++i)(t=h[i]).plotX=t.prevX=Z(t.plotX,e.width/2+a*Math.cos(i*s)),t.plotY=t.prevY=Z(t.plotY,e.height/2+a*Math.sin(i*s)),t.dispX=0,t.dispY=0}setRandomPositions(){let t;let e=this.box,i=this.nodes,s=i.length+1,o=t=>{let e=t*t/Math.PI;return e-Math.floor(e)};for(let r=0,a=i.length;r<a;++r)(t=i[r]).plotX=t.prevX=Z(t.plotX,e.width*o(r)),t.plotY=t.prevY=Z(t.plotY,e.height*o(s+r)),t.dispX=0,t.dispY=0}force(t,...e){this.integration[t].apply(this,e)}barycenterForces(){this.getBarycenter(),this.force("barycenter")}getBarycenter(){let t=0,e=0,i=0;for(let s of this.nodes)e+=s.plotX*s.mass,i+=s.plotY*s.mass,t+=s.mass;return this.barycenter={x:e,y:i,xFactor:e/t,yFactor:i/t},this.barycenter}barnesHutApproximation(t,e){let i,s;let o=this.getDistXY(t,e),r=this.vectorLength(o);return t!==e&&0!==r&&(e.isInternal?e.boxSize/r<this.options.theta&&0!==r?(s=this.repulsiveForce(r,this.k),this.force("repulsive",t,s*e.mass,o,r),i=!1):i=!0:(s=this.repulsiveForce(r,this.k),this.force("repulsive",t,s*e.mass,o,r))),i}repulsiveForces(){if("barnes-hut"===this.approximation)for(let t of this.nodes)this.quadTree.visitNodeRecursive(null,e=>this.barnesHutApproximation(t,e));else{let t,e,i;for(let s of this.nodes)for(let o of this.nodes)s===o||s.fixedPosition||(i=this.getDistXY(s,o),0!==(e=this.vectorLength(i))&&(t=this.repulsiveForce(e,this.k),this.force("repulsive",s,t*o.mass,i,e)))}}attractiveForces(){let t,e,i;for(let s of this.links)s.fromNode&&s.toNode&&(t=this.getDistXY(s.fromNode,s.toNode),0!==(e=this.vectorLength(t))&&(i=this.attractiveForce(e,this.k),this.force("attractive",s,i,t,e)))}applyLimits(){for(let t of this.nodes)t.fixedPosition||(this.integration.integrate(this,t),this.applyLimitBox(t,this.box),t.dispX=0,t.dispY=0)}applyLimitBox(t,e){let i=t.radius;t.plotX=Q(t.plotX,e.left+i,e.width-i),t.plotY=Q(t.plotY,e.top+i,e.height-i)}coolDown(t,e,i){return t-e*i}isStable(){return 1e-5>Math.abs(this.systemTemperature-this.prevSystemTemperature)||this.temperature<=0}getSystemTemperature(){let t=0;for(let e of this.nodes)t+=e.temperature;return t}vectorLength(t){return Math.sqrt(t.x*t.x+t.y*t.y)}getDistR(t,e){let i=this.getDistXY(t,e);return this.vectorLength(i)}getDistXY(t,e){let i=t.plotX-e.plotX,s=t.plotY-e.plotY;return{x:i,y:s,absX:Math.abs(i),absY:Math.abs(s)}}}let{merge:te,syncTimeout:ti}=l(),{animObject:ts}=l(),{deg2rad:to}=l(),{addEvent:tr,merge:ta,uniqueKey:tn,defined:th,extend:tl}=l();function td(t,e){e=ta(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},e);let i=this.renderer.url,s=this.text||this,o=s.textPath,{attributes:r,enabled:a}=e;if(t=t||o&&o.path,o&&o.undo(),t&&a){let e=tr(s,"afterModifyTree",e=>{if(t&&a){let o=t.attr("id");o||t.attr("id",o=tn());let a={x:0,y:0};th(r.dx)&&(a.dx=r.dx,delete r.dx),th(r.dy)&&(a.dy=r.dy,delete r.dy),s.attr(a),this.attr({transform:""}),this.box&&(this.box=this.box.destroy());let n=e.nodes.slice(0);e.nodes.length=0,e.nodes[0]={tagName:"textPath",attributes:tl(r,{"text-anchor":r.textAnchor,href:`${i}#${o}`}),children:n}}});s.textPath={path:t,undo:e}}else s.attr({dx:0,dy:0}),delete s.textPath;return this.added&&(s.textCache="",this.renderer.buildText(s)),this}function tp(t){let e=t.bBox,i=this.element?.querySelector("textPath");if(i){let t=[],{b:s,h:o}=this.renderer.fontMetrics(this.element),r=o-s,a=RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)',"g"),n=i.innerHTML.replace(a,"").split(/<tspan class="highcharts-br"[^>]*>/),h=n.length,l=(t,e)=>{let{x:o,y:a}=e,n=(i.getRotationOfChar(t)-90)*to,h=Math.cos(n),l=Math.sin(n);return[[o-r*h,a-r*l],[o+s*h,a+s*l]]};for(let e=0,s=0;s<h;s++){let o=n[s].length;for(let r=0;r<o;r+=5)try{let o=e+r+s,[a,n]=l(o,i.getStartPositionOfChar(o));0===r?(t.push(n),t.push(a)):(0===s&&t.unshift(n),s===h-1&&t.push(a))}catch(t){break}e+=o-1;try{let o=e+s,r=i.getEndPositionOfChar(o),[a,n]=l(o,r);t.unshift(n),t.unshift(a)}catch(t){break}}t.length&&t.push(t[0].slice()),e.polygon=t}return e}function tc(t){let e=t.labelOptions,i=t.point,s=e[i.formatPrefix+"TextPath"]||e.textPath;s&&!e.useHTML&&(this.setTextPath(i.getDataLabelPath?.(this)||i.graphic,s),i.dataLabelPath&&!s.enabled&&(i.dataLabelPath=i.dataLabelPath.destroy()))}let{noop:tu}=l(),{series:tf,seriesTypes:{column:{prototype:tm},line:{prototype:tg}}}=M(),{initDataLabels:ty,initDataLabelsDefer:tx}={initDataLabels:function(){let t=this.options.dataLabels;if(!this.dataLabelsGroup){let e=this.initDataLabelsGroup();return!this.chart.styledMode&&t?.style&&e.css(t.style),e.attr({opacity:0}),this.visible&&e.show(),e}return this.dataLabelsGroup.attr(te({opacity:1},this.getPlotBox("data-labels"))),this.dataLabelsGroup},initDataLabelsDefer:function(){let t=this.options.dataLabels;t?.defer&&this.options.layoutAlgorithm?.enableSimulation?ti(()=>{this.deferDataLabels=!1},t?ts(t.animation).defer:0):this.deferDataLabels=!1}},{addEvent:tb,defined:tk,extend:tv,merge:tN,pick:tL}=l();({compose:function(t){tr(t,"afterGetBBox",tp),tr(t,"beforeAddingDataLabel",tc);let e=t.prototype;e.setTextPath||(e.setTextPath=td)}}).compose(p());class tP extends tf{constructor(){super(...arguments),this.deferDataLabels=!0}static compose(t){g.compose(t),tt.compose(t)}deferLayout(){let t=this.options.layoutAlgorithm,e=this.chart.options.chart,i,s=this.chart.graphLayoutsStorage,o=this.chart.graphLayoutsLookup;this.visible&&(s||(this.chart.graphLayoutsStorage=s={},this.chart.graphLayoutsLookup=o=[]),(i=s[t.type])||(t.enableSimulation=tk(e.forExport)?!e.forExport:t.enableSimulation,s[t.type]=i=new w.layouts[t.type],i.init(t),o.splice(i.index,0,i)),this.layout=i,i.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight),i.addElementsToCollection([this],i.series),i.addElementsToCollection(this.nodes,i.nodes),i.addElementsToCollection(this.points,i.links))}destroy(){this.layout&&this.layout.removeElementFromCollection(this,this.layout.series),I.destroy.call(this)}drawDataLabels(){let t;if(this.deferDataLabels)return;let e=this.options.dataLabels;e?.textPath&&(t=e.textPath),tf.prototype.drawDataLabels.call(this,this.nodes),e?.linkTextPath&&(e.textPath=e.linkTextPath),tf.prototype.drawDataLabels.call(this,this.data),e?.textPath&&(e.textPath=t)}generatePoints(){let t,e;for(I.generatePoints.apply(this,arguments),this.options.nodes&&this.options.nodes.forEach(function(t){this.nodeLookup[t.id]||(this.nodeLookup[t.id]=this.createNode(t.id))},this),e=this.nodes.length-1;e>=0;e--)(t=this.nodes[e]).degree=t.getDegree(),t.radius=tL(t.marker&&t.marker.radius,this.options.marker&&this.options.marker.radius,0),t.key=t.name,this.nodeLookup[t.id]||t.remove();this.data.forEach(function(t){t.formatPrefix="link"}),this.indexateNodes()}getPointsCollection(){return this.nodes||[]}indexateNodes(){this.nodes.forEach(function(t,e){t.index=e})}init(t,e){return super.init(t,e),tx.call(this),tb(this,"updatedData",()=>{this.layout&&this.layout.stop()}),tb(this,"afterUpdate",()=>{this.nodes.forEach(t=>{t&&t.series&&t.resolveColor()})}),tb(this,"afterSimulation",function(){this.deferDataLabels=!1,this.drawDataLabels()}),this}markerAttribs(t,e){let i=tf.prototype.markerAttribs.call(this,t,e);return tk(t.plotY)||(i.y=0),i.x=(t.plotX||0)-(i.width||0)/2,i}pointAttribs(t,e){let i=e||t&&t.state||"normal",s=this.options.states[i],o=tf.prototype.pointAttribs.call(this,t,i);return t&&!t.isNode&&(o=t.getLinkAttributes(),s&&(o={stroke:s.linkColor||o.stroke,dashstyle:s.linkDashStyle||o.dashstyle,opacity:tL(s.linkOpacity,o.opacity),"stroke-width":s.linkColor||o["stroke-width"]})),o}render(){let t=this.points,e=this.chart.hoverPoint,i=[];this.points=this.nodes,tg.render.call(this),this.points=t,t.forEach(function(t){t.fromNode&&t.toNode&&(t.renderLink(),t.redrawLink())}),e&&e.series===this&&this.redrawHalo(e),this.chart.hasRendered&&!this.options.dataLabels.allowOverlap&&(this.nodes.concat(this.points).forEach(function(t){t.dataLabel&&i.push(t.dataLabel)}),this.chart.hideOverlappingLabels(i))}setState(t,e){e?(this.points=this.nodes.concat(this.data),tf.prototype.setState.apply(this,arguments),this.points=this.data):tf.prototype.setState.apply(this,arguments),this.layout.simulation||t||this.render()}translate(){this.generatePoints(),this.deferLayout(),this.nodes.forEach(function(t){t.isInside=!0,t.linksFrom.forEach(function(t){t.shapeType="path",t.y=1})})}}tP.defaultOptions=tN(tf.defaultOptions,{stickyTracking:!1,inactiveOtherPoints:!0,marker:{enabled:!0,states:{inactive:{opacity:.3,animation:{duration:50}}}},states:{inactive:{linkOpacity:.3,animation:{duration:50}}},dataLabels:{formatter:function(){return String(this.key??"")},linkFormatter:function(){return this.fromNode.name+"<br>"+this.toNode.name},linkTextPath:{enabled:!0},textPath:{enabled:!1},style:{transition:"opacity 2000ms"},defer:!0,animation:{defer:1e3}},link:{color:"rgba(100, 100, 100, 0.5)",width:1},draggable:!0,layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:1,enableSimulation:!1,theta:.5,maxSpeed:10,approximation:"none",type:"reingold-fruchterman",integration:"euler",maxIterations:1e3,gravitationalConstant:.0625,friction:-.981},showInLegend:!1}),tv(tP.prototype,{pointClass:_,animate:void 0,directTouch:!0,drawGraph:void 0,forces:["barycenter","repulsive","attractive"],hasDraggableNodes:!0,isCartesian:!1,noSharedTooltip:!0,pointArrayMap:["from","to"],requireSorting:!1,trackerGroups:["group","markerGroup","dataLabelsGroup"],initDataLabels:ty,buildKDTree:tu,createNode:I.createNode,drawTracker:tm.drawTracker,onMouseDown:g.onMouseDown,onMouseMove:g.onMouseMove,onMouseUp:g.onMouseUp,redrawHalo:g.redrawHalo}),M().registerSeriesType("networkgraph",tP);let tw=l();tP.compose(tw.Chart);let tS=l();return n.default})());