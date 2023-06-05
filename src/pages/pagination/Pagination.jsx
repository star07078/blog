import './pagination.scss'

export default function Pagination(props) {
  let {total, current, limit} = props
  let prev = {
    title: '上一页',
    disabled: false,
    className: ''
  }
  let next = {
    title: '下一页',
    disabled: false,
    className: ''
  }
  // 所有的分页
  let allPage = Math.ceil(total / limit)
  let arr = [prev]

  if (allPage < 7) {
    for(var i=1; i<=allPage; i++) {
      arr.push({title: i, className: i===current ? 'active': ''})
    }
  } else if (allPage === ) {
    if (current < 3) {
      arr.push({title: 1, className: ''}, {title: '...', type: 'prev'})
      for(var i=allPage-current; i<=allPage; i++) {
        arr.push({title: i, className: i===current ? 'active': ''})
      }
    } else {
      for(var i=1; i<=allPage-current; i++) {
        arr.push({title: i, className: i===current ? 'active': ''})
      }
      arr.push({title: '...', className: 'next'}, {title: 6, className: ''})
    }
  }

  console.log(arr);

  return (
    <div className='pagination'>
      {/* {arr} */}
      <ul>
        <li className='button'>
          <i className='iconfont icon-gonggong-zuojiantou'></i>
          上一页
        </li>
        <li className='active'>
          <span>1</span>
        </li>
        <li className='more'>
          <span>...</span>
          <i className='iconfont icon-gonggong-zuojiantou'></i>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li>
          <span>5</span>
        </li>
        <li className='more'>
          <span>...</span>
          <i className='iconfont icon-gonggong-youjiantou'></i>
        </li>
        <li>
          <span>20</span>
        </li>
        <li className='button'>
          下一页
          <i className='iconfont icon-gonggong-youjiantou'></i>
        </li>
      </ul>
    </div>
  )
}