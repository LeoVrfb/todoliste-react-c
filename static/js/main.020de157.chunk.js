(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n(8),i=n.n(c),a=(n(15),n(6)),r=n(3),u=n(1);var s=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(r.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var s=function(t){i(t.target.value)},d=function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")};return Object(u.jsx)("form",{onSubmit:d,className:"todo-form",children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Modifiez",value:c,onChange:s,name:"text",ref:a,className:"todo-input edit"}),Object(u.jsx)("button",{onClick:d,className:"todo-button edit",children:"Modifier"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Chose \xe0 faire...",value:c,onChange:s,name:"text",className:"todo-input",ref:a}),Object(u.jsx)("button",{onClick:d,className:"todo-button",children:"Ajouter"})]})})},d=n(9),l=n(10),j=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),j=Object(r.a)(a,2),b=j[0],f=j[1];return b.id?Object(u.jsx)(s,{edit:b,onSubmit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(d.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(l.a,{onClick:function(){return f({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var b=function(){var t=Object(o.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Que dois-tu faire aujourd'hui ?"}),Object(u.jsx)(s,{onSubmit:function(t){var e;if(t.text&&!/^\s*$/.test(t.text)){var o=[t].concat(Object(a.a)(n));c(o),(e=console).log.apply(e,Object(a.a)(n))}}}),Object(u.jsx)(j,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(a.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(u.jsx)("div",{className:"todo-app",children:Object(u.jsx)(b,{})})};i.a.render(Object(u.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.020de157.chunk.js.map