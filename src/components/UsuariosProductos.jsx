import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { alertaSuccess, alertaError, alertaWarning, alertaConfirmation } from '../Functions';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const UsuariosProductos = () => {
    const url = 'https://api.escuelajs.co/api/v1/users/';
    const [users, setUsers] = useState([]);
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [avatar, setAvatar] = useState('');
    const [titleModal, setTitleModal] = useState('');

    const getUsers = async () => {
        const response = await axios.get(url);
        setUsers(response.data);
        console.log(response.data);
    }

    useEffect(() => {
        getUsers();
    });

    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-mb-4 offset-mb-4'>
                        <div className='d-grif mx-auto'>
                            <button className='btn btn-dark'>
                                <i className='fa-solid fa-circle-plus' />Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-12 col-lg-8 offset-0 offser-lg-2'>
                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                        <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Id</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Name</th>
                                    <th>Role</th>
                                    <th>Avatar</th>
                                </tr>
                            </thead>
                            <tbody className='table-group-divider'>
                            {
                                 users.map( (users, i) => (
                                    <tr key={users.id}>
                                        <td>{i + 1}</td>
                                        <td>{users.email}</td>
                                        <td>{users.password}</td>
                                        <td>{users.name}</td>
                                        <td>{users.role}</td>
                                        <td>{users.avatar}</td>
                                        <td>${new Intl.NumberFormat('es-hn').format(users.price)}</td>
                                        <td>
                                            <button onClick={() => openModal(2, users.id, users.email, users.password, users.name, users.role, users.avatar)} className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalUsers'>
                                                <i className='fa-solid fa-edit' />
                                            </button>
                                            <button onClick={() => deleteUsers(users.id)} className='btn btn-danger'>
                                                <i className='fa-solid fa-trash' />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id='modalUsers' className='modal face' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h5'>{titleModal}</label>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsuariosProductos;