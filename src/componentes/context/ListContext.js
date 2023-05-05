import {createContext,useState} from 'react';

const ListItemContext = createContext();

export  const ListItemProvider =({children})=>{
    const [task, setTask] = useState("")
    const [taskOld, setTaskOld] = useState("")
    const [taskList, setTaskList] = useState([])
    const [edit, setEdit] = useState(false);
    const [editTask, setEditTask] = useState("") 
   
   return( 
   <ListItemContext.Provider value={{task,setTask,taskOld,setTaskOld,taskList,setTaskList,edit,setEdit,editTask,setEditTask}}>
        {children}
    </ListItemContext.Provider>
    )
}
export default ListItemContext;