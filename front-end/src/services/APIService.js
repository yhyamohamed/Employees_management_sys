import axios from "axios";

const get = async (url, token) => {
    try {
        const result = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {
            success: true,
            result,
        }
    } catch (err) {
        console.log(err);
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

const post = async (url, data, token) => {
    try {
        console.log(data)
        const result =  await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {
            success: true,
            result,
        }
    } catch (err) {
        console.log(err);
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

const put = async (url, data, token) => {
    try {
        console.log(data,url)
        const result =  await axios.put(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return {
            success: true,
            result,
        }
    } catch (err) {
        console.log(err)
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

const destroy = async (url, token) => {
    try {
        const result = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
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
    get,
    post,
    put,
    destroy,
}

export default APIService;