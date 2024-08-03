import { useEffect, useState } from 'react';
import MyContex from './MyContex';

function MyState(props) {
    
    const [users, setUsers] = useState(() => {
        const localData = localStorage.getItem('users');
        try {
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error('Error parsing local storage data:', error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const [editid, setEditId] = useState(null);

    return (
        <MyContex.Provider value={{ users, setUsers, editid, setEditId }}>
            {props.children}
        </MyContex.Provider>
    );
}

export default MyState;



























// import { useEffect, useState } from 'react';
// import MyContex from './MyContex';

// function MyState(props) {
//     const [users, setUsers] = useState(() => {
//         const localData = localStorage.getItem('users');
//         try {
//             return localData ? JSON.parse(localData) : [
//                 { id: 1, name: 'John', age: 25, gender: "male" },
//                 { id: 2, name: 'John', age: 25, gender: "male" },
//                 { id: 16, name: 'John', age: 25, gender: "male" },
//             ];
//         } catch (error) {
//             console.error('Error parsing local storage data:', error);
//             return [
//                 { id: 1, name: 'John', age: 25, gender: "male" },
//                 { id: 2, name: 'John', age: 25, gender: "male" },
//                 { id: 16, name: 'John', age: 25, gender: "male" },
//             ];
//         }
//     });

//     useEffect(() => {
//         localStorage.setItem("users", JSON.stringify(users));
//     }, [users]);

//     const [editid, setEditId] = useState(null);

//     return (
//         <MyContex.Provider value={{ users, setUsers, editid, setEditId }}>
//             {props.children}
//         </MyContex.Provider>
//     );
// }

// export default MyState;
