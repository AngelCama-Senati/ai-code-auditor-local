# ai-code-auditor-local
Pruebas de optimización y auditoría de código utilizando modelos LLM locales (Llama 3 8B / Qwen Code 7B) para garantizar la privacidad de los datos.
En este ejemplo, utilicé Qwen Code 7B en local para refactorizar una consulta SQL/función JS, mejorando la legibilidad y el rendimiento sin subir el código a la nube

Auditoría de Código con IA Local (Qwen Coder 7B)
Este repositorio documenta mi flujo de trabajo utilizando modelos de lenguaje de gran escala (LLM) ejecutados de forma local para mejorar la calidad del software desarrollado en mis laboratorios de SENATI.

Caso: Refactorización de una función de Registro

Código Base: Función tradicional con concatenación de strings y manejo básico de variables.

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

Mejoras Obtenidas:

Seguridad: Implementación de parámetros ? para prevenir SQL Injection.

El código original utilizaba placeholders incorrectos (@Nombre, @Edad) que no proporcionaban protección contra SQL Injection. La versión refactorizada utiliza placeholders seguros (?) que evitan esta vulnerabilidad.
Modernización: Uso de Arrow Functions y Destructuring de objetos.

La versión refactorizada sigue utilizando Arrow Functions y Destructuring de objetos, lo que mantiene un estilo moderno y limpio.
Escalabilidad: Exportación modular del componente.

El código original ya exportaba la función correctamente (export default registrar;). La versión refactorizada mantiene esta práctica para facilitar el uso en otros módulos.
Manejo de Errores: Implementación de manejo de errores.

La versión refactorizada utiliza un bloque try-catch para capturar y manejar cualquier excepción que pueda surgir durante la ejecución del código, lo que mejora la robustez del mismo.
Nota: El proceso se realizó 100% offline para garantizar la privacidad del código fuente.
