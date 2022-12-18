export default
`
<div class="form-control {{inputModifier}}">
    <label>{{inputLabel}}</label>
    {{{Input
         inputType="{{inputType}}"
         inputName="{{inputName}}"
         inputPlaceholder="{{inputPlaceholder}}"
    }}}
     {{#if inputError}}
        <div>{{inputError}}</div>
     {{/if}}
</div>
`
