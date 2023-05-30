import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/app.scss'

import MainView from './pages/mainView/MainView.jsx'

import List from './pages/article/List.jsx'
import Article from './pages/article/Article.jsx'

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      headerBg: null,
      bg: Math.ceil(Math.random() * 9)
    }
  }

  componentDidMount () {
    this.changeHeaderBg()
  }

  // 改变头部背景
  changeHeaderBg = (bg) => {
    setInterval(() => {
      let bg = this.state.bg
      if (bg > 9) bg = 0
      this.setState({
        bg: ++bg
      })
    }, 10000)
  }

  render () {
    return (
      <React.Fragment>
        <header id='header' ref={(ref) => this.headerBg = ref} className={'bg' + this.state.bg}>
          <MainView />
        </header>
        <section id='container'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<List />} />
              <Route path='/article' element={<Article />} />
            </Routes>
          </BrowserRouter>
        </section>
      </React.Fragment>
    )
  }
}

export default App
