(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(8),j=n.n(s),i=n(5),a=(n(13),n(1)),o=n(2);function u(){return Object(o.jsxs)("nav",{children:[Object(o.jsx)(i.b,{to:"/",children:"Home"}),Object(o.jsx)(i.b,{to:"/movies",children:"Move"})]})}function b(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(u,{})})}var h=n(4);function l(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1];return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=6335ce0a24f472a8f252fc29a6ddd36b&language=en-US&page=1").then((function(e){return e.json()})).then((function(e){return r(e.results)})),Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)("li",{children:e.title?e.title:e.name},e.id)}))})}function d(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{children:[Object(o.jsx)("button",{type:"submit",children:Object(o.jsx)("span",{children:"Search"})}),Object(o.jsx)("input",{className:"input",type:"text",name:"value",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}var O=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(a.c,{children:[Object(o.jsx)(a.a,{path:"/",element:Object(o.jsx)(l,{})}),Object(o.jsx)(a.a,{path:"/movies",element:Object(o.jsx)(d,{})})]})]})};j.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i.a,{children:Object(o.jsx)(O,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9b969a2c.chunk.js.map