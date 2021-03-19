import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import './LoginForm.scss'
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 10,
  },
};

LoginForm.propTypes = {
    
};

function LoginForm({onSubmit}) {

    const onFinish = (values) => {
        onSubmit(values)
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <Form 
        {...layout}
        name="basic"
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                required: true,
                message: 'Vui lòng nhập email!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Vui lòng nhập password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
        </Form>
    );
}

export default LoginForm;