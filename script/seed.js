const { user } = require("../src/lib/placeholder-data");
const bcrypt = require('bcrypt');
const { db } = require('@vercel/postgres');

async function seedUsers(client) {
    try {
        const insertedUsers = await Promise.all(
            user.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);

                return client.sql`
          INSERT INTO users (id, username, password, created_at, updated_at)
          VALUES (${user.id}, ${user.username}, ${hashedPassword}, ${new Date().toJSON()}, ${new Date().toJSON()});
        `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();
    await seedUsers(client);
    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
