export type Product = {
	id: number;
	name: string;
	image: string;
	category: string;
	// "types1": [{ "typeName": "на газу" }, { "typeName": "электро" }],
	types: { typeName: string }[];
	power_options: string[];
	selected_power: string;
	// "price1": {
	// 	"800 Вт": 499,
	// 	"1100 Вт": 549,
	// 	"1500 Вт": 599
	// },
	price: Record<string, number>;
	popularity: number;
	rating: number;
};

export type Category = {
	id: number;
	name: string;
};
