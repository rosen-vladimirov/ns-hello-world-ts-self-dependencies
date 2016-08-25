interface IAnimal {
	type: string;
	name: string;
}

interface IDog extends IAnimal {
	bark: () => void;
}

interface ICat extends IAnimal {
	meow: () => void;
}
