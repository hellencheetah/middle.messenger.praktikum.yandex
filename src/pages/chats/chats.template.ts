export default `
    <div class="chats">
            <div class="container container--auth">
                <div class="chats-wrapper">
                    <div class="chats__sidebar chats-block">
                        <div class="chats-search"></div>

                        <ul class="chats__sidebar-contacts">
                            <li>
                                {{#each contacts}}
                                    {{{this}}}
                                {{/each}}
                            </li>
                        </ul>
                    </div>

                    <div class="chats__main chats-block">
                        {{{activeContact}}}

                        <div class="chats__main-chat">
                            {{{messages}}}
                        </div>

                        <form id="message-form" class="chats__main-textarea">
                            {{{baseTextarea}}}

                            {{{button}}}
                        </form>
                    </div>
                </div>
            </div>
        </div>
`
