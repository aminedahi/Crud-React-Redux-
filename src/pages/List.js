import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { AiFillEdit , AiFillDelete} from "react-icons/ai";
import {Link} from 'react-router-dom'
import './List.css'
import { deleteuser } from '../store/action';
    function Table() {
            const users=useSelector(data=>data.users)
            const style1={ color: "#c850c0" }
            const style2={ color: "#4158d0" }
            const dispatch=useDispatch()
        function handeldelete(id){
            dispatch(deleteuser(id))
            }
    return (
        <div>
            <div className='container-fluid '>
                <div className='container '>
                    <row className="d-flex justify-content-center mt-5 ">
                        <h1>Crud React JS</h1>
                    </row>
                    <row>
                        <Link to="/createUser">
                            <button className='btn1'>+ADD USER</button>
                        </Link>
                    </row>
                    <table className='table table-striped'>
                            <thead className='text-center'>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>City</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody className='text-center'>
                            {users.map((user,id)=>{
                                return(<tr key={id}>
                                <td>{user.FirstName}</td>
                                <td>{user.LastName}</td>
                                <td>{user.City}</td>
                                <td> 
                                    <Link to={`/edit/${user.id}`}>
                                        <AiFillEdit style={style2}/>
                                    </Link> 
                                    
                                </td>
                                <td >
                                    
                                        <AiFillDelete  style={style1} onClick={()=>handeldelete(user.id)}/>
                                    
                                </td>
                                </tr>)
                            })
                            }
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table