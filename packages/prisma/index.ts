import { PrismaClient } from './generated/prisma/index.js'
console.log("Using DB:", process.env.DATABASE_URL); 
export const client = new PrismaClient() 
