import "./message.scss"
import img from "../../assets/images/img.jpeg"

import Pagination from "../pagination/Pagination"

export default function Message() {
  return (
    <article className="article">
      <header className="header">
        <h1>留言板</h1>
        <h2>已有 7051 人在此留言</h2>
      </header>
      <div className="content">
        <div className="form">
          <header>
            <img id="author-gravatar" srcSet={img} />
            <hgroup>
              <input
                name="author"
                type="text"
                placeholder="点击此处输入你的称呼"
                value=""
                maxLength="10"
              />
            </hgroup>
          </header>
          <textarea
            name="comment"
            aria-required="true"
            placeholder="你也来说两句吧！点击这里输入留言内容"
            maxLength="9999"
          ></textarea>
          <div class="uniform">
            <input
              name="email"
              type="text"
              placeholder="Email 地址"
              value=""
              maxLength="39"
            />
            <input
              name="url"
              type="text"
              placeholder="个人主页或微博网址"
              value=""
              maxLength="99"
            />
            <button name="submit" type="submit">
              保存
            </button>
          </div>
          <p>
            <strong>隐私说明：</strong>你个人主页网址会被公开链接，但 Email
            地址不会被公开显示；你的 IP
            地址会被保存，但只会公开显示你当前所在的城市名。
          </p>
        </div>
      </div>
      <ul className='ul'>
        <li>
          <header>
            <img srcSet={img} />
            <hgroup>
              <h3>8787 </h3>
              <h4>
                在<time dateTime="2023 年 5 月 30 日 11:29">前天上午</time>说：
              </h4>
            </hgroup>
          </header>
          <div className="content-li">
            <p>
              大学的时候看过博主的演讲，已经五六年了，偶尔会在微博关注下动态。今天突然和朋友聊起生活的各种烦闷，没由来的想起来这个网址看看。就感慨说“真好，真的有人在认真过好他自己的人”
            </p>
          </div>
          <div className="foot">
            <span>
              <i className="iconfont icon-xiai"></i>
              赞同
              <span>(1)</span>
            </span>
            <span>
              <i className="iconfont icon-fandui"></i>
              反对
              <span>(1)</span>
            </span>
            <span>
              <i className="iconfont icon-liuya"></i>
              回复
              <span>(1)</span>
            </span>
          </div>
          <div className="content">
        <div className="form">
          <header>
            <img id="author-gravatar" srcSet={img} />
            <hgroup>
              <input
                name="author"
                type="text"
                placeholder="点击此处输入你的称呼"
                value=""
                maxLength="10"
              />
            </hgroup>
          </header>
          <textarea
            name="comment"
            aria-required="true"
            placeholder="你也来说两句吧！点击这里输入留言内容"
            maxLength="9999"
          ></textarea>
          <div class="uniform">
            <input
              name="email"
              type="text"
              placeholder="Email 地址"
              value=""
              maxLength="39"
            />
            <input
              name="url"
              type="text"
              placeholder="个人主页或微博网址"
              value=""
              maxLength="99"
            />
            <button name="submit" type="submit">
              保存
            </button>
          </div>
          <p>
            <strong>隐私说明：</strong>你个人主页网址会被公开链接，但 Email
            地址不会被公开显示；你的 IP
            地址会被保存，但只会公开显示你当前所在的城市名。
          </p>
        </div>
      </div>
        </li>
      </ul>
      <Pagination total={35} current={3} limit={5}/>
    </article>
  )
}
