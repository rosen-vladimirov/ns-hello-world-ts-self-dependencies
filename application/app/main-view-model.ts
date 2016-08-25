import observable = require("data/observable");
import { ObservableArray } from "data/observable-array";
import * as _ from "underscore";
import { Cat } from "./animals/cat";

export class HelloWorldModel extends observable.Observable {
    private _message: string;
    private randomNumber: number;

    // Declare array that will hold all of our animals.
    private animals = new ObservableArray();

    get message(): string {
        return this._message;
    }
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange("message", value)
        }
    }

    constructor() {
        super();

        // Initialize default values.
        this.updateMessage();
    }

    private updateMessage() {
        this.randomNumber = _.random(0, 100)
        this.message = `Current EPOCH time is ${_.now()}. Underscore generates random number for you: ${this.randomNumber}.`;
        this.animals.push(this.generateKitten());
    }

    private generateKitten(): ICat {
        return new Cat(`Kitten ${this.randomNumber}`);
    }

    public onTap() {
        this.updateMessage();
    }
}