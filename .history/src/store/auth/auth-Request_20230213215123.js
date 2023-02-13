const { default: axios } = require("../../api/axios");

export const requestAuthRegister = (data) => {
  console.log("dataaaaa:", data);
  return axios.post("/auth/register", {
    data,
  });
};
