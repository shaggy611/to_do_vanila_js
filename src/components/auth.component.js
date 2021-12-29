import { Component } from "../core/component"
import { LoginForm } from "../core/login-form"
import { Notes } from "./notes.component";
import { CreateComponent } from "./create.component";

export class Auth extends Component {
    constructor(id) {
        super(id)
        this.createAccount = false
    }

    init() {
        this.formBlock = this.$el.querySelector('.login-form')
        
        this.form = new LoginForm(this.formBlock, {emailField:'emailField', passwordField:'passwordField'})
        
        this.$el.addEventListener('click', buttonHandler.bind(this))
        this.formBlock.addEventListener('submit', submitHandler.bind(this))

    }
}

function buttonHandler(event) {
    if(event.target.classList.contains('delete-login-form')) {
        this.$el.remove()
        document.querySelector('.js-login-backlit').classList.add('hide-el')
    }

    if(event.target.classList.contains('js-create-account')) {
        this.createAccount = true
        this.form = new LoginForm(this.formBlock, {emailField:'emailField', passwordField:'passwordField'})

        event.target.remove()

        this.formBlock.querySelector('.js-submit-login').textContent = 'Create account'
    }
}

async function submitHandler(event) {
    event.preventDefault()

    if(!this.createAccount) {
        try {
            let authData = this.form.value()
            const auth = await this.form.authWithEmailAndPassword(authData)
            
            auth.then(
                this.$el.remove(),
                document.querySelector('.js-login-backlit').classList.add('hide-el'),
                document.querySelector('.js-not-logined').remove(),
                new Notes('notes'),
                new CreateComponent('create')
            )
        } 
        catch(error) {
    
            const html = `<p>Incorrect email or(and) password</p>`
            this.$el.insertAdjacentHTML('afterbegin', html)
        }
    } else {
        try {
            let signUpData = this.form.value()
            const signUp = await this.form.signUpWithEmailAndPassword(signUpData)
            
            signUp.then(
                this.$el.querySelector('.login-form').innerHTML = '',
                this.$el.querySelector('.login-form').insertAdjacentHTML('afterbegin', `<h1>Account successfully created!</h1>`)
            )
        } 
        catch(error) {
    
            const html = `<p>Error when trying to create account!</p>`
            this.$el.querySelector('.login-form').insertAdjacentHTML('afterbegin', html)
        }
    }
}