import { prisma } from '@/api/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function createTodo(data: FormData) {
	'use server';
	const title = data.get('title')?.valueOf();
    if (typeof title !== 'string' || title.length === 0)
    {
        throw new Error('Invalid Title');
    }

    await prisma.todo.create({ data: { description: title, completed: false } })
    redirect("/");
}

export default function NewPage() {
	return (
		<>
			<header>
				<h1>New</h1>
			</header>
			<main>
				<form action={createTodo}>
					<input type='text' name='title' className='newInput' />
					<div>
						<Link className='btn' href='..'>
							Cancel
						</Link>
						<button type='submit' className='btn'>
							Create
						</button>
					</div>
				</form>
			</main>
		</>
	);
}
