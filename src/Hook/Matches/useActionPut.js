import axios from 'axios';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSideBar } from '../../context/showSideBarContext';
import useActionGetOne from '../useActionGetOne';
import useActionListFullRanking from '../Ranking/useActionListFullRanking';
import useActionListFull from '../Stadiums/useActionListFull';
import moment from 'moment';
const useActionPut = (formik) => {

    const { id } = useParams();
    const [loadImage, setLoadImg] = useState(100);
    const [nameImageState, setnameImageState] = useState("");
    const { GetOne } = useActionGetOne("/api/match/list");

    const handleApiUpdate = async (api, id, values) => {
        try {
            await axios.put(`${api}/${id}`, values);
        } catch (error) {

            console.log(error);

        }


    }



    const [code, setCode] = useState(id);
    const [clubid, setclubid] = useState(id);

    // const [ItemsContent, setItemsContent] = useState([]);
    const [NameClubstate, setNameClubstate] = useState("");
    const [IdClubstate, setIDClubsstate] = useState(0);
    const [NameStadiumstate, setNameStadiumstate] = useState("");
    const [nameAway, setNameAway] = useState("");
    const [nameHome, setNameHome] = useState("");
    const [logoHome, setlogoHome] = useState("");
    const [logoAway, setlogoAway] = useState("");
    const [referee, setReferee] = useState("");
    const [round, setRoundmatch] = useState("");
    const [leg, setLeg] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [matchCode, setMatchCode] = useState("");
    const [clubIDHome, setclubIDHome] = useState(0);
    const [stadiumActive, setstadiumActive] = useState([]);
    const { listContentClub } = useActionListFullRanking("/api/table/list");
    const [stadiumIdHome, setstadiumIdHome] = useState(0);
    const [stadiumIdHomeName, setstadiumIdHomeName] = useState("");

    const {
        listContent,
    } = useActionListFull("/api/stadiums/list");
    function arrayToObject(arr) {
        const obj = {};
        for (const item of arr) {
            Object.assign(obj, item);
        }
        return obj;
    }

    const handleGeItemsStadium = useRef({});
    handleGeItemsStadium.current = async (codeClub) => {
        const s_items = await GetOne(codeClub);

        setNameClubstate(s_items.name)
        setIDClubsstate(s_items.codeClub);
        setclubid(s_items.id)
        setNameAway(s_items.clubAway.clubName.name)
        setNameHome(s_items.clubHome.clubName.name)
        setclubIDHome(s_items.clubHome.clubName.id)
        formik.setFieldValue("clubHome", s_items.clubHome)
        formik.setFieldValue("clubAway", s_items.clubAway)
        formik.setFieldValue("clubHome",  s_items.clubHome)
        formik.setFieldValue("matchDay",  s_items.matchDay ?? "")
        formik.setFieldValue("matchTime", s_items.matchTime  ?? "")
        formik.setFieldValue("roundmatch", s_items.roundmatch  ?? "")
        formik.setFieldValue("season", s_items.season ?? "")
        formik.setFieldValue("leg", s_items.leg ?? "")
        formik.setFieldValue("active", s_items.active)


        setlogoHome(s_items.clubHome.clubName.image)
        setlogoAway(s_items.clubAway.clubName.image)

        setNameStadiumstate(s_items.stadiumId == null ? s_items.stadiumId = "None" : s_items.stadiumId.name)
        setReferee(s_items.referee == null ? s_items.referee : s_items.referee.id)
        setRoundmatch(s_items.roundmatch)
        setLeg(s_items.leg);
        setDate(s_items.matchDay);
        setTime(s_items.matchTime);
        setMatchCode(s_items.matchCode);
        formik.setFieldValue("matchCode", s_items.matchCode)
        const listS = listContent.filter((items) => items.id === parseInt(s_items.clubHome.clubName.id));
        formik.setFieldValue("stadiumId", arrayToObject(listS));
        listS.map((items, index) => (
            setstadiumIdHomeName(items.name)
        ))
    }

    useEffect(() => {
        handleGeItemsStadium.current(code);
        const listS = listContent.filter((items) => items.id === parseInt(clubIDHome));
        listS.map((items, index) => (
            setstadiumIdHomeName(items.name)
        ))
        document.title = "Edit Clubs";
    }, [clubIDHome, code, listContent])

    return {
        loadImage,
        nameImageState,
        NameClubstate,
        IdClubstate,
        handleApiUpdate,
        code,
        id,
        NameStadiumstate,
        nameAway,
        nameHome,
        logoHome,
        logoAway,
        referee,
        round,
        leg,
        date,
        time,
        matchCode,
        clubIDHome,
        stadiumActive,
        stadiumIdHomeName
    }
};

export default useActionPut;