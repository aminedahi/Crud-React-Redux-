import React, { useEffect } from 'react'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {updateuser} from '../store/action'
import {Link, useParams} from 'react-router-dom';
import './edit.css'
export default function Edit() {
    const [value,setValue]=useState({})
    const dispatch=useDispatch()
    const {id}=useParams()

    const user = useSelector(data =>data.users.find(user =>parseInt(id) ===user.id))

    useEffect(()=>{
        setValue(user)
    },[])

function handelChange(e){
    setValue(
            {
                ...value,
                [e.target.name]:e.target.value
            }
        ) 
    }
function handelUpdate(){
    dispatch(updateuser(value))
}
  return (
    <div className='Form'>
        <h1>Update</h1>
        <div class="wrapper">
         <div class="title">
            Update Form
         </div>
         <form >
            <div class="field">
               <input type="text" required onChange={handelChange} name="FirstName" value={value.FirstName}/>
               <label>Fisrt Name</label>
            </div>
            <div class="field">
               <input type="text" required onChange={handelChange} name="LastName" value={value.LastName}/>
               <label>Last Name</label>
            </div>
            <div class="field">
               <input type="text" required onChange={handelChange} name="City" value={value.City}/>
               <label>City</label>
            </div>
            <div class="field">
                <Link to="/">
                    <input type="submit" value="Save Update"  onClick={()=>handelUpdate(value)}/>
                </Link>
            </div>
         </form>
      </div>
    </div>
  )
}

      
