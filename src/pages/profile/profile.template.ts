export default `
 <div class="profile">
       <div class="container container--auth">
             <div class="profile-inner">
                   <div class="profile-wrapper">
            
                      {{{avatarBlock}}}
                       <a href="/edit-avatar" class="profile__options-link">Change avatar</a>

                        <div class="profile__data">
                            {{{profileData}}}
                        </div>

                        <div class="profile__options">
                            <a href="/edit-profile" class="profile__options-link">Change info</a>
                            <a href="/edit-password" class="profile__options-link">Change password</a>
                            {{{button}}}
                        </div>
                    </div>
                </div>
            </div>
 </div>
`
