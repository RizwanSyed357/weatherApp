(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(44)},20:function(e,t,a){},21:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(20),a(3)),s=a(4),l=a(6),m=a(5),u=a(7),h=(a(21),a(12)),d=a(13),f=a(14),p=a.n(f);a(40);var v=function(e){var t=e.handleSubmit;return r.a.createElement("input",{className:"submitBox",type:"submit",value:"submit",onClick:t})};a(41);var b=function(e){var t=e.location,a=e.handleChange;return r.a.createElement("input",{className:"textBox",type:"text",value:t,placeholder:"Search for location",onChange:a})},E=(a(42),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchWeather=function(){var e=a.state.city,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=a1a331f3fdba57d905c6274db55f1dc4");fetch(t,{cache:"no-store"}).then(function(e){return e.json()}).then(function(e){a.props.setWeatherData(e)}).catch(function(e){"TypeError: Cannot read property '0' of undefined"==e?alert("Please ensure you have entered a valid city name and try again"):alert(e)})},a.handleSubmit=function(e){e.preventDefault(),a.fetchWeather()},a.handleChange=function(e){a.setState({city:e.target.value})},a.state={city:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"formContainer"},r.a.createElement(b,{className:"textAndSubmitComponents",city:this.state.city,handleChange:this.handleChange}),r.a.createElement(v,{className:"textAndSubmitComponents",handleSubmit:this.handleSubmit}),r.a.createElement("div",{className:"iconClockContainer"},r.a.createElement("span",{className:"label"},r.a.createElement(h.a,{className:"weatherIcon",icon:d.a}),"Find a forecast"),r.a.createElement(p.a,{className:"time",format:"HH:mm:ss",ticking:!0,timezone:"UK"})))}}]),t}(r.a.Component));a(43);var y=function(e){var t=e.description,a=e.temperature,n=e.location;return r.a.createElement("div",{className:"cityNameContainer"},r.a.createElement("p",{className:"cityName"},n),r.a.createElement("div",{className:"forecastContainer"},r.a.createElement("h4",null,t),r.a.createElement("h4",null,a)))},w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setWeatherData=function(e){a.setState({location:"Weather forecast for "+e.name,description:e.weather[0].description,temperature:e.main.temp})},a.state={location:"",description:"",temperature:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"weatherApp"},r.a.createElement(E,{fetchWeather:this.fetchWeather,setWeatherData:this.setWeatherData}),r.a.createElement(y,{location:this.state.location,main:this.state.main,description:this.state.description,temperature:this.state.temperature}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.9ba8ed52.chunk.js.map