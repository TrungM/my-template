import { Fragment, useEffect } from "react";
import Home from "./page/Home";
import './firebase/config';
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./page/Form/Login";
import Table from "./user/page/Table";
import Main from "./user/page/Main";
import Fixture from "./user/page/Fixture";
import Result from "./user/page/Result";
import Player from "./user/page/Player";
import News from "./user/page/News";
import useLoginAdmin from "./Hook/Login/useLoginAdmin";
import NewDetail from "./user/page/NewDetail";
import SignIn from "./user/page/Sigin";
import Register from "./user/page/Register";
import MatchDetail from "./user/page/MatchDetail";

function App(props) {

  return (

    <Fragment>
      <Routes>
        <Route path="/admin/login" element={<div> <Login></Login></div>} />
        <Route path="/admin/*" element={
          props.isLogin  === 'true' ? <Home></Home> : <Navigate to='/admin/login' />
        } />
        <Route path="/" element={<Main></Main>} />
        <Route path="/tables" element={<Table></Table>} />
        <Route path="/fixtures" element={<Fixture></Fixture>} />
        <Route path="/results" element={<Result></Result>} />
        <Route path="/players" element={<Player></Player>} />
        <Route path="/news" element={<News></News>} />
        <Route path="/news/:id" element={<NewDetail></NewDetail>} />
        <Route path="/login" element={<SignIn></SignIn>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/match/:id" element={<MatchDetail></MatchDetail>} />
      </Routes>
    </Fragment>

  );
}

export default App;
