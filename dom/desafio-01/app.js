new Vue({
    el: '#desafio',
    data: {
        nome: 'Danilo Nunes',
        idade: 34,
        img: 'https://p2.trrsf.com/image/fget/cf/600/400/images.terra.com/2020/06/17/planetas-de-cada-dia-15272.jpg'
    },
    methods: {
        aleatorio(){
            return Math.random()*(1,0)
        }
    }
})