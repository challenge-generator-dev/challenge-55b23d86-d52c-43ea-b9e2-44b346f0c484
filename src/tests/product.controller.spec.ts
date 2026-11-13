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