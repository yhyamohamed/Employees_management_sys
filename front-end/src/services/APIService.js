import axios from "axios";

const post = async (url, data) => {
    try {
        const result =  await axios.post(url, data);
        return {
            success: true,
            result,
        }
    } catch (e) {
        console.log(e)
        return {
            success: false,
            e,
        };
    }
}


const APIService = {
    post
}

export default APIService;