import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

/* 登陆的路由 */
export default class Login extends Component {
  constructor (props){
    super(props);
    this.state={
      userName:'',
      passWord:'',
    }
  }
 
  // 点击登录按钮
  submit() {
    var userName = this.state.userName
    console.log(userName);
  }

  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    return (
      <div className="login" >
        <header className="login-header">
          <div className="login-title">
            React admin client
          </div>
        </header>
        <section className="login-content">
          <div className="login-title">Login</div>
          <div className="login-form">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  style={{ color: 'rgba(200,200,200,0.5)',backgroundColor:'#00000000' }}
                  placeholder="Username"
                  autoComplete="off"
                   />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  style={{ color: 'rgba(200,200,200,0.5)',backgroundColor:'#00000000' }}
                  
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
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.submit.bind(this)}>
                  Log in
        </Button>
        Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }
}
