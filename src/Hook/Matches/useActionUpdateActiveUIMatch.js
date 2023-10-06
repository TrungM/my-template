import axios from 'axios';

const useActionUpdateActiveUIMatch = () => {
    const handleApiUpdateActiveUIMatch = async (api, id) => {
        try {
            await axios.put(`${api}/${id}`);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        handleApiUpdateActiveUIMatch
    }
};

export default useActionUpdateActiveUIMatch;