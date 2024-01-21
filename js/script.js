console.log('Vue ok',Vue);

const { createApp } = Vue;
const app = createApp({
    data(){
        return {
            title: 'Hello World',
            image: 'https://learn.microsoft.com/it-it/shows/hello-world/media/helloworld_383x215.png'
        }
    }
});
app.mount('#root');
