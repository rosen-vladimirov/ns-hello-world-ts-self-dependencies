export class Cat implements ICat {
	constructor(public name: string) {}

	public get type(): string {
		return "mamel";
	}

	public meow(): void {
		// Say meow.
	}
}