const TituloSecundario = (comision, anioActualProps) => {
  return (
    <>
      <h2>Titulo generado con props de la comision: {props.comision}</h2>;
      <p>Año Actual: {props.anioActualProps} </p>
    </>
  );
};

export default TituloSecundario;
