const registrar = ({ nombre, edad }) => {
  if (edad < 18) {
    console.log("Es menor de edad");
    return false;
  }

  const query = `INSERT INTO usuarios VALUES (?, ?)`;
  
  try {
    db.query(query, [nombre, edad], (err, result) => {
      if (err) {
        console.error("Error al registrar usuario:", err);
      } else {
        console.log(`Registrando a ${nombre}`);
      }
    });
  } catch (error) {
    console.error("Excepción durante la ejecución de la consulta SQL:", error);
  }

  return true;
};

export default registrar;
