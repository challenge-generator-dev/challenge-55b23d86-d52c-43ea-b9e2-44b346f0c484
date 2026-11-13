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