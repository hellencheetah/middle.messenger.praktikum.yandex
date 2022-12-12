export default
`
<ul class="messages">
    {{#each messages}}
        <li class="messages__item {{#if this.my}} messages__item--my{{/if}}">
            {{message}}
        </li>
    {{/each}}
</ul>
`
