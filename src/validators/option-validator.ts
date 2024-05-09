// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-red-900 border-red-900
// bg-green-900 border-green-900

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
	{ label: "Carbon Black", value: "black", tw: "zinc-900" },
	{
		label: "Cobalt Blue",
		value: "blue",
		tw: "blue-950",
	},
	{ label: "Dark Red", value: "red", tw: "red-900" },
	{ label: "Forest Green", value: "green", tw: "green-900" },
] as const;

export const MODELS = {
	name: "models",
	options: [
		{
			label: "iPhone X",
			value: "iphonex",
		},
		{
			label: "iPhone 11",
			value: "iphone11",
		},
		{
			label: "iPhone 12",
			value: "iphone12",
		},
		{
			label: "iPhone 13",
			value: "iphone13",
		},
		{
			label: "iPhone 14",
			value: "iphone14",
		},
		{
			label: "iPhone 15",
			value: "iphone15",
		},
	],
} as const;

export const MATERIALS = {
	name: "materials",
	options: [
		{
			label: "Silicone",
			value: "silicone",
			description: undefined,
			price: PRODUCT_PRICES.material.silicone,
		},
		{
			label: "Soft Polycarbonate",
			value: "polycarbonate",
			description: "Scratch-resistant coating",
			price: PRODUCT_PRICES.material.polycarbonate,
		},
	],
};

export const FINISH = {
	name: "finish",
	options: [
		{
			label: "Smooth",
			value: "smooth",
			description: undefined,
			price: PRODUCT_PRICES.finish.smooth,
		},
		{
			label: "Textured Finish",
			value: "textured",
			description: "Soft grippy texture",
			price: PRODUCT_PRICES.finish.textured,
		},
	],
};
