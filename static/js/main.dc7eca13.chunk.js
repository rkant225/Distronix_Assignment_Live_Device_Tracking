(this.webpackJsonptrack_location_on_map_by_device_id_and_sensor_id=this.webpackJsonptrack_location_on_map_by_device_id_and_sensor_id||[]).push([[0],{202:function(e,t,n){e.exports=n(425)},207:function(e,t,n){},425:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),o=n.n(c),i=(n(207),n(57)),l=n(7),u=n(35),s=n(36),d=n(39),p=n(38),m=n(427),h=n(426),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).renderInput=function(e){return r.a.createElement("div",{className:"field"},r.a.createElement("label",null,e.label),r.a.createElement("input",e.input),r.a.createElement("span",{style:{color:"red"}},e.meta.touched&&e.meta.error))},e.required=function(e){return""===e||void 0===e?"This field is required...!!!":void 0},e.onSubmit=function(t){e.props.history.push("/ParkingLot/".concat(t.deviceId))},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"info-collection-form"},r.a.createElement("h2",null,"Track location of your device"),r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form"},r.a.createElement(m.a,{name:"deviceId",component:this.renderInput,label:"Device_ID",validate:[this.required]}),r.a.createElement(m.a,{name:"sensorId",component:this.renderInput,label:"Sensor_ID",validate:[this.required]}),r.a.createElement("button",{type:"submit",className:"ui green button",disabled:this.props.submitting},"Track Device"),r.a.createElement("button",{type:"button",className:"ui red button",disabled:this.props.pristine||this.props.submitting,onClick:this.props.reset},"Clear Values")))}}]),n}(r.a.Component),v=Object(h.a)({form:"streamForm",destroyOnUnmount:!0})(f),b=n(41),g=n.n(b),k=n(69),O=n(59),E=n(90),y=n.n(E),j=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isMarkerClicked:!1,lat:20,lng:40},e.updateCurrentLocation=Object(k.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setState({lat:100*Math.random(),lng:100*Math.random()});case 1:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.locationUpdateTimer=setInterval((function(){return e.updateCurrentLocation()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.locationUpdateTimer)}},{key:"render",value:function(){var e=this,t=this.state,n=t.isMarkerClicked,a=t.lat,c=t.lng;return r.a.createElement("div",null,r.a.createElement(O.GoogleMap,{defaultZoom:3,defaultCenter:{lat:a,lng:c},center:{lat:a,lng:c}},r.a.createElement(O.Marker,{position:{lat:a,lng:c},onClick:function(){return e.setState({isMarkerClicked:!0})}}),n&&r.a.createElement(O.InfoWindow,{position:{lat:a,lng:c},onCloseClick:function(){return e.setState({isMarkerClicked:!1})}},r.a.createElement("div",null,"Device Name : ",a,r.a.createElement("br",null),"Sensor Name : ",c))))}}]),n}(r.a.Component),_=(Object(O.withScriptjs)(Object(O.withGoogleMap)(j)),n(29)),C=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getColor=function(e){return e?"#66ff66":"rgba(255,0,0,0.7)"},a.toggleStatus=function(e){a.props.toggleBayStatus(e)},a.bayRef=r.a.createRef(),a}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.id,a=t.height,c=t.width,o=t.active;return r.a.createElement("div",{className:"bay",style:{height:"".concat(a,"px"),width:"".concat(c,"px"),backgroundColor:this.getColor(o)},onClick:function(){return e.toggleStatus(n)}})}}]),n}(r.a.Component),S=Object(_.b)(null,{toggleBayStatus:function(e){console.log("CHANGE_LOT_STATUS",e);var t="http://34.71.252.163:5000/parking/bay/".concat(e,"/toggle");return function(){var e=Object(k.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post(t);case 2:a=e.sent,n({type:"CHANGE_LOT_STATUS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(C),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.deviceId;this.props.fetchParkingLots(e)}},{key:"render",value:function(){var e=this.props.lots;return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(i.b,{className:"home-link",to:"/"},"Home")),e.length>0?r.a.createElement("div",{className:"parking-lot-container"},e.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,width:e.width,height:e.height,active:e.active})}))):r.a.createElement("h1",null,"No data Found...!!!, please enter valid device ID"))}}]),n}(r.a.Component),T=Object(_.b)((function(e){return{lots:e.ParkingLotReducer.lots}}),{fetchParkingLots:function(e){var t="http://34.71.252.163:5000/parking/lot/".concat(e);return function(){var e=Object(k.a)(g.a.mark((function e(n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(t);case 2:a=e.sent,n({type:"FETCH_LOTS",payload:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(w);var I=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(v,e)}}),r.a.createElement(l.a,{path:"/ParkingLot/:deviceId",exact:!0,render:function(e){return r.a.createElement(T,e)}})))},N=n(6),L=n(428),x=n(70),M=n(128),A={lots:[]},D=function(e,t){var n=Object(M.a)(e),a=e.findIndex((function(e){return e.id===t.id}));return a>-1&&(n[a]=t),n},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOTS":return Object(x.a)(Object(x.a)({},e),{},{lots:t.payload});case"CHANGE_LOT_STATUS":return Object(x.a)(Object(x.a)({},e),{},{lots:Object(M.a)(D(e.lots,t.payload))});default:return e}},H=Object(N.c)({form:L.a,ParkingLotReducer:U}),P=n(200),G=Object(N.d)(H,Object(N.a)(P.a));o.a.render(r.a.createElement(_.a,{store:G},r.a.createElement(I,null)),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.dc7eca13.chunk.js.map