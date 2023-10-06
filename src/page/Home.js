import React, { Fragment, useEffect } from 'react';
import Navigation from './Navigation';
import SideBar from './SideBar';
import Footer from './Footer';
import { SideBarProvider, useSideBar } from '../context/showSideBarContext';
import { BrowserRouter as Outlet, Route, Routes, useNavigate, Switch, Router, useMatch } from 'react-router-dom';
import AddClubs from './Form/AddClubs';
import ListClubs from './Form/ListClubs';
import AddStadiums from './Form/AddStadiums';
import ListStadiums from './Form/ListStadiums';
import EditStadiums from './Form/EditStadiums';
import EditClubs from './Form/EditClubs';
import Season from './Season';
import CreateSeason from './Form/CreateSeason';
import ChooseClubs from './Form/ChooseClubs';
import Table from './Table';
import Schedules from './Schedules';
import ClubsActive from './ClubsActive';
import EditMatch from './Form/EditMatch';
import Dashboard from './Dashboard';
import FirstLeg from './FirstLeg';
import ReturnLeg from './ReturnLeg';
import SeasonUI from './data/SeasonUI';


const Home = () => {

    return (
        <div className="wrapper">
            <SideBarProvider>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                    <Route path="/add-new-clubs" element={<div><AddClubs></AddClubs></div>} />
                    <Route path="/list-clubs" element={<ListClubs></ListClubs>} />
                    <Route path="/add-new-stadium" element={<AddStadiums></AddStadiums>} />
                    <Route path="/list-stadiums" element={<ListStadiums></ListStadiums>} />
                    <Route path="/edit-stadiums/:id" element={<EditStadiums></EditStadiums>} />
                    <Route path="/edit-clubs/:id" element={<EditClubs></EditClubs>} />
                    <Route path="/edit-match/:id" element={<EditMatch></EditMatch>} />
                    <Route path="/create-season" element={<CreateSeason></CreateSeason>} />
                    <Route path="/managenment-season" element={<Season></Season>} />
                    <Route path="/choose-clubs/:id" element={<ChooseClubs></ChooseClubs>} />
                    <Route path="/table/:id" element={<Table></Table>} />
                    <Route path="/schedules/:id" element={<Schedules></Schedules>} />
                    <Route path="/schedules/first/:id" element={<FirstLeg></FirstLeg>} />
                    <Route path="/schedules/return/:id" element={<ReturnLeg></ReturnLeg>} />
                    <Route path="/clubs-active/:id" element={<ClubsActive></ClubsActive>} />
                    <Route path="/ui/season" element={<SeasonUI></SeasonUI>} />
                </Routes>
            </SideBarProvider>
        </div>
    );
};

export default Home;


