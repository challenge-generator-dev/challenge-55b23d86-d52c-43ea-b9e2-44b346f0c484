import { DynamoDB } from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const dynamoDBConfig: DynamoDB.ClientConfiguration = {
    region: process.env.AWS_REGION || 'us-east-1',
    endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'fakeAccessKeyId',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'fakeSecretAccessKey'
};

const dynamoDBClient = new DynamoDB.DocumentClient(dynamoDBConfig);

export const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE || 'Products';

export const initializeDynamoDB = async (): Promise<void> => {
    try {
        const dynamoDB = new DynamoDB(dynamoDBConfig);
        const tables = await dynamoDB.listTables().promise();

        if (!tables.TableNames?.includes(PRODUCTS_TABLE)) {
            await dynamoDB.createTable({
                TableName: PRODUCTS_TABLE,
                KeySchema: [
                    { AttributeName: 'id', KeyType: 'HASH' }
                ],
                AttributeDefinitions: [
                    { AttributeName: 'id', AttributeType: 'S' },
                    { AttributeName: 'name', AttributeType: 'S' }
                ],
                GlobalSecondaryIndexes: [
                    {
                        IndexName: 'NameIndex',
                        KeySchema: [
                            { AttributeName: 'name', KeyType: 'HASH' }
                        ],
                        Projection: {
                            ProjectionType: 'ALL'
                        },
                        ProvisionedThroughput: {
                            ReadCapacityUnits: 5,
                            WriteCapacityUnits: 5
                        }
                    }
                ],
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5
                }
            }).promise();
            console.log(`Tabla ${PRODUCTS_TABLE} creada exitosamente.`);
        }
    } catch (error) {
        console.error('Error inicializando DynamoDB:', error);
        throw new Error('No se pudo inicializar DynamoDB');
    }
};

export default dynamoDBClient;