import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useActionDelete from '../useActionDelete';
import useActionCheckStadium from '../Clubs/useActionCheckStadium';

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
                return 1;
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
    const { GetApiDelete } = useActionDelete("/api/stadiums")

    const { getCheckStadiumsExist } = useActionCheckStadium();


    const [listContent, setlistContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [next, setNext] = useState(1);
    const [totalPage, settotalPage] = useState(0);


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
    const handleDeleteStadiums = async (id) => {
        const confirmed = window.confirm('Are you sure within your option ');
        const value = await getCheckStadiumsExist('/api/stadiums/check/', id);
        if (confirmed) {
            if (value) {
                alert('The stadium is active')
            } else {
                await GetApiDelete(id);
                const newList = listContent.filter((items) => items.id !== id)
                setlistContent(newList);
            }

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
        document.title = "List Stadiums";
    }, [api, next])

    return {
        handleDeleteStadiums,
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