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