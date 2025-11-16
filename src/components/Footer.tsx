import { Heart, Coffee, Mail } from "lucide-react";
import { SiGithub, SiVelog } from "react-icons/si";

import type { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

interface SocialLink {
	icon: LucideIcon;
	href: string;
	label: string;
	color: string;
}

export default function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="bg-linear-to-t from-muted/50 to-background border-t relative overflow-hidden"
		>
			{/* Animated Background */}
			<motion.div
				animate={{
					background: [
						"radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
						"radial-gradient(circle at 80% 50%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
						"radial-gradient(circle at 50% 50%, rgba(120, 219, 255, 0.1) 0%, transparent 50%)",
					],
				}}
				transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
				className="absolute inset-0"
			/>

			<div className="container mx-auto px-4 py-8 relative z-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
						className="text-center md:text-left"
					>
						<div className="text-muted-foreground flex items-center gap-2">
							<p>함께 해결책을 찾아가고 싶은 개발자, 박준영.</p>
							<span className="text-xs">Made with</span>
							<motion.div
								animate={{ scale: [1, 1.2, 1] }}
								transition={{ duration: 1, repeat: Infinity }}
							>
								<Heart className="w-4 h-4 text-red-500 fill-current" />
							</motion.div>
							<span className="text-xs">and</span>
							<motion.div
								animate={{ rotate: [0, 15, -15, 0] }}
								transition={{ duration: 2, repeat: Infinity }}
							>
								<Coffee className="w-4 h-4 text-amber-600" />
							</motion.div>
						</div>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3 }}
						className="flex items-center gap-4"
					>
						{(
							[
								{
									icon: Mail,
									href: "mailto:wnsdud7941@gmail.com",
									label: "email",
									color: "hover:text-red-500",
								},
								{
									icon: SiGithub,
									href: "#m",
									label: "Github",
									color: "hover:text-gray-700",
								},
								{
									icon: SiVelog,
									href: "#",
									label: "velog",
									color: "hover:text-red-500",
								},
							] as SocialLink[]
						).map((social, index) => (
							<motion.div
								key={social.label}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{
									opacity: 1,
									y: 0,
									transition: { delay: 0.4 + index * 0.1 },
								}}
								whileHover={{ scale: 1.2, rotate: 10 }}
								whileTap={{ scale: 0.9 }}
							>
								<Button
									variant="ghost"
									className={`transition-all duration-300 hover:bg=primary/10 ${social.color}`}
									asChild
									size="icon"
								/>
								<a href={social.href} aria-label={social.label}>
									<social.icon size={18} />
								</a>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.footer>
	);
}
