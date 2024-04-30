import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import AddToCartButton from "./AddToCartButton";

const Header = () => {
	return (
		<header className="bg-white">
			<nav className="container py-5 flex justify-between  items-center">
				<div className="flex items-center space-x-4">
					<h1 className="text-primary">RESTAURANT</h1>
					<Select>
						<SelectTrigger className="w-[180px] focus:ring-0">
							<SelectValue placeholder="Select Restaurant" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Violet 5th</SelectItem>
							<SelectItem value="dark">Dark 12</SelectItem>
							<SelectItem value="system">System 7th</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center gap-4">
					<ul className="flex items-center font-medium space-x-4">
						<li>
							<Link className="hover:text-primary" href={"/"}>
								Menu
							</Link>
						</li>
						<li>
							<Link className="hover:text-primary" href={"/"}>
								Orders
							</Link>
						</li>
					</ul>
					<AddToCartButton />
					<div className="flex items-center  ml-12">
						<Phone />
						<span>+91 767 566 5656</span>
					</div>
					<Button size={"sm"}>Logout</Button>
				</div>
			</nav>
		</header>
	);
};

export default Header;
