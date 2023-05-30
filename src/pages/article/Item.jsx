import { useNavigate } from 'react-router-dom'

function Item() {
  let navigate = useNavigate()
  
  const gotoArticle = () => {
    navigate('/article')
  }

  return (
    <article className="article">
      <div onClick={(e) => gotoArticle(arguments, e)}>
        <div className="article-header">
          <h2 className="article-title">Article Title</h2>
          <div className="article-content">
            我每年都会重新设计与开发一次自己的个人网站，每次改版都会整理自己在过去一年里所学到的东西并与大家分享。迟到了三年的第七版，终于在今天正式上线。
          </div>
          <div className="article-footer">
            <span>2020年4月15日发布</span>
            <span>24条评论</span>
          </div>
        </div>
        <div className="article-img">
          <div
            style={{
              backgroundImage:
                "url('https://blogfile.dandyweng.com/2018/12/ten-years-of-photograph-on-ipad-pro.jpg?imageView/2/w/1024/h/1024/q/75')",
            }}
          ></div>
        </div>
      </div>
    </article>
  )
}

export default Item
