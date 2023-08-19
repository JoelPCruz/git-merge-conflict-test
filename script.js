// MERGE CONFLICT TEST

const createHtmlString = str => `${str}`;  

class CreateHtmlElement {
    constructor(element, string){
        this.element = element;
        this.string = string;
        return `<${element}>${string}</${element}>`;
    }
    createHtmlString(str) {
        return `${str}`;
    }
}

const newLiElement = new CreateHtmlElement("li","hello");