(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{71:function(e,t,n){},72:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var s=n(10),r=n.n(s),a=(n(71),n(7)),c=n(0),o=(n(72),n(1)),l=function(e){var t=e.access,n=e.setnewaccess,s=Object(c.useState)(""),r=Object(a.a)(s,2),l=r[0],i=r[1];return"sigparadestate"===l&&n(!t),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{class:"main",children:[Object(o.jsx)("p",{class:"sign",align:"center",children:"Sign in"}),Object(o.jsx)("form",{class:"form1"}),Object(o.jsx)("input",{class:"pass",type:"password",align:"center",placeholder:"Password",onChange:function(e){i(e.target.value)}})]})})},i=function(e){var t=e.message;return null===t?null:Object(o.jsx)("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},children:t})},u=n(127),j=n(136),d=n(133),b=n(138),O=n(135),p=n(139),h=n(96),x=new Date,m=x.getDate(),f=x.getMonth()+1,g=x.getFullYear().toString().substr(-2);m<10&&(m="0".concat(m)),f<10&&(f="0".concat(f));var v="".concat(m).concat(f).concat(g),C=Object(u.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:177},selectEmpty:{marginTop:e.spacing(2)}}})),w=function(e){var t=e.addName,n=e.newName,s=e.setNewName,r=e.newStatus,a=e.setnewStatus,c=e.newGroup,l=e.setnewGroup,i=e.newexcuse,u=e.setnewExcuse,x=e.newRole,m=e.setnewRole,f=e.setnewReason;return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:t,children:[Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"Rank/Name",multiline:!0,maxRows:4,value:n,onChange:function(e){console.log("Name: ".concat(e.target.value)),s(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{className:C().formControl,children:[Object(o.jsx)(b.a,{id:"demo-simple-select-label",children:"Current Status"}),Object(o.jsxs)(O.a,{labelId:"status",id:"status",value:r,onChange:function(e){console.log("Status: ".concat(e.target.value)),a(e.target.value);var t="";t="mc"===e.target.value?prompt("Details","MC FROM ".concat(v," TO ").concat(v)):"ma"===e.target.value?prompt("Details","MA AT"):"off"===e.target.value?prompt("Details","OFF ON ".concat(v)):"leave"===e.target.value?prompt("Details","LEAVE ON ".concat(v)):"attached"===e.target.value?prompt("Details","ATTACHED OUT TO"):"others"===e.target.value||"oncourse"===e.target.value?prompt("Details",""):"",console.log("Reason: ".concat(t)),t&&f(t.toUpperCase())},children:[Object(o.jsx)(p.a,{value:"present",children:"Present \u2705"}),Object(o.jsx)(p.a,{value:"mc",children:"MC \ud83d\ude37"}),Object(o.jsx)(p.a,{value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)(p.a,{value:"off",children:"Off \ud83d\udeab"}),Object(o.jsx)(p.a,{value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(o.jsx)(p.a,{value:"leave",children:"Leave \ud83d\udeaa"}),Object(o.jsx)(p.a,{value:"attached",children:"Attached Out \ud83c\udd70"}),Object(o.jsx)(p.a,{value:"others",children:"Others \ud83d\uddd2"}),Object(o.jsx)(p.a,{value:"stayout",children:"Stay Out \ud83c\udfe0"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{className:C().formControl,children:[Object(o.jsx)(b.a,{id:"demo-simple-select-label",children:"Group"}),Object(o.jsxs)(O.a,{labelId:"group",id:"group",value:c,onChange:function(e){console.log("Group: ".concat(e.target.value)),l(e.target.value)},children:[Object(o.jsx)(p.a,{value:"HQ",children:"HQ"}),Object(o.jsx)(p.a,{value:"CCP",children:"FG1 - CCP"}),Object(o.jsx)(p.a,{value:"CSP",children:"FG2 - CSP"}),Object(o.jsx)(p.a,{value:"OTHERS",children:"Others"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)(d.a,{className:C().formControl,children:[Object(o.jsx)(b.a,{id:"demo-simple-select-label",children:"Role"}),Object(o.jsxs)(O.a,{labelId:"role",id:"role",value:x,onChange:function(e){console.log("Role: ".concat(e.target.value)),m(e.target.value)},children:[Object(o.jsx)(p.a,{value:"hq",children:"Coy HQ"}),Object(o.jsx)(p.a,{value:"sevenspec",children:"7th Mono Spec"}),Object(o.jsx)(p.a,{value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(p.a,{value:"is",children:"IS Opr"})]})]})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"Medical Excuses",multiline:!0,maxRows:4,value:i,onChange:function(e){console.log("Excuse: ".concat(e.target.value)),u(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsx)(h.a,{variant:"contained",color:"primary",type:"submit",children:"Add"})})]})})},S=n(134),y=function(e){var t=e.addName,n=e.newName,s=e.setNewName,r=e.newStatus,l=e.setnewStatus,i=e.newGroup,u=e.setnewGroup,j=e.newexcuse,d=e.setnewExcuse,b=e.newRole,O=e.setnewRole,p=e.setnewReason,h=Object(c.useState)(!1),x=Object(a.a)(h,2),m=x[0],f=x[1],g=function(){return f(!m)};return!1===m?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:g,children:Object(o.jsx)("h3",{children:"Insert New"})})})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:g,children:Object(o.jsx)("h3",{children:"Hide"})})}),Object(o.jsx)("br",{}),Object(o.jsx)(w,{addName:t,newName:n,setNewName:s,newStatus:r,setnewStatus:l,newGroup:i,setnewGroup:u,newexcuse:j,setnewExcuse:d,newRole:b,setnewRole:O,setnewReason:p}),Object(o.jsx)("br",{})]})},N=n(38),R=n.n(N),A="/api/persons",F=function(){return R.a.get(A).then((function(e){return e.data}))},T=function(e){return R.a.post(A,e).then((function(e){return e.data}))},k=function(e){return R.a.delete("".concat(A,"/").concat(e))},D=function(e,t){return R.a.put("".concat(A,"/").concat(e),t).then((function(e){return e.data}))},P=n(59),E=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons,l=Object(c.useState)(null),i=Object(a.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Status"}),Object(o.jsxs)(P.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null);var a=e.target.getAttribute("value"),c="";(c="mc"===a?prompt("Details","MC FROM ".concat(v," TO ").concat(v)):"ma"===a?prompt("Details","MA AT"):"off"===a?prompt("Details","OFF ON ".concat(v)):"leave"===a?prompt("Details","LEAVE ON ".concat(v)):"attached"===a?prompt("Details","ATTACHED OUT TO "):"others"===a||"oncourse"===a?prompt("Details",""):"")&&(c=c.toUpperCase()),console.log(c),console.log(t);var o={name:n.name,status:e.target.getAttribute("value"),reason:c,group:n.group,excuse:n.excuse,role:n.role},l=s.filter((function(e){return e.name.toLowerCase().includes(o.name.toLowerCase())}));if(console.log(l),e.target.getAttribute("value"))return D(l[0].id,o).then((function(e){r(s.map((function(t){return t.id!==l[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(p.a,{value:"present",children:"Present \u2705"}),Object(o.jsx)(p.a,{value:"mc",children:"MC \ud83d\ude37"}),Object(o.jsx)(p.a,{value:"ma",children:"MA \ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}),Object(o.jsx)(p.a,{value:"off",children:"Off \ud83d\udeab"}),Object(o.jsx)(p.a,{value:"oncourse",children:"On Course \ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}),Object(o.jsx)(p.a,{value:"leave",children:"Leave \ud83d\udeaa"}),Object(o.jsx)(p.a,{value:"attached",children:"Attached Out \ud83c\udd70"}),Object(o.jsx)(p.a,{value:"others",children:"Others \ud83d\uddd2"}),Object(o.jsx)(p.a,{value:"stayout",children:"Stay Out \ud83c\udfe0"})]})]}):Object(o.jsx)(o.Fragment,{})},L=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons,l=Object(c.useState)(null),i=Object(a.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Group"}),Object(o.jsxs)(P.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null),console.log(t);var a={name:n.name,status:n.status,reason:n.reason,group:e.target.getAttribute("value"),excuse:n.excuse,role:n.role},c=s.filter((function(e){return e.name.toLowerCase().includes(a.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return D(c[0].id,a).then((function(e){r(s.map((function(t){return t.id!==c[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(p.a,{value:"hq",children:"HQ"}),Object(o.jsx)(p.a,{value:"ccp",children:"FG1 - CCP"}),Object(o.jsx)(p.a,{value:"csp",children:"FG2 - CSP"}),Object(o.jsx)(p.a,{value:"others",children:"Others"})]})]}):Object(o.jsx)(o.Fragment,{})},U=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons,l=Object(c.useState)(null),i=Object(a.a)(l,2),u=i[0],j=i[1];return t?Object(o.jsxs)("div",{children:[Object(o.jsx)(h.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:"Role"}),Object(o.jsxs)(P.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClick:function(e,t){j(null),console.log(t);var a={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:n.excuse,role:e.target.getAttribute("value")},c=s.filter((function(e){return e.name.toLowerCase().includes(a.name.toLowerCase())}));if(console.log(c),e.target.getAttribute("value"))return D(c[0].id,a).then((function(e){r(s.map((function(t){return t.id!==c[0].id?t:e})))}))},onClose:function(){j(null)},children:[Object(o.jsx)(p.a,{value:"hq",children:"Coy HQ"}),Object(o.jsx)(p.a,{value:"sevenspec",children:"7th Mono Spec"}),Object(o.jsx)(p.a,{value:"ic2",children:"IC2 Opr"}),Object(o.jsx)(p.a,{value:"is",children:"IS Opr"})]})]}):Object(o.jsx)(o.Fragment,{})},M=function(e){var t=e.options,n=e.person,s=e.persons,r=e.setPersons;if(t)return Object(o.jsx)("div",{children:Object(o.jsx)(h.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e,t){console.log(t);var a=prompt("Current excuses",n.excuse);if(a){var c={name:n.name,status:n.status,reason:n.reason,group:n.group,excuse:a.toUpperCase(),role:n.role},o=s.filter((function(e){return e.name.toLowerCase().includes(c.name.toLowerCase())}));if(console.log(o),a)return D(o[0].id,c).then((function(e){r(s.map((function(t){return t.id!==o[0].id?t:e})))}))}},children:"Excuses"})})},G=function(e){var t=e.person,n=e.id,s=e.setPersons,r=e.persons,l=Object(c.useState)(!1),i=Object(a.a)(l,2),u=i[0],j=i[1],d=function(){window.confirm("Are you sure you want to permanently delete ".concat(t.name,"?"))&&(k(n),s(r.filter((function(e){return e.id!==n}))))},b=function(){return j(!u)};return!1===u?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(o.jsx)("button",{onClick:b,children:"Update"}),Object(o.jsx)(h.a,{onClick:d,children:"Delete"})]})}):(setTimeout(b,1e4),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(o.jsx)("button",{onClick:b,children:"Hide"}),Object(o.jsx)(h.a,{onClick:d,children:"Delete"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:[Object(o.jsx)(E,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(L,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(U,{options:u,person:t,persons:r,setPersons:s}),Object(o.jsx)(M,{options:u,person:t,persons:r,setPersons:s})]})]}))},H=function(e){var t=e.symbol;return Object(o.jsx)("span",{className:"emoji",role:"img",children:t})},I=function(e){var t=e.currentStatus;return"present"===t?Object(o.jsx)(H,{symbol:"\u2705"}):"attached"===t?Object(o.jsx)(H,{symbol:"\ud83c\udd70"}):"others"===t?Object(o.jsx)(H,{symbol:"\ud83d\uddd2"}):"mc"===t?Object(o.jsx)(H,{symbol:"\ud83d\ude37"}):"ma"===t?Object(o.jsx)(H,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\u2695\ufe0f"}):"off"===t?Object(o.jsx)(H,{symbol:"\ud83d\udeab"}):"leave"===t||"leave"===t?Object(o.jsx)(H,{symbol:"\ud83d\udeaa"}):"stayout"===t?Object(o.jsx)(H,{symbol:"\ud83c\udfe0"}):"oncourse"===t?Object(o.jsx)(H,{symbol:"\ud83d\udc68\ud83c\udffb\u200d\ud83c\udf93"}):""},Q=function(e){var t=e.person;return t.reason&&"nil"!==t.reason?Object(o.jsxs)(o.Fragment,{children:["(",t.reason,")"]}):Object(o.jsx)(o.Fragment,{})},B=function(e){var t=e.setPersons,n=e.persons,s=Object(c.useState)(!1),r=Object(a.a)(s,2),l=r[0],i=r[1],u=function(){return i(!l)};return!1===l?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:u,children:Object(o.jsx)("h3",{children:"Edit"})})})}):Object(o.jsxs)("div",{children:[Object(o.jsx)(S.a,{variant:"contained",color:"primary","aria-label":"contained primary button group",children:Object(o.jsx)("button",{onClick:u,children:Object(o.jsx)("h3",{children:"Hide"})})}),Object(o.jsx)("br",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsxs)("li",{children:[e.name,Object(o.jsx)(I,{currentStatus:e.status}),Object(o.jsx)(Q,{person:e}),Object(o.jsx)("br",{}),Object(o.jsx)(G,{person:e,id:e.id,setPersons:t,persons:n})]},e.name)}))})]})},J=function(e){var t=e.newcdo,n=e.handlecdochange,s=e.newcds,r=e.handlecdschange,a=e.newcos,c=e.handlecoschange,l=e.newas,i=e.handleaschange,u=e.newauthor,d=e.handleauthorchange;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"CDO (Rank/Name)",multiline:!0,maxRows:4,value:t,onChange:n})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"CDS (Rank/Name)",multiline:!0,maxRows:4,value:s,onChange:r})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"COS (Rank/Name)",multiline:!0,maxRows:4,value:a,onChange:c})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"A/S (Rank/Name)",multiline:!0,maxRows:4,value:l,onChange:i})}),Object(o.jsx)("div",{children:Object(o.jsx)(j.a,{id:"standard-multiline-flexible",label:"Done By: (Rank/Name)",multiline:!0,maxRows:4,value:u,onChange:d})})]})},q=new Date,V=q.getHours(),W=q.getMinutes();V<10&&(V="0".concat(V)),W<10&&(W="0".concat(W));var Y="".concat(V).concat(W),z="";z=Y<1200&&Y>="0000"?"morning":Y>1600?"evening":"afternoon";var K=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("p",{children:["Good ",z," Commanders, this is the strength for Signal Company as of ",Y," on ",v,"."]})})},X={padding:0,margin:0},Z=function(e){var t=e.persons,n=0;t.map((function(e){return"mc"===e.status?n+=1:n}));var s=0;t.map((function(e){return"ma"===e.status?s+=1:s}));var r=0;t.map((function(e){return"off"===e.status?r+=1:r}));var a=0;t.map((function(e){return"oncourse"===e.status?a+=1:a}));var c=0;t.map((function(e){return"leave"===e.status?c+=1:c}));var l=0;t.map((function(e){return"attached"===e.status?l+=1:l}));var i=0;t.map((function(e){return"others"===e.status?i+=1:i}));var u=0;t.map((function(e){return"stayout"===e.status?u+=1:u}));var j=n+s+r+c+l+i+u;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:X,children:["Absentees: ",j]}),Object(o.jsxs)("p",{style:X,children:[" - ",Object(o.jsx)(I,{currentStatus:"mc"})," MC: ",n," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"ma"})," MA: ",s," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"off"})," OFF: ",r," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"oncourse"})," ON COURSE: ",a," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"leave"})," LEAVE: ",c," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"attached"})," ATTACHED OUT: ",l," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"others"})," OTHERS: ",i," "]}),Object(o.jsxs)("p",{style:X,children:["- ",Object(o.jsx)(I,{currentStatus:"stayout"})," STAY OUT: ",u," "]}),Object(o.jsx)("br",{})]})},$={padding:0,margin:0},_=function(e){var t=e.persons,n=t.filter((function(e){return"hq"===e.role})),s=0;n.map((function(e){return"present"===e.status?s+=1:s}));var r=n.length,a=t.filter((function(e){return"sevenspec"===e.role})),c=0;a.map((function(e){return"present"===e.status?c+=1:c}));var l=a.length,i=t.filter((function(e){return"ic2"===e.role})),u=0;i.map((function(e){return"present"===e.status?u+=1:u}));var j=i.length,d=t.filter((function(e){return"is"===e.role})),b=0;d.map((function(e){return"present"===e.status?b+=1:b}));var O=d.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:$,children:[" -Coy HQ: ",s,"/",r," "]}),Object(o.jsxs)("p",{style:$,children:[" -7th Mono Spec: ",c,"/",l," "]}),Object(o.jsxs)("p",{style:$,children:[" -IC2 Opr: ",u,"/",j," "]}),Object(o.jsxs)("p",{style:$,children:[" -IS Opr: ",b,"/",O," "]}),Object(o.jsx)("br",{})]})},ee={padding:0,margin:0},te=function(e){var t=e.persons,n=e.newcdo,s=e.newcds,r=e.newcos,a=e.newas,c=0;t.map((function(e){return"present"===e.status?c+=1:c}));var l=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:ee,children:["CDO: ",n.toUpperCase()]}),Object(o.jsxs)("p",{style:ee,children:["CDS: ",s.toUpperCase()]}),Object(o.jsxs)("p",{style:ee,children:["COS: ",r.toUpperCase()]}),Object(o.jsxs)("p",{style:ee,children:["ARMSKOTE: ",a.toUpperCase()]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{style:ee,children:["Total Strength: ",l]}),Object(o.jsxs)("p",{style:ee,children:["Present Strength: ",c]}),Object(o.jsx)("br",{}),Object(o.jsx)(_,{persons:t}),Object(o.jsx)(Z,{persons:t})]})},ne={padding:0,margin:0},se=function(e){var t=e.persons.filter((function(e){return"hq"===String(e.group).toLowerCase()}));console.log("List of HQ personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:ne,children:["HQ: ",n,"/",s]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:ne,children:[t+1,"."," "+e.name,Object(o.jsx)(I,{currentStatus:e.status}),Object(o.jsx)(Q,{person:e})]},e.name)}))]})},re={padding:0,margin:0},ae=function(e){var t=e.persons.filter((function(e){return"ccp"===String(e.group).toLowerCase()}));console.log("List of CCP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:re,children:["FG1 - CCP: ",n,"/",s]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:re,children:[t+1,"."," "+e.name,Object(o.jsx)(I,{currentStatus:e.status}),Object(o.jsx)(Q,{person:e})]},e.name)}))]})},ce={padding:0,margin:0},oe=function(e){var t=e.persons.filter((function(e){return"csp"===String(e.group).toLowerCase()}));console.log("List of CSP personnel: ".concat(JSON.stringify(t)));var n=0;t.map((function(e){return"present"===e.status?n+=1:n}));var s=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:ce,children:["FG2 - CSP: ",n,"/",s]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:ce,children:[t+1,"."," "+e.name,Object(o.jsx)(I,{currentStatus:e.status}),Object(o.jsx)(Q,{person:e})]},e.name)}))]})},le={padding:0,margin:0},ie=function(e){var t=e.person;return t.excuse?Object(o.jsxs)(o.Fragment,{children:["(",t.excuse,")"]}):Object(o.jsx)(o.Fragment,{})},ue=function(e){var t=e.persons.filter((function(e){return e.excuse&&"nil"!==e.excuse}));console.log("List of personnel with excuses: ".concat(JSON.stringify(t)));var n=t.length;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{style:le,children:["STATUSES: ",n]}),t.map((function(e,t){return Object(o.jsxs)("p",{style:le,children:[t+1,"."," "+e.name+" ",Object(o.jsx)(ie,{person:e})]},e.name)}))]})},je={padding:0,margin:0},de=function(e){var t=e.newauthor;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{style:je,children:"Done by:"}),t.toUpperCase()]})},be=function(e){var t=e.persons,n=e.newauthor;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(se,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(ae,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(oe,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(ue,{persons:t}),Object(o.jsx)("br",{}),Object(o.jsx)(de,{newauthor:n})]})},Oe=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),l=Object(a.a)(r,2),u=l[0],j=l[1],d=Object(c.useState)(""),b=Object(a.a)(d,2),O=b[0],p=b[1],h=Object(c.useState)(""),x=Object(a.a)(h,2),m=x[0],f=x[1],g=Object(c.useState)(""),v=Object(a.a)(g,2),C=v[0],w=v[1],S=Object(c.useState)(""),N=Object(a.a)(S,2),R=N[0],A=N[1],k=Object(c.useState)(""),P=Object(a.a)(k,2),E=P[0],L=P[1],U=Object(c.useState)(""),M=Object(a.a)(U,2),G=M[0],H=M[1],I=Object(c.useState)(""),Q=Object(a.a)(I,2),q=Q[0],V=Q[1],W=Object(c.useState)(""),Y=Object(a.a)(W,2),z=Y[0],X=Y[1],Z=Object(c.useState)(""),$=Object(a.a)(Z,2),_=$[0],ee=$[1],ne=Object(c.useState)(""),se=Object(a.a)(ne,2),re=se[0],ae=se[1],ce=Object(c.useState)(null),oe=Object(a.a)(ce,2),le=oe[0],ie=oe[1];Object(c.useEffect)((function(){F().then((function(e){s(e)}))}),[]);var ue=function(e){console.log("Done by: ".concat(e.target.value)),ae(e.target.value)};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Parade State Application (For Internal Use Only)"}),Object(o.jsx)(i,{message:le}),Object(o.jsx)(y,{addName:function(e){e.preventDefault();var t={name:u.trim().toUpperCase(),status:O.toLowerCase(),reason:m||"nil",group:C.toUpperCase(),excuse:R?R.trim:"nil",role:E},r=n.filter((function(e){return e.name.toLowerCase().includes(t.name.toLowerCase())}));if(console.log(r),u.trim()&&O.trim()&&C.trim()&&E.trim())if(r.length>0){if(window.confirm("".concat(u.toUpperCase()," is already added to phonebook. Would you like to update the status?")))return D(r[0].id,t).then((function(e){s(n.map((function(t){return t.id!==r[0].id?t:e}))),ie("".concat(u.toUpperCase()," has been updated")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u.toUpperCase()," has been already been removed from the server")),setTimeout((function(){return ie(null)}),5e3)}))}else T(t).then((function(e){s(n.concat(e)),ie("".concat(u.toUpperCase()," has been added")),setTimeout((function(){return ie(null)}),5e3)})).catch((function(e){ie("".concat(u.toUpperCase()," has already been added to the server")),setTimeout((function(){return ie(null)}),5e3)}));else alert("All fields (besides medical excuses) must be filled");p(""),j(""),f(""),w(""),A(""),L("")},newName:u,setNewName:j,newStatus:O,setnewStatus:p,newGroup:C,setnewGroup:w,newexcuse:R,setnewExcuse:A,newRole:E,setnewRole:L,setnewReason:f}),Object(o.jsx)(B,{setPersons:s,persons:n}),Object(o.jsx)("h2",{children:"Settings"}),Object(o.jsx)(J,{newcdo:G,handlecdochange:function(e){console.log("CDO: ".concat(e.target.value)),H(e.target.value)},newcds:q,handlecdschange:function(e){console.log("CDS: ".concat(e.target.value)),V(e.target.value)},newcos:z,handlecoschange:function(e){console.log("COS: ".concat(e.target.value)),X(e.target.value)},newas:_,handleaschange:function(e){console.log("Armskote: ".concat(e.target.value)),ee(e.target.value)},newauthor:re,handleauthorchange:ue}),Object(o.jsx)("h2",{children:"Parade State"}),Object(o.jsx)(K,{}),Object(o.jsx)(te,{persons:n,newcdo:G,newcds:q,newcos:z,newas:_,newauthor:re,handleauthorchange:ue}),Object(o.jsx)(be,{setPersons:s,persons:n,newauthor:re})]})},pe=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],s=t[1];return n?Object(o.jsx)(Oe,{}):Object(o.jsx)(l,{access:n,setnewaccess:s})};r.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(pe,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.c0c7d3aa.chunk.js.map