import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const AddTaskForm = (props) => {

  return (
  /*
    <div>
      <form onSubmit={props.submit}>
        <label>
            Task title:
            <input type="text" name="title" required onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Due date:
            <input type="date" name="deadline" required onChange={(event) => props.change(event)}/>
        </label>
        <br />
        <label>
            Details:
            <input type="text" name="description" onChange={(event) => props.change(event)}/>
        </label>
		<br/>
		<label>
			Priority:
			
		</label>
		
        <input type="submit" value="Submit" />
        </form>
    </div>
	*/
	
	<Box
	  component="form"
	  sx={{
		'& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
	  }}
	  onSubmit={props.submit}
	>
		<div>
		  <TextField
			required
			id="outlined-required"
			name="title"
			label="Task Title"
			slotProps={{ inputLabel: { shrink: true } }}
			onChange={(event) => props.change(event)}
		  />
		</div>
		<div>
		  <TextField
			required
			name="deadline"
			label="Deadline"
			slotProps={{ inputLabel: { shrink: true } }}
			type="date"
			onChange={(event) => props.change(event)}
		  />
		</div>
		<div>
		  <TextField
			name="description"
			id="outlined-multiline-static"
			label="Task Details"
			slotProps={{ inputLabel: { shrink: true } }}
			multiline
			rows={4}
			onChange={(event) => props.change(event)}
		  />
		</div>
		
		<div>
			<InputLabel id="priority-label">Priority</InputLabel>
			<Select
			labelId="priority-label"
			name="priority"
			label="Priority"
			onChange={(event) => props.change(event)}
			>
				<MenuItem value="Low">Low</MenuItem>
				<MenuItem value="Medium">Medium</MenuItem>
				<MenuItem value="High">High</MenuItem>
			</Select>
		</div>

		<div>
		  <Button
			type="submit"
			variant="contained"
			color="primary"
			sx={{
			  m: 1,
			  p: 1,
			  width: '95%'
			}}
		  >
			Add Task
		  </Button>
		</div>
	</Box>
  )
};

export default AddTaskForm;
