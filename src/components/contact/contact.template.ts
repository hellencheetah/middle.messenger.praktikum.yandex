export default
`
<div class="contact">
    <div class="contact__image"></div>

    <div class="contact__text">{{name}}</div>
    {{#if show-unread}}
        <span class="contact__unread"></span>
    {{/if}}
</div>
`
