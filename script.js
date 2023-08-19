// MERGE CONFLICT TEST

const createHtmlString = msg => `${msg}`;  
class CreateHtmlElement {
    constructor(htmlElement1, text1){
        this.htmlElement1 = htmlElement1;
        this.text1 = text1;
        return `<${htmlElement1}>${text1}</${htmlElement1}>`;
    }
    createHtmlString(string1) {
        return `${string1}`;
    }
}

const newLiElement = new CreateHtmlElement("li","hello");