// MERGE CONFLICT TEST

class CreateHtmlElement {
    constructor(htmlElement, text){
        this.htmlElement = htmlElement;
        this.text = text;
        return `<${htmlElement}>${text}</${htmlElement}>`;
    }
    createHtmlMathEquation(num1, num2, operator) {
        return `${num1} ${operator} ${num2}`;
    }
}

const newLiElement = new CreateHtmlElement("li","hello"); 


