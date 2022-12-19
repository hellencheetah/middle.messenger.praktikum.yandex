export default
`
<div class="edit-profile">
     <div class="container container--auth">
        <div class="edit-profile-inner">
           <form class="edit-profile__form">
               {{#each form}}
                   {{{this}}}
                {{/each}}

                 {{{button}}}
           </form>
        </div>
    </div>
</div>
`
