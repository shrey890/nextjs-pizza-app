import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard, { Product } from "./components/ProductCard";
const products: Product[] = [
	{
		id: "1",
		name: "italian Side",
		description: "italian Side Pizza",
		image: "string;",
		price: 99,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
	{
		id: "1",
		name: "string;",
		description: "string;",
		image: "string;",
		price: 1,
	},
];
export default function Home() {
	return (
		<>
			<section className="bg-white">
				<div className="container flex flex-col lg:flex-row lg:justify-between py-8 lg:py-24 ">
					<div className="lg:w-1/2 ">
						<h1 className="text-7xl font-black font-sans leading-2">
							Super Delicious Pizza in <br />
							<span className="text-primary">Only 45 Minutes</span>
						</h1>
						<p className="text-2xl mt-8 max-w-lg leading-snug">
							Enjoy a Free Meal if your Order Takes More Than 45 Minutes
						</p>
						<Button className="mt-8 text-lg rounded-full py-7 px-6 font-bold">
							Get your Pizza now
						</Button>
					</div>
					<div className="lg:w-1/2 flex justify-center">
						<Image
							alt="pizza-main"
							width={400}
							height={400}
							src={"/pizzaMain.svg"}
						/>
					</div>
				</div>
			</section>
			<section>
				<div className="container  py-12">
					<Tabs defaultValue="pizza">
						<TabsList>
							<TabsTrigger className="text-md" value="pizza">
								Pizza
							</TabsTrigger>
							<TabsTrigger className="text-md" value="beverages">
								Beverages
							</TabsTrigger>
						</TabsList>
						<TabsContent value="pizza">
							<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
								{products.map((product) => (
									<ProductCard product={product} key={product.id} />
								))}
							</div>
						</TabsContent>
						<TabsContent value="beverages">
							<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
								{products.map((product) => (
									<ProductCard product={product} key={product.id} />
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</section>
		</>
	);
}
