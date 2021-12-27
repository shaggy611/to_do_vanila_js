import { Component } from "../core/component"
import { renderAuthForm } from "../templates/auth.template"
import { LoginForm } from "../core/login-form"
import { Notes } from "./notes.component";
import { CreateComponent } from "./create.component";

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
    this.$el.closest('div').nextElementSibling.querySelector('.login-form-wrapper').addEventListener('click', function(event) {
        if(event.target.classList.contains('delete-login-form')) {
            this.$el.closest('div').nextElementSibling.querySelector('.login-form-wrapper').remove()
        }
    }.bind(this))
    form.addEventListener('submit', submitHandler.bind(this))
    this.loginForm = new LoginForm(form, {emailField:'emailField', passwordField:'passwordField'})
}

async function submitHandler(event) {
    event.preventDefault()

    let authData = this.loginForm.value()
    const token = await this.loginForm.authWithEmailAndPassword(authData)
    this.$el.closest('div').nextElementSibling.querySelector('.login-form-wrapper').remove()

    new Notes('notes', token)
    new CreateComponent('create')
}