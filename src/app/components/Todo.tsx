"use client"

type TodoProps = {
	id: string;
	description: string;
    completed: boolean;
    toggleTodo: (id: string, completed: boolean) => void;
};



export default function Todo({ id, description, completed, toggleTodo }: TodoProps) {
	return (
		<li className='todoListItem'>
			<input
				id={id}
				type='checkbox'
				defaultChecked={completed}
				onChange={(e) => toggleTodo(id, e.target.checked)}
			/>
			<label htmlFor={id} className='todoLabel'>
				{description}
			</label>
		</li>
	);
}
