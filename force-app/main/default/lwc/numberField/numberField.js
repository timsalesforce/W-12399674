import { LightningElement } from 'lwc';

export default class NumberField extends LightningElement {
    numVal;
    numberChangeHandler(event) {

        if(event.target.value) {
            this.numVal = new Number(event.target.value);
        }
        
    }
}