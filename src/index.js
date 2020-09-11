/*
 * @Author: your name
 * @Date: 2020-09-10 09:20:16
 * @LastEditTime: 2020-09-11 15:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-project\src\index.js
 */

import React from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import PCIndex from './index/components/pc_index.js'
import MobileIndex from './index/components/mobile_index.js'


class Root extends React.Component{
    render(){
        return(<div> 
            <MediaQuery query='(min-device-width:1224px)'>
            <PCIndex></PCIndex>
            </MediaQuery>
            <MediaQuery query="(max-device-width:1223px)">
             <MobileIndex></MobileIndex>
             </MediaQuery>
             </div>
            )
    }
}

ReactDOM.render(
    <Root></Root>,
    document.getElementById('root')
)