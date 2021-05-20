import React, { useState, useEffect } from 'react';
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd';
import axios from '../../config/axios';
import Todo from './Todo';
import { Link } from 'react-router-dom';

const { Text } = Typography;

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputField, setInputField] = useState("");

    const fetchTodoList = async () => {
        const httpResponse = await axios.get("/todo-list");
        console.log(httpResponse.data)
        setTodoList(httpResponse.data);
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    const addTodoItem = async () => {
        await axios.post("/todo-list", { task: inputField });
        fetchTodoList();
        setInputField("");
    };

    const deleteTodoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`);
        fetchTodoList();
    };

    return (
        <Row justify="center" style={{margin: "50px"}}>
            <Col>
            <Link to="/Profile"><Button style={{ width: '100%' },{ backgroundColor: 'grey' }}> Profile </Button></Link>
                <br></br>
                <br></br>
                <Row>
               
                    <Text type="primary">กรุณาใส่ หัวข้อ IDEA</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button style={{ width: '100%' },{ backgroundColor: 'grey' }} onClick={addTodoItem}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center"  >
                    <List
                        
                        style={{ width: '550px' } }
                        header={<div>IDEA List Page</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo delete={deleteTodoItem} todo={todo} fetchData={fetchTodoList}/>
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    );
}
