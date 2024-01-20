console.log('Vue ok',Vue);

const { createApp } = Vue;
const app = createApp({
    data(){
        return {
            title: 'Hello World'
        }
    }
});
app.mount('#root');
