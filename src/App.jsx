import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //aqui agregamos la logica del componente

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
        tenetur deleniti, dolorum ab dolore modi id. Sed, culpa dolorum?
      </p>
    </section>
  );
}

export default App;
