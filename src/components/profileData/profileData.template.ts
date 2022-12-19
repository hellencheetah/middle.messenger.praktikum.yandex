export default
`
<ul class="profile-data">
          {{#each data}}
              <li class="profile-data__item">
                     <div>{{field}}</div>
                     <div>{{value}}</div>
              </li>
          {{/each}}
</ul>
`
