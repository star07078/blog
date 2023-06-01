import Message from '../message/Message.jsx'

export default function Article() {
  return (
    <>
      <Message />
      <div className='article-details'>
        <header>
          <h1>我做了一个可以锻炼视力的 App</h1>
          <span>
            <time>2020 年 4 月 15 日发布，15779 人读过</time>
          </span>
        </header>
        <div className="content">
          <p>没错，我做了一个新 App，可以帮助你放松眼睛、缓解屏幕疲劳，甚至改善视力。</p>
          <p>说实话，要不是因为这次疫情，估计打死我也想不到会做个这样的 App。</p>
          <p>本来我视力一直都挺好的，也许是因为我常年在外旅行摄影，即使在家也保证每天都有户外运动，所以每天平均下来的屏幕时间并不多。没想到疫情一来，不仅旅行计划全部取消，整个生活节律都被打乱了。居家隔离期间，屏幕看得越来越多，没几天就明显感觉到视力有下降的趋势。</p>
          <p>有天和一位眼科医生朋友聊起这事，他建议我每天做几次眼保健操，坚持一段时间会有好转。我做了几天之后，确实有些效果，不过也遇到了三个问题：</p>
          <ol>
            <li>总是想不起来要做；</li>
            <li>经常遗漏具体步骤；</li>
            <li>无法确认动作是否到位。</li>
          </ol>
          <img style={{ maxWidth: "368px", border: "1px solid rgb(222, 222, 222)", borderRadius: "6px", display: "block" }} src="https://blogfile.dandyweng.com/2020/04/weibo-idea-600x271.jpeg" data-original="https://blogfile.dandyweng.com/2020/04/weibo-idea-600x271.jpeg" alt="@dandyweng 发布于 2020 年 2 月 20 日的微博：这两天受到鼓舞了，脑子里又蹦出来一个特别牛逼的 idea，看看几天能做出来，反正 flag 我就先立在这了[doge]" className="aligncenter size-medium wp-image-1525" srcset="https://blogfile.dandyweng.com/2020/04/weibo-idea-600x271.jpeg 600w, https://blogfile.dandyweng.com/2020/04/weibo-idea-768x347.jpeg 768w, https://blogfile.dandyweng.com/2020/04/weibo-idea-1024x462.jpeg 1024w, https://blogfile.dandyweng.com/2020/04/weibo-idea.jpeg 1125w" sizes="(max-width: 600px) 100vw, 600px"></img>
          <p>正常人遇到这种情况设个备忘录就行，但我属于爱瞎折腾的人，加上宅在家也是闲着，不如做个 App 来督促一下自己吧。</p>
          <p className="deemphasized" style={{ padding: "0 2.75em" }}>其实我经常做一些自娱自乐的小应用，大部分都没有公开发布，因为我觉得并没有什么实用价值，比如用手机 3D Touch 屏幕称重的<a href="https://blog.dandyweng.com/2015/12/weight-things-with-3d-touch-on-iphone-6s/" rel="noopener" target="_blank">电子秤</a>，没想到却在一夜之间爆红网络，这也激励了我把这次的想法落地，做成可以上架的 App。</p>
          <p>这三个问题中，前两个相对好解决，第三个就要运用一些黑科技了。正好两年前我就研究过用 iPhone X 的 TrueDepth 相机（就是那个用来 Face ID 刷脸解锁的传感器）结合 ARKit 框架进行眼球追踪方法，这次正好可以派上用场。</p>
          <p>15 天之后，Eyeye 诞生了。</p>
        </div>
        <footer>
          <p className='next'>阅读下一篇博文</p>
          <div>
            <h3>个人网站第七次改版</h3>
            <p>
              我每年都会重新设计与开发一次自己的个人网站，每次改版都会整理自己在过去一年里所学到的东西并与大家分享。迟到了三年的第七版，终于在今天正式上线。
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}