(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/Spinner.ef19692c.svg"},20:function(e,t,n){e.exports=n.p+"static/media/Success.e38b395c.svg"},21:function(e,t,n){e.exports=n.p+"static/media/Error_Icon.4072126c.svg"},26:function(e,t,n){e.exports=n.p+"static/media/logo.855a8c98.svg"},29:function(e,t,n){e.exports=n(40)},34:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=n(7),s=(n(34),n(27)),l=n(3),u=n(1);var p=function(e){var t=e.isPopup,n=e.formName,a=e.name,o=e.onSubmit,c=e.heading,i=e.submitButtonText,s=e.isLoading,l=e.title,u=e.children,p=e.disabled,m=e.submit,d=e.noConfirm;return r.a.createElement("form",{className:t?"popup__forms popup__forms_".concat(a):"".concat(n),onSubmit:o},r.a.createElement("h2",{className:t?"popup__heading":"".concat(c)},l),u,r.a.createElement("div",{className:"popup__handlers"},t?!d&&r.a.createElement("button",{type:"submit",className:"popup__submit-button",disabled:p},s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":m):r.a.createElement("button",{type:"submit",className:"log-reg__submit-button"},i)))};var m=function(e){var t=e.title,n=e.onSubmit,o=e.submitButtonText,c=e.entranceText,s=e.entranceLinkText,u=e.path,m=Object(a.useState)(""),d=Object(l.a)(m,2),h=d[0],f=d[1],_=Object(a.useState)(""),g=Object(l.a)(_,2),b=g[0],E=g[1];function v(e){var t=e.target.value;"email"===e.target.name?f(t):E(t)}return r.a.createElement("div",{className:"log-reg"},r.a.createElement(p,{isPopup:!1,onSubmit:function(e){e.preventDefault(),(h||b)&&(n(b,h),f(""),E(""))},formName:"log-reg__form",title:t,heading:"log-reg__heading",submitButtonText:o},r.a.createElement("input",{className:"log-reg__input log-reg__input_email",required:!0,id:"email",name:"email",type:"email",placeholder:"Email",value:h,onChange:v}),r.a.createElement("input",{className:"log-reg__input log-reg__input_password",required:!0,id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:b,onChange:v})),r.a.createElement("div",{className:"log-reg__switch-container"},r.a.createElement("p",{className:"log-reg__switch-heading"},c),r.a.createElement(i.b,{to:u,className:"log-reg__switch-link"},s)))};var d=function(e){var t=e.onLogin;return r.a.createElement(m,{title:"\u0412\u0445\u043e\u0434",onSubmit:function(e,n){t(e,n)},submitButtonText:"\u0412\u043e\u0439\u0442\u0438",entranceText:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLinkText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",path:"/sign-up"})};var h=function(e){var t=e.onRegister;return r.a.createElement(m,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",onSubmit:function(e,n){t(e,n)},submitButtonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",entranceText:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",entranceLinkText:"\u0412\u043e\u0439\u0442\u0438",path:"/sign-in"})};var f=function(e){var t=e.onSubmit,n=e.name,a=e.isOpen,o=e.onClose,c=e.title,i=e.children,s=e.submit,l=e.isLoading,u=e.noConfirm,m=e.disabled;return r.a.createElement("div",{className:"popup popup_type_".concat(n," ").concat(a&&"popup_opened")},r.a.createElement("div",{className:"popup__container popup__container_type_".concat(n)},r.a.createElement("button",{type:"button",className:"popup__close-button",onClick:o}),r.a.createElement(p,{isPopup:!0,name:n,onSubmit:t,isLoading:l,title:c,children:i,disabled:m,submit:s,noConfirm:u})))};var _=function(e){var t=e.isOpen,n=e.onClose,a=e.loggedIn,o=e.message;return r.a.createElement(f,{name:"info-tooltip",noConfirm:!0,isOpen:t,onClose:n,loggedIn:a},r.a.createElement("img",{src:o.icon,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",className:"popup__icon"}),r.a.createElement("p",{className:"popup__under-icon-text"},o.text))},g=n(28),b=function(e){var t=e.component,n=Object(g.a)(e,["component"]);return r.a.createElement(u.b,null,(function(){return!0===n.loggedIn?r.a.createElement(t,n):r.a.createElement(u.a,{to:"./sign-in"})}))},E=n(26),v=n.n(E);var k=function(e){var t=e.email,n=e.signOut;return r.a.createElement("div",{className:"header__email-signout-container"},r.a.createElement("span",null,t),r.a.createElement("button",{className:"header__signout-button",onClick:n},"\u0412\u044b\u0439\u0442\u0438"))};var O=function(e){var t=e.loggedIn,n=e.email,a=e.signOut,o=Object(u.h)().pathname,c="".concat("/sign-in"===o?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u043e\u0439\u0442\u0438"),s="".concat("/sign-in"===o?"/sign-up":"/sign-in");return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:v.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{email:n,signOut:a})):r.a.createElement(i.b,{to:s,className:"header__link"},c))},C=n(8),j=n(9),N=n(12),y=n(11),S=r.a.createContext(),x=function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){e.props.onCardClick(e.props)},e.handleLikeClick=function(){e.props.onCardLike(e.props.card)},e.handleDeleteClick=function(){e.props.onCardDelete(e.props.card)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this,t=this.props.card,n=t.owner._id===this.context._id,a="elements__trash-button ".concat(n?"elements__trash-button_active":""),o=t.likes.some((function(t){return t._id===e.context._id})),c="elements__like-button ".concat(o?"elements__like-button_active":"");return r.a.createElement("div",{className:"elements__element"},r.a.createElement("img",{className:"elements__image",alt:t.name,src:t.link,onClick:this.handleClick}),r.a.createElement("button",{className:"".concat(a),onClick:this.handleDeleteClick}),r.a.createElement("div",{className:"elements__group"},r.a.createElement("p",{className:"elements__place"},t.name),r.a.createElement("div",{className:"elements__like-container"},r.a.createElement("button",{className:"".concat(c),onClick:this.handleLikeClick}),r.a.createElement("p",{className:"elements__like-count"},t.likes.length))))}}]),n}(r.a.Component);x.contextType=S;var w=x,L=function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){var e;Object(C.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onCardClick=function(t){e.props.onCardClick(t)},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__avatar-container"},r.a.createElement("div",{className:"profile__overlay",onClick:this.props.onEditAvatar}),r.a.createElement("img",{className:"profile__avatar",src:this.context.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__heading-info"},r.a.createElement("p",{className:"profile__name"},this.context.name),r.a.createElement("button",{className:"profile__edit-button",onClick:this.props.onEditProfile})),r.a.createElement("p",{className:"profile__job"},this.context.about)),r.a.createElement("button",{className:"profile__add-button",onClick:this.props.onAddPlace})),r.a.createElement("section",{className:"elements"},this.props.cards.map((function(t){return r.a.createElement(w,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.props.onCardLike,onCardDelete:e.props.onCardDelete})}))))}}]),n}(r.a.Component);L.contextType=S;var T=L;var I=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var U=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,c=e.isLoading,i=r.a.useContext(S),s=Object(a.useState)(""),u=Object(l.a)(s,2),p=u[0],m=u[1],d=Object(a.useState)(""),h=Object(l.a)(d,2),_=h[0],g=h[1];return r.a.useEffect((function(){m(i.name),g(i.about)}),[i]),r.a.createElement(f,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:p,about:_})},isLoading:c},r.a.createElement("input",{type:"text",className:"popup__input popup__input_name",id:"name-input",name:"name",defaultValue:p,placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",pattern:"[A-Za-z\u0430-\u044f\u0451\u0410-\u042f\u0401 -]{1,}",required:!0,onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{id:"name-input-error",className:"popup__input_name-error"}),r.a.createElement("input",{type:"text",className:"popup__input popup__input_job",id:"job-input",name:"job",defaultValue:_,placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,onChange:function(e){g(e.target.value)}}),r.a.createElement("span",{id:"job-input-error",className:"popup__input_name-error"}))};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=e.isLoading,c=r.a.useRef("");return r.a.useEffect((function(){c.current.value=""}),[t]),r.a.createElement(f,{name:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:c.current.value})},isLoading:o},r.a.createElement("input",{type:"url",className:"popup__input popup__input_avatar-edit",id:"avatar-edit-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:c}),r.a.createElement("span",{id:"avatar-edit-input-error",className:"popup__input_name-error"}))};var A=function(e){var t=e.isOpen,n=e.onClose,a=e.onAddPlace,o=e.isLoading,c=r.a.useRef(""),i=r.a.useRef("");return r.a.useEffect((function(){c.current.value="",i.current.value=""}),[t]),r.a.createElement(f,{name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:c.current.value,link:i.current.value})},isLoading:o},r.a.createElement("input",{type:"text",className:"popup__input popup__input_card-name",id:"card-name-input",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",required:!0,ref:c}),r.a.createElement("span",{id:"card-name-input-error",className:"popup__input_name-error"}),r.a.createElement("input",{type:"url",className:"popup__input popup__input_card-link",id:"card-link-input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:i}),r.a.createElement("span",{id:"card-link-input-error",className:"popup__input_name-error"}))},R=function(e){Object(N.a)(n,e);var t=Object(y.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"popup popup_type_card-open ".concat(this.props.isOpen&&"popup_opened")},r.a.createElement("div",{className:"popup__container popup__container_card-open"},r.a.createElement("button",{className:"popup__close-button",type:"button",onClick:this.props.onClose}),r.a.createElement("img",{className:"popup__photo",alt:this.props.name,src:this.props.link}),r.a.createElement("p",{className:"popup__description"},this.props.name)))}}]),n}(r.a.Component),D=new(function(){function e(t){Object(C.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(j.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._returnErrorResponse)}},{key:"_returnErrorResponse",value:function(e){if(e.ok)return e.json();Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._returnErrorResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._returnErrorResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._returnErrorResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._returnErrorResponse)}},{key:"removeCard",value:function(e,t){if(!t)return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._returnErrorResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._returnErrorResponse):fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._returnErrorResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",headers:{authorization:"23e3d2ae-f405-4f8e-a432-7a3c52096726","Content-Type":"application/json"}}),B=n(20),q=n.n(B),J=n(21),z=n.n(J),H=n(16),M=n.n(H),V="https://auth.nomoreparties.co",W=function(e){return fetch("".concat(V,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw new Error(e.message)}))})).then((function(e){return e})).catch((function(e){return console.log(e.message)}))};var F=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)({}),i=Object(l.a)(c,2),p=i[0],m=i[1],g=Object(a.useState)([]),E=Object(l.a)(g,2),v=E[0],k=E[1],C=Object(a.useState)(""),j=Object(l.a)(C,2),N=j[0],y=j[1],x=Object(a.useState)(!1),w=Object(l.a)(x,2),L=w[0],B=w[1],J=Object(a.useState)(!1),H=Object(l.a)(J,2),F=H[0],G=H[1],Z=Object(a.useState)(!1),$=Object(l.a)(Z,2),K=$[0],Q=$[1],X=Object(a.useState)(!1),Y=Object(l.a)(X,2),ee=Y[0],te=Y[1],ne=Object(a.useState)(),ae=Object(l.a)(ne,2),re=ae[0],oe=ae[1],ce=Object(u.g)(),ie=Object(a.useState)({isImageOpen:!1,link:"",name:""}),se=Object(l.a)(ie,2),le=se[0],ue=se[1],pe=Object(a.useState)({icon:M.a,text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),me=Object(l.a)(pe,2),de=me[0],he=me[1];function fe(){G(!1),te(!1),Q(!1),B(!1),ue({isImageOpen:!1,link:"",name:""})}return r.a.useEffect((function(){D.getUserInfo().then((function(e){m(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[]),r.a.useEffect((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");W(e).then((function(e){o(!0),y(e.data.email),ce.push("/")})).catch((function(e){return console.log(e)}))}}),[ce]),r.a.useEffect((function(){D.getInitialCards().then((function(e){k(e)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e))}))}),[]),r.a.createElement(S.Provider,{value:p},r.a.createElement("div",{className:"page"},r.a.createElement(O,{email:N,loggedIn:n,signOut:function(){o(!1),localStorage.removeItem("jwt"),y(""),ce.push("/sign-in")}}),r.a.createElement(u.d,null,r.a.createElement(b,{exact:!0,path:"/",loggedIn:n,component:T,onCardClick:function(e){var t=e.card,n=t.link,a=t.name;ue({isImageOpen:!0,link:n,name:a})},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===p._id}));D.changeLikeCardStatus(e._id,!t).then((function(t){var n=v.map((function(n){return n._id===e._id?t:n}));k(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onCardDelete:function(e){var t=e.owner._id===p._id;D.removeCard(e._id,!t).then((function(t){var n=v.filter((function(n){return n._id===e._id?!t:n}));k(n)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},onEditProfile:function(){G(!0)},onAddPlace:function(){Q(!0)},onEditAvatar:function(){te(!0)},cards:v}),r.a.createElement(u.b,{path:"/sign-in"},r.a.createElement(d,{onLogin:function(e,t){he({icon:M.a,text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),function(e,t){return fetch("".concat(V,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){if(400===e.status)throw new Error("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new Error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e.token}))}(e,t).then((function(e){W(e).then((function(e){y(e.data.email)})).catch((function(e){return console.log(e)})),o(!0),ce.push("/"),he({icon:q.a,text:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"})})).catch((function(e){return he({icon:z.a,text:e.message})})),B(!0)}})),r.a.createElement(u.b,{path:"/sign-up"},r.a.createElement(h,{onRegister:function(e,t){he({icon:M.a,text:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),function(e,t){return fetch("".concat(V,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw e.error?new Error(e.error):new Error(e.message)}))}))}(e,t).then((function(){ce.push("/sign-in"),he({icon:q.a,text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})})).catch((function(e){return he({icon:z.a,text:e.message})})),B(!0)}})),r.a.createElement(u.b,null,n?r.a.createElement(u.a,{to:"/"}):r.a.createElement(u.a,{to:"/sign-in"}))),r.a.createElement(I,null),r.a.createElement(_,{isOpen:L,onClose:fe,loggedIn:n,message:de}),r.a.createElement(U,{isOpen:F,onClose:fe,onUpdateUser:function(e){oe(!0),D.setUserInfo(e).then((function(e){m(e),fe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return oe(!1)}))},isLoading:re}),r.a.createElement(A,{isOpen:K,onClose:fe,onAddPlace:function(e){oe(!0),D.addCard(e).then((function(e){k([].concat(Object(s.a)(v),[e])),fe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return oe(!1)}))},isLoading:re}),r.a.createElement(P,{isOpen:ee,onClose:fe,onUpdateAvatar:function(e){oe(!0),D.setAvatar(e).then((function(e){m(e),fe()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return oe(!1)}))},isLoading:re}),r.a.createElement(f,{name:"card-remove",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submit:"\u0414\u0430",onClose:fe}),r.a.createElement(R,{name:le.name,link:le.link,onClose:fe,isOpen:le.isImageOpen})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.90f6efe5.chunk.js.map