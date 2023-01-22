export default `
<ul class="messages">
    {{#each messages}}
          <li class="message {{#if this.my}}message--my{{/if}}">
            <div class="message-body {{#if my}}message-body--my{{/if}}">
                <div class="message-body__text">
                     {{content}}
                </div>
    
                <div class="message-body__time">
                    {{time}}
                </div>
              </div>
            </li>
    {{/each}}
</ul>
`
