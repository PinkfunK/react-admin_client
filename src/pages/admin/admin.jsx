import React, { Component } from 'react'
import './admin.less'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

const { Footer, Sider, Content } = Layout;

/* 后台管理的路由组件 */
export default class Admin extends Component {

  render() {

    return (
   
        <Layout style={{ height: '100%' }}>
          <Sider style={{ backgroundColor: '#EAF2FF' }} >Sider
            <LeftNav />
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content style={{ backgroundColor: 'rgba(239, 241, 254, 0.7)' }}>Content</Content>
            <Footer style={{ backgroundColor: '#9A91F2' }}>©2021</Footer>
          </Layout>
        </Layout>
      
    )
  }
}

