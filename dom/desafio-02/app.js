new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibeAlerta() {
            alert('estou alertando')
        },
        atribui(event) {
            this.valor = event.target.value
        }
    }
})