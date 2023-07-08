



class Jact{
    static createComponent(template, controller){
        return Jact._renderTemplate(template);
    }


    static _renderTemplate(template){
        const template = document.createElement('template');
        template.innerHTML = template;

        const style = template.content.querySelector('style');
        const html = template.content.querySelector('template');

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(html);

        return shadowRoot;
    }
}




class JactComponent{}




const componentTemplate = Jact.createComponent(`
    <template>
        <button>Click me button</button>

        <div>
            <h1></h1>
            <span></span>
        </div>
    </template>

    <style>
        button{
            background-color: red;
        }
    </style>
`)

console.log(componentTemplate)