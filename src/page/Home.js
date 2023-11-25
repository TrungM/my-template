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
import AddNews from './Form/AddNews';
import ListNews from './Form/ListNews';
import EditNews from './Form/EditNews';
import ListPlayers from './Form/ListPlayers';
import AddPlayer from './Form/AddPlayer';
import ListPositions from './Form/ListPositions';
import EditPosition from './Form/EditPosition';
import AddPosition from './Form/AddPosition';
import ListFlags from './Form/ListFlags';
import AddFlag from './Form/AddFlag';
import EditFlag from './Form/EditFlag';
import EditPlayer from './Form/EditPlayer';
import EditTable from './Form/EditTable';
import ListReferees from './Form/ListReferees';
import EditReferee from './Form/EditReferee';
import AddReferee from './Form/AddReferee';
import ListMatchWeek from './Form/ListMatchWeek';


const Home = () => {

    return (
        <div className="wrapper">
            <SideBarProvider>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>} />
                    <Route path="/add-new-clubs" element={<div><AddClubs></AddClubs></div>} />
                    <Route path="/list-clubs" element={<ListClubs></ListClubs>} />
                    <Route path="/add-new-stadiums" element={<AddStadiums></AddStadiums>} />
                    <Route path="/list-stadiums" element={<ListStadiums></ListStadiums>} />
                    <Route path="/edit-stadiums/:id" element={<EditStadiums></EditStadiums>} />
                    <Route path="/edit-clubs/:id" element={<EditClubs></EditClubs>} />
                    <Route path="/edit-match/:id" element={<EditMatch></EditMatch>} />
                    <Route path="/create-season" element={<CreateSeason></CreateSeason>} />
                    <Route path="/managenment-season" element={<Season></Season>} />
                    <Route path="/choose-clubs/:id" element={<ChooseClubs></ChooseClubs>} />
                    <Route path="/table/:id" element={<Table></Table>} />
                    <Route path="/edit-table/:id/:season" element={<EditTable></EditTable>} />
                    <Route path="/schedules/:id" element={<Schedules></Schedules>} />
                    <Route path="/schedules/first/:id" element={<FirstLeg></FirstLeg>} />
                    <Route path="/schedules/return/:id" element={<ReturnLeg></ReturnLeg>} />
                    <Route path="/schedules/homepage/:id" element={<ListMatchWeek></ListMatchWeek>} />
                    <Route path="/clubs-active/:id" element={<ClubsActive></ClubsActive>} />
                    <Route path="/ui/season" element={<SeasonUI></SeasonUI>} />
                    <Route path="/add-news" element={<AddNews></AddNews>} />
                    <Route path="/list-news" element={<ListNews></ListNews>} />
                    <Route path="/edit-news/:id" element={<EditNews></EditNews>} />
                    <Route path="/list-players" element={<ListPlayers></ListPlayers>} />
                    <Route path="/add-new-players" element={<AddPlayer></AddPlayer>} />
                    <Route path="/edit-players/:id" element={<EditPlayer></EditPlayer>} />
                    <Route path="/list-positions" element={<ListPositions></ListPositions>} />
                    <Route path="/add-new-positions" element={<AddPosition></AddPosition>} />
                    <Route path="/edit-positions/:id" element={<EditPosition></EditPosition>} />
                    <Route path="/list-flags" element={<ListFlags></ListFlags>} />
                    <Route path="/add-new-flags" element={<AddFlag></AddFlag>} />
                    <Route path="/edit-flags/:id" element={<EditFlag></EditFlag>} />
                    <Route path="/list-referees" element={<ListReferees></ListReferees>} />
                    <Route path="/add-new-referee" element={<AddReferee></AddReferee>} />
                    <Route path="/edit-referees/:id" element={<EditReferee></EditReferee>} />
                </Routes>
            </SideBarProvider>
        </div>
    );  
};

export default Home;


