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
  }

  componentDidMount() {

  }


  render() {
    return (
      <BrowserRouter>
        <MainView />
        <section id="container">
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/article" element={<Article />} />
            <Route path="/message" element={<Message />} />
            <Route path="/message/:page" element={<Message />} />
          </Routes>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
