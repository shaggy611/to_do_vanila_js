export function renderAuthForm() {
    return `
        <div class="login-form-wrapper" id="login-form">
        <span class="fas fa-times delete-login-form"></span>
        <form class="login-form">

            <label for="mail" class="form-label">Email:</label>
            <input type="email" class="form-control" id="mail" name="emailField">


            <label for="pass" class="form-label">Password:</label>
            <input type="password" class="form-control" id="pass" name="passwordField">

        <button type="submit" class="btn btn-primary submit-login js-submit-login">Log in</button>
        </form>
        </div>
    `
}