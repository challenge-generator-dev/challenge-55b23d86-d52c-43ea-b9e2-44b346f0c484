# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/repositories/product.repository.ts` — La fase "Configuración inicial y creación de productos" se implementa aqui: este archivo es el ejercicio.
- `src/controllers/product.controller.ts` — La fase "Consulta y actualización de productos" se implementa aqui: este archivo es el ejercicio.
- `src/tests/product.controller.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.
- `src/tests/product.service.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.
- `src/tests/product.repository.spec.ts` — El topic pide TDD/pruebas: este archivo es el ejercicio.

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

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
CRUD de productos en DynamoDB expuesto por una API REST con Express y pruebas con Jest, Implementa operaciones CRUD de productos sobre DynamoDB con Express y las cubre con pruebas unitarias en Jest

### Misión / candidato
Persistir y consultar productos

### Reto
- Tema: CRUD de productos con Express y DynamoDB
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de CRUD de productos en DynamoDB con Express
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración inicial y creación de productos — objetivo: Implementar la funcionalidad básica para crear productos en DynamoDB a través de la API REST. — entregable (NO resolver): API REST que permite crear productos en DynamoDB con validaciones básicas.
- Fase 2: Consulta y actualización de productos — objetivo: Ampliar la API para permitir la consulta y actualización de productos existentes en DynamoDB. — entregable (NO resolver): API REST extendida para consultar y actualizar productos en DynamoDB, manejando casos borde.
- Fase 3: Eliminación de productos y pruebas unitarias — objetivo: Completar la funcionalidad CRUD con la eliminación de productos y asegurar la calidad del código con pruebas unitarias. — entregable (NO resolver): API REST completa con operaciones CRUD y pruebas unitarias que aseguran la calidad del código.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@types/jest": "30.0.0",
    "@types/supertest": "7.2.1",
    "@types/uuid": "11.0.0",
    "aws-sdk": "2.1693.0",
    "class-transformer": "0.5.1",
    "class-validator": "0.15.1",
    "dotenv": "18.0.10",
    "express": "4.22.3",
    "jest": "30.5.2",
    "ts-jest": "29.4.15",
    "ts-node": "10.9.2",
    "uuid": "14.0.3"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/config/dynamodb.ts ===
import { DynamoDB } from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const dynamoDBConfig: DynamoDB.ClientConfiguration = {
    region: process.env.AWS_REGION || 'us-east-1',
    endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'fakeAccessKeyId',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'fakeSecretAccessKey'
};

const dynamoDBClient = new DynamoDB.DocumentClient(dynamoDBConfig);

export const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE || 'Products';

export const initializeDynamoDB = async (): Promise<void> => {
    try {
        const dynamoDB = new DynamoDB(dynamoDBConfig);
        const tables = await dynamoDB.listTables().promise();

        if (!tables.TableNames?.includes(PRODUCTS_TABLE)) {
            await dynamoDB.createTable({
                TableName: PRODUCTS_TABLE,
                KeySchema: [
                    { AttributeName: 'id', KeyType: 'HASH' }
                ],
                AttributeDefinitions: [
                    { AttributeName: 'id', AttributeType: 'S' },
                    { AttributeName: 'name', AttributeType: 'S' }
                ],
                GlobalSecondaryIndexes: [
                    {
                        IndexName: 'NameIndex',
                        KeySchema: [
                            { AttributeName: 'name', KeyType: 'HASH' }
                        ],
                        Projection: {
                            ProjectionType: 'ALL'
                        },
                        ProvisionedThroughput: {
                            ReadCapacityUnits: 5,
                            WriteCapacityUnits: 5
                        }
                    }
                ],
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5
                }
            }).promise();
            console.log(`Tabla ${PRODUCTS_TABLE} creada exitosamente.`);
        }
    } catch (error) {
        console.error('Error inicializando DynamoDB:', error);
        throw new Error('No se pudo inicializar DynamoDB');
    }
};

export default dynamoDBClient;

// === ARCHIVO: src/models/product.ts ===
import { IsString, IsNumber, IsPositive, IsNotEmpty, validateOrReject } from 'class-validator';
import { plainToClass } from 'class-transformer';

export class Product {
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    stock: number;

    @IsString()
    @IsNotEmpty()
    category: string;

    createdAt: string;
    updatedAt: string;

