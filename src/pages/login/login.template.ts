export default `
    <div class="login">
            <div class="container container--auth">
                <div class="login-form">
                    <h1 class="login-form__title">Sign in</h1>

                    <form id="login-form" class="login-form__items" >
                        <div class="login-form__items-wrapper">
                           {{#each form}}
                              {{{this}}}
                           {{/each}}
                        </div>
                        {{{button}}}
                    </form>

                    <div class="login-form__items-text">
                        Not registered? You can <a href="/sign-up" class="link">sign up</a>
                    </div>
                </div
            </div>
        </div>
`
