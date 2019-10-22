import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';


Vue.use(VueResource);
Vue.http.options.root = 'https://vuejs-http-481ac.firebaseio.com/';
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;
Vue.http.interceptors.push((request,next)=>{
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  next(response =>{
    response.json = ()=>{ return {messeges:response.body} }
  });
});

new Vue({
  el: '#app',
  render: h => h(App)
})
