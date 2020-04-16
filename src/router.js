import Vue from 'vue';
import Router from 'vue-router';
import HomeNav from './views/HomeNav.vue';
import Item from './components/Item.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeNav
		},
		{
			path: '/shop',
			name: 'shop',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/Shop.vue')
		},
		{
			path: '/item/:id',
			component: Item
		}
	]
});
