/*
 * @Author: your name
 * @Date: 2020-09-11 14:08:15
 * @LastEditTime: 2020-09-11 15:35:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \git_demo\src\index\components\pc_newscontainer.js
 */
import React from 'react'

import {Row,Col} from 'antd'
import { Carousel } from 'antd'
import PCNewsImagesBlock from './pc_news_images_block'

export default class PCNewscontainer extends React.Component{
    render(){
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
          };

        return(
            <div>
            <Row>
                <col span={2}></col>
                <col span={20}> 
                <div class='leftcontainer'>
                    <div class='carousel' {...contentStyle}>
                    <Carousel>
                  <div>
                    <img src='../images/1.jpg'/>
                  </div>
                  <div>
                  <img src='../images/2.jpg'/>
                  </div>
                  <div>
                  <img src='../images/3.jpg'/>
                   </div>
                   <div>
                   <img src='../images/4.jpg'/>
                   </div>
             </Carousel>
                    </div>
                    <div> <PCNewsImagesBlock></PCNewsImagesBlock></div>
               </div>
                </col>
                <col span={2}></col>
            </Row>
            </div>
        )
    }
}