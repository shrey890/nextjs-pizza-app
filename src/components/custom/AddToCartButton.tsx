"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddToCartButton = () => {
	const items = useAppSelector((state) => state.cart.items);
	return (
		<div className="relative">
			<Link className="hover:text-primary" href={"/"}>
				<ShoppingCartIcon />
			</Link>
			<span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-primary font-bold text-white ">
				{items.length}
			</span>
		</div>
	);
};

export default AddToCartButton;
