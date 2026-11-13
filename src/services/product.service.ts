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