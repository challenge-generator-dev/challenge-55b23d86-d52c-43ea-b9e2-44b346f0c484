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