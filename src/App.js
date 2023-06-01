import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/app.scss";

import MainView from "./pages/mainView/MainView.jsx";

import List from "./pages/article/List.jsx";
import Article from "./pages/article/Article.jsx";
import Message from "./pages/message/Message.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerBg: null,
      bg: Math.ceil(Math.random() * 9),
    };
  }

  componentDidMount() {
    this.changeHeaderBg();
  }

  // 改变头部背景
  changeHeaderBg = (bg) => {
    setInterval(() => {
      let bg = this.state.bg;
      if (bg > 9) bg = 0;
      this.setState({
        bg: ++bg,
      });
    }, 10000);
  };

  render() {
    return (
      <BrowserRouter>
        <header
          id="header"
          ref={(ref) => (this.headerBg = ref)}
          className={"bg" + this.state.bg}
        >
          <MainView />
        </header>
        <section id="container">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/article" element={<Article />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
