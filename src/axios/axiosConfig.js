import axios from 'axios'

const axiosConfig = axios.create(
    {
        baseURL: 'https://mapapi-lehuyknight.herokuapp.com',
        headers: {
            'content-type': 'application.json'
        }
    }
)


axiosConfig.interceptors.request.use(async (config)=>{
    return config;
})

axiosConfig.interceptors.request.use(reponse =>{
    if(reponse && reponse.data){
        return reponse.data
    }
    return reponse
}, (error)=>{
    throw error;
});

export default axiosConfig;