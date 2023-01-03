export default `
<ul class="profile-data">
              <li class="profile-data__item">
                     <div>Email</div>
                     <div>{{currentUser.email}}</div>
              </li>
              <li class="profile-data__item">
                     <div>Login</div>
                     <div>{{currentUser.login}}</div>
              </li>
              <li class="profile-data__item">
                     <div>Firstname</div>
                     <div>{{currentUser.first_name}}</div>
              </li>
              <li class="profile-data__item">
                     <div>Lastname</div>
                     <div>{{currentUser.last_name}}</div>
              </li>
                <li class="profile-data__item">
                     <div>Nickname</div>
                     <div>{{currentUser.display_name}}</div>
              </li>
              <li class="profile-data__item">
                     <div>Phone</div>
                     <div>{{currentUser.phone}}</div>
              </li>
</ul>
`
