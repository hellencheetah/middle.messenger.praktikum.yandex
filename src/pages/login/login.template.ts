export default `
    <div class="login">
            <div class="container container--auth">
                <div class="login-form">
                    <h1 class="login-form__title">Sign in</h1>

                    <form id="login-form" class="login-form__items" >
                        <div class="login-form__items-wrapper">
                           {{{BaseInput
                                inputType="text"
                                inputName="login"
                                inputPlaceholder="Email"
                           }}}
                           
                           {{{BaseInput
                                inputType="text"
                                inputName="password"
                                inputPlaceholder="Password"
                           }}}
                        </div>
                        
                       {{{Button 
                            btnText="Sign in"
                            btnType="submit"
                        }}}
                    </form>

                    <div class="login-form__items-text">
                        Not registered? You can <a href="../registration/registration.hbs" class="link">sign up</a>
                    </div>
                </div
            </div>
        </div>
`
