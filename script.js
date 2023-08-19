// MERGE CONFLICT TEST

const createHtmlString = str => `${str}`;  

class CreateHtmlElement {
    constructor(htmlElement, text){
        this.htmlElement = htmlElement;
        this.text = text;
        return `<${htmlElement}>${text}</${element}>`;
    }
    createHtmlString(string) {
        return `${string}`;
    }
}

const newLiElement = new CreateHtmlElement("li","hello");