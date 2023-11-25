import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useActionDelete from '../useActionDelete';
import useActionCheckRef from '../Clubs/useActionCheckRef';

const useActionListNews = (api) => {
    const GetList = async (api, next) => {
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

    const { GetApiDelete } = useActionDelete("/api/news")


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
    const handleDeleteNews = async (id) => {
        const confirmed = window.confirm('Are you sure within your option ');
        if (confirmed) {
            await GetApiDelete(id);
            const newList = listContent.filter((items) => items.id !== id)
            setlistContent(newList);
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
        document.title = "List News";
    }, [api, next])
    
    return {
        handleDeleteNews,
        listContent,
        loading,
        handleNext,
        handlePrevious,
        next,
        totalPage,
        setNext
    
    }
};



export default useActionListNews;