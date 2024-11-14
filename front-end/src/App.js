import './App.css';
// import TaskDetail from './Component/Taskinfo';
// import AI from './Component/AI';
// import TaskCard from './Component/TaskCard';
import UserTable from './Component/UserTable';

function App() {

  return (
    <div className='font-nunito'>
      {/* {Tasks.map((task, index) => <TaskCard key={index} Task={task} />)} */}
      {/* <TaskDetail /> */}
      <UserTable />
    </div>
  );
}

export default App;
