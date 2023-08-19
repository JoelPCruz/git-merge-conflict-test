// MERGE CONFLICT TEST

const createHtmlString = msg => `${msg}`; 
class CreateHtmlElement {
    constructor(htmlElement, text){
        this.htmlElement = htmlElement;
        this.text = text;
        return `<${htmlElement}>${text}</${htmlElement}>`;
    }
    createHtmlString(string) {
        return `${string}`;
    }
}

const newLiElement = new CreateHtmlElement("li","hello"); 