    constructor(
        id: string,
        name: string,
        price: number,
        stock: number,
        category: string,
        createdAt?: string,
        updatedAt?: string
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.createdAt = createdAt || new Date().toISOString();
        this.updatedAt = updatedAt || new Date().toISOString();
    }

    static async validate(product: Product): Promise<void> {
        try {
            await validateOrReject(plainToClass(Product, product));
        } catch (errors) {
            throw new Error(`Validación fallida: ${errors}`);
        }
    }
}

export class ProductInput {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsNumber()
    @IsPositive()
    stock: number;

    @IsString()
    @IsNotEmpty()
    category: string;

    constructor(name: string, price: number, stock: number, category: string) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

// === ARCHIVO: src/repositories/product.repository.ts ===
import { Product, ProductInput } from '../models/product';
import dynamoDBClient, { PRODUCTS_TABLE } from '../config/dynamodb';

// TODO(reto): Implementar las operaciones CRUD con DynamoDB
export class ProductRepository {
    async create(productInput: ProductInput): Promise<Product> {
        throw new Error('Método no implementado');
    }

    async findById(id: string): Promise<Product | null> {
        throw new Error('Método no implementado');
    }

    async findAll(): Promise<Product[]> {
        throw new Error('Método no implementado');
    }

    async update(id: string, productInput: ProductInput): Promise<Product> {
        throw new Error('Método no implementado');
    }

    async delete(id: string): Promise<void> {
        throw new Error('Método no implementado');
    }

    async findByName(name: string): Promise<Product | null> {
        throw new Error('Método no implementado');
    }
}

// === ARCHIVO: src/services/product.service.ts ===
import { Product, ProductInput } from '../models/product';
import { ProductRepository } from '../repositories/product.repository';
import { v4 as uuidv4 } from 'uuid';

export class ProductService {
    private productRepository: ProductRepository;

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }

    async createProduct(productInput: ProductInput): Promise<Product> {
        const productForValidation: Product = {
            id: '',
            name: productInput.name,
            price: productInput.price,
            stock: productInput.stock,
            category: productInput.category,
            createdAt: '',
            updatedAt: ''
        };
        await Product.validate(productForValidation);

        const existingProduct = await this.productRepository.findByName(productInput.name);
        if (existingProduct) {
            throw new Error('Ya existe un producto con ese nombre');
        }

        const createdProduct = await this.productRepository.create(productInput);
        
        const now = new Date().toISOString();
        return {
            ...createdProduct,
            id: uuidv4(),
            createdAt: now,
            updatedAt: now
        };
    }

    async getProductById(id: string): Promise<Product> {
        const product = await this.productRepository.findById(id);
        if (!product) {
            throw new Error('Producto no encontrado');
        }
        return product;
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.productRepository.findAll();
    }

    async updateProduct(id: string, productInput: ProductInput): Promise<Product> {
        const productForValidation: Product = {
            id: id,
            name: productInput.name,
            price: productInput.price,
            stock: productInput.stock,
            category: productInput.category,
            createdAt: '',
            updatedAt: ''
        };
        await Product.validate(productForValidation);

        const existingProduct = await this.productRepository.findById(id);
        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }

        const productWithSameName = await this.productRepository.findByName(productInput.name);
        if (productWithSameName && productWithSameName.id !== id) {
            throw new Error('Ya existe otro producto con ese nombre');
        }

        const updatedProduct = await this.productRepository.update(id, productInput);
        
        return {
            ...updatedProduct,
            id: id,
            createdAt: existingProduct.createdAt,
            updatedAt: new Date().toISOString()
        };
    }

    async deleteProduct(id: string): Promise<void> {
        const existingProduct = await this.productRepository.findById(id);
        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }
        await this.productRepository.delete(id);
    }
}

// === ARCHIVO: src/controllers/product.controller.ts ===
import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';
import { ProductInput } from '../models/product';

// TODO(reto): Implementar los handlers para las rutas de productos
export class ProductController {
    private productService: ProductService;

    constructor(productService: ProductService) {
        this.productService = productService;
    }

    async createProduct(req: Request, res: Response): Promise<void> {
        throw new Error('Método no implementado');
    }

    async getProductById(req: Request, res: Response): Promise<void> {
        throw new Error('Método no implementado');
    }

    async getAllProducts(req: Request, res: Response): Promise<void> {
        throw new Error('Método no implementado');
    }

