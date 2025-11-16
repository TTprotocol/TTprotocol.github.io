import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";

function App() {
	return (
		<div className="min-h-screen">
			<Header />
			<main className="h-screen">
				<IntroSection />
			</main>
			<Footer />
		</div>
	);
}

export default App;
