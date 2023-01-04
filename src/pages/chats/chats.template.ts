export default `
    <div class="chats">
            <div class="container container--auth">
                <div class="chats-wrapper">
                    <div class="chats__sidebar chats-block">
                        <form id="add-chat-form" class="chats-search">
                            {{{inputNewChat}}}
                            
                            {{{buttonCreate}}}
                        </form>

                        <div class="chats__sidebar-wrapper">
                                <ul class="chats__sidebar-contacts">
                                <li>
                                    {{#each chats}}
                                        <div 
                                            class="contact" 
                                            data-id="{{id}}" 
                                            data-value="chat-item" 
                                            data-title="{{title}}"
                                        >
                                            <div class="contact__image"></div>
                                            <div class="contact__text">{{title}}</div>
                                            {{#if show-unread}}
                                                <span class="contact__unread"></span>
                                            {{/if}}
                                            </div>
                                    {{/each}}
                                </li>
                            </ul>
                        </div>
                        
                    </div>

                    <div class="chats__main chats-block">
                        <div class="active-contact">
                        {{#if currentChatId}}
                                <div class="active-contact__main">
                                    <div class="active-contact__image"></div> 
                                    <div class="active-contact__name">
                                        {{currentChatTitle}}
                                    </div>
                                </div>
                                
                                
                                <div class="active-contact__options">
                                    {{{buttonDeleteChatMenu}}}
                                    {{{buttonAddUserMenu}}}
                                    {{{buttonDeleteUserMenu}}}
                                    
                                    
                                     {{{addUserMenu}}}
                                     {{{deleteUserMenu}}}
                                </div>
                                {{/if}}
                            </div>

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
