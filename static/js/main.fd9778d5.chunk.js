(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(44)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},32:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),i=a.n(c),o=(a(20),a(3)),s=a(4),l=a(6),m=a(5),u=a(7);a(21),a(22);var h=function(e){var t=e.handleSubmit;return r.a.createElement("input",{className:"submitBox",type:"submit",value:"submit",onClick:t})};a(23);var d=function(e){var t=e.location,a=e.handleChange;return r.a.createElement("input",{className:"textBox",type:"text",value:t,placeholder:"Search for location",onChange:a})},f=(a(24),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchWeather=function(){var e=a.state.city,t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=a1a331f3fdba57d905c6274db55f1dc4");fetch(t,{cache:"no-store"}).then(function(e){return e.json()}).then(function(e){a.props.setWeatherData(e)}).catch(function(e){"TypeError: Cannot read property '0' of undefined"==e?alert("Please ensure you have entered a valid city name and try again"):alert(e)})},a.handleSubmit=function(e){e.preventDefault(),a.fetchWeather()},a.handleChange=function(e){a.setState({city:e.target.value})},a.state={city:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"formContainer"},r.a.createElement("p",{className:"label"},"Find a forecast"),r.a.createElement(d,{className:"textAndSubmitComponents",city:this.state.city,handleChange:this.handleChange}),r.a.createElement(h,{className:"textAndSubmitComponents",handleSubmit:this.handleSubmit}))}}]),t}(r.a.Component)),p=a(12),v=(a(32),a(13)),b=a.n(v);var E=function(e){var t=e.icon,a=e.description,n=e.temperature,c=e.location;return r.a.createElement("div",{className:"cityNameContainer"},r.a.createElement("p",{className:"cityName"},r.a.createElement(p.a,{className:"weatherIcon",icon:t}),c),r.a.createElement("div",{className:"forecastContainer"},r.a.createElement(b.a,{format:"HH:mm:ss",ticking:!0,timezone:"UK"}),r.a.createElement("h4",null,a),r.a.createElement("h4",null,n)))},y=a(14),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).setWeatherData=function(e){a.setState({location:"Weather forecast for"+e.name,description:e.weather[0].description,temperature:e.main.temp})},a.state={location:"",description:"",temperature:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"weatherApp"},r.a.createElement(E,{icon:y.a,location:this.state.location,main:this.state.main,description:this.state.description,temperature:this.state.temperature}),r.a.createElement(f,{fetchWeather:this.fetchWeather,setWeatherData:this.setWeatherData}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,1,2]]]);
//# sourceMappingURL=main.fd9778d5.chunk.js.map