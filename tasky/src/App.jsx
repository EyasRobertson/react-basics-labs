import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
	  <Task title="Dishes" deadline="Today" description="Actually Dry Them"/>
	  <Task title="Laundry" deadline="Tomorrow" description="Fold and Put Away"/>
	  <Task title="Tidy" deadline="Today" description="Dont just hide everything"/>
    </div>
  );
}

export default App;