import React, { useState, useEffect } from 'react';
import { Typography, List, Input, Button, Row, Col, Divider } from 'antd';
import axios from '../../config/axios';
import IDEA from './idea';


const { Text } = Typography;

export default function IDEAList() {
    const [IDEAList, setIDEAList] = useState([]);
    const [inputField, setInputField] = useState("");

    const fetchIDEAList = async () => {
        const httpResponse = await axios.get("/idealist");
        console.log(httpResponse.data)
        setIDEAList(httpResponse.data);
    };

    useEffect(() => {
        fetchIDEAList();
    }, []);

    const addIDEAItem = async () => {
        await axios.post("/idealist", { task: inputField });
        fetchIDEAList();
        setInputField("");
        
    };

    const deleteIDEAItem = async (id) => {
        await axios.delete(`/idealist/${id}`);
        fetchIDEAList();
    };

    return (
        
        <Row justify="center" style={{margin: "10px"}}>
            <Col>
                <Row>
                    <Text mark>Add IDEA</Text>
                    
                    
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e) => setInputField(e.target.value)} />
                    </Col>
                    <Col span={4}>
                        <Button type="primary" style={{ width: '100%' }} onClick={addIDEAItem}>Add</Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="center" >
                    <List
                        style={{backgroundColor: 'white', width: '550px' } }
                        header={<div>IDEA List</div>}
                        bordered
                        dataSource={IDEAList}
                        renderItem={idea => (
                            <List.Item>
                                
                                <IDEA delete={deleteIDEAItem} idea={idea} fetchData={fetchIDEAList}/>

                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    );
}
