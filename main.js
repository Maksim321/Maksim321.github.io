!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e,i){var s=i(1);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};i(5)(s,n);s.locals&&(t.exports=s.locals)},function(t,e,i){e=t.exports=i(2)(!1);var s=i(3)(i(4));e.push([t.i,"html, body{\r\n  height: 100%;\r\n}\r\n\r\nbody{\r\n  background-image: url("+s+");\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-origin: content-box;\r\n  background-repeat: no-repeat;\r\n  margin: 0;\r\n}\r\n\r\n.container{\r\n  position: relative;\r\n  border: 10px ridge #8BC34A;\r\n  height: 560px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.container-wrap{\r\n  display: flex;\r\n  align-items: center;\r\n  width: 980px;\r\n  margin: 0 auto;\r\n  height: 100%;\r\n}\r\n\r\n.box-icons{\r\n  display: flex;\r\n  position: absolute;\r\n  left: 60px;\r\n  padding: 0;\r\n}\r\n\r\n.box-icons__item{\r\n  justify-content: flex-start;\r\n  list-style: none;\r\n}\r\n\r\n.canvasContainer{\r\n  text-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.block-start{\r\n  position: absolute;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.block_hidden{\r\n  display: none;\r\n}\r\n\r\n.block-start__button{\r\n  background: #3e9029;\r\n  padding: 15px 30px;\r\n  font-family: Arial, sans-serif;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  color: #daffd1;\r\n  border: 8px ridge #5dbd45;\r\n  transition: .3s ease;\r\n}\r\n\r\n.block-start__button:hover{\r\n  background: green;\r\n  cursor: pointer;\r\n}\r\n\r\n[type=radio] { \r\n  position: absolute;\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n[type=radio] + img {\r\n  height: 75px;\r\n  width: 75px;\r\n  cursor: pointer;\r\n}\r\n",""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var n=(r=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),o=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[i].concat(o).concat([n]).join("\n")}var r;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},n=0;n<this.length;n++){var o=this[n][0];null!=o&&(s[o]=!0)}for(n=0;n<t.length;n++){var r=t[n];null!=r[0]&&s[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,i){t.exports=i.p+"e2557e4439a917a2ed426c92be9aa712.png"},function(t,e,i){var s,n,o={},r=(s=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===n&&(n=s.apply(this,arguments)),n}),a=function(t){var e={};return function(t,i){if("function"==typeof t)return t();if(void 0===e[t]){var s=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,i);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}}(),p=null,h=0,u=[],c=i(6);function l(t,e){for(var i=0;i<t.length;i++){var s=t[i],n=o[s.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](s.parts[r]);for(;r<s.parts.length;r++)n.parts.push(_(s.parts[r],e))}else{var a=[];for(r=0;r<s.parts.length;r++)a.push(_(s.parts[r],e));o[s.id]={id:s.id,refs:1,parts:a}}}}function f(t,e){for(var i=[],s={},n=0;n<t.length;n++){var o=t[n],r=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};s[r]?s[r].parts.push(a):i.push(s[r]={id:r,parts:[a]})}return i}function d(t,e){var i=a(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=u[u.length-1];if("top"===t.insertAt)s?s.nextSibling?i.insertBefore(e,s.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),u.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var n=a(t.insertAt.before,i);i.insertBefore(e,n)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var s=function(){0;return i.nc}();s&&(t.attrs.nonce=s)}return y(e,t.attrs),d(t,e),e}function y(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function _(t,e){var i,s,n,o;if(e.transform&&t.css){if(!(o="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=o}if(e.singleton){var r=h++;i=p||(p=g(e)),s=b.bind(null,i,r,!1),n=b.bind(null,i,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),d(t,e),e}(e),s=function(t,e,i){var s=i.css,n=i.sourceMap,o=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||o)&&(s=c(s));n&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([s],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,i,e),n=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(e),s=function(t,e){var i=e.css,s=e.media;s&&t.setAttribute("media",s);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),n=function(){m(i)});return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=f(t,e);return l(i,e),function(t){for(var s=[],n=0;n<i.length;n++){var r=i[n];(a=o[r.id]).refs--,s.push(a)}t&&l(f(t,e),e);for(n=0;n<s.length;n++){var a;if(0===(a=s[n]).refs){for(var p=0;p<a.parts.length;p++)a.parts[p]();delete o[a.id]}}}};var v,x=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function b(t,e,i,s){var n=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var o=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,s=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(n=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:s+o.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(t,e,i){"use strict";i.r(e);i(0);var s=function(t){this.canvas=t.canvas,this.ctx=this.canvas.getContext("2d"),this.imgs=t.imgs,this.sound=t.sound,this.score=t.score};function n(t,e,i,s,n,o,r,a,p,h,u){this.img=t,this.sprite_w=o,this.sprite_h=r,this.map=u,this.default_pos_num_y=i,this.default_pos_num_x=e,this.fix_axis_x=s,this.fix_axis_y=n,this.scale_w=a,this.scale_h=p,this.skipFrame=h,this.skippedFrameCount=0,this.anim_frame={frame_x:0,frame_y:0}}n.prototype.getPos=function(){return{x:this.map.positions_num_x[this.default_pos_num_x]+this.fix_axis_x,y:this.map.positions_num_y[this.default_pos_num_y]+this.fix_axis_y}},n.prototype.getFrame=function(){return this.anim_frame},n.prototype.getCurrentNumFrame=function(){return this.img.width/this.sprite_w*this.getFrame().frame_y+this.getFrame().frame_x+1},n.prototype.getCountFrame=function(){return this.img.width/this.sprite_w*(this.img.height/this.sprite_h)},n.prototype.animate=function(){this.skipFrame<=this.skippedFrameCount?(this.anim_frame.frame_x>=this.img.width/this.sprite_w-1?(this.anim_frame.frame_x=0,this.anim_frame.frame_y>=this.img.height/this.sprite_h-1?this.anim_frame.frame_y=0:this.anim_frame.frame_y++):this.anim_frame.frame_x++,this.skippedFrameCount=0):this.skippedFrameCount++};var o=n;function r(){this.borders_cells_x=[0,135,270,405,540,675,810,945],this.borders_cells_y=[135,270,405,540],this.positions_num_x=[68,203,338,473,608,743,878],this.positions_num_y=[203,338,473]}r.prototype.find_cell=function(t,e){for(let i=1;i<this.borders_cells_y.length;i++)if(e<this.borders_cells_y[i]&&e>this.borders_cells_y[0])for(let e=1;e<this.borders_cells_x.length;e++)if(t<this.borders_cells_x[e]&&t>this.borders_cells_x[0])return{pos_num_x:e-1,pos_num_y:i-1};return null},r.prototype.distance_to_cell=function(t,e){return Math.abs(this.positions_num_x[t]-e)};var a=r;function p(t,e,i,s,n,r,a,p,h,u,c,l,f,d,m){o.apply(this,arguments),this.imgRight=m,this.imgLeft=t,this.pigInHouse=!0,this.speed=l,this.hp=f,this.distance_moved=0,this.target_position=d,this.trapIndex=null}p.prototype=Object.create(o.prototype),p.prototype.constructor=p,p.prototype.move=function(){0!==this.target_position&&this.isTargetPosition()&&(this.img=this.imgRight,this.target_position=0,this.speed*=-1),this.distance_moved+=this.speed},p.prototype.getTargetPos=function(){return this.map.positions_num_x[this.target_position]+this.fix_axis_x},p.prototype.getMainPos=function(){return o.prototype.getPos.apply(this,arguments)},p.prototype.getPos=function(){return{x:this.getMainPos().x+this.distance_moved,y:this.getMainPos().y}},p.prototype.setDefaultState=function(){this.speed=Math.abs(this.speed),this.pigInHouse=!0,this.img=this.imgLeft,this.distance_moved=0},p.prototype.killPig=function(){this.hp=0,this.setDefaultState()},p.prototype.isTargetPosition=function(){return Math.abs(this.getPos().x-this.getTargetPos())<=Math.abs(this.speed)},p.prototype.isFinish=function(){return!(0!==this.target_position||!this.isTargetPosition())},p.prototype.isTrapped=function(t){return this.getPos().x+this.fix_axis_x>=t.getPos().x-t.scale_w/2},p.prototype.animate=function(){o.prototype.animate.apply(this,arguments),this.move()};var h=p;function u(t,e,i,s,n,r,a,p,h,u,c,l,f){o.apply(this,arguments),this.houseTypeNum=f,this.houseState=0,this.hp=l}u.prototype=Object.create(o.prototype),u.prototype.constructor=u,u.prototype.animate=function(t){t.hp?t.pigInHouse?this.houseState=0:this.houseState=1:this.houseState=2},u.prototype.getFrame=function(){return{frame_x:this.houseState,frame_y:this.houseTypeNum}};var c=u;function l(t,e,i,s,n,r,a,p,h,u,c,l,f){o.apply(this,arguments),this.hp=l,this.state=!1,this.wolf=null,this.sound=f}l.prototype=Object.create(o.prototype),l.prototype.constructor=l;var f=l;function d(){this.iconsContainer=document.getElementsByClassName("block-icons"),this.imgButtons=[document.getElementById("trapIcon"),document.getElementById("rakeIcon")],this.inputsButtons=[document.getElementById("trapInpt"),document.getElementById("rakeInpt")],this.isChecked=null,this.inputsButtons.forEach(t=>t.addEventListener("click",this.checkTrap.bind(this),!1))}d.prototype.setImg=function(t,e){switch(t){case 0:this.imgButtons[t].src=`./img/trap_icons/trap_${e}.png`;break;case 1:this.imgButtons[t].src=`./img/rake_icons/rake_${e}.png`}},d.prototype.setIconState=function(t,e,i,s){this.inputsButtons[t].checked=e,this.setImg(t,i),this.isChecked=s},d.prototype.setIconActive=function(t){this.setIconState(t,!0,"active",t)},d.prototype.setIconPassive=function(t){this.setIconState(t,!1,"passive",null)},d.prototype.setIconUnavailable=function(t){this.setIconState(t,!1,"unavailable",null)},d.prototype.checkTrap=function(t){null!==this.isChecked?this.inputsButtons[this.isChecked]!==t.target?(this.setIconPassive(this.isChecked),this.setIconActive(parseInt(t.target.value))):this.setIconPassive(this.isChecked):this.setIconActive(parseInt(t.target.value))};var m=d;function g(t,e){this.sound=document.createElement("audio"),this.sound.src=t,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",this.sound.volume=e,document.body.appendChild(this.sound)}g.prototype.play=function(){this.sound.paused?this.sound.play():this.sound.currentTime=0},g.prototype.stop=function(){this.sound.pause()};var y=g;function _(t,e,i,s,n,r,a,p,h,u,c,l,f){o.apply(this,arguments),this.speed=l,this.hp=f,this.distance_moved=120,this.isWolfInTrap=!1}_.prototype=Object.create(o.prototype),_.prototype.constructor=_,_.prototype.getMainPos=function(){return o.prototype.getPos.apply(this,arguments)},_.prototype.getPos=function(){return{x:this.getMainPos().x+this.distance_moved,y:this.getMainPos().y}},_.prototype.isHit=function(t,e){return this.getPos().x<t&&this.getPos().y<e&&this.getPos().x+this.scale_w>t&&this.getPos().y+this.scale_h>e?1:0},_.prototype.move=function(){this.distance_moved+=this.speed},_.prototype.hit=function(){this.hp--},_.prototype.animate=function(){o.prototype.animate.apply(this,arguments),this.move()},_.prototype.isTrapped=function(t){return!t.state&&this.map.positions_num_x[t.default_pos_num_x]>=this.getPos().x-this.fix_axis_x/2};var v=_;function x(t,e,i){s.apply(this,arguments),this.map=e,this.interval=i,this.intervalCount=i}x.prototype.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},x.prototype.getWolf=function(t,e,i){switch(t){case 0:return new v(this.imgs.wolf_1,e,i,-75,-80,150,180,130,150,1,this.map,-1,3);case 1:return new v(this.imgs.wolf_2,e,i,-75,-80,150,180,130,150,1,this.map,-1.2,3)}},x.prototype.getRandomWolf=function(t,e){return 0===this.intervalCount&&(this.intervalCount=this.interval+this.getRandomInt(0,25),this.getRandomInt(0,2))?this.getWolf(this.getRandomInt(0,2),t,e):(this.intervalCount--,null)};var b=x;function w(t,e,i,n,o,r,a,p){s.apply(this,arguments),this.controls=o,this.score=a,this.spawner=new b(t,r,160),this.map=r,this.index=e,this.sound=p,this.wolfs=[],this.traps=[],this.pig=i,this.house=n,this.smoke=null}w.prototype=Object.create(s.prototype),w.prototype.constructor=w,w.prototype.getPig=function(){return this.pig},w.prototype.getSmoke=function(){return this.smoke},w.prototype.getPigOrSmoke=function(){return this.smoke?this.smoke:this.pig},w.prototype.getHouse=function(){return this.house},w.prototype.getTraps=function(){return this.traps},w.prototype.getWolfs=function(){return this.wolfs},w.prototype.spawnWolf=function(t){null!==t&&this.wolfs.push(t)},w.prototype.update=function(){this.update_houses(),this.update_traps(),this.update_pigs(),this.update_wolf(),this.wolfs.length<10&&this.spawnWolf(this.spawner.getRandomWolf(6,this.index))},w.prototype.setTargetPosition=function(t){t&&this.pig.pigInHouse&&this.pig.hp&&(this.sound.active_pig.play(),this.pig.target_position=t.pos_num_x,this.pig.pigInHouse=!1,this.pig.trapIndex=this.controls.isChecked)},w.prototype.update_traps=function(){this.traps.forEach(t=>{t.state&&(t.getCountFrame()===t.getCurrentNumFrame()?this.trapKillWolf(t):t.animate())})},w.prototype.update_wolf=function(){this.wolfs.forEach(t=>{let e=this.isWolfTrapped(t);e>=0&&this.wolfTrapped(t,this.traps[e]),t.animate()})},w.prototype.update_houses=function(){this.house.animate(this.pig)},w.prototype.update_pigs=function(){this.pig.hp&&!this.pigTrapped()&&(this.pig.pigInHouse||(this.pig.isFinish()?this.pig.setDefaultState():this.pig.isTargetPosition()&&!this.pig.isFinish()?this.update_smoke(this.pig.target_position):this.pig.animate()))},w.prototype.update_smoke=function(t){this.smoke||(this.smoke=new o(this.imgs.smoke,t,this.index,-80,-80,221,208,160,160,2,this.map),this.sound.smoke.play(),setTimeout(()=>{this.setTrap(this.pig.trapIndex,t),this.smoke=null,this.pig.animate()},1e3)),this.smoke.animate()},w.prototype.hitWolf=function(t,e){for(let i=0;i<this.wolfs.length;i++)if(this.wolfs[i].isHit(t,e))return this.wolfs[i].hit(),void(this.wolfs[i].hp?this.sound.tap.play():this.killWolf(i))},w.prototype.setTrap=function(t,e,i){switch(t){case 0:this.traps.push(new f(this.imgs.trap,e,this.index,-35,-10,99,98,79,78,1,this.map,3,this.sound.wolf_trap));break;case 1:this.traps.push(new f(this.imgs.Rake,e,this.index,-85,-90,193,200,135,145,1,this.map,3,this.sound.rake_trap))}},w.prototype.trapKillWolf=function(t){this.killWolf(this.wolfs.indexOf(t.wolf)),this.traps.splice(this.traps.indexOf(t),1)},w.prototype.wolfTrapped=function(t,e){t.isWolfInTrap=!0,e.state=!0,e.wolf=t,e.sound.play()},w.prototype.pigTrapped=function(){for(let t=0;t<this.wolfs.length;t++)if(this.pig.isTrapped(this.wolfs[t]))return this.wolfKillPig(this.wolfs[t]),!0;return!1},w.prototype.wolfKillPig=function(t){this.pig.killPig(),this.sound.pig_death.play(),this.killWolf(this.wolfs.indexOf(t))},w.prototype.isWolfTrapped=function(t){if(!t.isWolfInTrap)for(let e=0;e<this.traps.length;e++)if(t.isTrapped(this.traps[e]))return e;return-1},w.prototype.killWolf=function(t){this.sound.wolf_death.play(),this.score.addScore(1),this.wolfs.splice(t,1)},w.prototype.isPlaceEmpty=function(t){for(let e=0;e<this.traps.length;e++)if(this.traps[e].default_pos_num_x===t)return!1;return!0};var k=w;function I(t){s.apply(this,arguments),this.controls=new m,this.map=new a,this.lines=[new k(t,0,new h(this.imgs.pigRight,0,0,-50,-55,150,175,105,120,0,this.map,2,1,0,this.imgs.pigLeft),new c(this.imgs.houses,0,0,-80,-85,250,250,155,155,0,this.map,1,2),this.controls,this.map,this.score,this.sound),new k(t,1,new h(this.imgs.pigTwoRight,0,1,-50,-55,150,175,105,120,0,this.map,1.5,1,0,this.imgs.pigTwoLeft),new c(this.imgs.houses,0,1,-75,-85,250,250,155,155,0,this.map,1,1),this.controls,this.map,this.score,this.sound),new k(t,2,new h(this.imgs.pigTwoRight,0,2,-50,-55,150,175,105,120,0,this.map,1,1,0,this.imgs.pigTwoLeft),new c(this.imgs.houses,0,2,-80,-70,250,250,155,155,0,this.map,1,0),this.controls,this.map,this.score,this.sound)],this.canvas.addEventListener("mousedown",this.onClick.bind(this),!1)}I.prototype=Object.create(s.prototype),I.prototype.constructor=I,I.prototype.onClick=function(t){let e=this.canvas.getBoundingClientRect(),i=t.clientX-e.left,s=t.clientY-e.top,n=this.map.find_cell(i,s);n&&null===this.controls.isChecked?this.lines[n.pos_num_y].hitWolf(i,s):n&&this.lines[n.pos_num_y].isPlaceEmpty(n.pos_num_x,n.pos_num_y)&&this.lines[n.pos_num_y].setTargetPosition(n)},I.prototype.render=function(){return this.render_background(),this.lines.forEach(t=>{this.render_house(t.getHouse()),this.render_traps(t.getTraps()),this.render_pig(t.getPigOrSmoke()),this.render_wolfs(t.getWolfs()),t.update()}),this.render_score(),this.isGameOver()?"game_over":"game"},I.prototype.render_pig=function(t){t.pigInHouse||this.render_sprites(t)},I.prototype.render_traps=function(t){t.forEach(t=>{this.render_sprites(t)})},I.prototype.render_wolfs=function(t){t.forEach(t=>{this.render_sprites(t)})},I.prototype.render_house=function(t){this.render_sprites(t)},I.prototype.render_background=function(){this.ctx.drawImage(this.imgs.background,0,0,this.canvas.width,this.canvas.height)},I.prototype.render_sprites=function(t){this.ctx.drawImage(t.img,t.getFrame().frame_x*t.sprite_w,t.getFrame().frame_y*t.sprite_h,t.sprite_w,t.sprite_h,t.getPos().x,t.getPos().y,t.scale_w,t.scale_h)},I.prototype.render_score=function(){this.ctx.fillStyle="#0E000E",this.ctx.fillRect(755,33,160,41),this.ctx.fillStyle="#FCEA84",this.ctx.fillRect(760,38,150,31),this.ctx.fillStyle="#000104",this.ctx.font="bold 24px Verdana",this.ctx.fillText("KILLS: "+this.score.getScore(),770,62)},I.prototype.isGameOver=function(){return 0===this.lines[0].getPig().hp&&0===this.lines[1].getPig().hp&&0===this.lines[2].getPig().hp};var S=I;function T(t){s.apply(this,arguments),this.assets=[{name:"menu_bg",path:"./img/960x540.png"},{name:"game_over",path:"./img/game_over.png"},{name:"background",path:"./img/background.png"},{name:"houses",path:"./img/Houses.png"},{name:"wolf_1",path:"./img/AnimWolf_1.png"},{name:"wolf_2",path:"./img/AnimWolf_2.png"},{name:"pigLeft",path:"./img/AnimPigLeft.png"},{name:"pigRight",path:"./img/AnimPigRight.png"},{name:"pigTwoLeft",path:"./img/AnimPigTwoLeft.png"},{name:"pigTwoRight",path:"./img/AnimPigTwoRight.png"},{name:"trap",path:"./img/Trap.png"},{name:"Rake",path:"./img/RakeTrap.png"},{name:"smoke",path:"./img/Smoke.png"}],this.assetsSound=[{name:"tap",path:"./sound/tap.ogg",volume:1},{name:"main_theme",path:"./sound/main_theme.ogg",volume:1},{name:"level_1",path:"./sound/level_1.ogg",volume:.5},{name:"pig_death",path:"./sound/pig_death.ogg",volume:1},{name:"active_pig",path:"./sound/active_pig.ogg",volume:1},{name:"wolf_death",path:"./sound/wolf_death.ogg",volume:1},{name:"wave_start",path:"./sound/wave_start.ogg",volume:.8},{name:"rake_trap",path:"./sound/rake_trap.ogg",volume:1},{name:"wolf_trap",path:"./sound/wolf_trap.ogg",volume:1},{name:"smoke",path:"./sound/smoke.ogg",volume:1}],this.screen=t,this.total=this.assets.length+this.assetsSound.length,this.totalImg=this.assets.length,this.totalSound=this.assetsSound.length,this.loaded=0,this.status="loading",this.loaded_at=0;for(let e=0;e<this.totalImg;e++){let i=new Image;i.src=this.assets[e].path,i.onload=(()=>{this.loaded++}),t.imgs[this.assets[e].name]=i}for(let e=0;e<this.totalSound;e++){let i=new y(this.assetsSound[e].path,this.assetsSound[e].volume);i.sound.oncanplay=(()=>{this.loaded++}),t.sound[this.assetsSound[e].name]=i}}T.prototype.render=function(){return"loading"==this.status?(this.loaded==this.total&&(this.status="loaded"),this.ctx.drawImage(this.imgs.menu_bg,0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ffffff",this.ctx.strokeStyle="black",this.ctx.font="bold 25px Verdana",this.ctx.fillText("Loading "+this.loaded+"/"+this.total,380,345),this.ctx.strokeText("Loading "+this.loaded+"/"+this.total,380,345),"lib"):"loaded"==this.status?"menu":void 0};var P=T;function C(t){s.apply(this,arguments)}C.prototype.render=function(){return this.ctx.drawImage(this.imgs.game_over,0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ffffff",this.ctx.strokeStyle="black",this.ctx.font="bold 25px Verdana",this.ctx.fillText("KILLS: "+this.score.getScore(),415,345),this.ctx.strokeText("KILLS: "+this.score.getScore(),415,345),"game_over_menu"};var L=C;function R(){this.score=0}R.prototype.getScore=function(){return this.score},R.prototype.clearScore=function(){this.score=0},R.prototype.addScore=function(t){this.score+=t};var E=R;let O,j,A,B={},M="lib";function F(){"menu"===M||"game_over_menu"===M?(O[0].classList.remove("block_hidden"),A[0].classList.add("block_hidden")):(M=B[M].render(),requestAnimationFrame(F))}window.onload=function(){j=document.getElementsByClassName("block-start__button"),O=document.getElementsByClassName("block-start"),A=document.getElementsByClassName("block-icons"),screen.canvas=document.getElementById("gameCanvas"),screen.imgs={},screen.sound={},screen.score=new E,B.lib=new P(screen),B.game_over=new L(screen),j[0].addEventListener("click",()=>{O[0].classList.add("block_hidden"),A[0].classList.remove("block_hidden"),screen.score.clearScore(),B.game=new S(screen),screen.sound.level_1.play(),setTimeout(()=>screen.sound.wave_start.play(),1e3),M="game",F()},!1),F()}}]);