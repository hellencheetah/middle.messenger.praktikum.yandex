export default `
    <div class="chats">
            <div class="container">
                <div class="chats-wrapper">
                    <div class="chats__sidebar chats-block">
                        <div class="chats-search"></div>

                        <ul class="chats__sidebar-contacts">
                            <li>
                                {{{contacts}}}
                            </li>
                        </ul>
                    </div>

                    <div class="chats__main chats-block">
                        <div class="chats__main-head">
                            <div class="chats__main-head_image"></div>

                            <div class="chats__main-head_name">
                                {{{choosenContact.name}}}
                            </div>
                        </div>

                        <div class="chats__main-chat">
                            {{{messages}}}
                        </div>

                        <div class="chats__main-textarea">
                            <div class="form-textarea">
                                <textarea placeholder="Write a message" name="message"></textarea>
                            </div>

                            {{{button}}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
`
