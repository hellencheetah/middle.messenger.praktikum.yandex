export default
`
<div class="edit-avatar">
    <div class="container container--auth">
        <div class="edit-avatar-inner">
               <form id="edit-avatar-form" class="edit-avatar__form">
                    <h1 class="edit-avatar__title">Edit avatar</h1>
                    <div class="edit-avatar__input">
                        <input id="avatar" type="file" name="avatar" accept="image/*">
                    </div>
                    

                     {{{button}}}
                     <div id="avatar-error" class="edit-avatar__error"></div>
               </form>
        </div>
    </div>
    {{#if server-error}}
             <div class="global-error">{{{server-error}}}</div>
    {{/if}}
</div>
`
