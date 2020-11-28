import Vue from 'vue';
import Router from 'vue-router';
import HomeNav from './views/HomeNav.vue';
import Item from './components/Item.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'homenav',
			component: HomeNav
		},
		{
			path: '/home',
			name: 'home',
			component: HomeNav
		},
		{
			path: '/services',
			name: 'services',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/Services.vue')
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/contact',
			name: 'contact',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/Contact.vue')
		},
		{
			path: '/editorial',
			name: 'editorial',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/Editorial.vue')
		},
		{
			path: '/item/:id',
			component: Item
		}
	]
});
