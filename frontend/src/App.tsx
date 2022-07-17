import Header from "./componentes/Header";
import VendasCard from "./componentes/VendasCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
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
