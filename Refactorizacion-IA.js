const registrar = ({ nombre, edad }) => {
  if (edad >= 18) {
    console.log(`Registrando a ${nombre}`);
    const usuario = { nombre, edad };
    const query = `INSERT INTO usuarios VALUES (@Nombre, @Edad)`;
    return query;
  } else {
    console.log("Es menor de edad");
    return false;
  }
};

export default registrar;
