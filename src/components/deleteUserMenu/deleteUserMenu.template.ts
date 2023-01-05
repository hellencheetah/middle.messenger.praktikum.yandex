export default
`
<form id="delete-user-menu" class="delete-user-menu">
    <h3 class="delete-user-menu__title">Delete user</h3>
    
    {{{button}}}
    
    {{#if userLoginToDelete}}
        <div class="delete-user-menu__options">
            <div class="delete-user-menu__options-text">Delete user {{{userLoginToDelete}}}?</div>
            
            {{{deleteUserButton}}}
        </div>
    {{/if}}
   
     <div class="delete-user-menu__list">
        {{#each currentChatUsers}}
            <div 
                class="delete-user-menu__list-item" 
                data-value="chat-user" 
                data-id="{{id}}"
                data-login="{{login}}"
            >
                {{{login}}}
            </div>
        {{/each}}
     </div>
</form>
`
