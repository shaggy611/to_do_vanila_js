export class Component {
    constructor(id, token) {
        this.$el = document.getElementById(id)
        this.token = token
        this.init()
    }

    init() {

    }

    hide() {
        this.$el.classList.add('hide-el')
    }

    show() {
        this.$el.classList.remove('hide-el')
    }

}