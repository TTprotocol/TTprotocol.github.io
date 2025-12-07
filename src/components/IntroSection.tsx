import FallbackImage from "./FallbackImage";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { TypewriterEffect } from "./TypewriterEffect";
import { motion } from "motion/react";
import { SiGithub, SiVelog } from "react-icons/si";
import { Mail, Download, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
	icon: LucideIcon;
	href: string;
	label: string;
	color: string;
}

export default function IntroSection() {
	const roles: string[] = ["개발자", "프론트엔드 개발자", "함께하는 해결자"];

	return (
		<section id="about" className="pt-24 relativie overflow-hidden">
			{/* <div className="absolute inset-0 overflow-hidden">
				<motion.div
					animate={{
						background: [
							"radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)",
							"radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
							"radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
						],
					}}
					transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
					className="absolute inset-0"
				/>
			</div> */}
			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="flex-1 text-center lg:text-left"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<h1 className="text-4xl lg:text-6xl mb-6">
								안녕하세요,
								<br />
								<span className="bg-linear-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
									<TypewriterEffect words={roles} />
								</span>{" "}
								박준영입니다.
								<motion.span
									animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
									transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
									className="inline-block ml-2"
								>
									👋
								</motion.span>
							</h1>
						</motion.div>
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4, duration: 0.8 }}
							className="text-lg text-muted-foreground mb-8 max-w-2xl"
						>
							사용자 중심의 웹 애플리케이션을 개발하는 프론트엔드 개발자입니다.
							React, TypeScript를 주로 사용하며, 함께 문제를 해결해 나가고자
							합니다.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									size="lg"
									className="bg-linear-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
									asChild
								>
									<a href="#contact">
										<Sparkles className="mr-2 h-4 w-4" /> 연락하기
									</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="border-2 hover:bg-primary/10"
									asChild
								>
									<a href="#porjects">프로젝트 보기</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button variant="ghost" size="lg" className="hover:bg-muted/50">
									<Download className="mr-2 h-4 w-4" />
									이력서 다운로드
								</Button>
							</motion.div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							className="flex gap-4 mt-8 justify-center lg:justify-start"
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
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
									whileHover={{ scale: 1.2, rotate: 5 }}
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
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
						className="shrink-0"
					>
						<motion.div
							whileHover={{ scale: 1.05, rotate: 2 }}
							transition={{ type: "spring", stiffness: 300, damping: 10 }}
						>
							<Card className="p-2 bg-linear-to-br from-background to-muted/30 shadow-2xl border-2">
								<motion.div
									whileHover={{ scale: 1.1 }}
									transition={{ type: "spring", stiffness: 300, damping: 10 }}
									className="relative overflow-hidden rounded-lg"
								>
									<FallbackImage
										src="https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc1OTA4Njk3NHww&ixlib=rb-4.1.0&q=80&w=1080"
										alt="프로필 사진"
										className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-lg transition-transform duration-300"
									/>
									<motion.div
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1 }}
										className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent rounded-lg"
									/>
								</motion.div>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
