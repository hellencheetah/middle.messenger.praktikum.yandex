export default `
 <div class="registration">
            <div class="container container--auth">
                <div class="registration-form">
                    <h1 class="registration-form__title">Sign up</h1>

                    <form id="registration-form" class="registration-form__items">
                        <div class="registration-form__items-wrapper">
                          {{#each form}}
                              {{{this}}}
                           {{/each}}
                        </div>

                        {{{button}}}
                    </form>

                    <div class="registration-form__items-text">
                        You have an account? You can <a href="/" class="link">sign in</a>
                    </div>
                </div
            </div>
        </div>
        {{#if server-error}}
            <div class="global-error">{{{server-error}}}</div>
        {{/if}}
`
