import React, { useEffect, useState, useContext } from 'react';
import MyContex from '../Contex/MyContex';
import { useNavigate } from 'react-router-dom';

function UpdatePage(props) {
    const { users, setUsers, editid, setEditId } = useContext(MyContex);
    const [user, setUser] = useState({ id: '', name: '', age: '', gender: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (editid !== null) {
            const userToEdit = users.find(u => u.id === editid);
            if (userToEdit) {
                setUser(userToEdit);
            }
        }
    }, [editid, users]);

    const submitHandle = (event) => {
        event.preventDefault();
        const updatedUsers = users.map((item) =>
            item.id === editid ? { ...user } : item
        );
        setUsers(updatedUsers);
        setEditId(null);
        navigate("/");
    };

    return (
        <div>
            <main>
                <h1>Update Users</h1>
                <div>
                    <form onSubmit={submitHandle}>
                        <input
                            required
                            type="number"
                            min="1"
                            value={user.id}
                            placeholder="Enter Id"
                            onChange={(e) => {
                                setUser({ ...user, id: parseInt(e.target.value) });
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
                                setUser({ ...user, age: parseInt(e.target.value) });
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

export default UpdatePage;
