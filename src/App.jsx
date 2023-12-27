import "bootstrap/dist/css/bootstrap.min.css";
import TituloSecundario from "./components/TituloSecundario";
import Contador from "./components/Contador";

function App() {
  //aqui agregamos la logica del componente
const anioActual = new Date();


  return (
    //qui puedo agregar un poquito mas de logica
    <section className="container my-4">
      <h1 className="text-center display-3">
        {/* agrego boostrap con npm i bootstrap@5.3.2 */}
        {/* aqui agrego todo el maquetado del componente */}
        Contador
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nisi
        tenetur deleniti,<br /> dolorum ab dolore modi id. Sed, culpa dolorum?
      </p>
      <TituloSecundario comision="c75i" anioActualProps={anioActual.getFullYear()} ></TituloSecundario>
      {/* <TituloSecundario comision="c75i-el props"/> */}
      <Contador></Contador>
    </section>
  );
}

export default App;
