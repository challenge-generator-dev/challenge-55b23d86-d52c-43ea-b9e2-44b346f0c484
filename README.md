# Implementación de CRUD de productos en DynamoDB con Express

El sistema de gestión de inventario requiere la implementación de operaciones CRUD para productos almacenados en DynamoDB, expuestas a través de una API REST construida con Express. Los productos tienen atributos como nombre, precio, stock y categoría. La API debe manejar errores comunes como productos no encontrados y validaciones de datos, como precios negativos y nombres duplicados.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | CRUD de productos con Express y DynamoDB |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial y creación de productos

**Objetivo:** Implementar la funcionalidad básica para crear productos en DynamoDB a través de la API REST.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Diseña la estructura de datos para los productos en DynamoDB.
- Implementa la ruta POST para crear un nuevo producto, asegurando que se validen los atributos necesarios.
- Maneja los errores de validación y proporciona respuestas adecuadas al cliente.

**Entregable:** API REST que permite crear productos en DynamoDB con validaciones básicas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar los datos en DynamoDB para facilitar las consultas futuras.
- Piensa en cómo manejarías los errores de validación para proporcionar una experiencia de usuario amigable.

</details>

### Fase 2: Consulta y actualización de productos

**Objetivo:** Ampliar la API para permitir la consulta y actualización de productos existentes en DynamoDB.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Implementa las rutas GET para consultar un producto por ID y para listar todos los productos.
- Agrega la ruta PUT para actualizar la información de un producto existente.
- Asegura que las consultas y actualizaciones manejen correctamente los casos borde, como productos no encontrados.

**Entregable:** API REST extendida para consultar y actualizar productos en DynamoDB, manejando casos borde.

<details>
<summary>Pistas de conocimiento</summary>

- Reflexiona sobre cómo optimizar las consultas en DynamoDB para reducir la latencia.
- Considera cómo podrías mejorar la seguridad de las actualizaciones de productos.

</details>

### Fase 3: Eliminación de productos y pruebas unitarias

**Objetivo:** Completar la funcionalidad CRUD con la eliminación de productos y asegurar la calidad del código con pruebas unitarias.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa la ruta DELETE para eliminar un producto por ID.
- Escribe pruebas unitarias para cubrir todas las operaciones CRUD, asegurando la calidad y fiabilidad del código.
- Asegura que las pruebas manejen correctamente los casos de éxito y falla.

**Entregable:** API REST completa con operaciones CRUD y pruebas unitarias que aseguran la calidad del código.

<details>
<summary>Pistas de conocimiento</summary>

- Reflexiona sobre cómo podrías mejorar la cobertura de las pruebas unitarias para asegurar la calidad del código.
- Considera cómo podrías integrar las pruebas en un proceso de CI/CD para automatizar la verificación de la calidad del código.

</details>

## Dimensiones Evaluadas

- **queEs**: En fase 1, ¿cómo definiste la estructura de datos para los productos en DynamoDB?
- **paraQueSirve**: En fase 2, ¿para qué optimizaste las consultas en DynamoDB?
- **comoSeUsa**: En fase 3, ¿cómo implementaste la ruta DELETE para eliminar un producto por ID?
- **erroresComunes**: En fase 1, ¿cómo manejaste los errores de validación en la API?
- **queDecisionesImplica**: En fase 3, ¿qué decisiones tomaste al escribir las pruebas unitarias para asegurar la calidad del código?

## Criterios de Evaluacion

- Implementación de la estructura de datos para productos en DynamoDB.
- Implementación de la ruta POST para crear productos con validaciones.
- Implementación de las rutas GET para consultar productos.
- Implementación de la ruta PUT para actualizar productos.
- Implementación de la ruta DELETE para eliminar productos.
- Escritura de pruebas unitarias para cubrir todas las operaciones CRUD.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | Express, DynamoDB, Jest |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `GET /products`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
