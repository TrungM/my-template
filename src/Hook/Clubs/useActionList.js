import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useActionDelete from '../useActionDelete';
import useActionPutActiveStadium from './useActionPutActiveStadium';

const useActionList = (api) => {

    const GetList = async (api, next) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}?page=${next}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }
    const GetTotalPage = async (api) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}/totalPage`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }
    // const GetStadiumDelete = async (id) => {
    //     try {
    //        await axios.delete(`/api/stadiums/${id}`, {});

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    const { GetApiDelete } = useActionDelete("/api/clubs")


    const [listContent, setlistContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState(1);
    const [totalPage, settotalPage] = useState(0);
    const { handleApiUpdateActive } = useActionPutActiveStadium();

    const handleGetList = useRef({});
    handleGetList.current = async (next) => {
        setLoading(true);
        const c_list = await GetList(api, next);
        GetTotalPage(api).then((items) => {
            settotalPage(items);

        });
        setlistContent(c_list);
        setLoading(false);

    }
    const handleDeleteClubs = async (id, stadiumID) => {
        const confirmed = window.confirm('Are you sure within your option ');

        if (confirmed) {
            await GetApiDelete(id);
            const newList = listContent.filter((items) => items.id !== id)
            setlistContent(newList);
            handleApiUpdateActive("/api/stadiums/activereset", stadiumID.id);
            // console.log(stadiumID.id)
        }
    }

    const handleNext = () => {
        setNext((next) => next + 1);

    }
    const handlePrevious = () => {
        setNext((next) => next - 1);

    }
    useEffect(() => {
        handleGetList.current(next);
        document.title = "List Clubs";
    }, [api, next])

    return {
        handleDeleteClubs,
        listContent,
        loading,
        handleNext,
        handlePrevious,
        next,
        totalPage,
        setNext

    }
};

export default useActionList;