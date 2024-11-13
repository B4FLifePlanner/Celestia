import './App.css';
import TaskDetail from './Component/Taskinfo';
// import AI from './Component/AI';
// import TaskCard from './Component/TaskCard';
// import UserTable from './Component/UserTable';

function App() {
//   const users = [
//     { firstName: "Bassam", lastName: "Kutet", email: "Kutet@gmail.com", password: "Kutet123", gender: "Male", dob: "1/1/1998", phone: "09********", role: "Team Leader" },
//     { firstName: "Anna", lastName: "Farah", email: "Anna@gmail.com", password: "Anna123", gender: "Female", dob: "21/1/1996", phone: "09********", role: "Team Member" },
//     { firstName: "Ahmad", lastName: "Majar", email: "Ahmad@gmail.com", password: "Ahmad123", gender: "Male", dob: "28/7/1998", phone: "09********", role: "Team Member" },
//     { firstName: "Qussay", lastName: "Bouhador", email: "Qussay@gmail.com", password: "Qussay123", gender: "Male", dob: "3/4/2005", phone: "09********", role: "Team Member" },
//   ];
//   const Tasks = [{
//     title: 'Chat App Project',
//     info: 'Make an API that receives the user message and adds it to the messages array that belongs to the user',
//     assignedTo: 'Anna Farah',
//     deadline: 'Mon 11/11/2024 12:00 PM',
//     status: 'Waiting For Review'
// },{
//   title: 'Chat App Project',
//   info: 'Make an API that receives the user message and adds it to the messages array that belongs to the user',
//   assignedTo: 'Qussay',
//   deadline: 'Mon 11/11/2024 12:00 PM',
//   status: 'Waiting For Review'
// }]
  return (
    <div className='font-nunito'>
      {/* {Tasks.map((task, index) => <TaskCard key={index} Task={task} />)} */}
      <TaskDetail />
    </div>
  );
}

export default App;
