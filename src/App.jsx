import { PokemonProvider } from "./context/pokemonContext";
import Router from "./shared/Router";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  return (
    <PokemonProvider>
      <GlobalStyles />
      <div className="app-container">
        <Router />
      </div>
    </PokemonProvider>
  );
}

export default App;
