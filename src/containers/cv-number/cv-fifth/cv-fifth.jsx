import React from "react";

import { Form, Input, Button, Radio } from 'antd';


function title() {
    return (
        <div>
            <div>
                联系我
            </div>
            <div>
                您可以通过填写以下表单联系到我，或者通过最下方的联系方式找到我
            </div>
        </div>
    )
}

function LinkForm(){
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input placeholder={"姓名"} />
                </Form.Item>
            </Form>
        </div>
    )
}

function LinkInfo(){

}

export default function CvFifth(){
    return (
        <div>

        </div>
    )
}