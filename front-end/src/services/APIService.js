import axios from "axios";

const post = async (url, data) => {
    try {
        const result =  await axios.post(url, data);
        return {
            success: true,
            result,
        }
    } catch (err) {
        let error=null
         if (err.response) {
           error = err.response.data.message
         } else if (err.request) {
           error = err.request
         } else {
           error =  err.message
         }
        return {
            success: false,
            error,
        };
    }
}


const APIService = {
    post
}

export default APIService;