import $ from "jquery";
import axios from "axios";
import { educationList } from "./usereducation";

const url = "http://localhost:8080/users/1";

export const getUserInfo = async () => {
  // TODO GTB-4: - user相关可以单独拆出，这里的话user的处理和education的处理（层次划分）没有保持一致
  const data = await (await axios.get(url)).data;
  $("#useravatar").attr("src", data.avatar);
  $("#userage").text(data.age);
  $("#username").text(data.name);
  $("#description").text(data.description);
  educationList();
};
