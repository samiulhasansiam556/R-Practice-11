import React, { useContext, useEffect, useState } from "react";
import MyContex from "../Contex/MyContex";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
    const { users, setUsers, editid, setEditId } = useContext(MyContex);

    const [search,setSearch] = useState("")
    const [displayusers,setDisplayUsers] = useState([])

    const navigate = useNavigate();
    
    useEffect(()=>{
        setDisplayUsers(users)
        console.log("setdisplay is rendering")
    },[users])

    const handleAdd = () => {
        navigate("/AddPage");
    };

    const handleEdit = (ID) => {
        setEditId(ID);
        navigate("/UpdatePage");
    };

    const handleDelate = (deleteId) =>{
        setUsers(users.filter((user)=> user.id !== deleteId));
    }

    const handleSearch = (e) =>{
        setSearch(e.target.value)
        const filtered = users.filter((user)=> user.name.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(filtered);
        // if(filtered){
            setDisplayUsers(filtered)
        //  }
         //else{
        //     setDisplayUsers(users)
        // }

       
    }



    return (
        <div>
            <h1>Users List</h1>
            <main>
                <section>
                    <input type="text" name="search" id="search" onChange={(e)=>handleSearch(e)}></input>
                    <button onClick={handleAdd} type="button" id="addBtn">ADD</button>
                </section>
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayusers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <button onClick={() => handleEdit(user.id)} type="button" id="editBtn">Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={()=>handleDelate(user.id)} type="button" id="deleteBtn">Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default HomePage;
