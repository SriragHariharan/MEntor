import axios from "axios";

export const signupUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let resp = await axios.post(process.env.REACT_APP_USER_SVC_ENDPOINT + "/signup", data)
            let jsonData = resp.data;
            resolve(jsonData);      
        } catch (error) {
            reject(error.message);
        }
    })
}

export const loginUser = (data) => {
    console.log(data)
    return new Promise(async(resolve, reject) => {
        try {
            let resp = await axios.post(process.env.REACT_APP_USER_SVC_ENDPOINT + "/login", data)
            let jsonData = resp.data;
            resolve(jsonData);      
        } catch (error) {
            reject(error);
        }
    })
}

export const googleSignupUser = (data) => {
    return new Promise(async(resolve, reject) => {
        try {
            let resp = await axios.post(process.env.REACT_APP_USER_SVC_ENDPOINT + "/signup/google", data)
            let jsonData = resp.data;
            resolve(jsonData);      
        } catch (error) {
            reject(error);
        }
    })
}
