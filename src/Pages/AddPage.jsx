import React, { useState, useContext } from "react";
import MyContex from "../Contex/MyContex";
import { useNavigate } from "react-router-dom";

function AddPage(props) {
    const { users, setUsers } = useContext(MyContex);
    const [user, setUser] = useState({ id: '', name: '', age: '', gender: '' });
    const navigate = useNavigate();

    const submitHandle = (event) => {
        event.preventDefault();
        setUsers([...users, { ...user, id: parseInt(user.id) }]);
        setUser({ id: '', name: '', age: '', gender: '' });
        navigate("/");
    };

    return (
        <div>
            <main>
                <h1>Add Users</h1>
                <div>
                    <form onSubmit={submitHandle}>
                        <input
                            required
                            type="number"
                            min="1"
                            value={user.id}
                            placeholder="Enter Id"
                            onChange={(e) => {
                                setUser({ ...user, id: e.target.value });
                            }}
                        ></input>
                        <input
                            required
                            type="text"
                            value={user.name}
                            placeholder="Enter Name"
                            onChange={(e) => {
                                setUser({ ...user, name: e.target.value });
                            }}
                        ></input>
                        <input
                            required
                            min="1"
                            type="number"
                            value={user.age}
                            placeholder="Enter Age"
                            onChange={(e) => {
                                setUser({ ...user, age: e.target.value });
                            }}
                        ></input>
                        <input
                            required
                            type="text"
                            value={user.gender}
                            placeholder="Enter Gender"
                            onChange={(e) => {
                                setUser({ ...user, gender: e.target.value });
                            }}
                        ></input>
                        <input type="submit"></input>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default AddPage;
