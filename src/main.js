import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import { registerMicroApps, start } from 'qiankun';

registerMicroApps([{
        name: 'vue-app', // app name registered
        entry: '//localhost:3050',
        container: '#vue',
        activeRule: '/vue',
    },
    {
        name: 'react-app',
        entry: { scripts: ['//localhost:8001'] },
        container: '#react',
        activeRule: '/react',
    },
]);

start({
    prefetch: false
});
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')