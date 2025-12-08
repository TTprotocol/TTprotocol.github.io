import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TypewriterEffectProps {
	words: string[];
	className?: string;
}

export function TypewriterEffect({
	words,
	className = "",
}: TypewriterEffectProps) {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const currentWord = words[currentWordIndex];
		const shouldDelete = isDeleting && currentText.length === 0;
		const shouldComplete = !isDeleting && currentText === currentWord;

		if (shouldDelete) {
			setIsDeleting(false);
			setCurrentWordIndex((prev) => (prev + 1) % words.length);
			return;
		}

		if (shouldComplete) {
			setTimeout(() => setIsDeleting(true), 2000);
			return;
		}

		const timeout = setTimeout(
			() => {
				setCurrentText((prev) => {
					if (isDeleting) {
						return currentWord.substring(0, prev.length - 1);
					} else {
						return currentWord.substring(0, prev.length + 1);
					}
				});
			},
			isDeleting ? 50 : 150
		);

		return () => clearTimeout(timeout);
	}, [currentText, isDeleting, currentWordIndex, words]);

	return (
		<span className={className}>
			{currentText}
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{ duration: 0.8, repeat: Infinity }}
				className="inline-block w-0.5 h-6 bg-primary ml-1"
			/>
		</span>
	);
}
