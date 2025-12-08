import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";

function App() {
	return (
		<div className="min-h-screen">
			<Header />
			<main>
				<IntroSection />
				<ExperienceSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
