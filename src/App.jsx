import CardGrid from "./components/CardGrid"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"

const App = () => {
    return (
        <div className="bg-gray-900">
        <Hero />
        <Slider />
        <CardGrid />
        </div>
    )
}

export default App