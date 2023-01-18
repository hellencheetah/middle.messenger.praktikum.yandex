export default
`
<div class="edit-avatar">
    <div class="container container--auth">
        <div class="edit-avatar-inner">
               <form id="edit-avatar-form" class="edit-avatar__form">
                    <h1>Edit avatar</h1>
                    <input id="avatar" type="file" name="avatar" accept="image/*">

                     {{{button}}}
               </form>
        </div>
    </div>
    {{#if server-error}}
             <div class="global-error">{{{server-error}}}</div>
    {{/if}}
</div>
`
