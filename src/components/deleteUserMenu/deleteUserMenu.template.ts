export default
`
<form id="delete-user-menu" class="delete-user-menu">
    <h3 class="delete-user-menu__title">Delete user</h3>
    
    {{{button}}}
   
     <div class="delete-user-menu__list">
        {{#each currentChatUsers}}
            <div 
                class="delete-user-menu__list-item" 
                data-value="chat-user" 
                data-id="{{id}}"
            >
                {{{login}}}
            </div>
        {{/each}}
     </div>
</form>
`
