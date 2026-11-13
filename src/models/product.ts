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