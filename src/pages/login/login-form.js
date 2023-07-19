import {Button, Checkbox, Form, Input, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../helpers/constant";

export const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username: values.username, password: values.password}),
            });

            if (response.ok) {

                const {token} = await response.json(); 

                localStorage.setItem('token', token);
                navigate(`${PATHS.PRODUCT_TABLE}`)
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.log('Error:', error);
        }

    };

    return (
        <Row justify={'end'} style={{padding: 120}}>
            <div style={{textAlign: 'center'}}>
                <p>login: mor_2314</p>
                <p>password: 83r5^_</p>
            </div>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Row>
    );
}