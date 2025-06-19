import { PrismaClient } from '@prisma/client';
// console.log("Using DB:", process.env.DATABASE_URL); 
export const client = new PrismaClient();
