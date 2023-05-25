import * as dotenv from 'dotenv';

import NextAuth, { getServerSession } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from '@/app/lib/mongodb';

const adminEmails = ['hnim1922@gmail.com',''];
export const authOptions = {


    secret: process.env.SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || ""
        }),
    ],
    pages: {
        signIn:"/signin"
    },
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        session: ({ session, token, user }) => {
            if (adminEmails.includes(session?.user?.email)) {
                return session;
            } else {
                return false;
            }
        },
    },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}

export async function isAdminRequest(req, res) {
    const session = await getServerSession(req, res, authOptions);
    if (!adminEmails.includes(session?.user?.email)) {
        res.status(401);
        res.end();
        throw 'not an admin';
    }
}
