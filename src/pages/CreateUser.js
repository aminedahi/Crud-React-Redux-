import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {adduser} from '../store/action'
import {Link} from 'react-router-dom';
import './CreateUser.css'
export default function Single() {
    const [val,setVal]=useState({})
    const dispatch=useDispatch()

function handelChange(e){
        setVal(
            {
                ...val,
                [e.target.name]:e.target.value
            }
        ) 
    }
function handelClick(){
    dispatch(adduser(val))
}
  return (
    <div className='Form'>
        <div class="wrapper">
         <div class="title">
            Sign Up
         </div>
         <form >
            <div class="field">
               <input type="text" required onChange={handelChange} name="FirstName"/>
               <label>Fisrt Name</label>
            </div>
            <div class="field">
               <input type="text" required onChange={handelChange} name="LastName"/>
               <label>Last Name</label>
            </div>
            <div class="field">
               <input type="text" required onChange={handelChange} name="City"/>
               <label>City</label>
            </div>
            <div class="field">
                <Link to="/">
                    <input type="submit" value="Sign Up" onClick={handelClick}/>
                </Link>
            </div>
         </form>
      </div>
    </div>
  )
}

      
