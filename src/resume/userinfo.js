import $ from "jquery";
import axios from 'axios'
import {
    educationList
} from "./usereducation";
const url = "http://localhost:8080/users/1";


export const getUserInfo = async () => {
    const data = await (await axios.get(url)).data
    $("#useravatar").attr("src", data.avatar);
    $("#userage").text(data.age);
    $("#username").text(data.name);
    $("#description").text(data.description);
    educationList();
}