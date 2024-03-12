import { prisma } from '@/api/db';
import Link from 'next/link';
import Todo from './components/Todo';

function getTodos()
{
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, completed: boolean)
{
  "use server"
  await prisma.todo.update( {where: {id}, data:{completed}})
}

export default async function Home() {
	const todos = await getTodos();

	return (
		<>
			<header>
				<h1>Todos</h1>
				<Link className='btn' href='/new'>
					Add
				</Link>
			</header>
			<main>
				<ul>
					{todos.map((todo) => (
            <Todo key={todo.id} {...todo} toggleTodo={toggleTodo}/>
					))}
				</ul>
			</main>
		</>
	);
}
