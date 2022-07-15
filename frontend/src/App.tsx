import Header from "./componentes/Header";
import VendasCard from "./componentes/VendasCard";

function App() {
  return (
    <>
      <Header/>
      <main>
        <section id="vendas">
          <div className="card-container">
            <VendasCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
