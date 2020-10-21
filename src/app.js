import "./style/index.scss";
const axios = require("axios");
const url = "http://localhost:8080/hello";

const getInformation = async () => {
    const data = await axios.get(url).then(response => {
        console.log(response)
    })
   
}

getInformation()
export {getInformation}