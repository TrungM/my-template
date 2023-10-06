import axios from 'axios';

const useActionUpdateActiveUI = () => {
    const handleApiUpdateActiveUIRanking = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        handleApiUpdateActiveUIRanking
    }
};

export default useActionUpdateActiveUI;