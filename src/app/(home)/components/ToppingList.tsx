import ToppingCard from "./ToppingCard";

const toppings = [
	{
		id: 1,
		name: "chocolatey",
		image: "/chocolate.jpg",
		price: 400,
		isAvailable: true,
	},
	{
		id: 2,
		name: "chocolatey",
		image: "/chocolate.jpg",
		price: 100,
		isAvailable: true,
	},
	{
		id: 3,
		name: "chocolatey",
		image: "/chocolate.jpg",
		price: 200,
		isAvailable: true,
	},
];
const ToppingList = () => {
	return (
		<section className="mt-6">
			<h3>Extra toppings</h3>
			<div className="grid lg:grid-cols-3 md:grid-cols-2 ">
				{toppings.map((topping) => (
					<ToppingCard />
				))}
			</div>
		</section>
	);
};

export default ToppingList;
