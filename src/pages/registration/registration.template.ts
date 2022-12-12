export default `
 <div class="registration">
            <div class="container container--auth">
                <div class="registration-form">
                    <h1 class="registration-form__title">Sign up</h1>

                    <form class="registration-form__items">
                        <div class="registration-form__items-wrapper">
                          {{{form}}}
                        </div>

                        {{{button}}}
                    </form>

                    <div class="registration-form__items-text">
                        You have an account? You can <a href="../login/login.hbs" class="link">sign in</a>
                    </div>
                </div
            </div>
        </div>
`
