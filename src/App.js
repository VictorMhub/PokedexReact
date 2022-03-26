import PokemonOptions from './components/PokemonOptions'
import Header from './components/Header';
import Card from './components/Card';
import '../src/style.css'
import '../src/reset.css'
function App() {
  return  (
    <>
    <Header />
    <section className='pokemon-section'>
    <Card />
    <PokemonOptions />
    </section>
    </>
  );
}

export default App;
