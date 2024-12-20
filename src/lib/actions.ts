'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
const bcrypt = require('bcrypt');
import { User } from "./definitions";
import { fetchCards, fetchUsers } from './data';
import { signIn } from '../../auth';
import { AuthError } from 'next-auth';


export async function authenticate(prevState: string | undefined, formData: FormData) {
	try {
		await signIn('credentials', formData);
	} catch (error) {
		if (error instanceof AuthError) {
			console.log("ERROR----------------",error)
			switch (error.type) {
				case 'CredentialsSignin':
					return 'Invalid credentials.';
				default:
					return 'Something went wrong.';
			}
		}
		throw error;
	}
}

export type State = {
	errors?: {
		username?: string[] | null;
		password?: string[] | null;
	};
	message?: string | null;
};

//^ FORM NG SIGN IN AT SIGN UP
const ChallengeFormSchema = z.object({
	username: z.string().min(1, 'Username is required'),
	password: z.string().min(1, 'Password is required'),
});

export async function createUser(prevState: State, formData: FormData) {
	//~ Validate form using Zod
	const validatedFields = ChallengeFormSchema.safeParse({
		username: formData.get('username'),
		password: formData.get('password'),
	});

	//~ If form validation fails, return errors early. Otherwise, continue.
	if (!validatedFields.success) {
		console.log(validatedFields.error)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Create Invoice.',
		};
	}

	//~ Prepare data for insertion into the database
	const { username, password } = validatedFields.data;
	const date = new Date().toISOString().split('T')[0];

	//~ Hash the password
	const hashedPassword = await bcrypt.hash(password, 10);

	//~ Insert data into the database
	try {
		await sql`
      INSERT INTO users (username, password, created_at, updated_at)
      VALUES (${username}, ${hashedPassword}, ${date}, ${date});
      `;
	}
	catch (error) {
		//~ If a database error occurs, return a more specific error.
		return {
			message: 'Database Error: Failed to Create User.',
		};
	}

	//~ Revalidate the cache for the invoices page and redirect the user.
	revalidatePath('/signup');
	redirect('/login');
}

export async function loginUser(prevState: State, formData: FormData) {
	//~ Validate form using Zod
	const validatedFields = ChallengeFormSchema.safeParse({
		username: formData.get('username'),
		password: formData.get('password'),
	});

	//~ If form validation fails, return errors early. Otherwise, continue.
	if (!validatedFields.success) {
		console.log(validatedFields.error)
		return {
			errors: validatedFields.error.flatten().fieldErrors,
			message: 'Missing Fields. Failed to Create Invoice.',
		};
	}

	//~ Destruct the form
	const { username, password } = validatedFields.data;

	//~ Check creds of user in database
	try {
		const getUsername = await sql<User>`
			SELECT * FROM users
			WHERE username = ${username};
    `;

		//~ Decrypt the password
		const isValidCheckpoint = await bcrypt.compare(password, getUsername.rows[0].password);

		if (isValidCheckpoint) {
			fetchUsers();
			fetchCards();
			return {
				user: getUsername.rows[0],
			}
		}
	}
	catch (error) {
		//~ If a database error occurs, return a more specific error.
		console.log(error)
		return {
			message: 'Database Error: Failed to Create User.',
		};
	}

	//~ Revalidate the cache for the invoices page and redirect the user.
	revalidatePath('/signup');
	redirect('/login');
}