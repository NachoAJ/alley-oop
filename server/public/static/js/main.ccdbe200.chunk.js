(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{203:function(e,t,a){e.exports=a(453)},208:function(e,t,a){},209:function(e,t,a){},227:function(e,t,a){},232:function(e,t,a){},251:function(e,t,a){},450:function(e,t,a){},451:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),s=a.n(l),o=(a(208),a(45)),c=a(5),i=a(6),u=a(8),m=a(7),p=a(9),d=(a(209),a(43)),h=a(85),g=a.n(h),E=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a,n,r,l,s,o){return t.service.post("signup",{username:e,email:a,password:n,role:r,age:l,position:s,imageUrl:o})},this.login=function(e,a){return t.service.post("login",{username:e,password:a})},this.logout=function(){return t.service.post("logout")},this.loggedin=function(){return t.service.get("loggedin")},this.service=g.a.create({baseURL:"".concat("https://alley-oop.herokuapp.com/api/"),withCredentials:!0})},v=function e(){var t=this;Object(c.a)(this,e),this.getPlayers=function(){return t.service.get("getAllPlayers")},this.handleUpload=function(e){return t.service.post("upload",e)},this.videoUpload=function(e){return t.service.post("video-upload",e)},this.addTest=function(e){return t.service.post("add-test",e)},this.getTestById=function(e){return t.service.get("get-test-id/".concat(e))},this.getLocation=function(e){return t.service.get("get-location/".concat(e))},this.savePlayer=function(e){return t.service.post("save-player",e)},this.sendEmail=function(e){return t.service.post("send-email",e)},this.service=g.a.create({baseURL:"".concat("https://alley-oop.herokuapp.com/api/"),withCredentials:!0})},b=a(31),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleFileUpload=function(e){var t=new FormData;t.append("videoUrl",e.target.files[0]),a.service.handleUpload(t).then(function(e){return a.setState({imageUrl:e.data.secure_url})}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.email,l=t.password,s=t.role,o=t.age,c=t.position,i=t.imageUrl;a.authServices.signup(n,r,l,s,o,c,i).then(function(e){a.setState({username:"",email:"",password:"",role:"",position:"BASE",age:0,imageUrl:""}),a.props.setUser(e),a.props.history.push("/")}).catch(function(e){return console.log(e.response.data.message)})},a.state={username:"",email:"",password:"",role:"PLAYER",age:void 0,position:"BASE",imageUrl:""},a.authServices=new E,a.service=new v,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return"PLAYER"===this.state.role?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Signup"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"role"},"Rol:"),r.a.createElement("select",{name:"role",id:"role",onChange:this.handleInputChange},r.a.createElement("option",{value:"PLAYER"},"Deportista"),r.a.createElement("option",{value:"COACH"},"Entrenador")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username"},"Usuario:"),r.a.createElement("input",{name:"username",type:"text",id:"username",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email"},"Correo electr\xf3nico:"),r.a.createElement("input",{name:"email",type:"email",id:"email",value:this.state.email,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a:"),r.a.createElement("input",{name:"password",type:"password",id:"password",value:this.state.password,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"age"},"Edad:"),r.a.createElement("input",{name:"age",type:"number",id:"age",value:this.state.age,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"position"},"Posici\xf3n:"),r.a.createElement("select",{name:"position",id:"position",onChange:this.handleInputChange},r.a.createElement("option",{value:"BASE"},"Base"),r.a.createElement("option",{value:"ESCOLTA"},"Escolta"),r.a.createElement("option",{value:"ALERO"},"Alero"),r.a.createElement("option",{value:"ALAPIVOT"},"Ala-Pivot"),r.a.createElement("option",{value:"PIVOT"},"Pivot")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"imageUrl"},"Imagen:"),r.a.createElement("input",{name:"imageUrl",type:"file",id:"imageUrl",onChange:this.handleFileUpload}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Registrar"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Signup"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"role"},"Rol:"),r.a.createElement("select",{name:"role",id:"role",onChange:this.handleInputChange},r.a.createElement("option",{value:"PLAYER"},"Deportista"),r.a.createElement("option",{value:"COACH"},"Entrenador")),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"username"},"Usuario:"),r.a.createElement("input",{name:"username",type:"text",id:"username",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a:"),r.a.createElement("input",{name:"password",type:"password",id:"password",value:this.state.password,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Registrar"})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.authServices.login(n,r).then(function(e){a.setState({username:"",password:""}),a.props.setUser(e),a.props.history.push("/")}).catch(function(e){return console.log(e.response.data.message)})},a.state={username:"",password:""},a.authServices=new E,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Inicio de sesi\xf3n de usuario"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},"Usuario: ",r.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleInputChange})," ",r.a.createElement("br",null),"Contrase\xf1a: ",r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Iniciar sesi\xf3n"})))}}]),t}(n.Component),C=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Soy un perfil de usuario Entrenador"),r.a.createElement("p",null,e.user.username))},O=function(e){var t=e.url,a=e.width;return r.a.createElement("video",{controls:!0,width:a},r.a.createElement("source",{src:t,type:"video/mp4"}))},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFileUpload=function(e){var t=new FormData;t.append("videoUrl",e.target.files[0]),a.service.handleUpload(t).then(function(e){return a.setState({videoUrl:e.data.secure_url})}).catch(function(e){return console.log(e)})},a.handleFormSubmit=function(e){e.preventDefault(),a.service.videoUpload({videoUrl:a.state.videoUrl,id:a.props.user._id}).then(a.props.updateState()).catch(function(e){return console.log("error",e)})},a.state={videoUrl:""},a.service=new v,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Soy un perfil de usuario Deportista"),r.a.createElement("p",null,this.props.user.username),r.a.createElement("p",null,this.props.user.age),r.a.createElement("p",null,this.props.user.position),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"input-vid"},"URL imagen"),r.a.createElement("input",{name:"videoUrl",type:"file",className:"form-control",id:"input-vid",onChange:this.handleFileUpload})),this.props.user.videos.map(function(e,t){return r.a.createElement(O,{url:e,key:t})}),r.a.createElement("button",{onClick:this.handleFormSubmit},"Upload video"))}}]),t}(n.Component),S=a(12),I=(a(227),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).sortListBy3PM=function(){var e=Object(o.a)(a.state.players);e=e.sort(function(e,t){return t.stats.ThreePPCT-e.stats.ThreePPCT}),a.setState({players:e})},a.sortListByPTS=function(){var e=Object(o.a)(a.state.players);e=e.sort(function(e,t){return t.stats.Pts-e.stats.Pts}),a.setState({players:e})},a.sortListByGP=function(){var e=Object(o.a)(a.state.players);e=e.sort(function(e,t){return t.stats.Gp-e.stats.Gp}),a.setState({players:e})},a.sortListByFgpct=function(){var e=Object(o.a)(a.state.players);e=e.sort(function(e,t){return t.stats.Fgpct-e.stats.Fgpct}),a.setState({players:e})},a.sortListByFtpct=function(){var e=Object(o.a)(a.state.players);e=e.sort(function(e,t){return t.stats.Ftpct-e.stats.Ftpct}),a.setState({players:e})},a.state={players:a.props.playersInfo},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("button",{onClick:this.sortListByGP},"GP"),r.a.createElement("button",{onClick:this.sortListByPTS},"PTS"),r.a.createElement("button",{onClick:this.sortListBy3PM},"3P%"),r.a.createElement("button",{onClick:this.sortListByFgpct},"FG%"),r.a.createElement("button",{onClick:this.sortListByFtpct},"FT%"),this.state.players.map(function(e){return r.a.createElement("div",{className:"player-box",key:e._id},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("img",{src:e.imageUrl,alt:"Jugador"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",null,e.username),r.a.createElement("p",{className:"capitalize"},"Posici\xf3n: ",e.position),r.a.createElement("p",null,"Edad: ",e.age)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"margin"},r.a.createElement(S.b,{className:"button",to:"/players/".concat(e._id)},"Ver Perfil")),r.a.createElement("div",{className:"stats"},r.a.createElement("span",{className:"single-stat"},e.stats.ThreePM),r.a.createElement("span",{className:"single-stat"},e.stats.ThreePPCT),r.a.createElement("br",null),r.a.createElement("span",{className:"label"},"3PM"),r.a.createElement("span",{className:"label"},"3P%"))))))}))}}]),t}(n.Component)),P=a(455),U=(a(232),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){return a.getPlayer()},a.getPlayer=function(){var e=a.props.playersInfo.filter(function(e){return e._id===a.props.match.params.id});a.setState({player:e[0]})},a.savePlayer=function(e){e.preventDefault(),a.services.savePlayer({player:a.state.player,userId:a.props.user.data._id}).then(function(e){console.log(e),a.props.updateLoggedInUser(e),console.log("Jugador A\xf1adido")}).catch(function(e){return console.log("Ha habido un error",e)})},a.handleModalOpen=function(){a.setState({showModal:!0})},a.handleModalClose=function(){a.setState({showModal:!1})},a.handleEmail=function(e){e.preventDefault(),a.services.sendEmail({email:a.state.player.email,subject:a.state.subject,message:a.state.message}).then(function(){return a.handleModalClose()}).catch(function(e){return console.log("Ha habido un error",e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.state={player:{role:"",videos:[],position:"",username:"",age:"",stats:""},showModal:!1,subject:"",message:""},a.services=new v,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"player-details"},r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("div",{className:"cover"}),r.a.createElement("div",{className:"row padding"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{src:this.state.player.imageUrl})),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h2",null,this.state.player.username),r.a.createElement("span",null,"Posicion: ",this.state.player.position),r.a.createElement("br",null),r.a.createElement("span",null,"Edad: ",this.state.player.age)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",{onClick:this.savePlayer,className:"save-btn"},"Guardar"),r.a.createElement("button",{onClick:this.handleModalOpen,className:"contact-btn"},"Contactar")))),r.a.createElement("h2",null,"V\xeddeos"),r.a.createElement("section",{className:"videos"},this.state.player.videos.map(function(e,t){if(0===t)return r.a.createElement(O,{url:e,key:t,width:"850px"})}),r.a.createElement("div",{className:"secondary-videos"},r.a.createElement("ul",null,this.state.player.videos.map(function(e,t){if(t>0)return r.a.createElement("li",null,r.a.createElement(O,{url:e,key:t,width:"230px"}))})))),r.a.createElement(P.a,{show:this.state.showModal,onHide:this.handleModalClose},r.a.createElement("div",{className:"container"},r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement("h4",{className:"center"},"Contactar")),r.a.createElement(P.a.Body,null,r.a.createElement("form",{onSubmit:this.handleEmail},r.a.createElement("label",{htmlFor:"subject"},"Asunto:"),r.a.createElement("input",{type:"text",name:"subject",id:"subject",onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"message"},"Mensaje:"),r.a.createElement("textarea",{name:"message",id:"message",onChange:this.handleInputChange}),r.a.createElement("button",null,"Enviar")))))))}}]),t}(n.Component)),N=a(457),w=a(456),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggleMenu=function(){return document.querySelector(".menu").classList.toggle("abierto")},a.logout=function(){a.authServices.logout().then(function(e){a.props.setUser(null),a.props.match.history.push("/")}).catch(function(e){return console.log(e)})},a.authServices=new E,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.userInSession?this.props.userInSession.data.username:"invitado";return this.props.userInSession?r.a.createElement(N.a,{expand:"lg",className:"menu"},r.a.createElement(N.a.Brand,null,r.a.createElement(S.b,{to:"/"},r.a.createElement("img",{src:"../images/Logo.svg",alt:"Logo",className:"logo-nav"}))),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"ml-auto"},r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(S.b,{to:"/saved-players",className:"white"},"Mis jugadores")),r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(S.b,{to:"/test",className:"white"},"Pruebas de selecci\xf3n")),r.a.createElement(w.a.Link,{as:"div",onClick:this.logout},r.a.createElement(S.b,{to:"/",className:"white"},"Cerrar sesi\xf3n")),r.a.createElement(w.a.Link,{as:"div"},r.a.createElement("small",{className:"white"},e))))):r.a.createElement(N.a,{expand:"lg",className:"menu"},r.a.createElement(N.a.Brand,null,r.a.createElement(S.b,{to:"/"},r.a.createElement("img",{src:"../images/Logo.svg",alt:"Logo",className:"logo-nav"}))),r.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"ml-auto"},r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(S.b,{to:"/signup",className:"nav-signup"},"Reg\xedstrate")),r.a.createElement(w.a.Link,{as:"div"},r.a.createElement(S.b,{to:"/login",className:"nav-login"},"Iniciar sesi\xf3n")))))}}]),t}(n.Component),L=(a(251),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleOnChange=function(e){a.props.searchPlayer(e.target.value)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Encuentra los ",r.a.createElement("br",null),"mejores jugadores")),r.a.createElement("div",{className:"row align-items-center box"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("label",null,"Posici\xf3n"),r.a.createElement("br",null),r.a.createElement("select",{name:"position",id:"position",onChange:this.handleOnChange},r.a.createElement("option",{value:"BASE"},"Base"),r.a.createElement("option",{value:"ESCOLTA"},"Escolta"),r.a.createElement("option",{value:"ALERO"},"Alero"),r.a.createElement("option",{value:"ALAPIVOT"},"Ala-Pivot"),r.a.createElement("option",{value:"PIVOT"},"Pivot"))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("label",null,"Edad"),r.a.createElement("br",null),r.a.createElement("input",{type:"number",onChange:this.handleOnChange,placeholder:"16"})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("br",null),r.a.createElement(S.b,{to:"/players",className:"button"},"Buscar")))))}}]),t}(n.Component)),F=(a(252),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e){console.log(e.target.value);var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.location,l=t.date,s=t.requirements,o=a.props.user.data._id;a.userServices.getLocation(r).then(function(e){var t=e.data;a.userServices.addTest({title:n,location:r,date:l,requirements:s,id:o,latlng:t}).then(function(e){a.setState({title:"",location:"",date:"",requirements:""}),a.props.history.push("/test")}).catch(function(e){return console.log(e.response.data.message)})}).catch(function(e){return console.log("Ha habido un error",e)}),a.userServices.addTest({title:n,location:r,date:l,requirements:s,id:o}).then(function(e){a.setState({title:"",location:"",date:"",requirements:""}),a.props.history.push("/test")}).catch(function(e){return console.log(e.response.data.message)})},a.state={title:"",location:"",date:"",requirements:""},a.userServices=new v,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Nueva prueba"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",{htmlFor:"title"},"T\xedtulo:"),r.a.createElement("input",{name:"title",type:"text",id:"title",value:this.state.title,onChange:this.handleInputChange})," ",r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"location"},"Ubicaci\xf3n:"),r.a.createElement("input",{name:"location",type:"text",id:"location",value:this.state.location,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"date"},"Fecha:"),r.a.createElement("input",{name:"date",type:"date",id:"date",value:this.state.date,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"requirements"},"Requisitos:"),r.a.createElement("textarea",{name:"requirements",id:"requirements",value:this.state.requirements,onChange:this.handleInputChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Registrar"})))}}]),t}(n.Component)),A=a(59),T=a(65),_=a.n(T);_.a.setApiKey("".concat("AIzaSyDD4CtZ6_9bfQ6FV40rPgc_huBi2GVTpfo")),_.a.enableDebug();var M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getCity=function(e){for(var t=0;t<e.length;t++)if(e[t].types[0]&&"administrative_area_level_2"===e[t].types[0])return e[t].long_name},a.getArea=function(e){for(var t=0;t<e.length;t++)if(e[t].types[0])for(var a=0;a<e[t].types.length;a++)if("sublocality_level_1"===e[t].types[a]||"locality"===e[t].types[a])return e[t].long_name},a.getState=function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e.length;a++)if(e[a].types[0]&&"administrative_area_level_1"===e[a].types[0])return e[a].long_name},a.onChange=function(e){a.setState(Object(b.a)({},e.target.name,e.target.value))},a.onInfoWindowClose=function(e){},a.onMarkerDragEnd=function(e){var t=e.latLng.lat(),n=e.latLng.lng();_.a.fromLatLng(t,n).then(function(e){var r=e.results[0].formatted_address,l=e.results[0].address_components,s=a.getCity(l),o=a.getArea(l),c=a.getState(l);a.setState({address:r||"",area:o||"",city:s||"",state:c||"",markerPosition:{lat:t,lng:n},mapPosition:{lat:t,lng:n}})},function(e){console.error(e)})},a.onPlaceSelected=function(e){console.log("plc",e);var t=e.formatted_address,n=e.address_components,r=a.getCity(n),l=a.getArea(n),s=a.getState(n),o=e.geometry.location.lat(),c=e.geometry.location.lng();a.setState({address:t||"",area:l||"",city:r||"",state:s||"",markerPosition:{lat:o,lng:c},mapPosition:{lat:o,lng:c}})},a.state={address:"",city:"",area:"",state:"",mapPosition:{lat:a.props.center.lat,lng:a.props.center.lng},markerPosition:{lat:a.props.center.lat,lng:a.props.center.lng}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;_.a.fromLatLng(this.state.mapPosition.lat,this.state.mapPosition.lng).then(function(t){var a=t.results[0].formatted_address,n=t.results[0].address_components,r=e.getCity(n),l=e.getArea(n),s=e.getState(n);console.log("city",r,l,s),e.setState({address:a||"",area:l||"",city:r||"",state:s||""})},function(e){console.error(e)})}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.markerPosition.lat!==this.props.center.lat||this.state.address!==t.address||this.state.city!==t.city||this.state.area!==t.area||this.state.state!==t.state||this.props.center.lat!==e.center.lat&&void 0}},{key:"render",value:function(){var e=this,t=Object(A.withScriptjs)(Object(A.withGoogleMap)(function(t){return r.a.createElement(A.GoogleMap,{google:e.props.google,defaultZoom:e.props.zoom,defaultCenter:{lat:e.state.mapPosition.lat,lng:e.state.mapPosition.lng}},r.a.createElement(A.Marker,{google:e.props.google,name:"Dolores park",draggable:!0,onDragEnd:e.onMarkerDragEnd,position:{lat:e.state.markerPosition.lat,lng:e.state.markerPosition.lng}}),r.a.createElement(A.Marker,null))}));return void 0!==this.props.center.lat?r.a.createElement("div",null,r.a.createElement(t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyDD4CtZ6_9bfQ6FV40rPgc_huBi2GVTpfo","&libraries=places"),loadingElement:r.a.createElement("div",{style:{height:"100%"}}),containerElement:r.a.createElement("div",{style:{height:this.props.height}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})})):r.a.createElement("div",{style:{height:this.props.height}})}}]),t}(n.Component),B=(window.google,function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(M,{center:{lat:this.props.lat,lng:this.props.lng},height:"300px",zoom:15}))}}]),t}(n.Component)),x=(a(450),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getTests=function(){a.services.getTestById(a.props.user.data._id).then(function(e){return a.setState({tests:e.data})}).catch(function(e){return console.log(e)})},a.state={tests:""},a.services=new v,a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getTests()}},{key:"render",value:function(){return"COACH"===this.props.user.data.role?r.a.createElement("div",{className:"test-list"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"margin"},r.a.createElement(S.b,{to:"/test/create",className:"add-btn"},"+ A\xf1adir")),r.a.createElement("h3",null,"Pruebas de selecci\xf3n"),this.state.tests&&this.state.tests.map(function(e,t){if(e.latlng)return r.a.createElement("div",{className:"text-box"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement(B,{lat:e.latlng.lat,lng:e.latlng.lng})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("p",null,e.title),r.a.createElement("p",null,e.location),r.a.createElement("p",null,e.date),r.a.createElement("p",null,e.requirements)),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("button",null,"Eliminar")))))}),r.a.createElement("div",null))):r.a.createElement("h2",null,"En construccion")}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){},a.state={players:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Lista jugadores guardados"),this.props.user&&this.props.user.data.savePlayers.map(function(e,t){return r.a.createElement("p",null,e.player.username)}))}}]),t}(n.Component),R=(a(451),function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container upper"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h4",null,"Alley Oop"),r.a.createElement("span",null,"Sobre nosotros"),r.a.createElement("br",null),r.a.createElement("span",null,"Colaboradores"),r.a.createElement("br",null),r.a.createElement("span",null,"Trabaja con nosotros"),r.a.createElement("br",null),r.a.createElement("span",null,"Terminos y condiciones"),r.a.createElement("br",null),r.a.createElement("span",null,"Pol\xedtica de privacidad")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h4",null,"Entrenadores"),r.a.createElement("span",null,"Como funciona"),r.a.createElement("br",null),r.a.createElement("span",null,"Precios"),r.a.createElement("br",null),r.a.createElement("span",null,"Ayuda"),r.a.createElement("br",null),r.a.createElement("span",null,"Instituciones"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h4",null,"Jugadores"),r.a.createElement("span",null,"Como funciona"),r.a.createElement("br",null),r.a.createElement("span",null,"Videos"),r.a.createElement("br",null),r.a.createElement("span",null,"Ayuda"),r.a.createElement("br",null),r.a.createElement("span",null,"Terminos y condiciones"),r.a.createElement("br",null),r.a.createElement("span",null,"Pol\xedtica de privacidad"),r.a.createElement("br",null)),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h4",null,"Ayuda"),r.a.createElement("span",null,"Atenci\xf3n al cliente"),r.a.createElement("br",null),r.a.createElement("span",null,"0034 91 764 34 34"),r.a.createElement("br",null),r.a.createElement("span",null,"alleyoopiron@gmail.com"),r.a.createElement("br",null)))),r.a.createElement("div",{className:"bottom"},"2019 Alleyoop - Todos los derechos reservados"))}),q=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).setTheUser=function(t){e.setState({loggedInUser:t}),console.log("Un componente ha cambiado el usuario en App:",e.state.loggedInUser)},e.fetchUser=function(){null===e.state.loggedInUser&&e.authServices.loggedin().then(function(t){return e.setState({loggedInUser:t})}).catch(function(t){return e.setState({loggedInUser:!1})})},e.componentDidMount=function(){return e.updateList()},e.updateLoggedInUser=function(t){console.log("actualizoo"),e.setState({loggedInUser:t})},e.updateList=function(){e.services.getPlayers().then(function(t){return e.setState({players:t.data,playersInfo:t.data})}).catch(function(e){return console.log("Ha habido un error",e)})},e.searchPlayer=function(t){var a=Object(o.a)(e.state.players);e.setState({playersInfo:a.filter(function(e){return e.age.toString()===t||e.position===t})})},e.updateState=function(){e.setState(e.state)},e.state={loggedInUser:null,players:[],playersInfo:[]},e.authServices=new E,e.services=new v,e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return this.fetchUser(),r.a.createElement("div",{className:"App"},r.a.createElement(k,{setUser:this.setTheUser,userInSession:this.state.loggedInUser}),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,render:function(t){return r.a.createElement(L,{searchPlayer:e.searchPlayer})}}),r.a.createElement(d.a,{path:"/signup",exact:!0,render:function(t){return r.a.createElement(f,Object.assign({},t,{setUser:e.setTheUser}))}}),r.a.createElement(d.a,{path:"/profile",exact:!0,render:function(){return e.state.loggedInUser&&"COACH"===e.state.loggedInUser.data.role?r.a.createElement(C,{user:e.state.loggedInUser.data}):e.state.loggedInUser&&"PLAYER"===e.state.loggedInUser.data.role?r.a.createElement(j,{updateState:e.updateState,user:e.state.loggedInUser.data}):void 0}}),r.a.createElement(d.a,{path:"/login",exact:!0,render:function(t){return r.a.createElement(y,Object.assign({},t,{setUser:e.setTheUser}))}}),r.a.createElement(d.a,{path:"/saved-players",exact:!0,render:function(){return r.a.createElement(D,{user:e.state.loggedInUser})}}),r.a.createElement(d.a,{path:"/players",exact:!0,render:function(){return r.a.createElement(I,{playersInfo:e.state.playersInfo})}}),r.a.createElement(d.a,{path:"/players/:id",render:function(t){return r.a.createElement(U,Object.assign({},t,{playersInfo:e.state.players,user:e.state.loggedInUser,updateLoggedInUser:e.updateLoggedInUser}))}}),r.a.createElement(d.a,{path:"/test",exact:!0,render:function(){return r.a.createElement(x,{user:e.state.loggedInUser,updateState:e.updateState})}}),r.a.createElement(d.a,{path:"/test/create",exact:!0,render:function(t){return r.a.createElement(F,Object.assign({},t,{user:e.state.loggedInUser,updateLoggedInUser:e.updateLoggedInUser}))}})),r.a.createElement(R,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(452);s.a.render(r.a.createElement(S.a,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.ccdbe200.chunk.js.map