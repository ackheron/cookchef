import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
/**
 * Composant principal de l'application
 * @returns {JSX.Element} Le titre principal de l'application
 */
function App() {
    return (
        <div className="d-flex flex-column appContainer">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
