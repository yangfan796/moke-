import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Search,NoticeBar,Slider,RadioGroup, Radio,CountDown,Icon} from 'vant';
import vcolorpicker from 'vcolorpicker'

Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(vcolorpicker)
Vue.use(Search);
Vue.use(NoticeBar);
Vue.use(Slider);
Vue.use(CountDown);
Vue.use(Icon);
Vue.use(ElementUI)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
