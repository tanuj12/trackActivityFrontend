import axios from "axios";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const postActivity = async (data) => {
  try {
    const response = await axios.post(
      `http://localhost:8090/activity`,
      data,
      axiosConfig
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getAllActivities = async () => {
  try {
    const response = await axios.get(
      `http://localhost:8090/activity/all`,
      axiosConfig
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const deleteActivity = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:8090/activity/` + id,
      axiosConfig
    );
    return response.data.id;
  } catch (e) {
    console.log(e);
  }
};

export { postActivity, getAllActivities, deleteActivity };
