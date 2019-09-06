import jwtDecoded from "jwt-decode";

const validateToken = ()=>{
    const token = localStorage.getItem("token");

    if(!token) return {status: false};

    const decoded = jwtDecoded(token);

    if(Date.now()/1000 > decoded.exp) return {status: false};

    return { status: true, decoded};

}

export default validateToken;