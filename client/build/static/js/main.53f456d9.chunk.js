(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/world_map-1.84359919.png"},33:function(e,t,a){e.exports=a.p+"static/media/north_america.4b9af966.png"},34:function(e,t,a){e.exports=a.p+"static/media/south_america.44212441.png"},35:function(e,t,a){e.exports=a.p+"static/media/africa.41617c53.png"},36:function(e,t,a){e.exports=a.p+"static/media/europe.50e02f74.png"},40:function(e,t,a){e.exports=a(77)},45:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(31),c=a.n(r),s=(a(45),a(6)),l=a(7),i=a(9),d=a(8),u=a(10),m=a(12),p=a(14),h=a(11),g=a.n(h),f={getFoodsSaved:function(){return g.a.get("/api/foods/saved")},getFoods:function(){return console.log("HERE get foods!"),g.a.get("/api/foods")},getSavedFood:function(e){return console.log("HERE get foods saved!"+JSON.stringify(e)),g.a.post("/api/getsaved",e)},checkUserLogin:function(e){return console.log("in check userinfo"+JSON.stringify(e)),g.a.post("/api/user",e)},checkForUserName:function(e){return console.log("in check userName"+JSON.stringify(e)),g.a.post("/api/username",e)},signUpUser:function(e){return console.log("in user sign up"+JSON.stringify(e)),g.a.post("/api/signup",e)},getFoodsByCountry:function(e){return console.log("HERE!"),g.a.post("/api/foods/country",e)},search:function(e){return console.log("in API SEARCH: "+JSON.stringify(e)),g.a.post("/search",e,function(e){return console.log("in API SEARCH: "+e),e})},saveFood:function(e){return console.log("IN SAVE FOOD!"+JSON.stringify(e)),g.a.post("/api/foods/save",e)}},E=(a(63),{display:"none"}),N={display:"block"},v=function(e){return console.log(e),o.a.createElement("div",{onClick:e.handleInputClick,className:"container container-fluid wrapper bg-dark",style:!0===e.showSearch?N:E},e.children)};a(64),a(65);var k=function(e){return o.a.createElement("button",{className:"btn btn-info","data-name":e.dishName,onClick:e.yelp},"Search Near You")},b=function(e){return o.a.createElement("div",{className:"container bg-light"},o.a.createElement("span",{href:e.link},o.a.createElement("div",{className:"row row"},o.a.createElement("div",{className:"col-sm-4"},o.a.createElement("div",{className:"card card-1"},o.a.createElement("div",{className:"card-img text-center"},o.a.createElement("img",{alt:e.name,src:e.image,width:"200",className:"image"})))),o.a.createElement("div",{className:"col-sm-7"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-header text-center"},o.a.createElement("p",{className:"card-title"},e.country),o.a.createElement("p",{className:"card-text"},e.dishName)),o.a.createElement("p",{className:"card-text"},e.description)))),o.a.createElement("div",{className:"col-sm-1"},o.a.createElement("button",{"data-id":e.id,onClick:function(){e.saveButtonClick(e.id)},className:"btn btn-info save-btn"},"Save"),o.a.createElement(k,{yelp:e.yelp,dishName:e.dishName})))))},y=(a(66),a(32)),C=a.n(y),w={display:"none"},O={display:"block"};var I=function(e){return console.log(e),o.a.createElement("div",{className:"mapWrapper",style:!0===e.worldMap?O:w},o.a.createElement("div",{className:"image-container"},o.a.createElement("img",{className:"worldMap",src:C.a,alt:"world map"}),o.a.createElement("div",null,o.a.createElement("span",{onClick:e.continentOnClick,className:"dot northAmerica-dot","data-search":"north america"}),o.a.createElement("span",{onClick:e.continentOnClick,className:"dot southAmerica-dot","data-search":"south america"}),o.a.createElement("span",{onClick:e.continentOnClick,className:"dot africa-dot","data-search":"africa"}),o.a.createElement("span",{onClick:e.continentOnClick,className:"dot europe-dot","data-search":"europe"}),o.a.createElement("span",{onClick:e.continentOnClick,className:"dot asia-dot","data-search":"asia"}),o.a.createElement("span",{onClick:e.continentOnClick,className:"dot australia-dot","data-search":"australia"}))))},S=(a(67),a(33)),j=a.n(S),A={display:"none"},F={display:"block"};var U=function(e){return console.log(e.continent),o.a.createElement("div",{className:"mapWrapper-north-america",style:"north america"===e.continent?F:A},o.a.createElement("div",{className:"image-container-north-america"},o.a.createElement("img",{className:"northAmerica",src:j.a,alt:"north america map"}),o.a.createElement("div",null,o.a.createElement("span",{className:"dot unitedStates-dot",onClick:e.handleInputClick,"data-search":"United States"}),o.a.createElement("span",{className:"dot canada-dot",onClick:e.handleInputClick,"data-search":"Canada"}),o.a.createElement("span",{className:"dot puertoRico-dot",onClick:e.handleInputClick,"data-search":"Puerto Rico"}),o.a.createElement("span",{className:"dot mexico-dot",onClick:e.handleInputClick,"data-search":"Mexico"}))))},x=(a(68),a(34)),P=a.n(x),M={display:"none"},R={display:"block"};var B=function(e){return o.a.createElement("div",{className:"mapWrapper-south-america",style:"south america"===e.continent?R:M},o.a.createElement("div",{className:"image-container-south-america"},o.a.createElement("img",{className:"southAmerica",src:P.a,alt:"south america map"}),o.a.createElement("div",null,o.a.createElement("span",{className:"dot Brazil-dot",onClick:e.handleInputClick,"data-search":"Brazil"}),o.a.createElement("span",{className:"dot Peru-dot",onClick:e.handleInputClick,"data-search":"Peru"}),o.a.createElement("span",{className:"dot Colombia-dot",onClick:e.handleInputClick,"data-search":"Colombia"}))))},W=(a(69),a(35)),D=a.n(W),L={display:"none"},T={display:"block"};var J=function(e){return o.a.createElement("div",{className:"mapWrapper-africa",style:"africa"===e.continent?T:L},o.a.createElement("div",{className:"image-container-africa"},o.a.createElement("img",{className:"africa",src:D.a,alt:"Africa Map"}),o.a.createElement("div",null,o.a.createElement("span",{className:"dot Nigeria-dot",onClick:e.handleInputClick,"data-search":"Nigeria"}),o.a.createElement("span",{className:"dot Egypt-dot",onClick:e.handleInputClick,"data-search":"Egypt"}),o.a.createElement("span",{className:"dot Ethiopia-dot",onClick:e.handleInputClick,"data-search":"Ethiopia"}))))},H=(a(70),a(36)),Y=a.n(H),_={display:"none"},V={display:"block"};var z=function(e){return o.a.createElement("div",{className:"mapWrapper-europe",style:"europe"===e.continent?V:_},o.a.createElement("div",{className:"image-container-europe"},o.a.createElement("img",{className:"europe",src:Y.a,alt:"Europe Map"}),o.a.createElement("div",null,o.a.createElement("span",{className:"dot Poland-dot",onClick:e.handleInputClick,"data-search":"Poland"}),o.a.createElement("span",{className:"dot Greece-dot",onClick:e.handleInputClick,"data-search":"Greece"}),o.a.createElement("span",{className:"dot Spain-dot",onClick:e.handleInputClick,"data-search":"Spain"}))))},G=(a(71),function(e){return o.a.createElement("div",{className:"container bg-light"},o.a.createElement("a",{href:e.yelpLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("div",{className:"card yelpCard"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-header text-center"},o.a.createElement("p",{className:"card-title"},e.name),o.a.createElement("p",{className:"card-title"},e.address))),o.a.createElement("div",{className:"card-img-bottom text-center"},o.a.createElement("img",{alt:e.name,src:e.image,width:"200",className:"image"})))))}),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={foods:[],yelp:[],continent:"",country:"",dishName:"",description:"",image:"",userName:a.props.auth.userName,userId:a.props.auth.userId,worldMap:Boolean,showSearch:Boolean,showYelp:Boolean},a.continentOnClick=function(e){e.preventDefault(),a.continent=e.target.getAttribute("data-search"),console.log(a.continent),console.log(a.state.worldMap),a.setState({continent:a.continent,worldMap:!1}),console.log(a.state.worldMap)},a.loadFoods=function(){console.log("WHAT"),f.getFoods().then(function(e){console.log(e.data),a.setState({foods:e.data,continent:"",country:"",dishName:"",description:"",image:""})}).catch(function(e){return console.log(e)}),console.log(a.state.foods)},a.loadFoodsEvent=function(e){console.log("in load books event"),e.preventDefault(),a.loadFoods()},a.handleInputClick=function(e){e.preventDefault(),console.log(e.target.getAttribute("data-search"));var t={coun:e.target.getAttribute("data-search")};f.getFoodsByCountry(t).then(function(e){console.log(e),a.setState({foods:e.data,showSearch:!0,continent:"",country:"",dishName:"",description:"",image:""})}).catch(function(e){return console.log(e)}),console.log(a.state)},a.handleInputClickYelp=function(e){e.preventDefault(),console.log(e.target.getAttribute("data-name"));var t={search:e.target.getAttribute("data-name")};f.search(t).then(function(e){console.log(e.data.businesses),a.setState({yelp:e.data.businesses,continent:"",country:"",dishName:"",description:"",image:""})}).catch(function(e){return console.log(e)}),console.log(a.state.yelp)},a.saveButtonClick=function(e){var t;for(console.log(e),console.log(a.state),t=0;t<a.state.foods.length;t++)if(e===a.state.foods[t].id){console.log("SAVED this passed in"+a.state.foods[t]);var n={id:a.state.foods[t].id,continent:a.state.foods[t].continent,country:a.state.foods[t].country,dishName:a.state.foods[t].dishName,description:a.state.foods[t].description,image:a.state.foods[t].image,saved:!0};console.log(n),f.saveFood({foodId:a.state.foods[t].id,userId:a.state.userId}).catch(function(e){return console.log(e)})}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({worldMap:!0,showSearch:!1,showYelp:!1}),console.log(this.state)}},{key:"render",value:function(){var e=this;return console.log(void 0),o.a.createElement("div",null,o.a.createElement(I,{handleInputClick:this.handleInputClick,continentOnClick:this.continentOnClick,worldMap:this.state.worldMap,getContinent:this.getContinent}),o.a.createElement(U,{handleInputClick:this.handleInputClick,continent:this.state.continent}),o.a.createElement(B,{handleInputClick:this.handleInputClick,continent:this.state.continent}),o.a.createElement(J,{handleInputClick:this.handleInputClick,continent:this.state.continent}),o.a.createElement(z,{handleInputClick:this.handleInputClick,continent:this.state.continent}),o.a.createElement(v,{showSearch:this.state.showSearch},this.state.foods.map(function(t){return o.a.createElement(b,{saveButtonClick:e.saveButtonClick,key:t.id,id:t.id,continent:t.continent,country:t.country,dishName:t.dishName,description:t.description,image:t.image,yelp:e.handleInputClickYelp})})),this.state.yelp.map(function(e){return o.a.createElement(G,{key:e.id,name:e.name,image:e.image_url,address:e.location.address1,yelpLink:e.url})}))}}]),t}(n.Component),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={foods:[],continent:"",country:"",dishName:"",description:"",image:"",userName:a.props.auth.userName,userId:a.props.auth.userId},a.loadFoods=function(){console.log("WHAT"),console.log(a.state.userId);var e={userId:a.state.userId};f.getSavedFood(e).then(function(e){console.log(e.data[0].Food),a.setState({foods:e.data[0].Food,continent:"",country:"",dishName:"",description:"",image:""}),console.log(a.state.foods)}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadFoods(),console.log(this.state)}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.foods.map(function(e){return o.a.createElement(b,{key:e.id,id:e.id,continent:e.continent,country:e.country,dishName:e.dishName,description:e.description,image:e.image})}),o.a.createElement("div",null,o.a.createElement("h1",null,"SAVWED!"),o.a.createElement("a",{href:"/login"},"Login")))}}]),t}(n.Component);var K=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement(m.b,{className:"navbar-brand",to:"/"},"Search"),o.a.createElement(m.b,{className:"navbar-brand",to:"/saved"},"Saved"))},Q=a(39),X=function(e){var t=e.component,a=e.auth,n=Object(Q.a)(e,["component","auth"]);return o.a.createElement(p.b,Object.assign({},n,{render:function(e){return console.log(a),!0===a.isAuthenticated?o.a.createElement(t,Object.assign({},e,{auth:a})):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Z=a(16),ee={isAuthenticated:!1,userId:"",userName:"",password:"",authenticate:function(e,t,a){var n=this,o={userName:e,password:t};f.checkUserLogin(o).then(function(o){console.log(o.data),null!==o.data?(n.userId=o.data.id,n.userName=e,n.password=t,n.isAuthenticated=!0,a(null)):a(-1)})},authenticateForSignUp:function(e,t,a){var n=this,o={userName:e,password:t};f.checkForUserName(o).then(function(r){console.log(r.data),null===r.data?(f.signUpUser(o).then(function(a){console.log(a.data),n.userId=a.data.id,n.userName=e,n.password=t,n.isAuthenticated=!0}).catch(function(e){return console.log(e)}),a(null)):(alert("User name already taken try different username"),a(-1))})},signout:function(e){this.isAuthenticated=!1,setTimeout(e,100)}},te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={redirectToReferrer:!1,userName:"",password:""},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;"password"===n&&(t=t.substring(0,15)),console.log("name "+n),console.log("value "+t),a.setState(Object(Z.a)({},n,t))},a.signUp=function(e){e.preventDefault(),console.log(a.state);var t=a.state.userName,n=a.state.password;a.state.password&&a.state.userName?a.state.password.length<6?alert("Password must be at least 6 charactors long."):a.props.auth.authenticateForSignUp(t,n,function(e){e?alert("Sign up failed. Try again."):(a.setState(function(){return{redirectToReferrer:!0}}),console.log(a.state))}):alert("Please fill out form!")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return!0===this.state.redirectToReferrer?o.a.createElement(p.a,{to:"/"}):o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-md-offset-3"},o.a.createElement("h2",null,"Sign Up Form"),o.a.createElement("form",{className:"signup"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputuserNameSignUp"},"User Name"),o.a.createElement("input",{name:"userName",onChange:this.handleInputChange,type:"userName",className:"form-control",id:"userName-input",placeholder:"User Name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlfor:"exampleInputPassword1"},"Password"),o.a.createElement("input",{name:"password",onChange:this.handleInputChange,type:"password",className:"form-control",id:"password-input",placeholder:"Password"})),o.a.createElement("div",{style:{display:"none"},id:"alert",className:"alert alert-danger",role:"alert"},o.a.createElement("span",{className:"glyphicon glyphicon-exclamation-sign","aria-hidden":"true"}),o.a.createElement("span",{className:"sr-only"},"Error:")," ",o.a.createElement("span",{className:"msg"})),o.a.createElement("button",{type:"submit",onClick:this.signUp,className:"btn btn-default"},"Sign Up")),o.a.createElement("br",null),o.a.createElement("p",null,"Or log in ",o.a.createElement("a",{href:"/login"},"here")))))}}]),t}(o.a.Component),ae=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={redirectToReferrer:!1,userName:"",password:""},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;"password"===n&&(t=t.substring(0,15)),console.log("name "+n),console.log("value "+t),a.setState(Object(Z.a)({},n,t))},a.login=function(e){e.preventDefault(),console.log(a.state);var t=a.state.userName,n=a.state.password;n&&t?n.length<6?alert("Password must be at least 6 charactors long."):a.props.auth.authenticate(t,n,function(e){e?alert("Authentication Failed! Try to login again."):(a.setState(function(){return{redirectToReferrer:!0}}),console.log(a.state))}):alert("Please fill out form!")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return!0===this.state.redirectToReferrer?(console.log(e),o.a.createElement(p.a,{to:e})):o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 col-md-offset-3"},o.a.createElement("h2",null,"Login Form"),o.a.createElement("form",{className:"login"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputUserNameLogin"},"User Name"),o.a.createElement("input",{name:"userName",onChange:this.handleInputChange,type:"userName",className:"form-control",id:"userName-input",placeholder:"User Name"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputPasswordLogin"},"Password"),o.a.createElement("input",{name:"password",onChange:this.handleInputChange,type:"password",className:"form-control",id:"password-input",placeholder:"Password"})),o.a.createElement("button",{onClick:this.login,className:"btn btn-default"},"Login")),o.a.createElement("br",null),o.a.createElement("p",null,"Or sign up ",o.a.createElement("a",null,"here"))))))}}]),t}(o.a.Component);console.log(ee.isAuthenticated);var ne=Object(p.g)(function(e,t){var a=e.history;return ee.isAuthenticated?o.a.createElement("p",null,"Welcome ",ee.userName,"! ",o.a.createElement("button",{onClick:function(){ee.signout(function(){return a.push("/")})}},"Sign out")):o.a.createElement("p",null,"You are not logged in.")}),oe=(a(76),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={auth:ee},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(ne,{userName:this.state.auth.userName}),o.a.createElement("div",null,o.a.createElement(K,null),o.a.createElement(p.d,null,o.a.createElement(X,{exact:!0,path:"/",component:$,auth:this.state.auth}),o.a.createElement(X,{exact:!0,path:"/saved",component:q,auth:this.state.auth}),o.a.createElement(p.b,{exact:!0,path:"/login",render:function(t){return o.a.createElement(ae,Object.assign({},t,{auth:e.state.auth}))}}),o.a.createElement(p.b,{exact:!0,path:"/signup",render:function(t){return o.a.createElement(te,Object.assign({},t,{auth:e.state.auth}))}})))))}}]),t}(n.Component)),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(oe,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");re?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):ce(e)})}}()}},[[40,1,2]]]);
//# sourceMappingURL=main.53f456d9.chunk.js.map