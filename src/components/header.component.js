import { renderAuthForm } from "../templates/auth.template"
import { Auth } from "./auth.component"
import { Component } from "../core/component"
import { CookieEdit } from "../services/cookie.service"
export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
        
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(event) {

    if(event.target.classList.contains('js-login-form-open') && event.target.dataset.loginned) {
        document.querySelector('#app').innerHTML = " "
        CookieEdit.deleteCookie('userId')
        CookieEdit.deleteCookie('tokenAccess')
        document.querySelector('.js-login-form-open').textContent = 'Log in'
    }
    else {
        document.querySelector('.js-login-backlit').classList.remove('hide-el')
        document.querySelector('#app').insertAdjacentHTML('afterbegin', renderAuthForm())
        new Auth('login-form')
    }
}