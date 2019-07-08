import axios from "axios";
import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return dispatch => {
    return axios.post("/api/admin/Right/GetPointMenu").then(res => {
      const list = res.data.data;
      console.log(list);
      dispatch(changeList(list));
    });
  };
};
