"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import ToppingList from "./ToppingList";
import { Disc3Icon } from "lucide-react";
import { useAppDispatch } from "@/lib/store/hooks";
import { add } from "@/lib/store/features/cart/cartSlice";

export type Product = {
	id: string;
	name: string;
	description: string;
	image: string;
	price: number;
};
type ProtoTypes = { product: Product };
const ProductCard = ({ product }: ProtoTypes) => {
	const dispatch = useAppDispatch();
	const handleAddToCart = (productId: string) => {
		console.log("Adding to cart ", productId);
		dispatch(add(productId));
	};
	return (
		<Card className="border-0 rounded-xl ">
			<CardHeader className="flex items-center justify-center">
				<Image alt="x" src={"/pizzaMain.svg"} width={150} height={150} />
			</CardHeader>
			<CardContent>
				<h2 className="text-2xl font-bold">{product.name}</h2>
				<p className="mt-2">{product.description}</p>
			</CardContent>
			<CardFooter className="flex justify-between items-center mt-4">
				<p>
					<span>From </span>
					<span className="font-bold">₹{product.price}</span>
				</p>
				<Button onClick={() => handleAddToCart(product.id)}>Add to cart</Button>
				{/* <Dialog>
					<DialogTrigger className="bg-orange-200 hover:bg-orange-300 text-primary px-6 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
						Choose
					</DialogTrigger>
					<DialogContent className="max-w-3xl">
						<div className="flex">
							<div className="w-1/3  items-center  justify-center bg-white rounded ">
								{" "}
								<Image
									alt="pizza-main"
									width={400}
									height={400}
									src={"/pizzaMain.svg"}
								/>
							</div>
							<div className="w-2/3">
								<h3 className="text-xl font-bold">{product.name}</h3>
								<p className="mt-1"> {product.description}</p>
								<h4 className="mt-6">Choose the size</h4>
								<RadioGroup
									defaultValue="small"
									className="grid grid-cols-3 gap-4 mt-2"
								>
									<div>
										<RadioGroupItem
											value="small"
											id="small"
											className="peer sr-only"
											aria-label="Small"
										/>
										<Label
											htmlFor="small"
											className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
										>
											Small
										</Label>
									</div>
									<div>
										<RadioGroupItem
											value="medium"
											id="medium"
											className="peer sr-only"
											aria-label="Small"
										/>
										<Label
											htmlFor="medium"
											className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
										>
											Medium
										</Label>
									</div>
									<div>
										<RadioGroupItem
											value="large"
											id="large"
											className="peer sr-only"
											aria-label="Small"
										/>
										<Label
											htmlFor="large"
											className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
										>
											Large
										</Label>
									</div>
									<div>
										<h4 className="mt-6">Choose the crust</h4>
										<div className="flex gap-4">
											<div>
												<RadioGroupItem
													value="thin"
													id="thin"
													className="peer sr-only"
													aria-label="Small"
												/>
												<Label
													htmlFor="thin"
													className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
												>
													Thin
												</Label>
											</div>
											<div>
												<RadioGroupItem
													value="thick"
													id="thick"
													className="peer sr-only"
													aria-label="Small"
												/>
												<Label
													htmlFor="thick"
													className="flex flex-col items-center justify-between rounded-md border-2 bg-white p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
												>
													Thick
												</Label>
											</div>
										</div>
									</div>
								</RadioGroup>
							</div>
						</div>
					</DialogContent>
				</Dialog> */}
			</CardFooter>
		</Card>
	);
};

export default ProductCard;
