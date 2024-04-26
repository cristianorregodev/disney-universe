## Consideraciones técnicas

El proyecto utiliza `Node.js` con Express para el servidor backend, lo que es adecuado para manejar solicitudes HTTP de manera eficiente. Se emplea Sequelize como ORM para interactuar con la base de datos, lo cual facilita la manipulación de datos y reduce el riesgo de inyecciones SQL. Además, se utiliza CORS para manejar la seguridad de acceso entre diferentes dominios y Express.json para parsear el cuerpo de las solicitudes.

### Estructura del Software

- Modelos (Sequelize): Los modelos como `film` y `character` están bien definidos con asociaciones claras, lo que facilita la expansión y el mantenimiento del código. Cada modelo incluye métodos para definir asociaciones, lo que es una buena práctica para separar la lógica de negocio de la configuración del ORM.
- Servidor y Rutas: La clase Server encapsula la configuración del servidor y las rutas, lo que simplifica la gestión del servidor y hace el código más modular y fácil de entender.
- Middlewares: Se centralizan en un módulo, lo que facilita su mantenimiento y reutilización.

### Recursos API

1. Controladores de Personajes y Películas (character.controller.js y film.controller.js):
   - Métodos CRUD: Ambos controladores implementan métodos para listar, mostrar detalles, crear, editar y eliminar entidades. Estos métodos utilizan las funciones proporcionadas por Sequelize para interactuar con la base de datos.
   - Manejo de Asociaciones: Tanto en personajes como en películas, se manejan asociaciones con otras entidades. Por ejemplo, al editar un personaje, se actualizan las relaciones con las películas asociadas y viceversa.
   - Manejo de Errores: Se utiliza un bloque try-catch para manejar errores que puedan surgir durante las operaciones de base de datos, respondiendo con el estado adecuado y un mensaje de error.
2. Controlador de Autenticación (auth.controller.js):
   - Login y Registro: Implementa la lógica para el registro y el inicio de sesión de usuarios. Esto incluye la verificación de credenciales, encriptación de contraseñas y generación de tokens JWT.
   - Seguridad: Utiliza bcryptjs para la encriptación de contraseñas, lo que añade una capa de seguridad al proceso de autenticación.
   - Generación de JWT: Se genera un token JWT que se envía al cliente para su uso en la autenticación de solicitudes subsiguientes.

### Tareas

| Requerimiento                            | Tarea                                               | Estimación |
| ---------------------------------------- | --------------------------------------------------- | ---------- |
| Modelado de Base de Datos                | Diseño de la estructura de la base de datos         | 2 horas    |
|                                          | Creación de tablas y relaciones                     | 1 horas    |
|                                          | Implementación de modelos en Sequelize              | 2 horas    |
| Autenticación de Usuarios                | Configuración de autenticación con JWT              | 2 horas    |
|                                          | Implementación de endpoints para login y registro   | 2 horas    |
| Listado de Personajes                    | Diseño de la ruta /characters                       | 2 horas    |
|                                          | Implementación de la lógica para obtener personajes | 1 horas    |
| Operaciones CRUD de Personajes           | Diseño de las rutas CRUD para personajes            | 1 horas    |
|                                          | Implementación de la lógica CRUD para personajes    | 3 horas    |
| Detalle de Personaje                     | Diseño de la ruta /characters/:id                   | 2 horas    |
|                                          | Implementación de la lógica para mostrar detalles   | 1 horas    |
| Búsqueda de Personajes                   | Diseño de la ruta /characters?query                 | 1 horas    |
|                                          | Implementación de la lógica de búsqueda y filtrado  | 4 horas    |
| Listado de Películas                     | Diseño de la ruta /movies                           | 1 horas    |
|                                          | Implementación de la lógica para obtener películas  | 1 horas    |
| Operaciones CRUD de Películas/Series     | Diseño de las rutas CRUD para películas/series      | 3 horas    |
|                                          | Implementación de la lógica CRUD para películas     | 2 horas    |
| Detalle de Película/Serie con Personajes | Diseño de la ruta /movies/:id                       | 2 horas    |
|                                          | Implementación de la lógica para mostrar detalles   | 1 horas    |
| Búsqueda de Películas/Series             | Diseño de la ruta /movies?query                     | 1 horas    |
|                                          | Implementación de la lógica de búsqueda y filtrado  | 4 horas    |
| TOTAL                                    |                                                     | 40 horas   |

### Previw

https://disney-universe-ui.netlify.app/
