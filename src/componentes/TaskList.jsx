import React,{useContext} from 'react'
import {RiDeleteBin6Line,RiEditLine} from 'react-icons/ri'
import ListItemContext from './context/ListContext'

export const TaskList = () => {
    const {setTask,taskOld,setTaskOld,taskList,setTaskList,edit,setEdit,editTask,setEditTask} = useContext(ListItemContext)  

    const EditarTask = (theTask)=>{
        setTaskOld(theTask);
        setTask(theTask);
        setEdit(true)
        setEditTask(theTask)
        
    }

    const handleDelete=(item)=>{
        const taskListNew = taskList.filter((task)=>task!==item)
        setTaskList(taskListNew) //Eliminar Tarea
    }

    return(
    taskList.length === 0 ? <p className=' text-red-600 '>No se existen tareas</p>
    :
    taskList.map((item,index)=>{
        return(
        <li key={index} className={ editTask === item ? ' text-red-500 mt-2 mb-2 flex flex-row justify-center items-center bg-yellow-300 w-96 text-2xl rounded'
            :'text-white mt-2 mb-2 flex flex-row justify-center items-center bg-slate-500 w-96 text-2xl rounded'
        }>
            <div className={' ml-3 mr-3 w-96 overscroll-auto'}>{item}</div>
            <div className='mr-3'><RiDeleteBin6Line className=' cursor-pointer' onClick={()=>handleDelete(item)} /></div>
            <div><RiEditLine className=' cursor-pointer' onClick={()=>EditarTask(item)}/></div>
        </li>
                )
        })
    )
}
