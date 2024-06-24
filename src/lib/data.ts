import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
import { Cards, User } from './definitions';

export async function fetchUsers() {
    noStore();
    try {
        const data = await sql<User>`SELECT * FROM users`;
        const users = data.rows.map(user => user);
        return users;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the users.');
    }
}

export async function fetchCards() {
    noStore();
    try {
        const data = await sql<Cards>`SELECT * FROM cards`;
        const cards = data.rows.map(card => card);
        return cards;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch the cards.');
    }
}