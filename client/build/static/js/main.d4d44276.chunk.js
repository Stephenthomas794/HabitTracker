(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a(0),s=a(21),o=a.n(s),r=(a(41),a(32)),l=a(9),c=a(10),d=a(6),h=a(12),u=a(11),j=(a(42),a(8)),b=(a(43),a(22)),m=(a(23),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={email:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({email:this.props.email})}},{key:"componentDidUpdate",value:function(e){this.props.email!==e.email&&this.setState({email:this.props.email})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Nav",children:Object(n.jsxs)(b.a,{bg:"dark",variant:"dark",children:[Object(n.jsx)(b.a.Brand,{href:"/",children:"StephenTracker"}),Object(n.jsx)(b.a.Toggle,{}),Object(n.jsx)(b.a.Collapse,{className:"justify-content-end",children:Object(n.jsxs)(b.a.Text,{children:["Signed in as: ",this.props.email]})})]})})}}]),a}(i.Component)),p=(a(46),a(17)),O=a(7),f=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={email:"",name:"",password:"",confirmPassword:""},e.handleEmailChange=e.handleEmailChange.bind(Object(d.a)(e)),e.handleNameChange=e.handleNameChange.bind(Object(d.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(d.a)(e)),e.handleConfirmPasswordChange=e.handleConfirmPasswordChange.bind(Object(d.a)(e)),e.handleFormSubmit=e.handleFormSubmit.bind(Object(d.a)(e)),e.confirmPasswordMatch=e.confirmPasswordMatch.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handleNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleConfirmPasswordChange",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"confirmPasswordMatch",value:function(){return this.state.password===this.state.confirmPassword}},{key:"handleFormSubmit",value:function(e){if(!0===this.confirmPasswordMatch()){this.setState({email:e.target.value}),this.setState({name:e.target.value}),this.setState({password:e.target.value}),this.setState({confirmPassword:e.target.value});var t={email:this.state.email,name:this.state.name,password:this.state.password,confirmPassword:this.state.confirmPassword};fetch("http://127.0.0.1:5000/api/create",{crossDomain:!0,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e),!0===e.message?window.alert("You Already Have An Account. Please Sign In"):window.alert("Your Account Has Been Created. Please Sign In")}))}else window.alert("The Passwords Do Not Match")}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"SignUp",children:Object(n.jsxs)(O.a,{onSubmit:this.handleFormSubmit,children:[Object(n.jsxs)(O.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(O.a.Label,{children:"Email address"}),Object(n.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",required:!0,value:this.state.email,onChange:this.handleEmailChange}),Object(n.jsx)(O.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{children:"Name"}),Object(n.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name",required:!0,value:this.state.name,onChange:this.handleNameChange})]}),Object(n.jsxs)(O.a.Group,{controlId:"SignUpBasicPassword",children:[Object(n.jsx)(O.a.Label,{children:"Password"}),Object(n.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",required:!0,value:this.state.password,onChange:this.handlePasswordChange})]}),Object(n.jsxs)(O.a.Group,{controlId:"SignUpConfirmPassword",children:[Object(n.jsx)(O.a.Label,{children:"Confirm Password"}),Object(n.jsx)(O.a.Control,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPassword,onChange:this.handleConfirmPasswordChange})]}),Object(n.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),a}(i.Component),v=Object(j.f)(f),g=(a(54),a(55),a(31)),x="931153056282-750tm4j5ehreopjf5db02huk0v4gg3ac.apps.googleusercontent.com",y=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isLogined:!1,email:void 0},n.login=n.login.bind(Object(d.a)(n)),n.handleLoginFailure=n.handleLoginFailure.bind(Object(d.a)(n)),n.logout=n.logout.bind(Object(d.a)(n)),n.handleLogoutFailure=n.handleLogoutFailure.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"login",value:function(e){var t=this;e.accessToken&&this.setState((function(t){return{isLogined:!0,email:e.profileObj.email}})),console.log(e.profileObj.email);var a={email:e.profileObj.email};fetch("http://127.0.0.1:5000/api/google",{crossDomain:!0,mode:"cors",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success",e),!0===e.message?window.alert("Failed Creating your account "):(t.props.setEmail(t.state.email),t.props.history.push("/email"))}))}},{key:"logout",value:function(e){this.setState((function(e){return{isLogined:!1,email:void 0}}))}},{key:"handleLoginFailure",value:function(e){alert("Failed to log in")}},{key:"handleLogoutFailure",value:function(e){alert("Failed to log out")}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[this.state.isLogined?Object(n.jsx)(g.GoogleLogout,{clientId:x,buttonText:"Logout",onLogoutSuccess:this.logout,onFailure:this.handleLogoutFailure}):Object(n.jsx)(g.GoogleLogin,{clientId:x,buttonText:"Login",onSuccess:this.login,onFailure:this.handleLoginFailure,cookiePolicy:"single_host_origin",responseType:"code,token"}),this.state.email?Object(n.jsxs)("h5",{children:["Your Email is:  ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{})," ",this.state.email," ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{})," Your password is: ",Object(n.jsx)("br",{}),Object(n.jsx)("br",{})," google"]}):null]})}}]),a}(i.Component),S=Object(j.f)(y),P=(a(58),function(){return Object(n.jsxs)("div",{className:"Break",children:[Object(n.jsx)("br",{}),Object(n.jsx)("p",{children:" Or Sign In with Google "})]})}),w=(a(59),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={email:"",password:""},e.handleEmailChange=e.handleEmailChange.bind(Object(d.a)(e)),e.handlePasswordChange=e.handlePasswordChange.bind(Object(d.a)(e)),e.handleFormSubmit=e.handleFormSubmit.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"handleEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault();var a={email:this.state.email,password:this.state.password};fetch("http://127.0.0.1:5000/api/signIn",{crossDomain:!0,mode:"cors",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success",e),!0===e.message?window.alert("You do not have an account"):!1===e.message?window.alert("The password you entered does not match what we have on file"):(t.props.setEmail(t.state.email),t.props.history.push("/email"))}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"SignIn",children:Object(n.jsxs)(O.a,{onSubmit:this.handleFormSubmit,children:[Object(n.jsxs)(O.a.Group,{controlId:"BasicEmail",children:[Object(n.jsx)(O.a.Label,{children:"Email address"}),Object(n.jsx)(O.a.Control,{type:"email",placeholder:"Enter email",value:this.state.email,onChange:this.handleEmailChange})]}),Object(n.jsxs)(O.a.Group,{controlId:"BasicPassword",children:[Object(n.jsx)(O.a.Label,{children:"Password"}),Object(n.jsx)(O.a.Control,{type:"password",placeholder:"Enter Password",value:this.state.password,onChange:this.handlePasswordChange})]}),Object(n.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})]})})}}]),a}(i.Component)),C=Object(j.f)(w),k=a(18),E=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={email:void 0,name:void 0,password:void 0,confirmPassword:void 0},e.handleSubmit=e.handleSubmit.bind(Object(d.a)(e)),e.setEmail=e.setEmail.bind(Object(d.a)(e)),e.setEmailObj=e.setEmailObj.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"handleSubmit",value:function(e,t,a,n){this.setState({email:e,name:t,password:a,confirmPassword:n})}},{key:"setEmailObj",value:function(e){this.setState({email:e}),this.props.setEmail(this.state.email)}},{key:"setEmail",value:function(e){this.setState({email:e}),this.props.setEmail(this.state.email)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"HomePage",children:Object(n.jsx)("header",{className:"HomePage-header",children:Object(n.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Sign In"}),Object(n.jsx)("th",{children:"Sign Up"})]})}),Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsxs)("td",{children:[Object(n.jsx)(C,{setEmail:this.setEmail}),Object(n.jsx)(P,{}),Object(n.jsx)(S,{setEmail:this.setEmail})]}),Object(n.jsx)("td",{children:Object(n.jsx)(v,{handle:this.handleSubmit})})]})})]})})})}}]),a}(i.Component),T=(a(60),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={nameOfHabit:"",timesPerDay:1,list:void 0},e.handleFormSubmit=e.handleFormSubmit.bind(Object(d.a)(e)),e.handleNameOfHabit=e.handleNameOfHabit.bind(Object(d.a)(e)),e.handleTimesPerDay=e.handleTimesPerDay.bind(Object(d.a)(e)),e.handlePullData=e.handlePullData.bind(Object(d.a)(e)),e.handlePopulate=e.handlePopulate.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"handleFormSubmit",value:function(e){console.log("Submit Form")}},{key:"handleNameOfHabit",value:function(e){this.setState({nameOfHabit:e.target.value})}},{key:"handleTimesPerDay",value:function(e){this.setState({timesPerDay:e.target.value})}},{key:"handleAddTotal",value:function(e){this.handleGetEntry(e.target.value)}},{key:"handleGetEntry",value:function(e){var t=this,a={email:this.props.email,index:e};console.log("data",a),fetch("http://127.0.0.1:5000/api/getEntry",{crossDomain:!0,mode:"cors",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success",e),t.handlePullData()}))}},{key:"handlePullData",value:function(){var e=this,t={email:this.props.email};fetch("http://127.0.0.1:5000/api/pullHabits",{crossDomain:!0,mode:"cors",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){if(console.log("Success",t),!1!==t.message){for(var a=t.nameOfHabit.length,n=[],i=0;i<a;i++)n.push(e.handlePopulate(t,i));e.setState({list:n}),e.props.updateList(n)}}))}},{key:"handleFormSubmit",value:function(e){e.preventDefault();var t={email:this.props.email,nameOfHabit:this.state.nameOfHabit,timesPerDay:this.state.timesPerDay};fetch("http://127.0.0.1:5000/api/addEntry",{crossDomain:!0,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})),this.handlePullData()}},{key:"handlePopulate",value:function(e,t){var a=this;return Object(n.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{children:e.nameOfHabit[t]})})}),Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.timesPerDay[t]}),Object(n.jsx)("td",{children:e.Total[t]}),Object(n.jsx)("td",{children:Object(n.jsx)(p.a,{variant:"primary",type:"submit",value:t,onClick:function(e){return a.handleAddTotal(e,"value")},children:"Add One"})})]})})]},t)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Add",children:Object(n.jsx)("header",{className:"Add-header",children:Object(n.jsx)(O.a,{onSubmit:this.handleFormSubmit,children:Object(n.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Enter Name of the Habit"}),Object(n.jsx)("th",{children:"Select number of times a day the Habit would be done"})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(O.a.Group,{children:Object(n.jsx)(O.a.Control,{type:"text",placeholder:"Enter Name of the Habit",required:!0,value:this.state.nameOfHabit,onChange:this.handleNameOfHabit})})}),Object(n.jsx)("td",{children:Object(n.jsx)(O.a.Group,{controlId:"exampleForm.ControlSelect1",children:Object(n.jsxs)(O.a.Control,{as:"select",required:!0,value:this.state.timesPerDay,onChange:this.handleTimesPerDay,children:[Object(n.jsx)("option",{value:"1",children:"1"}),Object(n.jsx)("option",{value:"2",children:"2"}),Object(n.jsx)("option",{value:"3",children:"3"}),Object(n.jsx)("option",{value:"4",children:"4"}),Object(n.jsx)("option",{value:"5",children:"5"}),Object(n.jsx)("option",{value:"6",children:"6"})]})})})]}),Object(n.jsx)("tr",{children:Object(n.jsx)("td",{children:Object(n.jsx)(p.a,{variant:"primary",type:"submit",children:"Submit"})})})]})]})})})})}}]),a}(i.Component)),L=(a(61),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={email:void 0,list:void 0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({list:this.props.list})}},{key:"componentDidUpdate",value:function(e){this.props.list!==e.list&&this.setState({list:this.props.list})}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Habit",children:Object(n.jsx)("header",{className:"Habit-header",children:this.state.list})})}}]),a}(i.Component)),N=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={email:void 0,list:[]},e.setEmail=e.setEmail.bind(Object(d.a)(e)),e.updateList=e.updateList.bind(Object(d.a)(e)),e.handleAddTotal=e.handleAddTotal.bind(Object(d.a)(e)),e.handleGetEntry=e.handleGetEntry.bind(Object(d.a)(e)),e.handleLoad=e.handleLoad.bind(Object(d.a)(e)),e.handlePopulate=e.handlePopulate.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"updateList",value:function(e){this.setState({list:e})}},{key:"setEmail",value:function(e){this.setState({email:e}),this.props.setEmail(this.state.email),console.log("LandPage",this.state.email)}},{key:"componentDidMount",value:function(){return this.handleLoad()}},{key:"handleAddTotal",value:function(e){this.handleGetEntry(e.target.value)}},{key:"handleGetEntry",value:function(e){var t=this,a={email:this.props.email,index:e};fetch("http://127.0.0.1:5000/api/getEntry",{crossDomain:!0,mode:"cors",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log("Success",e),t.handleLoad()}))}},{key:"handleLoad",value:function(){var e=this,t={email:this.props.email};fetch("http://127.0.0.1:5000/api/pullHabits",{crossDomain:!0,mode:"cors",method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){if(console.log("Success",t),!1!==t.message){for(var a=t.nameOfHabit.length,n=(Object.keys(t.nameOfHabit).length,[]),i=0;i<a;i++)n.push(e.handlePopulate(t,i));e.setState({list:n}),e.forceUpdate()}}))}},{key:"handlePopulate",value:function(e,t){var a=this;return Object(n.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(n.jsx)("thead",{children:Object(n.jsx)("tr",{children:Object(n.jsx)("th",{children:e.nameOfHabit[t]})})}),Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.timesPerDay[t]}),Object(n.jsx)("td",{children:e.Total[t]}),Object(n.jsx)("td",{children:Object(n.jsx)(p.a,{variant:"primary",i:!0,value:t,type:"submit",onClick:function(e){return a.handleAddTotal(e,"value")},children:"Add One"})})]})})]},t)}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"Habit",children:Object(n.jsxs)("header",{className:"Habit-header",children:[Object(n.jsx)(T,{email:this.props.email,list:this.state.list,updateList:this.updateList}),Object(n.jsx)(L,{email:this.props.email,handleLoad:this.handleLoad,list:this.state.list})]})})}}]),a}(i.Component),D=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(c.a)(a,[{key:"render",value:function(){return Object(n.jsx)("h1",{children:" ERRORRRRR "})}}]),a}(i.Component),F=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={email:void 0,name:void 0,password:void 0,confirmPassword:void 0},e.setEmail=e.setEmail.bind(Object(d.a)(e)),e}return Object(c.a)(a,[{key:"setEmail",value:function(e){this.setState({email:e})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(m,{email:this.state.email}),Object(n.jsx)("header",{className:"App-header",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/",component:function(t){return Object(n.jsx)(E,Object(r.a)({setEmail:e.setEmail},t))},exact:!0}),Object(n.jsx)(j.a,{path:"/email",component:function(t){return Object(n.jsx)(N,Object(r.a)({email:e.state.email},t))}}),Object(n.jsx)(j.a,{component:D})]})})]})})}}]),a}(i.Component),H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),s(e),o(e)}))},A=a(20);o.a.render(Object(n.jsx)(A.a,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),H()}},[[62,1,2]]]);
//# sourceMappingURL=main.d4d44276.chunk.js.map