(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{69:function(e,t,a){e.exports=a(89)},74:function(e,t,a){},75:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},76:function(e,t,a){},77:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(44),o=a.n(l),c=(a(74),a(75),a(76),a(77),function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("p",{className:"Title"},"Todo helps you organize your tasks better"),r.a.createElement("img",{className:"Image",src:"https://image.flaticon.com/icons/svg/148/148767.svg"}))}),s=a(53),i=a(28),m=(a(80),a(15)),u=Object(m.b)((function(e){return{tasks:e.tasks}}),(function(e){return{addTasks:function(t,a){return e({type:"ADD_TODO",objective:t,importance:a})}}}))((function(e){var t=Object(s.a)({initialValues:{task:"",importance:""},validationSchema:i.a({task:i.b().min(15,"Must be more than 15 characters long").required("Required"),importance:i.b().oneOf(["Very important","High","Normal","Trivial"]).required("Please select task importance")}),onSubmit:function(t){alert("Task : "+JSON.stringify(t)),e.addTasks(t.task,t.importance)}});return t.touched.importance=!0,r.a.createElement("form",{className:"Form",onSubmit:t.handleSubmit},r.a.createElement("div",{className:"ImportanceSection"},r.a.createElement("label",{className:"ImportanceLabel",htmlFor:"taskImportance"},"Task importance :"),r.a.createElement("select",{className:"ImportanceDropdown",name:"importance",id:"taskImportance",onChange:t.handleChange,value:t.values.importance},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Please Choose..."),r.a.createElement("option",{value:"Normal"},"Normal"),r.a.createElement("option",{value:"Very important"},"Very important"),r.a.createElement("option",{value:"High"},"High"),r.a.createElement("option",{value:"Trivial"},"Trivial"))),t.touched.importance&&t.errors.importance?r.a.createElement("div",{className:"Error"},t.errors.importance):null,r.a.createElement("textarea",{className:"TextArea",style:t.touched.task&&t.errors.task?{border:"1.5px solid red"}:null,name:"task",type:"textarea",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.task,placeholder:"Add your task requirements"}),r.a.createElement("button",{className:"Button",disabled:!(!t.touched.task||!t.errors.task),type:"submit"},"Submit"),t.touched.task&&t.errors.task?r.a.createElement("div",{className:"Error"},t.errors.task):null)})),d=(a(84),a(68)),k=(a(85),a(92)),f=a(91),E=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),l=a[0],o=a[1],c=Object(s.a)({initialValues:{newTask:e.task.objective},validationSchema:i.a({newTask:i.b().min(15,"Must be 15 characters or less").required("Required")}),onSubmit:function(t){e.changeObjective({id:e.task.id,objective:t.newTask,done:e.task.done}),o(!l)}}),m=function(){o(!l)};return r.a.createElement(f.a,{className:"CardColumn",style:{width:"18rem",display:"block",border:e.task.done?"2px solid green":null,background:e.task.done?"rgba(242, 177, 13, 0.07)":null}},r.a.createElement(f.a.Header,{style:{backgroundColor:function(){switch(e.task.importance){case"Very important":return"rgba(255, 221, 0, 1)";case"High":return"rgba(255, 119, 0, 1)";case"Trivial":return"rgba(255, 0, 0, 1)";default:return"lightblue"}}(),fontWeight:"bold",color:"rgba(33, 33, 33, 1)"}},e.task.importance),l?r.a.createElement("form",{onSubmit:c.handleSubmit},r.a.createElement("textarea",{className:"TextArea",name:"newTask",type:"text",onChange:c.handleChange,onBlur:c.handleBlur,value:c.values.newTask}),c.touched.newTask&&c.errors.newTask?r.a.createElement("div",{style:{color:"red"}},c.errors.newTask):null,r.a.createElement(k.a,{className:"CustomButton",onClick:m,variant:"danger"},"CANCEL"),r.a.createElement(k.a,{className:"CustomButton",type:"submit",variant:"success",disabled:!(!c.touched.newTask||!c.errors.newTask)},"CONFIRM")):function(){var t=e.task.done?null:r.a.createElement(k.a,{className:"CustomButton",onClick:m,variant:"outline-dark"},"Rename");return r.a.createElement("div",null,r.a.createElement(f.a.Text,null,e.task.objective),r.a.createElement(k.a,{className:"CustomButton",variant:"outline-dark",onClick:e.task.done?null:function(){e.changeDoneState(e.task.id)},disabled:!!e.task.done||null},"Done"),t)}())},h=Object(m.b)((function(e){return{tasks:e.tasks,filter:e.filter}}),(function(e){return{changeDoneState:function(t){return e({type:"CHANGE_DONE_STATE",id:t})},changeObjective:function(t){return e({type:"CHANGE_OBJECTIVE",task:t})}}}))((function(e){return r.a.createElement("div",{className:"Tasks"},e.tasks?null:r.a.createElement("div",{className:"Empty"},"You don't have any tasks yet."),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.tasks?e.tasks.filter((function(t){return t.importance===e.filter||"No filter"===e.filter})).map((function(t){return r.a.createElement("div",{key:t.id,className:"col-sm-12 col-lg-4 "},r.a.createElement(E,{task:t,changeDoneState:e.changeDoneState,changeObjective:e.changeObjective}))})):null)))})),v=(a(86),Object(m.b)((function(e){return{filter:e.filter}}),(function(e){return{changeFilter:function(t){return e({type:"CHANGE_FILTER",filter:t})}}}))((function(e){return r.a.createElement("div",{className:"FilterTasks"},r.a.createElement("label",{className:"FilterLabel",htmlFor:"Filter"},"Filter by : "),r.a.createElement("select",{value:e.filter,onChange:function(t){return e.changeFilter(t.target.value)}},r.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Please Choose..."),r.a.createElement("option",{value:"Normal"},"Normal"),r.a.createElement("option",{value:"Very important"},"Very important"),r.a.createElement("option",{value:"High"},"High"),r.a.createElement("option",{value:"Trivial"},"Trivial"),r.a.createElement("option",{value:"No filter"},"No Filter")))}))),g=(a(87),function(){return r.a.createElement("div",{className:"Footer "},r.a.createElement("div",{className:"SocialGroup"},r.a.createElement("p",null," Like what you see? Let's get to know each other better "),r.a.createElement("a",{href:"https://www.facebook.com/dan.tudorin",target:"_blank"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/145/145802.png",className:"Icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/tudorin-dan-47033713b/",target:"_blank"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/1384/1384062.png",className:"Icon"})),r.a.createElement("a",{href:"https://www.instagram.com/tudorind/?hl=en",target:"_blank"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2111/2111463.svg",className:"Icon"}))),r.a.createElement("div",{className:"Copyright"},"@2020 created by : ",r.a.createElement("strong",null,"Tudorin Dan")))}),p=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(u,null),r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(g,null))};var b=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(88);var N=a(52),y={filter:"No filter",tasks:JSON.parse(localStorage.getItem("tasks"))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var a={id:e.tasks?e.tasks.length:0,objective:t.objective,importance:t.importance,done:!1};if(!e.tasks){var n=[].concat(a);return localStorage.setItem("tasks",JSON.stringify(n)),{filter:e.filter,tasks:n}}var r=e.tasks.concat(a);return localStorage.setItem("tasks",JSON.stringify(r)),{filter:e.filter,tasks:r};case"CHANGE_DONE_STATE":var l=[].concat(e.tasks);return l[t.id].done=!l[t.id].done,localStorage.setItem("tasks",JSON.stringify(l)),{filter:e.filter,tasks:l};case"CHANGE_OBJECTIVE":var o=[].concat(e.tasks);return o[t.task.id].objective=t.task.objective,localStorage.setItem("tasks",JSON.stringify(o)),{filter:e.filter,tasks:o};case"CHANGE_FILTER":return{filter:t.filter,tasks:[].concat(e.tasks)};default:return e}},w=Object(N.b)(T),C=r.a.createElement(m.a,{store:w},r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)));o.a.render(C,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.b75aca35.chunk.js.map