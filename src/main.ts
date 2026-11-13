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