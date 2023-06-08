import './pagination.scss'

export default function Pagination(props) {
  let {total, current, limit} = props
  
  // 所有的分页
  let allPage = Math.ceil(total / limit)

  let prev = {
    title: '上一页',
    num: -1,
    className: `button ${current == 1 ? 'disabled': ''}`
  }
  let next = {
    title: '下一页',
    num: 1,
    className: `button ${current == allPage ? ' disabled': ''}`
  }
  let arr = [prev]

  if (allPage <= 7) {
    for(var i=1; i<=allPage; i++) {
      arr.push({title: i, className: i===current ? 'active': ''})
    }
  } else if (allPage >= 8) {
    if (current <= 4) {
      for(var i=1; i<=5; i++) {
        arr.push({title: i, className: i===current ? 'active': ''})
      }
      arr.push(
        {title: '...', className: 'more', icon: 'iconfont icon-gonggong-youjiantou', num: 5},
        {title: allPage},
      )
    } else if (current >= allPage-3) {
      arr.push(
        {title: 1},
        {title: '...', className: 'more', icon: 'iconfont icon-gonggong-zuojiantou', num: -5},
        {title: allPage-4, className: allPage-4===current ? 'active': ''},
        {title: allPage-3, className: allPage-3===current ? 'active': ''},
        {title: allPage-2, className: allPage-2===current ? 'active': ''},
        {title: allPage-1, className: allPage-1===current ? 'active': ''},
        {title: allPage, className: allPage===current ? 'active': ''},
      )
    } else {
      arr.push(
        {title: 1},
        {title: '...', className: 'more', icon: 'iconfont icon-gonggong-zuojiantou', num: -5},
        {title: current-2},
        {title: current-1},
        {title: current, className: 'active'},
        {title: current+1},
        {title: current+2},
        {title: '...', className: 'more', icon: 'iconfont icon-gonggong-youjiantou', num: 5},
        {title: allPage},
      )
    }
  }
  arr.push(next)


  return (
    <div className='pagination'>
      <ul>
        {
          arr.map((item, i) => {
            return (
              <li className={item.className} key={i} onClick={e => props.handle(item)}>
                <span>{item.title}</span>
                {item.icon && <i className={item.icon}></i>}
              </li>
            )
          })
        }
        
        {/* <li className='button'>
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
        </li> */}
      </ul>
    </div>
  )
}