import Vue from 'vue';
import App from './App.vue';
import router from './router';
import locale from '@/data/locale-en';

Vue.config.productionTip = false;
Vue.prototype.$locale = locale;
new Vue({
	router,
	render: (h) => h(App)
}).$mount('#app');
