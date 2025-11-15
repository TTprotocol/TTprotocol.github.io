import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { X, Menu } from "lucide-react";

interface NavItem {
	href: string;
	label: string;
}

export default function Header() {
	// 헤더의 목록
	const navItems: NavItem[] = [
		{
			href: "#about",
			label: "소개",
		},
		{
			href: "#experience",
			label: "경력",
		},
		{
			href: "#projects",
			label: "프로젝트",
		},
		{
			href: "#skills",
			label: "스킬",
		},
		{
			href: "#contact",
			label: "연락처",
		},
	];

	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();

		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="flex sticky bg-background/95 backdrop-blur-md border-b z-50 shadow-lg"
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<motion.h1
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="text-xl font-semibold bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent"
					>
						포트폴리오
					</motion.h1>

					{/* Desotop Navigation */}
					<nav className="hidden md:flex space-x-8">
						{navItems.map((item, index) => {
							return (
								<motion.a
									key={item.href}
									href={item.href}
									onClick={(e) => handleSmoothScroll(e, item.href)}
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
									className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
								>
									{item.label}
									<motion.span
										className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 group-hover:w-full transition-all duration-300"
										whileHover={{ width: "100%" }}
									/>
								</motion.a>
							);
						})}
					</nav>

					{/* Mobile Menu Button */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
					>
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							<motion.div
								animate={{ rotate: isMenuOpen ? 180 : 0 }}
								transition={{ duration: 0.3 }}
							>
								{isMenuOpen ? <X size={20} /> : <Menu size={20} />}
							</motion.div>
						</Button>
					</motion.div>
				</div>

				{isMenuOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden mt-4 pb-4 border-t pt-4"
					>
						<motion.div
							initial="closed"
							animate="open"
							variants={{
								open: {
									transition: { staggerChildren: 0.1, delayChildren: 0.1 },
								},
								closed: {
									transition: { staggerChildren: 0.05, staggerDirection: -1 },
								},
							}}
							className="flex flex-col space-y-4"
						>
							{navItems.map((item) => (
								<motion.a
									key={item.href}
									href={item.href}
									variants={{
										open: { opacity: 1, x: 0 },
										closed: { opacity: 0, x: -20 },
									}}
									className="text-muted-foreground hover:text-foreground transition-colors"
									onClick={(e) => handleSmoothScroll(e, item.href)}
								>
									{item.label}
								</motion.a>
							))}
						</motion.div>
					</motion.nav>
				)}
			</div>
		</motion.header>
	);
}
