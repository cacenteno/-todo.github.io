(this.webpackJsonplearning=this.webpackJsonplearning||[]).push([[0],{49:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),r=n(23),o=n.n(r),i=(n(49),n(11)),l=n(12),d=n(21),j=n(9),u=n(22);var p=function(e){return Object(a.jsx)("ul",{className:"navbar-nav",children:e.links.map((function(e){return Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{className:"nav-link",to:e.href,children:e.text})},e.id)}))})},b=[{id:1,href:"/signup",text:"Sign Up"},{id:2,href:"/login",text:"Login"}];var h=function(e){var t=Object(s.useState)({toggle:!1}),n=Object(u.a)(t,2),c=n[0],r=n[1];return Object(a.jsx)(i.a,{forceRefresh:!0,children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Logo"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button",onClick:function(){r(!c)},children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse ".concat(c?"":"show"),id:"navbarNav",children:e.token?Object(a.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{className:"nav-link",to:"/",onClick:function(){return e.logOut()},children:"Log Out"})})]}):Object(a.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(a.jsx)(p,{links:b})})})]})})},m=n(4),O=n(7),x=n.n(O),f=n(16),v=n(15),g=n.n(v);var N=function(e){var t=function(){var t=Object(f.a)(x.a.mark((function t(n){var a,s,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=n.target.elements,s={first_name:a.first_name.value,last_name:a.last_name.value,email:a.email.value,password:a.password.value},t.next=5,g.a.post("https://centenoacademy.org/api/signup",s,{headers:{"Content-Type":"application/json"}});case 5:c=t.sent,c.data,e.history.push("/login");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("form",{onSubmit:t,children:Object(a.jsxs)("div",{className:"col-sm-5 py-5 px-5 mx-auto",children:[Object(a.jsx)("h2",{className:"text-center",children:"Sign Up"}),Object(a.jsx)("input",{className:"form-control mb-3",type:"text",name:"first_name",placeholder:"First Name"}),Object(a.jsx)("input",{className:"form-control mb-3",type:"text",name:"last_name",placeholder:"Last Name"}),Object(a.jsx)("input",{className:"form-control mb-3",type:"text",name:"email",placeholder:"Email"}),Object(a.jsx)("input",{className:"form-control mb-3",type:"password",name:"password",placeholder:"Password"}),Object(a.jsx)("button",{className:"btn btn-info text-white",children:"Sign Up"}),Object(a.jsx)("br",{})]})})};var y=function(e){var t=function(){var t=Object(f.a)(x.a.mark((function t(n){var a,s,c,r,o;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),a=n.target.elements,s={email:a.email.value,password:a.pwd.value},t.next=6,g.a.post("https://centenoacademy.org/api/login",s,{headers:{"Content-Type":"application/json"}});case 6:return c=t.sent,r=c.data,t.next=10,g.a.get("https://centenoacademy.org/api/todos",{headers:{"Content-Type":"application/json","secret-token":r.token}});case 10:o=t.sent,e.saveToken(r.token),e.setTodos(o.data.todos),e.history.push("/profile"),t.next=19;break;case 16:throw t.prev=16,t.t0=t.catch(0),t.t0;case 19:case"end":return t.stop()}}),t,null,[[0,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("form",{onSubmit:t,children:Object(a.jsxs)("div",{className:"col-sm-5 mx-auto py-5 px-4",children:[Object(a.jsx)("h2",{className:"text-center mb-3",children:"Log In"}),Object(a.jsx)("input",{type:"text",name:"email",className:"form-control mb-3",placeholder:"Email"}),Object(a.jsx)("input",{type:"password",name:"pwd",className:"form-control mb-3",placeholder:"Password"}),Object(a.jsx)("div",{className:"mx-auto px-4",children:Object(a.jsx)("button",{className:"btn btl-lg btn-info",children:"Log In"})})]})})};var k=function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsxs)("div",{className:"jumbotron",children:[Object(a.jsx)("h1",{className:"display-4",children:"React App w/ Redux"}),Object(a.jsx)("p",{className:"lead",children:"This simple app showcases my fullstack capabilities"}),Object(a.jsx)("hr",{className:"my-4"})]}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("p",{children:"Click sign up to test app!"}),Object(a.jsx)("p",{className:"lead",children:Object(a.jsx)(i.b,{className:"btn btn-primary btn-lg",to:"/signup",children:"Sign Up"})}),Object(a.jsx)("hr",{className:"my-4"})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm",children:[Object(a.jsx)("h2",{children:"Front End"}),Object(a.jsx)("p",{children:"This app was created using react and redux."}),Object(a.jsxs)("span",{className:"d-flex",children:[Object(a.jsx)("p",{className:"mr-2",children:"Front End:"}),Object(a.jsx)("a",{href:"https://github.com/ccent123/todo-react-w-auth",children:"Source"})]})]}),Object(a.jsxs)("div",{className:"col-sm",children:[Object(a.jsx)("h2",{children:"Back End"}),Object(a.jsx)("p",{children:"This app was created using react and redux."}),Object(a.jsxs)("span",{className:"d-flex",children:[Object(a.jsx)("p",{className:"mr-2",children:"Back End:"}),Object(a.jsx)("a",{href:"https://github.com/ccent123/todo-react-w-auth",children:"Source"})]})]})]})]})},T=n(17),w=n(18),S=n(13),E=n(20),_=n(19),C=function(e){Object(E.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).state={},a.handleSubmit=a.handleSubmit.bind(Object(S.a)(a)),a}return Object(w.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:e.target.elements.title.value,description:e.target.elements.description.value},n=document.getElementsByTagName("form")[0].elements;for(var a in n)a<3&&(n[a].value="");this.props.addTodo(this.props.token,t),console.log(t)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("form",{onSubmit:this.handleSubmit,children:Object(a.jsxs)("div",{className:"col-sm card",children:[Object(a.jsx)("input",{className:"form-control mb-2",type:"text",name:"title",placeholder:"To Do Title"}),Object(a.jsx)("input",{className:"form-control",type:"text",name:"description",placeholder:"Enter item description..."}),Object(a.jsx)("button",{className:"btn btn-info",children:"Add To Do"})]})})})}}]),n}(s.Component),D=function(e){Object(E.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this)).state={toggle:!1,title:e.todo.title,description:e.todo.description},a.toggleEdit=a.toggleEdit.bind(Object(S.a)(a)),a.handleChange=a.handleChange.bind(Object(S.a)(a)),a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"toggleEdit",value:function(){var e=!this.state.toggle;this.setState({toggle:e})}},{key:"handleChange",value:function(e){this.setState({title:e.target.elements.title.value,description:e.target.elements.description.value})}},{key:"commitEdit",value:function(){var e={_id:this.props.todo._id,title:this.state.title,description:this.state.description,date:Date.now()};this.props.editTodo(this.props.token,e),this.toggleEdit()}},{key:"render",value:function(){var e=this;return this.state.toggle?Object(a.jsxs)("div",{className:"d-flex",children:[Object(a.jsxs)("div",{className:"mr-auto",children:[Object(a.jsx)("input",{className:"form-control",type:"text",name:"title",onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title,placeholder:"Title"}),Object(a.jsx)("input",{className:"form-control",type:"text",name:"description",onChange:function(t){return e.setState({description:t.target.value})},value:this.state.description,placeholder:"Description"})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.props.removeTodo(e.props.token,e.props.todo)},children:Object(a.jsx)("i",{className:"fa fa-trash"})}),Object(a.jsx)("button",{className:"btn btn-success",children:Object(a.jsx)("i",{className:"fa fa-check",onClick:function(){return e.commitEdit()}})})]}):Object(a.jsxs)("div",{className:"d-flex py-3",children:[Object(a.jsxs)("div",{className:"mr-auto",children:[Object(a.jsx)("h3",{children:this.state.title}),Object(a.jsx)("p",{children:this.state.description})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.props.removeTodo(e.props.token,e.props.todo)},children:Object(a.jsx)("i",{className:"fa fa-trash"})}),Object(a.jsx)("button",{className:"btn btn-warning",onClick:function(){return e.toggleEdit()},children:Object(a.jsx)("i",{className:"fa fa-edit"})})]})}}]),n}(c.a.Component),L=n(27),U=function(e){return Object(a.jsx)(L.a,{onDragEnd:function(t){var n=Array.from(e.todos),a=n.splice(t.source.index,1),s=Object(u.a)(a,1)[0];console.log(t.destination),n.splice(t.destination.index,0,s),e.reorderTodos(e.token,n),e.setTodos(n)},children:Object(a.jsx)(L.c,{droppableId:"ToDos",children:function(t){return Object(a.jsxs)("ul",Object(j.a)(Object(j.a)({className:"pl-0"},t.droppableProps),{},{style:{listStyleType:"none"},ref:t.innerRef,children:[e.todos[0]?e.todos.map((function(t,n){return Object(a.jsx)(L.b,{draggableId:t._id,index:n,children:function(n){return Object(a.jsx)("li",Object(j.a)(Object(j.a)(Object(j.a)({},n.draggableProps),n.dragHandleProps),{},{ref:n.innerRef,children:Object(a.jsx)(D,Object(j.a)(Object(j.a)({},e),{},{todo:t}))}))}},t._id)})):null,t.placeholder]}))}})})},I=n(26),R=n(43),A=n.p+"static/media/beep-07.250aa10d.mp3";var P=function(){var e=Object(s.useState)({started:!1}),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)({min:0}),i=Object(u.a)(o,2),l=i[0],d=i[1],j=Object(R.a)(A),p=Object(u.a)(j,1)[0],b=function(e){Object(E.a)(n,e);var t=Object(_.a)(n);function n(){return Object(T.a)(this,n),t.apply(this,arguments)}return Object(w.a)(n,[{key:"render",value:function(){return Object(a.jsx)(I.a,{date:Date.now()+(l||null),renderer:function(e){return Object(a.jsx)("p",{className:"text-center",children:Object(I.b)(e.minutes)+":"+Object(I.b)(e.seconds)})},onComplete:function(){return p(),void r(!0)}})}}]),n}(c.a.Component);return Object(a.jsx)("div",{children:n?Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Timer"}),Object(a.jsx)("input",{type:"text",name:"time",id:"",onChange:function(e){return d(e.target.value)},placeholder:"Minutes"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{className:"form-control bg-info",onClick:function(){return function(){var e=6e4*l;r(!n),d(e)}()},children:"Start"})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Timer"}),Object(a.jsx)(b,{}),Object(a.jsx)("button",{className:"form-control",onClick:function(e){r({started:!n})},children:"Stop"}),Object(a.jsx)("p",{className:"small",children:"Don't add or drag anything! Count Down resets. To be fixed."})]})})},F=function(e){Object(E.a)(n,e);var t=Object(_.a)(n);function n(e){var a;return Object(T.a)(this,n),(a=t.call(this,e)).removeTodo=a.removeTodo.bind(Object(S.a)(a)),a.postTodo=a.postTodo.bind(Object(S.a)(a)),a.editTodo=a.editTodo.bind(Object(S.a)(a)),a.reorderTodos=a.reorderTodos.bind(Object(S.a)(a)),a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.token||this.props.history.push("/login")}},{key:"componentDidUpdate",value:function(){this.props.token||this.props.history.push("/login"),console.log(this.props)}},{key:"removeTodo",value:function(){var e=Object(f.a)(x.a.mark((function e(t,n){var a,s=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={_id:n._id},e.next=4,g.a.delete("https://centenoacademy.org/api/todos",{headers:{"Content-Type":"application/json","secret-token":t},data:{_id:a}}).then((function(e){s.props.setTodos(e.data.todos)}));case 4:e.sent,e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"postTodo",value:function(){var e=Object(f.a)(x.a.mark((function e(t,n){var a,s=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.post("https://centenoacademy.org/api/todos",n,{headers:{"Content-Type":"application/json","secret-token":t}}).then((function(e){s.props.setTodos(e.data.todos)}));case 3:a=e.sent,console.log(a),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"editTodo",value:function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.patch("https://centenoacademy.org/api/todos",n,{headers:{"Content-Type":"application/json","secret-token":t}});case 3:e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"reorderTodos",value:function(){var e=Object(f.a)(x.a.mark((function e(t,n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.patch("https://centenoacademy.org/api/todos/reorder",{todos:n},{headers:{"Content-Type":"application/json","secret-token":t}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-7",children:[Object(a.jsx)(C,{addTodo:this.postTodo,token:this.props.token}),Object(a.jsx)(U,Object(j.a)(Object(j.a)({},this.props),{},{reorderTodos:this.reorderTodos,editTodo:this.editTodo,removeTodo:this.removeTodo}))]}),Object(a.jsx)("div",{className:"col-sm-5",children:Object(a.jsx)(P,{})})]})})}}]),n}(c.a.Component);var B=function(e){return Object(a.jsxs)("div",{className:"App container",children:[Object(a.jsx)(h,{token:e.token,logOut:e.logOut}),Object(a.jsx)(m.a,{path:"/",exact:!0,render:function(){return Object(a.jsx)(k,{})}}),Object(a.jsx)(m.a,{path:"/login",render:function(t){var n=t.history;return Object(a.jsx)(y,{setTodos:e.setTodos,saveToken:e.saveToken,history:n})}}),Object(a.jsx)(m.a,{path:"/signup",render:function(e){var t=e.history;return Object(a.jsx)(N,{history:t})}}),Object(a.jsx)(m.a,{path:"/profile",render:function(t){var n=t.history;return Object(a.jsx)(F,Object(j.a)(Object(j.a)({},e),{},{history:n}))}})]})};function M(e){return{type:"SET_TODOS",todos:e}}function V(e){return{type:"SAVE_TOKEN",token:e}}function X(){return{type:"LOG_OUT"}}var G=Object(m.e)(Object(d.b)((function(e){return{token:e.token,todos:e.todos}}),(function(e){return Object(l.b)({saveToken:V,setTodos:M,logOut:X},e)}))(B)),J=Object(l.c)({token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_OUT":return null;case"SAVE_TOKEN":return t.token;default:return e}},todos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TODOS":return t.todos;default:return e}}}),K=Object(l.e)(J,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(a.jsx)(d.a,{store:K,children:Object(a.jsx)(i.a,{children:Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(G,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.7beaab83.chunk.js.map