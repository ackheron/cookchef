import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
/**
 * Composant principal de l'application
 * @returns {JSX.Element} Le titre principal de l'application
 */
/**
 * Composant principal de l'application
 */
function App() {
    /**
     * Retourne la structure principale de l'application
     *
     * - Un conteneur d'une colonne avec des classes Bootstrap pour un layout vertical
     *   et une classe personnalisée `appContainer`
     * - Contient les composants <Header />, <Content />, et <Footer /> comme enfants
     */
    return (
        <div className="d-flex flex-column appContainer">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
