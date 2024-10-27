"use client"

import { Mandali } from 'next/font/google';
import React, { useState } from 'react';

const page = () => {
  const [title, settitle]  =  useState("")
  const [desc, setdesc]  =  useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
      e.preventDefault();
      setmainTask([...mainTask, {title, desc}]);
      settitle("");
      setdesc("");
      console.log(mainTask)
  }
     const deleteHandeler = (i) =>
     {
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setmainTask(copyTask)
     }



  let renderTask = <h2>NO Task Available</h2>
 if (mainTask.length >0 ){
  

  renderTask = mainTask.map((t,i)=>{
    return <li>
      <div className='div'>
      <h5>{t.title}</h5>
      <h6>{t.desc}</h6>
    </div>
    <button onClick={
      ()=>{deleteHandeler(i)
     } }
     className='btn'>Delete</button>
    </li>
  })

 }
  return (
    <>
    <h1>Todo List</h1>
    <form onSubmit={submitHandler} >
      <input type="text"  placeholder='Enter Task Here' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      
    
      <input type="text" placeholder='Enter Discription Here'
      
      value={desc}
      onChange={(e)=>{
       setdesc(e.target.value)
      }
    
      }
      
      >
      
      </input>
      <button className='btn1'>ADD TASK</button>
    </form>

    <hr/>
    <div className='render'>
      <ul>
        {renderTask}
      </ul>

    </div>
    </>
  )
}

export default page