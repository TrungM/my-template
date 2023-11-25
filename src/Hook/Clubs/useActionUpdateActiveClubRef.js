import axios from 'axios';

const useActionUpdateActiveClubRef = () => {
    const handleApiUpdateActiveUIClubs= async (api, season) => {
        try {
            await axios.put(`${api}/${season}`);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        handleApiUpdateActiveUIClubs
    }
};

export default useActionUpdateActiveClubRef;