import './App.css';
import Sidebar from './Component/SideBar';
import TeamSection from './Component/TeamSection';

// import TaskDetail from './Component/Taskinfo';
// import AI from './Component/AI';
// import TaskCard from './Component/TaskCard';

function App() {

  return (
    <div className='flex font-nunito'>
      <Sidebar />
      <TeamSection />
    </div>
  );
}

export default App;
