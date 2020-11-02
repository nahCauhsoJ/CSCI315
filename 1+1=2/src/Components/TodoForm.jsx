import React, { useState } from 'react';
import TodoTask from './TodoTask';



const TodoForm = (props) => {
	const [task, setTask] = useState("");
	const [tasks, listTasks] = useState([]);
	const [u, updateState] = useState([]);
	
	const validateTask = (e) => {
		e.preventDefault();
		
		if (task.length > 0) {
			createTask();
		}
	};
	
	const createTask = () => {
		setTask("");
		tasks.push(task);
		updateState([]);
	};

	return(
		<div>
			<form onSubmit={ validateTask }>
			
				<div className="formbox_1">
					<label>New Task: </label>
					<input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
					<input id="submit_btn" type="submit" value="Add" />
				</div>
				
				<br/>
							
			</form>
			
			<div>
				{tasks.map((e) => (<TodoTask txt={e}></TodoTask>))}
			</div>
		</div>		
		
	);
};



export default TodoForm;