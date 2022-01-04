import { Notes } from "./components/notes.component";
import { CreateComponent } from "./components/create.component";
import { HeaderComponent } from "./components/header.component";
import { CookieEdit } from "./services/cookie.service";

new HeaderComponent('header')


    const cookieToken = CookieEdit.getCookie('tokenAccess')
    if(cookieToken && cookieToken !== undefined) {
        document.querySelector('.js-login-form-open').textContent = 'Sign out'
        document.querySelector('.js-login-form-open').dataset.loginned = true
        new CreateComponent('create')
        new Notes('notes')
    } else if(!cookieToken) {
        const htmlError = '<p class="js-not-logined not-logined">Please log in for manage your notes!</p>'
        document.querySelector('#app').insertAdjacentHTML('afterbegin', htmlError)
    }
