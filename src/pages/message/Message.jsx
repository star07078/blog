import Item from './Item.jsx'
import Item1 from './Item1.jsx'
import './message.scss';

export default function Message() {
  return (
    <div className='message-view'>
      <div className='message-icon'>
        <div>
          <span>23</span>
          <i className='iconfont icon-liuyan'></i>
        </div>
      </div>
      <div className='message-content'>
        <div className='respond'>
          <h2>你也来说两句呗</h2>
          <div class="12u">
            <textarea name="comment" aria-required="true" placeholder="评论内容" maxlength="9999"></textarea>
          </div>
        </div>
        <div className='comments'>
          <Item />
          <Item1 />
        </div>
      </div>
    </div>
  )
}