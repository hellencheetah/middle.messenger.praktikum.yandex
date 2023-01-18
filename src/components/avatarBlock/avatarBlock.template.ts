export default `
<div class="avatar">
 {{#if currentUser.avatar}}
      <img src="https://ya-praktikum.tech/api/v2/resources{{ currentUser.avatar }}" class="avatar__img">   
     {{else}}
       <div class="avatar__empty"></div>
 {{/if}}
</div>
`
