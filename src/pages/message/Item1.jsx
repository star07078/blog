import author from '../../assets/images/author.png'

export default function Item() {
  return (
    <section>
      <header className='header'>
        <img src={author} alt="" />
        <h3>匿名</h3>
        <span>
          在<time>2020 年 8 月 3 日</time>说：
        </span>
      </header>
      <div className="content">
        <p>你总是走在互联网风口前沿</p>
      </div>
      <footer>
        <ul>
          <li>
            <i className='iconfont icon-xiai'></i>
            赞同
            <span>(1)</span>
          </li>
          <li>
            <i className='iconfont icon-fandui'></i>
            反对
            <span>(1)</span>
          </li>
          <li>
            <i className='iconfont icon-liuya'></i>
            回复
            <span>(1)</span>
          </li>
        </ul>
      </footer>
      
    </section>
  )
}