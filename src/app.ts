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