(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{82:function(e,t,n){"use strict";n.r(t);var s=n(8),c=n.n(s),r=n(23),a=n(0),o=n(111),u=n(114),i=n(118),j=n(116),l=n(117),b=n(2),d=Object(o.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),h=function(e){var t=e.text,n=e.value,s=e.onChange;return Object(b.jsxs)("div",{children:[t,":",Object(b.jsx)("input",{value:n,onChange:s})]})},O=function(e){var t=e.addName,n=e.newName,s=e.handleNameChange,c=(e.newStatus,e.handleStatusChange);return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{onSubmit:t,children:[Object(b.jsx)(h,{text:"Rank/Name ",value:n,onChange:s}),Object(b.jsxs)(u.a,{className:d().formControl,children:[Object(b.jsx)(i.a,{id:"demo-simple-select-label",children:"Current Status"}),Object(b.jsxs)(j.a,{labelId:"status",id:"status",value:n,onChange:c,children:[Object(b.jsx)(l.a,{value:"present",children:"Present"}),Object(b.jsx)(l.a,{value:"mc",children:"MC"}),Object(b.jsx)(l.a,{value:"ma",children:"MA"}),Object(b.jsx)(l.a,{value:"off",children:"Off"}),Object(b.jsx)(l.a,{value:"leave",children:"Leave"}),Object(b.jsx)(l.a,{value:"attached",children:"Attached Out"}),Object(b.jsx)(l.a,{value:"others",children:"Others"}),Object(b.jsx)(l.a,{value:"stayout",children:"Stay Out"})]})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})]})})},x=n(33),m=n.n(x),f="/api/persons",p=function(){return m.a.get(f).then((function(e){return e.data}))},v=function(e){return m.a.post(f,e).then((function(e){return e.data}))},g=function(e){return m.a.delete("".concat(f,"/").concat(e))},C=function(e,t){return m.a.put("".concat(f,"/").concat(e),t).then((function(e){return e.data}))},S=function(e){var t=e.options,n=e.person,s=e.persons,c=e.setPersons,r=function(e){var t={name:n,status:e.target.value},r=s.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));return console.log(r),C(r[0].id,t).then((function(e){c(s.map((function(t){return t.id!==r[0].id?t:e})))}))};return t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{value:"present",onClick:r,children:"\u2705"}),Object(b.jsx)("button",{value:"mc",onClick:r,children:"\ud83d\ude37"}),Object(b.jsx)("button",{value:"ma",onClick:r,children:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(b.jsx)("button",{value:"off",onClick:r,children:"\ud83d\udeab"}),Object(b.jsx)("button",{value:"leave",onClick:r,children:"\ud83d\udeaa"}),Object(b.jsx)("button",{value:"attached",onClick:r,children:"\ud83c\udd70"}),Object(b.jsx)("button",{value:"others",onClick:r,children:"\ud83d\uddd2"}),Object(b.jsx)("button",{value:"stayout",onClick:r,children:"\ud83c\udfe0"})]}):Object(b.jsx)(b.Fragment,{})},y=function(e){var t=e.person,n=e.persons,s=e.setPersons,c=Object(a.useState)(!1),o=Object(r.a)(c,2),u=o[0],i=o[1],j=function(){return i(!u)};return!1===u?Object(b.jsx)("button",{onClick:j,children:"Update Status"}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:j,children:"Hide Statuses"}),Object(b.jsx)("br",{}),Object(b.jsx)(S,{options:u,person:t,persons:n,setPersons:s})]})},w=function(e){var t=e.person,n=e.id,s=e.setPersons,c=e.persons;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{person:t.name,persons:c,setPersons:s}),Object(b.jsx)("button",{onClick:function(){window.confirm("Do you want to delete ".concat(t.name))&&(g(n),s(c.filter((function(e){return e.id!==n}))))},children:"Delete"}),Object(b.jsx)("br",{})]})},k=function(e){var t=e.symbol;return Object(b.jsx)("span",{className:"emoji",role:"img",children:t})},P=function(e){var t=e.currentStatus;return"present"===t?Object(b.jsx)(k,{symbol:"\u2705"}):"attached"===t?Object(b.jsx)(k,{symbol:"\ud83c\udd70"}):"others"===t?Object(b.jsx)(k,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(b.jsx)(k,{symbol:"\ud83d\ude37"}):"ma"===t?Object(b.jsx)(k,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(b.jsx)(k,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(b.jsx)(k,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(b.jsx)(k,{symbol:"\ud83c\udfe0"}):""},T=function(e){var t=e.setPersons,n=e.persons;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:n.map((function(e){return Object(b.jsxs)("li",{children:[e.name,Object(b.jsx)(P,{currentStatus:e.status}),Object(b.jsx)(w,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})})},A=function(e){var t=e.message;return null===t?null:Object(b.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},N=new Date,F=N.getDate(),L=N.getMonth()+1,E=N.getFullYear().toString().substr(-2),D=N.getHours(),M=N.getMinutes();F<10&&(F="0".concat(F)),L<10&&(L="0".concat(L)),D<10&&(D="0".concat(D)),M<10&&(M="0".concat(M));var H="".concat(L).concat(F).concat(E),U="".concat(D).concat(M),I="";I=U<1200&&U>="0000"?"morning":U>1600?"evening":"afternoon";var R=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("p",{children:["Good ",I," Commanders , this is the strength for Signal Company as of ",U," on ",H,"."]})})},B=function(e){e.setPersons;var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var s=0;t.map((function(e){return"ma"===e.status?s+=1:s}));var c=0;t.map((function(e){return"off"===e.status?c+=1:c}));var r=0;t.map((function(e){return"leave"===e.status?r+=1:r}));var a=0;t.map((function(e){return"attached"===e.status?a+=1:a}));var o=0;t.map((function(e){return"others"===e.status?o+=1:o}));var u=0;t.map((function(e){return"stayout"===e.status?u+=1:u}));var i=n+s+c+r+a+o+u;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Absentees: ",i]}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"mc"})," MC: ",n," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"ma"})," MA: ",s," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"off"})," OFF: ",c," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"leave"})," LEAVE: ",r," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"attached"})," ATTACHED OUT: ",a," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"others"})," OTHERS: ",o," "]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("p",{children:["- ",Object(b.jsx)(P,{currentStatus:"stayout"})," STAY OUT: ",u," "]})})]})]})},J=function(e){e.setPersons;var t=e.persons,n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["HQ ",n,"/",s]}),Object(b.jsx)("ol",{children:t.map((function(e){return Object(b.jsxs)("li",{children:[e.name,Object(b.jsx)(P,{currentStatus:e.status})]},e.name)}))})]})},W=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),o=Object(r.a)(c,2),u=o[0],i=o[1],j=Object(a.useState)(""),l=Object(r.a)(j,2),d=l[0],h=l[1],x=Object(a.useState)(null),m=Object(r.a)(x,2),f=m[0],g=m[1];Object(a.useEffect)((function(){p().then((function(e){s(e)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(b.jsx)(A,{message:f}),Object(b.jsx)("h2",{children:"Add a new"}),Object(b.jsx)(O,{addName:function(e){e.preventDefault();var t={name:u.trim().toUpperCase(),status:d.toLowerCase()},c=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(c),u.trim())if(c.length>0){if(window.confirm("".concat(u," is already added to phonebook. Would you like to update the status?")))return C(c[0].id,t).then((function(e){s(n.map((function(t){return t.id!==c[0].id?t:e}))),g("".concat(u," has been updated")),setTimeout((function(){return g(null)}),5e3)})).catch((function(e){g("".concat(u," has been already been removed from the server")),setTimeout((function(){return g(null)}),5e3)}))}else v(t).then((function(e){s(n.concat(e)),g("".concat(u," has been added")),setTimeout((function(){return g(null)}),5e3)})).catch((function(e){g("".concat(u," has been already been added to the server")),setTimeout((function(){return g(null)}),5e3)}));else alert("Name/status must be filled");h(""),i("")},newName:u,handleNameChange:function(e){console.log(e.target.value),i(e.target.value)},newStatus:d,handleStatusChange:function(e){console.log(e.target.value),h(e.target.value)}}),Object(b.jsx)("h2",{children:"List of Personnel"}),Object(b.jsx)(T,{setPersons:s,persons:n}),Object(b.jsx)("h2",{children:"Parade State"}),Object(b.jsx)(R,{}),Object(b.jsx)(B,{setPersons:s,persons:n}),Object(b.jsx)(J,{setPersons:s,persons:n})]})};c.a.render(Object(b.jsx)(W,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6f9870c1.chunk.js.map