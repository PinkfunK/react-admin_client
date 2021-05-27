import React, { Component } from 'react'
import './login.less'
import { Form, Input, Button, Checkbox } from 'antd';

/* 登陆的路由 */
export default class Login extends Component {
  render() {
    return (
      <div className="login" >
        <header className="login-header">
          <div className="login-title">
            React项目: 后台管理系统
                 </div>
        </header>
        <section className="login-content">
          <h2>Login</h2>

        </section>
      </div>
    )
  }
}
