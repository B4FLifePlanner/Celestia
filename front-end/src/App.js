import './App.css';
import AddMemberForm from './components/work/add_member';
// import AddTask from './components/work/add_task';
// import Chat from './components/work/chat';
import Main_ToDo from './components/personal/To-Do-List';
import Weekly_ToDo from './components/personal/To-Do';

function App() {
  return (
    <div className="App">
      <Main_ToDo />
      {/* <Weekly_ToDo/> */}
    </div>
  );
}

export default App;
