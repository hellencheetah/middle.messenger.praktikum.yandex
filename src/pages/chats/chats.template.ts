export default `
    <div class="chats">
            <div class="container container--auth">
                <div class="chats-wrapper">
                    <div class="chats__sidebar chats-block">
                      <div class="chats__sidebar-head">
                           <a href="/settings" class="link">Settings</a>
                            <form id="add-chat-form" class="chats-search">
                                {{{inputNewChat}}}
                                
                                {{{buttonCreate}}}
                            </form>
                        </div>
                       
                        <div class="chats__sidebar-wrapper">
                                <ul class="chats__sidebar-contacts">
                                <li>
                                    {{#each chats}}
                                        <div 
                                            class="contact" 
                                            data-id="{{id}}" 
                                            data-value="chat-item" 
                                            data-title="{{title}}"
                                            data-avatar="{{avatar}}"
                                        >
                                            <div class="contact__image">
                                                {{#if avatar}}
                                                      <img src="https://ya-praktikum.tech/api/v2/resources{{ avatar }}" class="contact__image-item">   
                                                     {{else}}
                                                       <div class="contact__image-empty"></div>
                                                 {{/if}}
                                            </div>
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
                        <div class="active-contact {{#if currentChat}}active-contact--bordered{{/if}}">
                        {{#if currentChat}}
                                <div class="active-contact__main">
                                    <div class="active-contact__image">
                                        {{#if currentChat.avatar}}
                                            <img src="https://ya-praktikum.tech/api/v2/resources{{ currentChat.avatar }}" class="active-contact__image-item">   
                                            {{else}}
                                             <div class="active-contact__image-empty"></div>
                                         {{/if}}
                                    </div> 
                                    <div class="active-contact__name">
                                        {{currentChat.title}}
                                    </div>
                                </div>
                                
                                
                                <div class="active-contact__options">
                                    {{{buttonAddImage}}}
                                    {{{buttonDeleteChatMenu}}}
                                    {{{buttonAddUserMenu}}}
                                    {{{buttonDeleteUserMenu}}}
                                    
                                    {{{addChatImage}}}
                                     {{{addUserMenu}}}
                                     {{{deleteUserMenu}}}
                                </div>
                                {{/if}}
                            </div>

                    
                            <div class="chats__main-chat">
                                  {{{messages}}}
                            </div>
                      
                       
                        {{#if currentChat}} 
                        <form id="message-form" class="chats__main-textarea">
                            {{{baseTextarea}}}
                            
                            {{{button}}}
                        </form>
                        {{else}}
                            <div class="chats__main-empty">Выберите чат из списка или создайте новый</div>
                        {{/if}}
                    </div>
                </div>
            </div>
            {{#if server-error}}
             <div class="global-error">{{{server-error}}}</div>
            {{/if}}
        </div>
`
