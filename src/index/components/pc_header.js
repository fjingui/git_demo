/*
 * @Author: your name
 * @Date: 2020-09-11 10:47:18
 * @LastEditTime: 2020-09-11 13:57:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_demo\src\index\components\pc_header.js
 */
import React from 'react'

import {Row,Col} from 'antd'

import logo from '../images/logo.gif'

import {Menu} from 'antd'

import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    ScheduleOutlined,
    ReloadOutlined
  } from '@ant-design/icons';


export default class PCHeader extends React.Component{
    constructor(){
        super();
        this.state={
            current:top
        }
    }
    render(){
        const { current } = this.state;

        return(
            <header> 
            <Row>
              <Col span={2}></Col>
              <Col span={4}>
                  <a href='#' class='logo'>
                      <img src={logo}/>
                  </a>
              </Col>
              <Col span={16}>
              <Menu selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="top" >
                   <HomeOutlined/>头条
                </Menu.Item>
                 <Menu.Item key="社会" >
                    <SettingFilled/>社会
                 </Menu.Item>
                 <Menu.Item key="国内" >
                    <SmileOutlined/>国内
                </Menu.Item>
                 <Menu.Item key="国际" >
                    <SyncOutlined/>国际
                 </Menu.Item>
                 <Menu.Item key="娱乐" >
                     <LoadingOutlined/>娱乐
                </Menu.Item>
                 <Menu.Item key="科技" >
                   <ScheduleOutlined />科技
                 </Menu.Item>
                 <Menu.Item key="体育" >
                   <ReloadOutlined />体育
                </Menu.Item>
               </Menu>
              </Col>
              <Col span={2}>col-2</Col>
            </Row>
            </header>
        )
    }
}