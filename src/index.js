import { html, render } from '../node_modules/lit-html/lit-html.js';
let mixerTemplate = (foo) => html`<b>Hello, ${foo}!</b>`;

let MixerTemplateResult = mixerTemplate('bar');
render(MixerTemplateResult, document.body);

