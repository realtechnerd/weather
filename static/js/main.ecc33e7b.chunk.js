(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i);a(15);var c=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("h1",null,"Weather App"),r.a.createElement("a",{href:"https://realtechnerd.github.io",target:"_blank",rel:"noopener noreferrer"},"By Nithil Krishnaraj"))},s=a(9),l=a(3),h=a(4),m=a(1),u=a(6),d=a(5),p=(a(2),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"Weather"},r.a.createElement("form",{onSubmit:this.props.test},r.a.createElement("input",{type:"text",name:"input",value:this.props.input,id:"weatherInput",onChange:this.props.onChange,placeholder:"Enter a city..",autoComplete:"off"}),r.a.createElement("br",null)))))}}]),a}(n.Component));var f=function(e){return r.a.createElement("div",{className:"smallContainer"},r.a.createElement("div",{className:"DispWeather",id:"disp"},r.a.createElement("img",{src:"http://openweathermap.org/img/wn/"+e.img+"@2x.png",alt:e.img,id:"img"}),r.a.createElement("h5",null,e.weather),r.a.createElement("h1",{id:"temp"},e.main,"\u02da"),r.a.createElement("h5",null,e.name,", ",e.country,".")),r.a.createElement("h1",{id:"ver"},"version 0.0.1 - more updates to come :)"))},v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={input:"London",main:{},sys:{},weather:"",name:"",alert:"",cond:!1,icon:"",dt:0},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e.getWeather=e.getWeather.bind(Object(m.a)(e)),e}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=ea6d4788c2440f3f6ddce67043b19eb3").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({main:t.main,sys:t.sys,name:t.name,weather:t.weather[0],dt:t.dt,cond:!0})})).catch(this.setState({alert:"Please enter a valid city."}))}},{key:"getWeather",value:function(e){var t=this;fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.state.input+"&units=imperial&appid=ea6d4788c2440f3f6ddce67043b19eb3").then((function(e){return e.json()})).then((function(e){console.log(e),t.setState({main:e.main,sys:e.sys,name:e.name,weather:e.weather[0],dt:e.dt,cond:!0})})).catch(this.setState({alert:"Please enter a valid city."})),e.preventDefault()}},{key:"render",value:function(){new Date(1e3*this.state.dt).toLocaleTimeString(),new Date(1e3*this.state.sys.sunrise).toUTCString();return r.a.createElement("div",{className:"MainContent"},r.a.createElement(p,{test:this.getWeather,input:this.state.input,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement(f,{img:this.state.weather.icon,main:Math.floor(this.state.main.temp),name:this.state.name,country:this.state.sys.country,weather:this.state.weather.main}))}}]),a}(r.a.Component);var g=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.ecc33e7b.chunk.js.map