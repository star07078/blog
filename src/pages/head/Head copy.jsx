import React from "react"

export default class Head extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navList: [
        {
          title: '主页',
          icon: 'icon-zhuye',
          url: '/home',
        },
        {
          title: '股票',
          icon: 'icon-gupiao',
          url: '/home',
        },
        {
          title: '代码',
          icon: 'icon-daima',
          url: '/home',
        },
        {
          title: '相册',
          icon: 'icon-tupian',
          url: '/photo',
        },
        {
          title: '夜间模式',
          icon: 'icon-yejianmoshi',
          click: 'changeShowMode'
        },
        {
          title: '全屏',
          icon: 'icon-quanping1',
          click: 'changeFullScreen'
        },
      ]
    }
  }

  // 点击navList
  jump(item, index) {
    if (item.url) {
      window.location.href = item.url
    } else {
      this[item.click](item, index)
    }
  }

  // 改变阅读模式
  changeShowMode(item, index) {
    document.documentElement.classList.toggle('night-mode')
    if (item.icon === 'icon-yejianmoshi') {
      item.icon = 'icon-baitianmoshimingliangmoshi'
      item.title = '白天模式'
    } else {
      item.icon = 'icon-yejianmoshi'
      item.title = '夜间模式'
    }
    let navList = this.state.navList
    navList[index] = item
    this.setState({ navList })
  }

  // 改变全屏
  changeFullScreen(item, index) {
    if (item.icon === 'icon-quanping1') {
      let element = document.documentElement
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen()
      }
      item.icon = 'icon-quxiaoquanping_huaban'
      item.title = '取消全屏'
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      }
      item.icon = 'icon-quanping1'
      item.title = '全屏'
    }
    let navList = this.state.navList
    navList[index] = item
    this.setState({ navList })
  }
  render() {
    return (
      <>
        <div className='auther-info'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWD_JrB6oS2vTnFLLOGoHejQXGcaPubeKO3CvYKiV-pg&s" alt="" />
          <hgroup>
            <h1>星星的博客</h1>
            <h2>star's blog</h2>
          </hgroup>
        </div>
        <ul className='nav-list'>
          {
            this.state.navList.map((item, index) => {
              return (
                <li key={index}>
                  <div className='flex-c align-c' onClick={(e) => this.jump(item, index)}>
                    <i className={'iconfont ' + item.icon}></i>
                    <span>{item.title}</span>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </>
    )
  }
}