import { useState } from 'react';
import Item from './Item.jsx'
import Item1 from './Item1.jsx'
import './articleMessage.scss';

export default function Message() {
  let [isOpen, setISOpen] = useState(false)
  const openSlider = (e) => {
    setISOpen(!isOpen)
  }
  return (
    <div className={isOpen ? 'open message-view' : 'off message-view'} onClick={openSlider}>
      <div className='message-close' onClick={() => setISOpen(!isOpen)}>
        <i className='iconfont icon-guanbi'></i>
      </div>
      <div className='message-icon'>
        <div>
          <span>23</span>
          <i className='iconfont icon-liuyan'></i>
        </div>
      </div>
      <div className='message-content'>
        <div className='respond'>
          <h2>你也来说两句呗</h2>
          <div className="textarea">
            <textarea name="comment" aria-required="true" placeholder="评论内容" maxLength="9999"></textarea>
          </div>
          <h2>留个联系方式吧</h2>
          <div className='input1'>
            <input name="author" type="text" placeholder="称呼" value="" maxLength="10" />
            <input name="email" type="text" placeholder="Email" value="" maxLength="39" />
          </div>
          <div className='input2'>
            <input name="url" type="text" placeholder="个人主页" value="" maxLength="99" />
          </div>
          <div>
            <button name="submit" type="submit">保存评论</button>
          </div>
        </div>
        <div className='comments'>
          <Item />
          <Item1 />
          <Item1 />
          <Item1 />
          <Item1 />
          <Item1 />
          <Item1 />
          <Item1 />
        </div>
      </div>
    </div>
  )
}