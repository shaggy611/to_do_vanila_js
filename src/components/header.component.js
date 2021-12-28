import { renderAuthForm } from "../templates/auth.template"
import { Auth } from "./auth.component"
import { Component } from "../core/component"
export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
        
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(event) {
    if(event.target.classList.contains('js-login-form-open')) {
        document.querySelector('#app').insertAdjacentHTML('afterbegin', renderAuthForm())
        new Auth('login-form')
    }
}