import Header from "./components/Header";
import TaskList from "./components/TaskList.jsx";

export default function App(){
  const tasks=[
    {id:1,title: "Aprender React"},
    {id:2, title:"Practicar Componentes"},
    {id:3, title:"Dominar props y map"}
  ];
  return(
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}