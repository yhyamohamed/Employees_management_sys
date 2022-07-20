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

const put = async (url, data) => {
    try {
        const result =  await axios.put(url, data);
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

const destroy = async (url) => {
    try {
        const result = await axios.delete(url);
        return {
            success: true,
            result,
        }
    } catch (err) {
        let error = null;
        if (err.response) {
            error = err.response.data.message;
        } else if (err.request) {
            error = err.request;
        } else {
            error = err.message;
        }
        return {
            success: false,
            error
        }
    }
}


const APIService = {
    post,
    put,
    destroy,
}

export default APIService;