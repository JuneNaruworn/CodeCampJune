import React, { useEffect, useState } from 'react';
import {  Button, Row  } from 'antd';
import localStorageService from '../../services/localStorageService';
import { Link } from 'react-router-dom';
import  jwtDecode from 'jwt-decode';


export default function Profile(props) {

    const [name, setName] = useState("");
    const [id, setId] = useState(0);

    const logout = () => {
        localStorageService.removeToken();
        props.setRole("guest");

    };

    useEffect(() => {
       const token = localStorageService.getToken();
       if(token){
           const user =jwtDecode(token);
           setName(user.name);
           setId(user.id);
       }
    }, []);

    return (
        <Row justify="center">
            <div>
            <h2 >
                Profile Page
            </h2>
            <p>
                <strong>Name:</strong> {name}
                <br />
                <strong>User ID:</strong> {id}
            </p>
            <Link to="/todo"><Button style={{ width: '100%' },{ backgroundColor: 'grey' }}> IDEA </Button></Link>
            <Button type="danger" onClick={logout}> Logout</Button>
        </div>
        </Row>
    );
}
