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