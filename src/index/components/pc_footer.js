/*
 * @Author: your name
 * @Date: 2020-09-11 10:47:33
 * @LastEditTime: 2020-09-11 14:07:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_demo\src\index\components\pc_footer.js
 */

import React from 'react'

import {Row,Col} from 'antd'
import '../css/pc.css'

export default class PCFooter extends React.Component{
    render(){
        return(
            <footer>
            <Row>
                <col span={2}></col>
                <col span={20} class='footer'>&copy;&nbsp;&nbsp;&nbsp;&nbsp; Powered By 安徽电信  </col>
                <col span={2}></col>
            </Row>
            </footer>
        )
    }
}