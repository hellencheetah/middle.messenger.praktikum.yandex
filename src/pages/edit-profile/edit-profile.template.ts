export default `
<div class="edit-profile">
     <div class="container container--auth">
        <div class="edit-profile-inner">
      
        <form id="edit-profile-form" class="edit-profile__form">
            <h1 class="edit-profile__form-title">Edit profile</h1>
            <div class="edit-profile__form-wrapper">
                {{#each form}}
                   {{{this}}}
                {{/each}}
             
            </div>
            

           {{{button}}}
        </form>
        </div>
    </div>
</div>
{{#if server-error}}
      <div class="global-error">{{{server-error}}}</div>
{{/if}}
`
