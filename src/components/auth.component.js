import { Component } from "../core/component"
import { LoginForm } from "../core/login-form"
import { Notes } from "./notes.component";
import { CreateComponent } from "./create.component";

export class Auth extends Component {
    constructor(id) {
        super(id)
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
    }
}

async function submitHandler(event) {
    event.preventDefault()

    let authData = this.form.value()
    const token = await this.form.authWithEmailAndPassword(authData)
    this.$el.remove()

    new Notes('notes', token)
    new CreateComponent('create')
}