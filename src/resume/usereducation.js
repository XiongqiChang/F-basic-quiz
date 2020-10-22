import $ from "jquery";
import axios from "axios";
// TODO GTB-4: - 这里user id应该来源于url，而不是写死的
const url = "http://localhost:8080/users/1/educations";

export const educationList = async () => {
  const educations = await axios.get(url);
  const { data } = educations;
  // TODO GTB-4: - 请求和dom操作需要划分到不同方法中，不要耦合在一起
  data.forEach((element) => {
    // TODO GTB-3: - 使用参数的解构赋值进行优化
    // TODO GTB-3: + 正确使用了模版字符串
    $("#myeducation").append(
      `<div> 
          <div class="year">${element.year}</div>  
          <div class="educationdescription">
            <span class="title">${element.title} </span> <br>
            <span>${element.description} </span>
          </div>
         </div>`
    );
  });
};
