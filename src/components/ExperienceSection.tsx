import { motion } from "motion/react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { CalendarDays, MapPin, TrendingUp } from "lucide-react";

interface Experience {
	title: string;
	company: string;
	location: string;
	period: string;
	description: string;
	skills: string[];
}

export default function ExperienceSection() {
	const experiences: Experience[] = [
		{
			title: "(주)블루넥스",
			company: "응용 소프트웨어 개발 및 공급업",
			location: "부산, 대한민국",
			period: "2022.09 - 2024.11",
			description: "웹 어플리케이션 개발",
			skills: ["React", "C#.net core", "PostgreSql", "MySql"],
		},
	];
	return (
		<section
			id="experience"
			className="py-16 bg-muted/50 relative overflow-hidden"
		>
			<div className="absolute inset-0 opacity-5">
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
					className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary rounded-full"
				/>
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
					className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-blue-600 rounded-full"
				/>
			</div>
			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-3xl text-center mb-12 bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">
					경력
					<motion.div
						initial={{ width: 0 }}
						whileInView={{ width: 100 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="h-1 bg-linear-to-r from-primary to-blue-600 mx-auto mt-2 rounded-full"
					/>
				</h2>
				<div className="space-y-6 max-w-4xl mx-auto">
					{experiences.map((exp, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.02, y: -5 }}
							transition={{ type: "spring", stiffness: 300, damping: 10 }}
						>
							<Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 bg-linear-to-br from-background to-muted/30">
								<CardHeader>
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
										<CardTitle className="text-xl flex items-center gap-2">
											<motion.div
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.5 }}
											>
												<TrendingUp size={20} className="text-primary" />
											</motion.div>
											{exp.title}
										</CardTitle>
										<div className="flex items-center text-muted-foreground text-sm bg-primary/10 px-3 py-1 rounded-full">
											<CalendarDays size={16} className="mr-1" />
											{exp.period}
										</div>
									</div>
									<div className="flex items-center text-muted-foreground">
										<span className="font-medium">{exp.company}</span>
										<span className="mx-2">•</span>
										<div className="flex items-center">
											<MapPin size={14} className="mr-1" />
											{exp.location}
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-4">
										{exp.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{exp.skills.map((skill, skillIndex) => (
											<div key={skillIndex}>
												<Badge
													variant="secondary"
													className="hover:bg-primary/20 transition-colors"
												>
													{skill}
												</Badge>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
