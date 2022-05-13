import * as React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Notfound from "./components/NotFound/Notfound";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Culture from "./components/Culture/Culture";
import PostDetail from "./components/PostDelail/PostDetail";


function App() {
  return (
    <div className="App">
      <h1>Welcome to falak BAI AR Routing Page </h1>
      
  
      < BrowserRouter>
      <Header></Header>
      <Routes>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/post/:postId" element={<PostDetail/>}></Route>
         <Route path="/friends" element={<Friends />} />
         <Route path="/friend/:friendId" element={<FriendDetail />} />
         <Route exact path="/about" element={<About/>}></Route>
         <Route exact path="/about/culture" element={<Culture/>}></Route>
         <Route exact path="/" element={<Home />}></Route>
         <Route path="*" element={<Notfound/>}></Route>
         
      </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
