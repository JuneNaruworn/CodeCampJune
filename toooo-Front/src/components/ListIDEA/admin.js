import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import axios from 'axios';

export default function IDEA(props) {
    const [changeInput, setChangeInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const updateIDEAItem = async (id) => {
        await axios.put(`/idealist/${id}`, { task: changeInput });
        props.fetchData();
        setIsEdit(false);
    };

    const toggleEdit = () => {
        setChangeInput(props.idea.task);
        setIsEdit(true);
    };

    let contents = (
        <Row style={{ width: '100%' }}>
            <Col span={20}>
                <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
            </Col>
            <Col span={4}>
                <Button style={{ backgroundColor: 'grey' }} onClick={() => updateIDEAItem(props.idea.id)}>Done</Button>
            </Col>
        </Row>
    );

    if (!isEdit) {
        contents = (
            <Row style={{ width: '100%' }}>
                <Col span={20}>
                    <Row justify="start">
                        {props.idea.task}
                    </Row>
                </Col>
                <Col span={2}>
                    <Button variant="contained" onClick={() => toggleEdit()}>แก้</Button>
                </Col>
                <Col span={2}>
                    <Button type="danger" onClick={() => props.delete(props.idea.id)}>ลบ</Button>
                </Col>
            </Row>
        );
    }

    return (
        <div style={{ width: '100%' }}>
            {contents}
        </div>
    );
}
