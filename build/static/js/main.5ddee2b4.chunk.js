(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,n,a){e.exports=a.p+"static/media/logo.ab10d000.png"},45:function(e,n,a){e.exports=a(59)},57:function(e,n,a){},59:function(e,n,a){"use strict";a.r(n);var t=a(33),l=a(34),c=a(44),r=a(43),u=a(1),m=a.n(u),o=a(21),s=a(19),i=a(17),h=a(22),_=function(e){var n=e.launch,a=n.launch_success?m.a.createElement("span",{className:"btn btn-success"}):m.a.createElement("span",{className:"btn btn-danger"});return m.a.createElement("div",{className:"col-9 col-md-6 col-lg-4"},m.a.createElement("div",{className:"row box"},m.a.createElement("div",{className:"col-9 "},m.a.createElement("div",{className:"launch-box"},m.a.createElement("h4",null,"Flight_number:",n.flight_number),m.a.createElement("p",null,"mission_name:",n.mission_name),m.a.createElement("p",null,"date:",new Date(n.launch_date_local).toLocaleString()),m.a.createElement("p",null,"success:",a)),m.a.createElement("div",{className:"rocket-box"},m.a.createElement("h4",null,"Rocket:",n.rocket.rocket_id),m.a.createElement("p",null,"Rocket name:",n.rocket.rocket_name),m.a.createElement("p",null,"Rocket type:",n.rocket.rocket_type))),m.a.createElement("div",{className:"col-3 btn-container"},m.a.createElement(h.b,{to:"/detail/".concat(n.flight_number),className:"btn btn-secondary btn-detail"},"Detail"))))};function b(){var e=Object(o.a)(["\n  {\n    launches {\n      flight_number\n      mission_name\n      launch_year\n      launch_date_local\n      launch_success\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return b=function(){return e},e}var E=Object(i.b)(b()),p=function(){var e=Object(s.a)(E),n=e.loading,a=e.error,t=e.data;return n?m.a.createElement("p",null,"Loading..."):a?m.a.createElement("p",null,"Error..."):(console.log(t),m.a.createElement("div",{className:"container my-2"},m.a.createElement("div",{className:"row"},t.launches.map((function(e){return m.a.createElement(_,{key:e.flight_number,launch:e})})))))};function d(){var e=Object(o.a)(["\n  query launchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_date_local\n      launch_success\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return d=function(){return e},e}var k=Object(i.b)(d()),f=function(e){var n=e.match.params.flight_number;n=parseInt(n);var a=Object(s.a)(k,{variables:{flight_number:n}}),t=a.loading,l=a.error,c=a.data;if(t)return m.a.createElement("p",null,"Loading...");if(l)return m.a.createElement("p",null,"Error happened...");var r=c.launch.launch_success?m.a.createElement("span",{className:"btn btn-success"}):m.a.createElement("span",{className:"btn btn-danger"});return m.a.createElement("div",{className:"container"},m.a.createElement("ul",{className:"detail-list"},m.a.createElement("li",null,"flight_number:",c.launch.flight_number),m.a.createElement("li",null,"mission_name:",c.launch.mission_name),m.a.createElement("li",null,"launch_year:",c.launch.launch_year),m.a.createElement("li",null,"launch_date_local:",c.launch.launch_date_local),m.a.createElement("li",null,"launch_success:",r),m.a.createElement("li",null,"rocket_id:",c.launch.rocket.rocket_id),m.a.createElement("li",null,"rocket_name:",c.launch.rocket.rocket_name),m.a.createElement("li",null,"rocket_type:",c.launch.rocket.rocket_type)))},g=a(41),v=a(15),y=a(9),N=(a(56),a(57),a(42)),j=a.n(N),O=new i.a({uri:"/graphql"}),x=function(e){Object(c.a)(a,e);var n=Object(r.a)(a);function a(){return Object(t.a)(this,a),n.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return m.a.createElement(y.a,{client:O},m.a.createElement(m.a.Fragment,null,m.a.createElement("img",{src:j.a,alt:"spaceX",className:"logo "}),m.a.createElement(h.a,null,m.a.createElement(v.a,{exact:!0,path:"/detail/:flight_number",component:f}),m.a.createElement(v.a,{exact:!0,path:"/",component:p}))))}}]),a}(u.Component);Object(g.render)(m.a.createElement(x,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.5ddee2b4.chunk.js.map