    async updateProduct(req: Request, res: Response): Promise<void> {
        throw new Error('Método no implementado');
    }

    async deleteProduct(req: Request, res: Response): Promise<void> {
        throw new Error('Método no implementado');
    }
}

// === ARCHIVO: src/main.ts ===
import { app } from './app';
import { startServer } from './server';

const PORT = process.env.PORT || 3000;

async function main(): Promise<void> {
    try {
        await startServer(app, PORT);
        console.log(`Servidor iniciado en el puerto ${PORT}`);
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
        process.exit(1);
    }
}

main();

// === ARCHIVO: src/app.ts ===
import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { ProductRepository } from './repositories/product.repository';

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

app.post('/products', async (req: Request, res: Response) => {
    await productController.createProduct(req, res);
});

app.get('/products', async (req: Request, res: Response) => {
    await productController.getAllProducts(req, res);
});

app.get('/products/:id', async (req: Request, res: Response) => {
    await productController.getProductById(req, res);
});

app.put('/products/:id', async (req: Request, res: Response) => {
    await productController.updateProduct(req, res);
});

app.delete('/products/:id', async (req: Request, res: Response) => {
    await productController.deleteProduct(req, res);
});

app.use((req: Request, res: Response) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        path: req.path,
        method: req.method
    });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error('Error no manejado:', err);
    res.status(500).json({
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// === ARCHIVO: src/server.ts ===
import { Application } from 'express';
import * as http from 'http';

export async function startServer(app: Application, port: string | number): Promise<http.Server> {
    return new Promise((resolve, reject) => {
        const server = http.createServer(app);

        server.on('error', (error: NodeJS.ErrnoException) => {
            if (error.code === 'EADDRINUSE') {
                console.error(`El puerto ${port} ya está en uso`);
                reject(new Error(`Puerto ${port} en uso`));
            } else if (error.code === 'EACCES') {
                console.error(`Permiso denegado para el puerto ${port}`);
                reject(new Error(`Permiso denegado para el puerto ${port}`));
            } else {
                console.error('Error al crear el servidor:', error);
                reject(error);
            }
        });

        server.on('listening', () => {
            const address = server.address();
            const actualPort = typeof address === 'object' && address ? address.port : port;
            console.log(`Servidor escuchando en http://localhost:${actualPort}`);
            console.log(`Entorno: ${process.env.NODE_ENV || 'development'}`);
            resolve(server);
        });

        server.listen(port, () => {
            console.log(`Iniciando servidor en puerto ${port}...`);
        });
    });
}

export function stopServer(server: http.Server): Promise<void> {
    return new Promise((resolve, reject) => {
        server.close((err) => {
            if (err) {
                console.error('Error al cerrar el servidor:', err);
                reject(err);
            } else {
                console.log('Servidor cerrado correctamente');
                resolve();
            }
        });
    });
}

// === ARCHIVO: src/tests/product.controller.spec.ts ===
import { Request, Response } from 'express';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { Product, ProductInput } from '../models/product';

describe('ProductController', () => {
    let productController: ProductController;
    let mockProductService: jest.Mocked<ProductService>;
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        mockProductService = {
            createProduct: jest.fn(),
            getProductById: jest.fn(),
            getAllProducts: jest.fn(),
            updateProduct: jest.fn(),
            deleteProduct: jest.fn(),
        } as unknown as jest.Mocked<ProductService>;

        productController = new ProductController(mockProductService);

        mockResponse = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
        };
    });

    describe('createProduct', () => {
        it('TODO(reto): debe crear un producto exitosamente', async () => {
            const productInput = new ProductInput('Test Product', 100, 10, 'Electronics');
            const expectedProduct = new Product('1', 'Test Product', 100, 10, 'Electronics');

            mockRequest = {
                body: productInput,
            };

            mockProductService.createProduct.mockResolvedValue(expectedProduct);

            await productController.createProduct(mockRequest as Request, mockResponse as Response);

            expect(mockProductService.createProduct).toHaveBeenCalledWith(productInput);
            expect(mockResponse.status).toHaveBeenCalledWith(201);
            expect(mockResponse.json).toHaveBeenCalledWith(expectedProduct);
        });

        it('TODO(reto): debe manejar error cuando la validación falla', async () => {
            mockRequest = {
                body: { name: '', price: -10, stock: 5, category: 'Test' },
            };

            mockProductService.createProduct.mockRejectedValue(new Error('Validación fallida'));

            await productController.createProduct(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(400);
        });
    });

    describe('getProductById', () => {
        it('TODO(reto): debe obtener un producto por id exitosamente', async () => {
            const productId = '1';
            const expectedProduct = new Product(productId, 'Test Product', 100, 10, 'Electronics');

            mockRequest = {
                params: { id: productId },
            };

            mockProductService.getProductById.mockResolvedValue(expectedProduct);

            await productController.getProductById(mockRequest as Request, mockResponse as Response);

            expect(mockProductService.getProductById).toHaveBeenCalledWith(productId);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(expectedProduct);
        });

        it('TODO(reto): debe manejar error cuando el producto no existe', async () => {
            const productId = '999';

            mockRequest = {
                params: { id: productId },
            };

            mockProductService.getProductById.mockRejectedValue(new Error('Producto no encontrado'));

            await productController.getProductById(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(404);
        });
    });

    describe('getAllProducts', () => {
        it('TODO(reto): debe obtener todos los productos exitosamente', async () => {
            const products = [
                new Product('1', 'Product 1', 100, 10, 'Electronics'),
                new Product('2', 'Product 2', 200, 20, 'Clothing'),
            ];

            mockProductService.getAllProducts.mockResolvedValue(products);

            await productController.getAllProducts(mockRequest as Request, mockResponse as Response);

            expect(mockProductService.getAllProducts).toHaveBeenCalled();
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(products);
        });
    });

    describe('updateProduct', () => {
        it('TODO(reto): debe actualizar un producto exitosamente', async () => {
            const productId = '1';
            const productInput = new ProductInput('Updated Product', 150, 15, 'Electronics');
            const expectedProduct = new Product(productId, 'Updated Product', 150, 15, 'Electronics');

            mockRequest = {
                params: { id: productId },
                body: productInput,
            };

            mockProductService.updateProduct.mockResolvedValue(expectedProduct);

            await productController.updateProduct(mockRequest as Request, mockResponse as Response);

            expect(mockProductService.updateProduct).toHaveBeenCalledWith(productId, productInput);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(expectedProduct);
        });
    });

    describe('deleteProduct', () => {
        it('TODO(reto): debe eliminar un producto exitosamente', async () => {
            const productId = '1';

            mockRequest = {
                params: { id: productId },
            };

            mockProductService.deleteProduct.mockResolvedValue();

            await productController.deleteProduct(mockRequest as Request, mockResponse as Response);

            expect(mockProductService.deleteProduct).toHaveBeenCalledWith(productId);
            expect(mockResponse.status).toHaveBeenCalledWith(204);
        });

        it('TODO(reto): debe manejar error cuando el producto no existe al eliminar', async () => {
            const productId = '999';

            mockRequest = {
                params: { id: productId },
            };

            mockProductService.deleteProduct.mockRejectedValue(new Error('Producto no encontrado'));

            await productController.deleteProduct(mockRequest as Request, mockResponse as Response);

            expect(mockResponse.status).toHaveBeenCalledWith(404);
        });
    });
});

// === ARCHIVO: src/tests/product.service.spec.ts ===
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/product.repository';
import { Product, ProductInput } from '../models/product';

describe('ProductService', () => {
    let productService: ProductService;
    let mockProductRepository: jest.Mocked<ProductRepository>;

    beforeEach(() => {
        mockProductRepository = {
            create: jest.fn(),
            findById: jest.fn(),
            findAll: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
            findByName: jest.fn(),
        } as unknown as jest.Mocked<ProductRepository>;

        productService = new ProductService(mockProductRepository);
    });

    describe('createProduct', () => {
        it('TODO(reto): debe crear un producto exitosamente', async () => {
            const productInput = new ProductInput('New Product', 100, 10, 'Electronics');
            const expectedProduct = new Product('1', 'New Product', 100, 10, 'Electronics');

            mockProductRepository.findByName.mockResolvedValue(null);
            mockProductRepository.create.mockResolvedValue(expectedProduct);

            const result = await productService.createProduct(productInput);

            expect(mockProductRepository.findByName).toHaveBeenCalledWith(productInput.name);
            expect(mockProductRepository.create).toHaveBeenCalledWith(productInput);
            expect(result).toEqual(expectedProduct);
        });

        it('TODO(reto): debe lanzar error si el producto ya existe', async () => {
            const productInput = new ProductInput('Existing Product', 100, 10, 'Electronics');
            const existingProduct = new Product('1', 'Existing Product', 100, 10, 'Electronics');

            mockProductRepository.findByName.mockResolvedValue(existingProduct);

            await expect(productService.createProduct(productInput)).rejects.toThrow('Producto ya existe');
            expect(mockProductRepository.create).not.toHaveBeenCalled();
        });

        it('TODO(reto): debe lanzar error si el precio es negativo', async () => {
            const productInput = new ProductInput('Invalid Product', -50, 10, 'Electronics');

            await expect(productService.createProduct(productInput)).rejects.toThrow();
        });
    });

    describe('getProductById', () => {
        it('TODO(reto): debe obtener un producto por id exitosamente', async () => {
            const productId = '1';
            const expectedProduct = new Product(productId, 'Test Product', 100, 10, 'Electronics');

            mockProductRepository.findById.mockResolvedValue(expectedProduct);

            const result = await productService.getProductById(productId);

            expect(mockProductRepository.findById).toHaveBeenCalledWith(productId);
            expect(result).toEqual(expectedProduct);
        });

        it('TODO(reto): debe lanzar error si el producto no existe', async () => {
            const productId = '999';

            mockProductRepository.findById.mockResolvedValue(null);

            await expect(productService.getProductById(productId)).rejects.toThrow('Producto no encontrado');
        });
    });

    describe('getAllProducts', () => {
        it('TODO(reto): debe obtener todos los productos exitosamente', async () => {
            const products = [
                new Product('1', 'Product 1', 100, 10, 'Electronics'),
                new Product('2', 'Product 2', 200, 20, 'Clothing'),
            ];

            mockProductRepository.findAll.mockResolvedValue(products);

            const result = await productService.getAllProducts();

            expect(mockProductRepository.findAll).toHaveBeenCalled();
            expect(result).toEqual(products);
        });

        it('TODO(reto): debe retornar array vacío si no hay productos', async () => {
            mockProductRepository.findAll.mockResolvedValue([]);

            const result = await productService.getAllProducts();

            expect(mockProductRepository.findAll).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
    });

    describe('updateProduct', () => {
        it('TODO(reto): debe actualizar un producto exitosamente', async () => {
            const productId = '1';
            const productInput = new ProductInput('Updated Product', 150, 15, 'Electronics');
            const expectedProduct = new Product(productId, 'Updated Product', 150, 15, 'Electronics');

            mockProductRepository.findById.mockResolvedValue(new Product(productId, 'Old Product', 100, 10, 'Electronics'));
            mockProductRepository.update.mockResolvedValue(expectedProduct);

            const result = await productService.updateProduct(productId, productInput);

            expect(mockProductRepository.findById).toHaveBeenCalledWith(productId);
            expect(mockProductRepository.update).toHaveBeenCalledWith(productId, productInput);
            expect(result).toEqual(expectedProduct);
        });

        it('TODO(reto): debe lanzar error si el producto no existe al actualizar', async () => {
            const productId = '999';
            const productInput = new ProductInput('Updated Product', 150, 15, 'Electronics');

            mockProductRepository.findById.mockResolvedValue(null);

            await expect(productService.updateProduct(productId, productInput)).rejects.toThrow('Producto no encontrado');
        });
    });

    describe('deleteProduct', () => {
        it('TODO(reto): debe eliminar un producto exitosamente', async () => {
            const productId = '1';

            mockProductRepository.findById.mockResolvedValue(new Product(productId, 'Test Product', 100, 10, 'Electronics'));
            mockProductRepository.delete.mockResolvedValue();

            await productService.deleteProduct(productId);

            expect(mockProductRepository.findById).toHaveBeenCalledWith(productId);
            expect(mockProductRepository.delete).toHaveBeenCalledWith(productId);
        });

        it('TODO(reto): debe lanzar error si el producto no existe al eliminar', async () => {
            const productId = '999';

            mockProductRepository.findById.mockResolvedValue(null);

            await expect(productService.deleteProduct(productId)).rejects.toThrow('Producto no encontrado');
            expect(mockProductRepository.delete).not.toHaveBeenCalled();
        });
    });
});

// === ARCHIVO: src/tests/product.repository.spec.ts ===
import { ProductRepository } from '../repositories/product.repository';
import { Product, ProductInput } from '../models/product';

describe('ProductRepository', () => {
    let productRepository: ProductRepository;

    beforeEach(() => {
        productRepository = new ProductRepository();
    });

    describe('create', () => {
        it('TODO(reto): debe crear un producto en DynamoDB', async () => {
            const productInput = new ProductInput('New Product', 100, 10, 'Electronics');
            const expectedProduct = new Product('uuid-1', 'New Product', 100, 10, 'Electronics');

            const result = await productRepository.create(productInput);

            expect(result).toBeInstanceOf(Product);
            expect(result.name).toBe(productInput.name);
            expect(result.price).toBe(productInput.price);
            expect(result.stock).toBe(productInput.stock);
            expect(result.category).toBe(productInput.category);
            expect(result.id).toBeDefined();
        });

        it('TODO(reto): debe generar un id único para cada producto', async () => {
            const productInput1 = new ProductInput('Product 1', 100, 10, 'Electronics');
            const productInput2 = new ProductInput('Product 2', 200, 20, 'Clothing');

            const result1 = await productRepository.create(productInput1);
            const result2 = await productRepository.create(productInput2);

            expect(result1.id).not.toBe(result2.id);
        });
    });

    describe('findById', () => {
        it('TODO(reto): debe encontrar un producto por id', async () => {
            const productInput = new ProductInput('Test Product', 100, 10, 'Electronics');
            const createdProduct = await productRepository.create(productInput);

            const result = await productRepository.findById(createdProduct.id);

            expect(result).not.toBeNull();
            expect(result?.id).toBe(createdProduct.id);
            expect(result?.name).toBe(productInput.name);
        });

        it('TODO(reto): debe retornar null si el producto no existe', async () => {
            const result = await productRepository.findById('non-existent-id');

            expect(result).toBeNull();
        });
    });

    describe('findAll', () => {
        it('TODO(reto): debe retornar todos los productos', async () => {
            await productRepository.create(new ProductInput('Product 1', 100, 10, 'Electronics'));
            await productRepository.create(new ProductInput('Product 2', 200, 20, 'Clothing'));

            const result = await productRepository.findAll();

            expect(result.length).toBeGreaterThanOrEqual(2);
        });

        it('TODO(reto): debe retornar array vacío si no hay productos', async () => {
            const result = await productRepository.findAll();

            expect(result).toEqual([]);
        });
    });

    describe('update', () => {
        it('TODO(reto): debe actualizar un producto existente', async () => {
            const productInput = new ProductInput('Original Product', 100, 10, 'Electronics');
            const createdProduct = await productRepository.create(productInput);

            const updateInput = new ProductInput('Updated Product', 150, 15, 'Electronics');
            const result = await productRepository.update(createdProduct.id, updateInput);

            expect(result.name).toBe(updateInput.name);
            expect(result.price).toBe(updateInput.price);
            expect(result.stock).toBe(updateInput.stock);
            expect(result.category).toBe(updateInput.category);
        });

        it('TODO(reto): debe lanzar error si el producto no existe', async () => {
            const updateInput = new ProductInput('Updated Product', 150, 15, 'Electronics');

            await expect(productRepository.update('non-existent-id', updateInput)).rejects.toThrow();
        });
    });

    describe('delete', () => {
        it('TODO(reto): debe eliminar un producto existente', async () => {
            const productInput = new ProductInput('Product to Delete', 100, 10, 'Electronics');
            const createdProduct = await productRepository.create(productInput);

            await productRepository.delete(createdProduct.id);

            const result = await productRepository.findById(createdProduct.id);
            expect(result).toBeNull();
        });

        it('TODO(reto): debe lanzar error si el producto no existe', async () => {
            await expect(productRepository.delete('non-existent-id')).rejects.toThrow();
        });
    });

    describe('findByName', () => {
        it('TODO(reto): debe encontrar un producto por nombre', async () => {
            const productInput = new ProductInput('Unique Product Name', 100, 10, 'Electronics');
            await productRepository.create(productInput);

            const result = await productRepository.findByName('Unique Product Name');

            expect(result).not.toBeNull();
            expect(result?.name).toBe('Unique Product Name');
        });

        it('TODO(reto): debe retornar null si el producto no existe', async () => {
            const result = await productRepository.findByName('Non Existent Product');

            expect(result).toBeNull();
        });
    });
});

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.

Tablas de DynamoDB: `Products` (pk `id`).


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "Products" "id"

```
