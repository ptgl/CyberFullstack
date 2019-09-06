import axios from "axios"
const setHeaders = (params)=>{
    const token = params.token;
    console.log(token)
    if(token){
        axios.defaults.headers.common['token'] = token;
    }else{
        delete axios.defaults.headers.common['token']
    }
}

export default setHeaders;