export default `
 <div class="profile">
       <div class="container container--auth">
             <div class="profile-inner">
                   <div class="profile-wrapper">
                       <div class="profile__avatar"></div>

                        <div class="profile__data">
                            <ul class="profile__data-list">
                                {{#each data}}
                                    <li class="profile__data-list_item">
                                        <div>{{field}}</div>
                                        <div>{{value}}</div>
                                    </li>
                                {{/each}}
                            </ul>
                        </div>

                        <div class="profile__options">
                            <a href="../edit-profile/edit-profile.hbs" class="profile__options-link">Change info</a>
                            <a href="../edit-password/edit-password.hbs" class="profile__options-link">Change password</a>
                            {{{button }}}
                        </div>
                    </div>
                </div>
            </div>
 </div>
`
