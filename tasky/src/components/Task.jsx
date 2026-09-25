import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const Task = (props) => {
    
    return (
		<Grid key={props.id} size={{ xs: 8, sm:6, md: 4 }}>
			<Card
				sx={{
				  backgroundColor: props.done ? 'darkgreen' : 'lightgreen',
				  padding: '20px',
				}}
			>
				<CardHeader
				  title={props.title}
				  sx={{
					backgroundColor: 'white',
					borderRadius: '3px',
					padding: '20px',
					textAlign: 'center'
				  }}
				/>
				<CardContent >
					<Box
						sx={{
						  display: 'flex',
						  justifyContent: 'center',
						  alignItems: 'baseline',
						  mb: 2,
						  padding: '20px',
						  color: props.done ? 'white' : 'black'
						}}
					>
						<Typography
						  component="p"
						  variant="subtitle2"
						  color="text.primary"
						>
						  Due: {props.deadline}
						</Typography>
					</Box>
						<Typography
						component="p"
						variant="subtitle1"
						align="center"
						sx={{ fontStyle: 'italic' ,
						  color: props.done ? 'white' : 'black'}}
						>
						{props.description}
					    </Typography>
						
						<Typography className={props.level}
						sx={{
						  backgroundColor: props.level=='Low' ? 'darkgreen' : props.level=='Medium' ? 'yellow' : 'darkred' ,
						  color: props.level=='Medium' ? 'blck' : 'white',
						  justifyContent: 'center',
						  alignItems: 'baseline',
						  mb: 2,
						  padding: '20px'
						}}
						>
						{props.level}
						</Typography>
				</CardContent>
				<CardActions
				  sx={{
					justifyContent: 'space-between',
					padding: '20px'
				  }}
				>
					<Button
						variant="contained"
						size="small"
						color="success"
						onClick={props.markDone}
					>
					
					<DoneIcon/>
					</Button>
					<Button
						variant="contained"
						size="small"
						color="error"
						onClick={props.deleteTask}
					>
						<DeleteIcon/>
					</Button>
				</CardActions>
			</Card>
		</Grid>
    )
}

export default Task;