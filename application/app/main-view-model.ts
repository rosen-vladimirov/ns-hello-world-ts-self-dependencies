import observable = require("data/observable");
import * as _ from "underscore";

export class HelloWorldModel extends observable.Observable {

    private _message: string;

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
        this.message = `Today is ${_.now()}. Underscore generates random number for you: ${_.random(0, 100)}.`;
    }

    public onTap() {
        this.updateMessage();
    }
}