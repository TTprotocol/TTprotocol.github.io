import FallbackImage from "./FallbackImage";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import TypewriterEffect from "typewriter-effect";
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
		<section id="about" className="relativie overflow-hidden">
			<div></div>
			<div>
				<div>
					<div>
						<div>
							<h1>
								안녕하세요
								<br />
								<span>
									<TypewriterEffect
										options={{
											strings: roles,
											autoStart: true,
											loop: true,
										}}
									/>
								</span>
								박준영입니다.
								<motion.span
									animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
									transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
									className="inline-block ml-2"
								>
									👋
								</motion.span>
							</h1>
						</div>

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
						<div>
							<div>
								<Button>
									<a href="#contact">
										<Sparkles /> 연락하기
									</a>
								</Button>
							</div>
							<div>
								<Button>
									<a href="#porjects">프로젝트 보기</a>
								</Button>
							</div>
							<div>
								<Button>
									<Download />
									이력서 다운로드
								</Button>
							</div>
						</div>
						<div>
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
						</div>
					</div>
					<div>
						<div>
							<Card>
								<div>
									<FallbackImage />
								</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
