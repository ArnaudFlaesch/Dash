(this["webpackJsonpdash-web"]=this["webpackJsonpdash-web"]||[]).push([[0],{267:function(e,t,n){},323:function(e,t){},325:function(e,t){},357:function(e,t){},359:function(e,t){},395:function(e,t,n){},396:function(e,t,n){},417:function(e,t,n){},425:function(e,t,n){},426:function(e,t,n){},427:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){},545:function(e,t,n){},546:function(e,t,n){},547:function(e,t,n){},548:function(e,t,n){"use strict";n.r(t);var c=n(16),a=n(61),i=n(75),r=n(14),s=n(8),o=n(0),d=n(56),l=n(567),u=n(556),b=n(573),j=n(568),h=n(569),f=n(570),O=n(571),m=(n(267),n(554)),v=n(555),p=n(27),g=n.n(p),x={"Content-type":"application/json"};var w=n(2);function k(e){var t=Object(o.useState)(e.tab.label),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(o.useState)(!1),r=Object(s.a)(i,2),d=r[0],l=r[1];return Object(w.jsx)(m.a,{className:"clickableItem",children:Object(w.jsx)(v.a,{onClick:e.onTabClicked,children:d?Object(w.jsxs)("div",{className:"flexRow",children:[Object(w.jsx)("input",{onDoubleClick:function(){(function(e,t,n){return g.a.post("".concat("https://dash-webservices.herokuapp.com","/tab/updateTab"),{id:e,label:t,tabOrder:n},{headers:x})})(e.tab.id,c,e.tab.tabOrder).then((function(){l(!d)}))},onChange:function(e){return a(e.target.value)},value:c}),Object(w.jsx)(u.a,{className:"deleteTabButton",onClick:function(){var t;(t=e.tab.id,g.a.delete("".concat("https://dash-webservices.herokuapp.com","/tab/deleteTab/?id=").concat(t),{headers:x})).then((function(){return e.onTabDeleted(e.tab.id)}))},children:Object(w.jsx)("i",{className:"fa fa-trash"})})]}):Object(w.jsx)("span",{onDoubleClick:function(){l(!d)},children:c})})},e.tab.id)}var y,D=n(557),S=n(558),C=n(559),N=n(560),E=n(561),R=n(562);!function(e){e[e.WEATHER=1]="WEATHER",e[e.RSS=2]="RSS",e[e.CALENDAR=3]="CALENDAR",e[e.STRAVA=4]="STRAVA"}(y||(y={}));var _=function(e){return Object(w.jsx)("div",{className:"flexRow",children:Object.keys(y).map((function(t){return isNaN(parseInt(t,0))&&Object(w.jsxs)(D.a,{children:[Object(w.jsx)(S.a,{top:!0,width:"100%",src:"/assets/318x180.svg",alt:"Card image cap"}),Object(w.jsxs)(C.a,{children:[Object(w.jsx)(N.a,{children:t}),Object(w.jsxs)(E.a,{children:["Widget ",t]}),Object(w.jsxs)(R.a,{children:["Cliquez ci-dessous pour ajouter un widget ",t," au dashboard."]}),Object(w.jsx)(u.a,{id:t,onClick:e.onWidgetAdded,className:"btn btn-success",value:y[t],children:"Ajouter"})]})]},t)}))})},T="TOGGLE_TAB",A=function(e){return{type:T,payload:{id:e}}},B={"Content-type":"application/json"};function L(e,t){return g.a.post("".concat("https://dash-webservices.herokuapp.com","/widget/updateWidgetData"),{id:e,data:t},{headers:B})}var I,W=n(566),M=n(76),F=M.createLogger({format:M.format.combine(M.format.json(),M.format.colorize({all:!0})),level:"debug",transports:[new M.transports.Console]}),H=n(23),z=n(245);function P(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h4",{children:"\xcates-vous s\xfbr de vouloir supprimer ce widget ?"}),Object(w.jsx)("button",{onClick:e.onCancelButtonClicked,className:"btn btn-primary cancelButton",children:"Annuler"}),Object(w.jsx)("button",{onClick:function(){e.onDeleteButtonClicked(e.idWidget)},className:"btn btn-danger validateDeletionButton",children:"Supprimer"})]})}function U(e){var t=Object(o.useState)(I.READ),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(o.useEffect)((function(){a(I.READ)}),[e.config]),Object(w.jsx)("div",{children:c===I.READ?Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"header",children:[Object(w.jsx)("div",{className:"leftGroup widgetHeader",children:e.header}),Object(w.jsxs)("div",{className:"rightGroup",children:[Object(w.jsx)("button",{onClick:function(){a(I.EDIT)},className:"btn btn-default editButton",children:Object(w.jsx)("i",{className:"fa fa-cog","aria-hidden":"true"})}),Object(w.jsx)("button",{onClick:e.refreshFunction,className:"btn btn-default refreshButton",children:Object(w.jsx)("i",{className:"fa fa-refresh","aria-hidden":"true"})}),Object(w.jsx)("button",{onClick:function(){a(I.DELETE)},className:"btn btn-default deleteButton",children:Object(w.jsx)("i",{className:"fa fa-trash","aria-hidden":"true"})})]})]}),e.body]}):c===I.DELETE?Object(w.jsx)(P,{idWidget:e.id,onDeleteButtonClicked:e.onDeleteButtonClicked,onCancelButtonClicked:function(){a(I.READ)}}):e.editModeComponent})}!function(e){e[e.READ=1]="READ",e[e.EDIT=2]="EDIT",e[e.DELETE=3]="DELETE"}(I||(I={}));n(395),n(396);function V(e){var t=Object(o.useState)(e.calendarUrls||[]),n=Object(s.a)(t,2),c=n[0],a=n[1],i=function(e){a(c.map((function(t,n){var c;return n.toString()===(null===(c=e.target)||void 0===c?void 0:c.id)?e.target.value:t})))};return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[c&&c.map((function(e,t){return Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{id:t.toString(),onChange:i,value:e,placeholder:"Saisissez une URL"},t),Object(w.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e,void a(c.filter((function(e){return e!==t})));var t},children:"Supprimer"})]})})),Object(w.jsx)("button",{id:"addCalendarUrl",className:"btn btn-primary",onClick:function(){a(c.concat(""))},children:"Ajouter"})]}),Object(w.jsx)("button",{id:"validateCalendarUrls",onClick:function(){e.onConfigSubmitted(c)},disabled:!c||(null===c||void 0===c?void 0:c.length)<1,className:"btn btn-success",children:"Valider"})]})}var Y=n(259),q=n(258),G=n(250),K=n(251),J=n(572),Q=n(159);function $(e){var t=Object(o.useState)(e.calendars),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(o.useState)([]),r=Object(s.a)(i,2),d=r[0],l=r[1],u={fr:J.a},b=Object(Q.b)({format:Y.a,parse:q.a,startOfWeek:G.a,getDay:K.a,locales:u});function j(){l([]),null===c||void 0===c||c.map((function(e,t){g.a.get("".concat("https://dash-webservices.herokuapp.com","/proxy/?url=").concat(e)).then((function(e){var n=z.parseICS(e.data),c=t>0?d:[];l([].concat(Object(H.a)(c),Object(H.a)(Object.keys(n).map((function(e){var t,c,a=n[e];return{title:a.summary,start:a.start,end:a.end,allDay:0===(null===(t=a.end)||void 0===t?void 0:t.getHours())&&0===(null===(c=a.start)||void 0===c?void 0:c.getHours())}})))))})).catch((function(e){F.error(e)}))}))}Object(o.useEffect)((function(){j()}),[c]);var h=Object(w.jsx)("div",{children:"Calendar"}),f=Object(w.jsx)("div",{children:Object(w.jsx)(Q.a,{localizer:b,culture:"fr",events:d,startAccessor:"start",endAccessor:"end",defaultView:"month",popup:!0,style:{height:500}})});return Object(w.jsx)("div",{children:Object(w.jsx)(U,{id:e.id,tabId:e.tabId,config:{calendars:c},header:h,body:f,editModeComponent:Object(w.jsx)(V,{calendarUrls:c,onConfigSubmitted:function(t){L(e.id,{calendars:t}).then((function(){a([]),a(t)})).catch((function(e){F.error(e.message)}))}}),refreshFunction:j,onDeleteButtonClicked:e.onDeleteButtonClicked})})}var X=n(252),Z=n.n(X),ee=n(563);n(417);function te(e){var t=Object(o.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{onClick:function(){a(!c)},className:"title",children:e.componentRoot}),Object(w.jsx)("div",{children:Object(w.jsx)(ee.a,{isOpen:c,children:Object(w.jsx)(D.a,{children:Object(w.jsx)(C.a,{children:e.componentDetail})})})})]})}n(253);function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Date(1e3*e+1e3*t)}function ce(e){var t=-60*(new Date).getTimezoneOffset();if(Math.abs(e)===Math.abs(t))return 0;var n=Math.abs(e)+Math.abs(t);return e<t?-n:n}n(425);function ae(e){var t=document.createElement("div");return t.innerHTML=e||"",t.textContent||t.innerText||""}var ie=function(e){return Object(w.jsxs)("div",{className:"article",children:[Object(w.jsx)("div",{children:Object(w.jsx)("a",{href:e.link,children:e.title})}),Object(w.jsx)("div",{children:ae(e.content)||ae(e.description)}),Object(w.jsxs)("div",{children:["Publi\xe9 le ",(t=e.pubDate||"",new Date(t).toLocaleString("fr"))," ",e.author&&"par "+e.author]})]});var t};n(426);function re(e){var t=Object(o.useState)(e.url),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{id:"rssFeedUrl",name:"url",onChange:function(e){return a(e.target.value)},value:c,placeholder:"Saisissez l'URL du flux RSS"}),Object(w.jsx)("button",{onClick:function(){c&&e.onUrlSubmitted(c)},disabled:!c||(null===c||void 0===c?void 0:c.length)<1,className:"btn btn-success",children:"Valider"})]})}n(427);function se(e){var t=Object(o.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(o.useState)(e.url),d=Object(s.a)(i,2),l=d[0],u=d[1],b=Object(o.useState)(""),j=Object(s.a)(b,2),h=j[0],f=j[1],O=Object(o.useState)(),m=Object(s.a)(O,2),v=m[0],p=m[1],g=Object(o.useState)(""),x=Object(s.a)(g,2),k=x[0],y=x[1],D=Object(o.useState)(""),S=Object(s.a)(D,2),C=S[0],N=S[1],E=new Z.a;function R(){l&&E.parseURL("".concat("https://dash-webservices.herokuapp.com","/proxy/?url=").concat(l)).then((function(e){var t=e;f(t.description),a(t.items),p(t.image),y(t.link),N(t.title)})).catch((function(e){F.error(e.message)}))}function _(){a([]),R()}function T(e,t){var n=e?new Date(e).toLocaleTimeString("fr",{hour:"2-digit",minute:"2-digit"}):"";return"".concat(n," ").concat(t)}Object(o.useEffect)((function(){R()}),[l]);var A,B=Object(w.jsx)("div",{className:"rssWidgetTitle",children:Object(w.jsxs)("a",{href:k,className:"flexRow",children:[v&&Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:"imgLogoRSS",src:null===v||void 0===v?void 0:v.url,alt:"logo"})}),Object(w.jsx)("div",{className:"rssTitle",children:C})]})}),I=Object(w.jsx)("div",{children:l&&c&&Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"rssDescription",children:h}),Object(w.jsx)("div",{className:"feed",children:(A=c,A.map((function(e){return Object(w.jsx)(te,{componentRoot:T(e.pubDate,e.title),componentDetail:Object(w.jsx)(ie,Object(r.a)({},e)),link:e.link},e.guid)})))})]})});return Object(w.jsx)("div",{children:Object(w.jsx)(U,{id:e.id,tabId:e.tabId,config:{url:l},header:B,body:I,editModeComponent:Object(w.jsx)(re,{url:l,onUrlSubmitted:function(t){L(e.id,{url:t}).then((function(){u(t),_()})).catch((function(e){F.error(e.message)}))}}),refreshFunction:_,onDeleteButtonClicked:e.onDeleteButtonClicked})})}var oe=n(254),de=n(22);function le(e,t){var n=Object(o.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(c){return F.error(c),t}})),c=Object(s.a)(n,2),a=c[0],i=c[1];return[a,function(t){try{var n=t instanceof Function?t(a):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(c){F.error(c)}}]}function ue(e){return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsxs)("a",{href:"https://www.strava.com/activities/".concat(e.id),children:[Object(Y.a)(new Date(e.start_date_local),"dd MMM")," ",e.name]})}),Object(w.jsxs)("div",{children:["Distance : ",Math.round(1e3*e.distance)/1e6," kms"]}),Object(w.jsxs)("div",{children:["Dur\xe9e : ",e.moving_time/60," mins"]}),Object(w.jsxs)("div",{children:["Denivel\xe9 : ",e.total_elevation_gain]}),Object(w.jsxs)("div",{children:["Troph\xe9es : ",e.achievement_count]}),Object(w.jsxs)("div",{children:["Vitesse moyenne : ",e.average_speed]}),Object(w.jsxs)("div",{children:["Vitesse max : ",e.max_speed]}),Object(w.jsxs)("div",{children:["Kudos : ",e.kudos_count]}),Object(w.jsxs)("div",{children:["Commentaires : ",e.comment_count]})]})}function be(e){return Object(o.useEffect)((function(){e.onConfigSubmitted(e.clientId||"",e.clientSecret||"")}),[]),Object(w.jsx)("div",{})}var je=n(564),he=n(565),fe=n(109);function Oe(e){var t=Object(o.useState)("30391"),n=Object(s.a)(t,2),c=n[0],a=n[1],i=Object(o.useState)("66cf349fa75b4f87701342463c9d69bea1acc1ed"),d=Object(s.a)(i,2),l=d[0],b=d[1],j=Object(o.useState)([]),h=Object(s.a)(j,2),f=h[0],O=h[1],m=Object(o.useState)(),v=Object(s.a)(m,2),p=v[0],x=v[1],k=le("strava_token",null),y=Object(s.a)(k,2),D=y[0],S=y[1],C=le("strava_refresh_token",null),N=Object(s.a)(C,2),E=N[0],R=N[1],_=le("strava_token_expires_at",null),T=Object(s.a)(_,2),A=T[0],B=T[1],I=Object(de.e)().search;function W(){O([]),D&&g.a.get("https://www.strava.com/api/v3/athlete",{headers:{Authorization:"Bearer ".concat(D)}}).then((function(e){x(e.data)})).catch((function(e){F.error(e.message)})),D&&A&&Object(he.a)(new Date(1e3*A),new Date)?g.a.get("https://www.strava.com/api/v3/athlete/activities?page=1&per_page=".concat(20),{headers:{Authorization:"Bearer ".concat(D)}}).then((function(e){O(e.data.reverse())})).catch((function(e){F.error(e.message)})):M()}function M(){E?g.a.post("https://www.strava.com/oauth/token",{client_id:c,client_secret:l,refresh_token:E,grant_type:"refresh_token"}).then((function(e){S(e.data.access_token),R(e.data.refresh_token),B(e.data.expires_at),x(e.data.athlete)})).catch((function(e){F.error(e.message)})):F.error("No refresh token")}function H(){return f.reduce((function(e,t){var n=Object(Y.a)(new Date(t.start_date_local),"yyyy-MM");return e[n]||(e[n]=[]),e[n].push(Math.round(1e3*t.distance)/1e6),e}),[])}function z(){var e=H();return Object.keys(e).map((function(t){return{x:new Date(t),y:Math.round(e[t].reduce((function(e,t){return e+t})))}}))}Object(o.useEffect)((function(){var e=oe.parse(I);e&&e.code&&function(e){g.a.post("https://www.strava.com/oauth/token",{client_id:c,client_secret:l,code:e,grant_type:"authorization_code"}).then((function(e){S(e.data.access_token),R(e.data.refresh_token),B(e.data.expires_at),x(e.data.athlete)})).catch((function(e){F.error(e.message)}))}(e.code.toString());D&&E&&!Object(je.a)(new Date(1e3*A),new Date)||M()}),[]),Object(o.useEffect)((function(){D&&W()}),[D]);var P=Object(w.jsx)("div",{children:Object(w.jsxs)("a",{href:"https://www.strava.com/athletes/".concat(null===p||void 0===p?void 0:p.id),children:[Object(w.jsx)("img",{src:null===p||void 0===p?void 0:p.profile_medium}),null===p||void 0===p?void 0:p.firstname," ",null===p||void 0===p?void 0:p.lastname]})}),V=Object(w.jsxs)("div",{className:"flexColumn",children:[D&&E&&A&&Object(he.a)(new Date(1e3*A),new Date)&&Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{style:{height:"20vh",overflowY:"scroll"},children:f.slice().reverse().map((function(e){return Object(w.jsx)(te,{componentRoot:"".concat(Object(Y.a)(new Date(e.start_date_local),"dd MMM"),"  ").concat(e.name,"  ").concat(Math.round(1e3*e.distance)/1e6," kms"),componentDetail:Object(w.jsx)(ue,Object(r.a)({},e)),link:"https://www.strava.com/activities/".concat(e.id)},e.id)}))}),Object(w.jsx)("div",{style:{minHeight:"25vh",maxHeight:"80vh",flex:"1 0 50%"},children:Object(w.jsx)(fe.b,{type:"bar",data:{labels:z().map((function(e){return Object(Y.a)(e.x,"MMM yyyy")})),datasets:[{label:"Distance (kms)",backgroundColor:"orange",data:z(),yAxisID:"kms",order:2},{label:"Activit\xe9s",type:"line",backgroundColor:"darkgreen",data:Object.keys(H()).map((function(e){return{x:new Date(e),y:H()[e].length}})),yAxisID:"activities",order:1}]},options:{scales:{y:[{id:"kms",type:"linear",position:"left"},{id:"activities",type:"linear",position:"right"}]}}})})]}),(!D||!E||A&&Object(je.a)(new Date(1e3*A),new Date))&&Object(w.jsx)("a",{href:"https://www.strava.com/oauth/authorize?client_id=".concat(c,"&redirect_uri=").concat("https://arnaudflaesch.github.io/Dash-Web/","&response_type=code&scope=read,activity:read"),children:Object(w.jsx)(u.a,{children:"Se connecter"})})]});return Object(w.jsx)("div",{children:Object(w.jsx)(U,{id:e.id,tabId:e.tabId,config:{clientId:c},header:P,body:V,editModeComponent:Object(w.jsx)(be,{clientId:c,clientSecret:l,onConfigSubmitted:function(t,n){L(e.id,{clientId:t,clientSecret:n}).then((function(){a(c),b(l),W()})).catch((function(e){F.error(e.message)}))}}),refreshFunction:W,onDeleteButtonClicked:e.onDeleteButtonClicked})})}n(543);function me(e){var t=Object(o.useState)(e.city||""),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{id:"cityNameInput",name:"city",onChange:function(e){return a(e.target.value)},value:c,placeholder:"Saisissez de nom de la ville"}),Object(w.jsx)("button",{id:"validateButton",className:"btn btn-success",onClick:function(){e.onConfigSubmitted(c)},disabled:!c||(null===c||void 0===c?void 0:c.length)<1,children:"Valider"})]})}n(544);var ve,pe=function(e){var t,n,c;return Object(w.jsxs)("div",{className:"forecast",children:[Object(w.jsx)("div",{children:ne(e.dt,ce(e.city.timezone)).toLocaleString("fr",{weekday:"short",day:"numeric",hour:"2-digit"})}),Object(w.jsxs)("div",{className:"flexRow",children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(null===(t=e.weather[0])||void 0===t?void 0:t.icon,"@2x.png"),className:"smallImage",title:null===(n=e.weather[0])||void 0===n?void 0:n.description,alt:null===(c=e.weather[0])||void 0===c?void 0:c.description})}),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-thermometer-three-quarters fa-sm mr10",style:{color:"crimson"}}),e.main.temp_max,"\xb0"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-thermometer-quarter fa-sm mr10",style:{color:"blue"}}),e.main.temp_min,"\xb0"]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-tint fa-sm mr10",style:{color:"lightblue"}}),e.main.humidity,"%"]})]})]})]})};n(545);function ge(e){var t="http://api.openweathermap.org/data/2.5/",n="?units=metric&lang=fr&appid=",c=Object(o.useState)(e.city),a=Object(s.a)(c,2),i=a[0],d=a[1],l=Object(o.useState)(),u=Object(s.a)(l,2),b=u[0],j=u[1],h=Object(o.useState)(),f=Object(s.a)(h,2),O=f[0],m=f[1],v=Object(o.useState)(),p=Object(s.a)(v,2),x=p[0],k=p[1],y=Object(o.useState)(ve.TODAY),D=Object(s.a)(y,2),S=D[0],C=D[1];function N(){i&&(g.a.get("".concat("https://dash-webservices.herokuapp.com","/proxy/"),{params:{url:"".concat(t).concat("weather").concat(n).concat("d10750704319701c3f9436134add4d7d","&q=").concat(i)}}).then((function(e){j(e.data)})).catch((function(e){F.error(e)})),g.a.get("".concat("https://dash-webservices.herokuapp.com","/proxy/"),{params:{url:"".concat(t).concat("forecast").concat(n).concat("d10750704319701c3f9436134add4d7d","&q=").concat(i)}}).then((function(e){m(e.data.list),k(e.data.city)})).catch((function(e){F.error(e.message)})))}function E(){j(void 0),m(void 0),k(void 0),N()}function R(){if(!x||!O)return[];switch(S){case ve.WEEK:return O.filter((function(e){return 17===ne(e.dt,ce(x.timezone)).getHours()}));case ve.TOMORROW:return O.filter((function(e){return new Date(1e3*e.dt).getDay()===new Date(+new Date+864e5).getDay()&&new Date(1e3*e.dt).getHours()>=7}));case ve.TODAY:default:return O.filter((function(e){return new Date(1e3*e.dt).getDay()===(new Date).getDay()&&new Date(1e3*e.dt).getHours()>=7}))}}Object(o.useEffect)((function(){N()}),[i]);var _=Object(w.jsxs)("div",{children:["La m\xe9t\xe9o aujourd'hui \xe0 ",null===x||void 0===x?void 0:x.name]}),T=Object(w.jsxs)("div",{children:[x&&b&&b.weather&&Object(w.jsxs)("div",{className:"flexRow",children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{style:{width:"80px"},src:"https://openweathermap.org/img/wn/".concat(b.weather[0].icon,"@2x.png"),title:b.weather[0].description,alt:b.weather[0].description})}),Object(w.jsxs)("div",{className:"flexRow",style:{placeItems:"center"},children:[Object(w.jsxs)("div",{className:"flexColumn mr5",children:[Object(w.jsx)("div",{children:b.weather[0].description}),Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-thermometer-three-quarters fa-md"})," ",b.main.temp,"\xb0"]})]}),Object(w.jsxs)("div",{className:"flexColumn",children:[Object(w.jsxs)("div",{className:"spaceBetween",children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-sun-o fa-md"})," ",ne(b.sys.sunrise,ce(b.timezone)).toLocaleTimeString("fr")]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-moon-o fa-md"})," ",ne(b.sys.sunset,ce(b.timezone)).toLocaleTimeString("fr")]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("i",{className:"fa fa-clock-o fa-md"})," ",ne(b.dt,ce(b.timezone)).toLocaleString("fr")]})]})]})]}),x&&O&&Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:"flexRow",children:[Object(w.jsx)("span",{className:"bold",children:"Pr\xe9visions"}),Object(w.jsxs)("span",{style:{alignContent:"space-between",display:"flex"},children:[Object(w.jsx)("button",{id:"toggleTodayForecast",onClick:function(){C(ve.TODAY)},style:{flex:"1"},className:"btn btn-".concat(S===ve.TODAY?"success":"primary"," mr-5"),children:"Aujourd'hui"}),Object(w.jsx)("button",{id:"toggleTomorrowForecast",onClick:function(){C(ve.TOMORROW)},style:{flex:"1"},className:"btn btn-".concat(S===ve.TOMORROW?"success":"primary"),children:"Demain"}),Object(w.jsx)("button",{id:"toggleWeekForecast",onClick:function(){C(ve.WEEK)},style:{flex:"1"},className:"btn btn-".concat(S===ve.WEEK?"success":"primary"),children:"Semaine"})]})]}),Object(w.jsx)("br",{}),Object(w.jsx)("div",{style:{height:"20vh",maxWidth:"100%"},children:Object(w.jsx)(fe.a,{type:"line",data:{labels:R().map((function(e){return S===ve.TODAY||S===ve.TOMORROW?Object(Y.a)(new Date(1e3*e.dt),"HH"):Object(Y.a)(new Date(1e3*e.dt),"EEEE dd MMM")})),datasets:[{label:"Temp\xe9rature",borderColor:"orange",data:R().map((function(e){return e.main.temp_max}))},{label:"Ressenti",borderColor:"red",data:R().map((function(e){return e.main.feels_like}))}]},options:{maintainAspectRatio:!1}})}),Object(w.jsx)("div",{className:"flexRow forecastRow",children:x&&O&&R().map((function(e){return Object(w.jsx)("div",{className:"forecastContainer",children:Object(w.jsx)(pe,Object(r.a)(Object(r.a)({},e),{},{city:x}))},e.dt)}))})]})]});return Object(w.jsx)("div",{children:Object(w.jsx)(U,{id:e.id,tabId:e.tabId,config:{city:x},header:_,body:T,editModeComponent:Object(w.jsx)(me,{city:i,onConfigSubmitted:function(t){L(e.id,{city:t}).then((function(){d(t),E()})).catch((function(e){F.error(e.message)}))}}),refreshFunction:E,onDeleteButtonClicked:e.onDeleteButtonClicked})})}!function(e){e[e.TODAY=0]="TODAY",e[e.TOMORROW=1]="TOMORROW",e[e.WEEK=2]="WEEK"}(ve||(ve={}));var xe=n(9),we=n(11),ke=n(19),ye=n(18),De=(n(546),function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(i.a,{children:Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"tabContainer",children:e.tabList.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(i.b,{to:e.path,children:e.title})},e.title)}))}),Object(w.jsx)("div",{children:e.tabList.map((function(e){return Object(w.jsx)("div",{children:Object(w.jsx)(de.a,{path:e.path,exact:e.exact,component:e.component})},e.title)}))})]})})})});var Se=[{title:"Groupes",component:function(){return Object(o.useEffect)((function(){new Promise((function(e,t){F.debug("getGroupsData"),FB.api("/me/groups",{fields:"administrator,bookmark_order,id,unread,cover,created_time,description,icon,email,link,name,purpose,venue,picture"},(function(n){n?e(n):t(Error("Promise rejected"))}))})).then((function(e){F.debug(e)})).catch((function(e){F.debug(e)}))}),[]),Object(w.jsx)("div",{children:"Liste des groupes auxquels vous appartenez"})},path:"/groups/"},{title:"Events",component:function(){return Object(o.useEffect)((function(){F.debug("onComponentDidMount")})),Object(w.jsx)("div",{children:"Liste des prochains \xe9v\xe8nements"})},path:"/events/"}],Ce=function(e){Object(ke.a)(n,e);var t=Object(ye.a)(n);function n(e){var c;return Object(xe.a)(this,n),(c=t.call(this,e)).checkLoginStatus=function(){FB.getLoginStatus(c.facebookLoginHandler)},c.facebookLogin=function(){F.debug("facebookLogin"),FB.getLoginStatus((function(e){F.debug(e),c.setState({loginStatusResponse:e}),"connected"!==e.status&&FB.login(c.facebookLoginHandler,{scope:"user_birthday,user_hometown,user_likes,user_photos,user_friends,user_status,user_tagged_places,user_posts,user_gender,user_link,email,public_profile"})}))},c.facebookLogout=function(){FB.logout((function(e){F.debug(e),c.setState({userData:void 0,loginStatusResponse:e})}))},c.facebookLoginHandler=function(e){F.debug("facebookLoginHandler"),c.setState({loginStatusResponse:e}),"connected"===e.status&&(F.debug("Connected"),new Promise((function(e,t){F.debug("getProfile"),FB.api("/me",{fields:"id,first_name,last_name,hometown,location,birthday,gender,link"},(function(n){n?e(n):t(Error("Promise rejected"))}))})).then((function(e){F.debug("Result"),F.debug(e),c.setState({userData:e})})).catch((function(e){F.debug(e)})))},window.fbAsyncInit=function(){FB.init({appId:e.appId,xfbml:!0,version:"v3.2"});var t=new Event("FBObjectReady");document.dispatchEvent(t)},function(e,t,n){var c=e.getElementsByTagName(t)[0],a=e.getElementsByTagName(t)[0];e.getElementById(n)||((c=e.createElement(t)).id=n,c.src="https://connect.facebook.net/en_US/sdk.js",a&&a.parentNode&&a.parentNode.insertBefore(c,a))}(document,"script","facebook-jssdk"),document.addEventListener("FBObjectReady",c.checkLoginStatus),c}return Object(we.a)(n,[{key:"componentWillUnmount",value:function(){document.removeEventListener("FBObjectReady",this.checkLoginStatus)}},{key:"render",value:function(){var e=null;if(this.state&&this.state.loginStatusResponse&&"connected"===this.state.loginStatusResponse.status&&this.state.userData){var t=this.state.userData;e=Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{children:[t.first_name," ",t.last_name]}),Object(w.jsx)("div",{onClick:this.facebookLogout,children:"Se d\xe9connecter"})]})}else e=Object(w.jsx)("div",{onClick:this.facebookLogin,className:"fb-login-button","data-max-rows":"1","data-size":"large","data-button-type":"continue_with","data-use-continue-as":"true"});return Object(w.jsxs)("div",{children:[e,this.state&&this.state.userData&&Object(w.jsx)("div",{children:Object(w.jsx)(De,{tabList:Se})})]})}}]),n}(o.Component);function Ne(e){var t=Object(o.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],l=Object(a.c)((function(e){return e.activeTab}));function u(e){switch(e.type){case y.WEATHER:return Object(w.jsx)(ge,Object(r.a)(Object(r.a)({id:e.id,tabId:e.tab.id},e.data),{},{onDeleteButtonClicked:b}));case y.RSS:return Object(w.jsx)(se,Object(r.a)(Object(r.a)({id:e.id,tabId:e.tab.id},e.data),{},{onDeleteButtonClicked:b}));case y.CALENDAR:return Object(w.jsx)($,Object(r.a)(Object(r.a)({id:e.id,tabId:e.tab.id},e.data),{},{onDeleteButtonClicked:b}));case y.STRAVA:return Object(w.jsx)(Oe,Object(r.a)(Object(r.a)({id:e.id,tabId:e.tab.id},e.data),{},{onDeleteButtonClicked:b}));default:return}}function b(e){(function(e){return g.a.delete("".concat("https://dash-webservices.herokuapp.com","/widget/deleteWidget/?id=").concat(e),{headers:B})})(e).then((function(t){t&&i(c.filter((function(t){return t.id!==e})))})).catch((function(e){F.error(e.message)}))}return Object(o.useEffect)((function(){c.length||l!==e.tabId||fetch("".concat("https://dash-webservices.herokuapp.com","/widget/?tabId=").concat(e.tabId)).then((function(e){return e.json()})).then((function(e){i(e)})).catch((function(e){F.error(e.message)}))}),[l]),Object(o.useEffect)((function(){e.newWidget&&i(c.concat([e.newWidget]))}),[null!=e.newWidget&&e.newWidget.id]),Object(w.jsx)(W.a,{tabId:e.tabId,children:Object(w.jsx)(d.a,{onDragEnd:function(e){e.destination&&function(e){var t=e.map((function(e){return{id:e.id,widgetOrder:e.widgetOrder}}));return g.a.post("".concat("https://dash-webservices.herokuapp.com","/widget/updateWidgetsOrder"),t,{headers:B})}(function(e,t,n){var c=Array.from(e),a=c.splice(t,1),i=Object(s.a)(a,1)[0];return c.splice(n,0,i),c}(c,e.source.index,e.destination.index).map((function(e,t){return e.widgetOrder=t,e}))).then((function(e){return i(e.data)}))},children:Object(w.jsx)(d.c,{droppableId:"droppable",children:function(e){return Object(w.jsx)("div",Object(r.a)(Object(r.a)({},e.droppableProps),{},{ref:e.innerRef,children:Object(w.jsxs)("div",{className:"widgetList",children:[Object(w.jsx)(Ce,{}),c&&c.length>0&&c.map((function(e,t){return Object(w.jsx)(d.b,{draggableId:e.id.toString(),index:t,children:function(t){return Object(w.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({className:"widget",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:u(e)}),e.id)}},e.id)})),e.placeholder]})}))}})})})}function Ee(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(o.useState)(),m=Object(s.a)(i,2),v=m[0],p=m[1],y=Object(o.useState)(!1),D=Object(s.a)(y,2),S=D[0],C=D[1],N=Object(a.c)((function(e){return e.activeTab})),E=Object(a.b)();function R(){var e;(e="Nouvel onglet",g.a.post("".concat("https://dash-webservices.herokuapp.com","/tab/addTab"),{label:e},{headers:x})).then((function(e){var t=e.data;c(n.concat(t)),E(A(t.id))}))}function T(){C(!S)}function L(e){c(n.filter((function(t){return t.id!==e}))),N===e&&E(A(n[0].id))}return Object(o.useEffect)((function(){fetch("".concat("https://dash-webservices.herokuapp.com","/tab/")).then((function(e){return e.json()})).then((function(e){e&&0!==e.length||R(),c(e),E(A(e[0].id))})).catch((function(e){F.error(e.message)}))}),[]),Object(w.jsx)("div",{className:"dash",children:Object(w.jsxs)("div",{className:"flexRow",children:[Object(w.jsx)("div",{className:"dashNavbar",children:Object(w.jsxs)(l.a,{vertical:!0,navbar:!0,children:[Object(w.jsx)(u.a,{id:"openAddWidgetModal",className:"dashNavbarLink",onClick:T,children:Object(w.jsx)("i",{className:"fa fa-plus-circle fa-lg","aria-hidden":"true"})}),Object(w.jsxs)(b.a,{isOpen:S,toggle:T,children:[Object(w.jsx)(j.a,{toggle:T,children:"Ajouter un widget"}),Object(w.jsx)(h.a,{children:Object(w.jsx)(_,{onWidgetAdded:function(e){N&&function(e,t){return g.a.post("".concat("https://dash-webservices.herokuapp.com","/widget/addWidget"),{type:e,tab:{id:t}},{headers:B})}(e.currentTarget.value,N).then((function(e){if(e){var t=e.data;p(t)}})).catch((function(e){F.error(e.message)}))}})}),Object(w.jsx)(f.a,{children:Object(w.jsx)(u.a,{id:"closeAddWidgetModal",color:"primary",onClick:T,children:"Fermer"})})]})]})}),Object(w.jsxs)("div",{className:"flexColumn tabsBar",children:[Object(w.jsxs)(l.a,{tabs:!0,children:[Object(w.jsx)(d.a,{onDragEnd:function(e){e.destination&&function(e){return g.a.post("".concat("https://dash-webservices.herokuapp.com","/tab/updateTabs"),e,{headers:x})}(function(e,t,n){var c=Array.from(e),a=c.splice(t,1),i=Object(s.a)(a,1)[0];return c.splice(n,0,i),c}(n,e.source.index,e.destination.index).map((function(e,t){return e.tabOrder=t,e}))).then((function(e){c(e.data)}))},children:Object(w.jsx)(d.c,{droppableId:"droppable",direction:"horizontal",children:function(e){return Object(w.jsxs)("div",Object(r.a)(Object(r.a)({className:"flexRow"},e.droppableProps),{},{ref:e.innerRef,children:[n.length>0&&n.map((function(e,t){return Object(w.jsx)(d.b,{draggableId:e.id.toString(),index:t,children:function(t){return Object(w.jsx)("div",Object(r.a)(Object(r.a)(Object(r.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{className:"tab ".concat(e.id===N?"selectedItem":""),children:Object(w.jsx)(k,{tab:e,onTabClicked:function(){return function(e){N!==e&&E(A(e))}(e.id)},onTabDeleted:L})}),e.id)}},e.id)})),e.placeholder]}))}})}),Object(w.jsx)(u.a,{onClick:R,id:"addNewTabButton",className:"fa fa-plus-circle fa-lg"})]}),Object(w.jsx)(O.a,{activeTab:N,children:n.length>0&&n.map((function(e){return Object(w.jsx)(Ne,{newWidget:(t=e.id,v&&t===v.tab.id?v:void 0),tabId:e.id},e.id);var t}))})]})]})})}n(547);var Re=n(43),_e={activeTab:-1},Te=Object(Re.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:var n=t.payload.id;return Object(r.a)(Object(r.a)({},e),{},{activeTab:n});default:return e}})),Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Be(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.render(Object(w.jsx)(a.a,{store:Te,children:Object(w.jsx)(i.a,{children:Object(w.jsx)(Ee,{})})}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");Ae?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Be(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Be(e)}))}}()}},[[548,1,2]]]);
//# sourceMappingURL=main.8b6ce375.chunk.js.map