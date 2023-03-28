import { sampleData } from "./data/index.js";

const data = [
	{
		category: "fruit",
		items: [
			{ name: "apple", weight: 0.5 },
			{ name: "banana", weight: 0.3 },
		],
	},
	{
		category: "vegetable",
		items: [
			{ name: "carrot", weight: 0.2 },
			{ name: "celery", weight: 0.1 },
		],
	},
];

const result = data.reduce((accumulator, currentValue) => {
	const category = currentValue.category;
	if (!accumulator[category]) {
		accumulator[category] = [];
	}
	const items = currentValue.items.reduce((acc, val) => {
		const key = val.name;
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(val.weight);
		return acc;
	}, {});
	accumulator[category].push(items);
	return accumulator;
}, {});

// console.log("====================================");
console.log("result", result);
// console.log("====================================");
