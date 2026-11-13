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