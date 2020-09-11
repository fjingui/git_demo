import React from 'react'

import { Card } from 'antd'

export default class PCNewsImagesBlock extends React.Component{
    render(){
        return (
            <div>
<Card hoverable style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>
    }>
    <Meta title="Card title" description="This is the description"/>
  </Card>
            </div>
        )
    }
}