import { useState, useEffect } from "react"
import Head from "../head/Head.jsx"
import { useNavigate } from "react-router-dom";

import "./mainView.scss";

let timer = null

export default function MainView() {
  let navigate = useNavigate()
  let [levelMessageList, setLevelMessageList] = useState([
    {
      authorImg: require("../../assets/images/author.png"),
      username: "匿名",
      content: "很特性的网站",
    },
    {
      authorImg: require("../../assets/images/author.png"),
      username: "匿名",
      content:
        "当我还是个初学者的时候，大概是2015年,知道你的网站，以一个初学者的视角来说觉得你挺牛的。这么多年不知道你进步到何种地步，但是当自己学习懒惰时，总会想起你来，鞭策一下自己。",
    },
    {
      authorImg: require("../../assets/images/author.png"),
      username: "匿名",
      content: "你好啊, 我很欣赏你",
    },
    {
      authorImg: require("../../assets/images/author.png"),
      username: "匿名",
      content: "你好啊, 我很欣赏你",
    },
    {
      authorImg: require("../../assets/images/author.png"),
      username: "匿名",
      content: "你好啊, 我很欣赏你",
    },
  ])

  let [bg, setBg] = useState(Math.ceil(Math.random() * 9))

  let changeHeaderBg = () => {
    clearInterval(timer)
    timer = setInterval(() => {
      if (bg > 9) bg = 0;
      bg ++
      setBg(bg)
    }, 10000);
    
  };

  useEffect(() => {
    changeHeaderBg()
  })


  return (
    
    <header
      id="header"
      className={"bg" + bg}
    >
      <div id="fixed-header" className="head">
        <Head />
      </div>
      <div id="widget-container">
        <div className="head">
          <Head />
        </div>
        <div className="about-me">
          <p>
            我是一个 28 岁少年boy，热爱运动以及一切美好性的事物，
            尤其是做饭、设计, 编程和量化。 有最朴素的生活, 也有最遥远的梦想,
            这个世界就是我的学校, 学自己之所想所爱。即使明日天寒地冻, 路远马亡
          </p>
        </div>
        <div className="leaveList">
          <ul>
            {levelMessageList.map((item, index) => {
              return (
                <li className="flex-r item" key={index}>
                  <div className="author">
                    <img src={item.authorImg} alt="" />
                  </div>
                  <div className="level-message">
                    <p>{item.username}</p>
                    <p>{item.content}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="level-btn flex-r justify-c">
          <div onClick={e => navigate('/message')}>
            <i className="iconfont icon-liebiao"></i>
            <span>查看更多</span>
          </div>
          <div>
            <i className="iconfont icon-tianxie"></i>
            <span>写新留言</span>
          </div>
        </div>
        <div className="main-footer">
          <div className="footer-content">
            <h2>@ star's blog 2018-2023</h2>
            <h2>
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=5176.12825654.7y9jhqsfz.114.3dbd2c4aoWwhWu">
                <span>冀公安网备13052202000126号 </span>
                <span>冀ICP备18021995号</span>
              </a>
            </h2>
          </div>
        </div>
      </div>
    </header>
  )
}
