import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import useActionDelete from '../useActionDelete';

const useActionListFull = (api) => {

    const GetList = async (api) => {
        // /api/stadiums/all
        try {
            const response = await axios.get(`${api}`, {});
            if (response.data) {
                return response.data;
            } else {
                return [];
            }
        } catch (error) {
            console.error(error);
        }
    }
   
    const {GetApiDelete}=useActionDelete("/api/stadiums")


    const [listContent, setlistContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const [new2, setNew2] = useState([]);
    const newArray = []

    const handleGetList = useRef({});
    handleGetList.current = async () => {
        setLoading(true);
        const c_list = await GetList(api);
        setlistContent(c_list);
        setLoading(false);
        c_list.map((items, index) => {
            return newArray.push(items.name)

        })
        // console.log(newArray)
        setNew2(newArray)

    }
    const handleDeleteStadiums= async (id)=>{
        const confirmed = window.confirm('Are you sure within your option ');

        if(confirmed){
            await  GetApiDelete(id);
            const newList= listContent.filter((items)=>items.id !==id)
            setlistContent(newList);
        }
    }
    useEffect(() => {
        handleGetList.current();
        document.title = "List Stadiums";
    }, [api])

    return {
        handleDeleteStadiums,
        listContent,
        loading,
        new2
    }
};

export default useActionListFull;