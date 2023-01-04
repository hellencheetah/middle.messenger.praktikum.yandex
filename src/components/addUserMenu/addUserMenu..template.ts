export default
`
<form id="add-user-menu" class="add-user-menu">
    <h3 class="add-user-menu__title">Add user</h3>
     {{{input}}}
     
     {{{button}}}
     
     <div class="add-user-menu__list">
        {{#each usersFound}}
            <div 
                class="add-user-menu__list-item" 
                data-value="found-user" 
                data-id="{{id}}"
            >
                {{{login}}}
            </div>
        {{/each}}
     </div>
</form>
`
