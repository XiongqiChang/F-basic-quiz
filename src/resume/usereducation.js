import $ from "jquery";
import axios from "axios";
const url = "http://localhost:8080/users/1/educations";

export const educationList = async () => {
    const educations = await axios.get(url);
    const data = educations.data;
    data.forEach(element => {
        $("#myeducation").append(
            `<div> 
          <div>${element.year}</div>  
          <div>
            <span>${element.title} </span> 
            <span>${element.description} </span>
          </div>
         </div>`)
    });
}