(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),i=n(4),o=n(3),u=n(12),s=n(13),d=n(15),m=n(14),E=n(16),p=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(s.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.songs.map(function(t,n){return r.a.createElement("div",{className:"item",key:n},r.a.createElement("div",{className:"right floated content"},r.a.createElement("button",{className:"ui button primary",onClick:function(){return e.props.selectSong(t)}},"Select")),r.a.createElement("div",{className:"content"},t.title))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui divided list"},this.renderList())}}]),t}(a.Component),g=Object(i.b)(function(e){return console.log(e),{songs:e.songs}},{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(p),v=Object(i.b)(function(e){return{song:e.selectedSong}})(function(e){var t=e.song;return t?(console.log(t),r.a.createElement("div",null,r.a.createElement("h3",null,"Details for:"),r.a.createElement("p",null,"Title: ",t.title,r.a.createElement("br",null),"Duration: ",t.duration))):r.a.createElement("div",null,"Select a Song")}),b=function(){return r.a.createElement("div",{className:"ui container grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"column eight wide"},r.a.createElement(g,null)),r.a.createElement("div",{className:"column eight wide"},r.a.createElement(v,null))))},f=Object(o.b)({songs:function(){return[{title:"No Scrubs",duration:"4:05"},{title:"Macarema",duration:"2:30"},{title:"All Star",duration:"3:15"},{title:"I want it that Way",duration:"1:45"}]},selectedSong:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});c.a.render(r.a.createElement(i.a,{store:Object(o.c)(f)},r.a.createElement(b,null)),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.46799eac.chunk.js.map