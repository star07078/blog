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
      <div className='comment-item'>
        <header>
          <img src={author} alt="Dandy Weng的头像" />
          <h3><a target="_blank" rel="nofollow external" data-confirm="确认访问评论者的个人网页？" href="http://www.dandyweng.com" class="url">Dandy Weng</a></h3>
          <span>在<time datetime="2017 年 9 月 16 日 10:56"> 2017 年 9 月 16 日</time>回复：</span>
        </header>
        <div class='content-item-message'>
          <p>那就试试吧，有疑问可以来这里交流</p>
        </div>
        <div className='comment-item-icon'>
          <div className='icon'>
            <i className='iconfont icon-liebiao'></i>
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
          </div>
        </div>
      </div>
    </section>
  )
}