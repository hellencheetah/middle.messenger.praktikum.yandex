export default
`
<div class="edit-password">
    <div class="container container--auth">
        <div class="edit-password-inner">
               <form id="edit=password-form" class="edit-password__form">
                   {{#each form}}
                            {{{this}}}
                    {{/each}}

                     {{{button}}}
               </form>
        </div>
    </div>
</div>
`
