import React,{useContext} from 'react'
import { TaskList } from './TaskList'
import ListItemContext from './context/ListContext'

export const Formulario = () => {
  const {task,setTask,taskOld,taskList,setTaskList,edit,setEdit,setEditTask} = useContext(ListItemContext)  

  const onChangeTask=(e)=>{
    setTask(e.target.value)
  }

  const handleClickEdit=(e)=>{
    e.preventDefault();
    const taskNew = taskList.map((item)=>{
        if (item === taskOld){
          return task
        }
        return item;
    })
    setTaskList(taskNew)
    setTask('')
    setEdit(false)
    setEditTask('')
  }

  const handleClickAdd=(e)=>{
    e.preventDefault();
    task !== '' &&setTaskList([...taskList,task])
    setTask('');
  }

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <div className=" mt-5 w-1/2 flex flex-col items-center rounded bg-slate-400">
      <form className=' w-1/2 min-h-max'> 
        <input type="text" name="task" value={task} placeholder="Input task..." className=' placeholder:italic outline-none focus:border-sky-800 order-spacing-1 rounded m-1 p-1' onChange={(e)=>onChangeTask(e)}></input>
        {
          taskList.length > 0 && edit===true ? <button className=' text-white bg-slate-900 rounded m-1 p-1' onClick={(e)=>handleClickEdit(e)}>Save Task</button> 
          
          : <button className=' text-white bg-slate-500 rounded m-1 p-1' onClick={(e)=>handleClickAdd(e)}>Add Task</button>        }
        
      </form>
      <ul>
        <TaskList/>
      </ul>
    </div>
    </div>
  )
}
