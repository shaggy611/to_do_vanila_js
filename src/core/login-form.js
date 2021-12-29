export class LoginForm {
    constructor (form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {}

        Object.keys(this.controls).forEach(control => {
            value[control] = this.form[control].value
        })

        return value
    }

    async authWithEmailAndPassword(authData) {
        const apiKEY = 'AIzaSyCW5EK9DvgSDuhhU6Mv3qWbmrSUPR48i2g'
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKEY}`, {
            method: 'POST',
            body: JSON.stringify({
                email: authData.emailField, 
                password: authData.passwordField, 
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.cookie = `tokenAccess=${data.idToken}`
            document.cookie = `userId=${data.localId}`
            return data.idToken
        })
    }


    async signUpWithEmailAndPassword(authData) {
        const apiKEY = 'AIzaSyCW5EK9DvgSDuhhU6Mv3qWbmrSUPR48i2g'
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKEY}`, {
            method: 'POST',
            body: JSON.stringify({
                email: authData.emailField, 
                password: authData.passwordField, 
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.cookie = `tokenAccess=${data.idToken}`
            document.cookie = `userId=${data.localId}`
            return data.idToken
        })
    }
}