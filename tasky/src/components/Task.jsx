const Task = (props) => {
    
    return (
		<div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
			<p className="title">{props.title}</p>
			<p>Due: {props.deadline}</p>
			<p className="describe">{props.description}</p>
			<p className={props.level}>{props.level}</p>
			
			<button onClick={props.markDone} className="doneButton">Done</button>
			<button className='deleteButton' onClick={props.deleteTask}>Delete</button>
		</div>
    )
}

export default Task;