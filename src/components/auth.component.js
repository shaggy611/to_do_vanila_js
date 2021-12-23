import { Component } from "../core/component"
import { renderAuthForm } from "../templates/auth.template"
import { LoginForm } from "../core/login-form"


export class Auth extends Component {
    constructor(id) {
        super(id)
        this.loginComponent = renderAuthForm()
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this))
        
    }
}

function buttonHandler() {
    this.$el.closest('div').nextElementSibling.insertAdjacentHTML('afterbegin', this.loginComponent)
    let form = this.$el.closest('div').nextElementSibling.querySelector('.login-form')
    console.log(form)
    form.addEventListener('submit', submitHandler.bind(this))
    this.loginForm = new LoginForm(form, {emailField:'emailField', passwordField:'passwordField'})
}

function submitHandler(event) {
    event.preventDefault()

    console.log(this.loginForm.value())
}