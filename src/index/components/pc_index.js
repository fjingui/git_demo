/*
 * @Author: your name
 * @Date: 2020-09-11 09:55:38
 * @LastEditTime: 2020-09-11 14:40:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_demo\src\index\components\pc_index.js
 */
import React from 'react'
import PCHeader from './pc_header'
import PCFooter from './pc_footer' //不要后缀.js
import PCNewscontainer from './pc_newscontainer'
import '../css/pc.css'

export default class PCIndex extends React.Component{
    render(){
        return(
            <div class='container'> 
                <PCHeader></PCHeader>
                <PCNewscontainer></PCNewscontainer>
                <PCFooter></PCFooter>
            </div>
        )
    }
}