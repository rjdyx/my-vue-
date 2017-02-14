import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import index from 'components/index'
// import int from 'components/int'
// import slider-bar from 'components/slider-bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'Hello',
	    component: Hello,
    },
    {
    	path: '/index',
    	name: 'index',
    	component: index,
    	// children: [
		   //    	{
		   //    		path: 'int',
		   //    		name: 'int',
		   //    		component: int,
		   //    	},{
		   //    		path: 'slider-bar',
		   //    		name: 'slider-bar',
		   //    		component: sliderbar,
		   //    	}
	    //   	]

    }
  ]

})