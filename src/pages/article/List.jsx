import React from "react"
import Item from "./Item.jsx"

import './list.scss'

export default class List extends React.Component {
  render() {
    return (
      <>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
          <div className="pagination">
            <button>
              <i className='iconfont icon-gonggong-zuojiantou'></i>
              上一页
            </button>
            <button>
              下一页
              <i className='iconfont icon-gonggong-youjiantou'></i>
            </button>
          </div>
      </>
    )
  }
}