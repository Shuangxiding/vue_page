let Vue = require('vue');

import App from './components/app';

let app_vue = new Vue({
	el: '#main',
	components: {
		app: App
	}
});
