import { PrismaClient } from '@prisma/client';
//import { PrismaNeon } from '@prisma/adapter-neon';
//import { Pool, neonConfig } from '@neondatabase/serverless';
//import ws from 'ws';
// Required for Neon serverless to work in Node.js environments (like Next.js API routes)
//neonConfig.webSocketConstructor = ws;
//const pool = new Pool({ connectionString: `${process.env.DATABASE_URL}` });
//const adapter = new PrismaNeon(pool as any);

export const prisma = new PrismaClient();
