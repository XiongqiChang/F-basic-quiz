import $ from "jquery";
import axios from "axios";
const url = "http://localhost:8080/users/1/educations";

export const educationList = async () => {
    const educations = await axios.get(url);
    const data = educations.data;
    data.forEach(element => {
        $("#myeducation").append(
            `<div> 
          <div class="year">${element.year}</div>  
          <div class="educationdescription">
            <span class="title">${element.title} </span> <br>
            <span>${element.description} </span>
          </div>
         </div>`)
    });
}