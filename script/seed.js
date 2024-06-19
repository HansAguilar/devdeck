const { user, card } = require("../src/lib/placeholder-data");
const bcrypt = require('bcrypt');
const { db } = require('@vercel/postgres');

async function seedUsers(client) {
	try {
		const insertedUsers = await Promise.all(
			user.map(async (user) => {
				const hashedPassword = await bcrypt.hash(user.password, 10);

				return client.sql`
          INSERT INTO users (id, username, password, created_at, updated_at, cardId)
          VALUES (${user.id}, ${user.username}, ${hashedPassword}, ${new Date().toISOString()}, ${new Date().toISOString()}, 1);
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

async function seedCard(client) {
	try {
		const { id, username, title, bio, profile, bg, theme, tech_stack } = card[0];

		await client.sql`
					INSERT INTO card (id, username, title, bio, profile, bg, theme, tech_stack, total_likes, views, created_at, updated_at)
					VALUES (${id}, ${username}, ${title}, ${bio}, ${profile}, ${bg}, ${theme}, ${tech_stack}, 0, 0, ${new Date().toISOString()}, ${new Date().toISOString()})
        `;
		console.log(`Seeded card`);

		return 
	} catch (error) {
		console.error('Error seeding card:', error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();
	await seedUsers(client);
	await seedCard(client);
	await client.end();
}

main().catch((err) => {
	console.error(
		'An error occurred while attempting to seed the database:',
		err,
	);
});
