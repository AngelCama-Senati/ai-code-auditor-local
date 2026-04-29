# ai-code-auditor-local
Pruebas de optimización y auditoría de código utilizando modelos LLM locales (Llama 3 8B / Qwen Code 7B) para garantizar la privacidad de los datos.
En este ejemplo, utilicé Qwen Code 7B en local para refactorizar una consulta SQL/función JS, mejorando la legibilidad y el rendimiento sin subir el código a la nube

# Auditoría de Código con IA Local (Llama 3 8B)

Este repositorio documenta mi flujo de trabajo utilizando modelos de lenguaje de gran escala (LLM) ejecutados de forma local para mejorar la calidad del software desarrollado en mis laboratorios de SENATI.

### Caso: Refactorización de una función de Registro
- **Código Base:** Función tradicional con concatenación de strings y manejo básico de variables.
- **Auditoría Realizada:** Se solicitó a **Llama 3 (8B)** refactorizar el código bajo estándares ES6+.
- **Mejoras Obtenidas:**
  1. **Seguridad:** Implementación de parámetros `@Nombre` para prevenir SQL Injection.
  2. **Modernización:** Uso de Arrow Functions y Destructuring de objetos.
  3. **Escalabilidad:** Exportación modular del componente.
  
**Nota:** El proceso se realizó 100% offline para garantizar la privacidad del código fuente.
