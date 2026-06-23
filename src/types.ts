export type Product = {
	id: number;
	name: string;
	image: string;
	category: string;
	types: { typeName: string }[];
	power_options: string[];
	selected_power: string;
	price: Record<string, number>;
	popularity: number;
	rating: number;
};

export type Category = {
	id: number;
	name: string;
};

export type CartType = {
	id: number;
	name: string;
	image: string;
	category: string;
	types: { typeName: string }[];
	power_options: string[];
	price: Record<string, number>;
	count: number;
	activePower: string;
};
