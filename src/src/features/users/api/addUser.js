import commonAxios from "./../../../lib/coomAxios";
export const addUsers = (id, name) => {
  const params = {
    id: id,
    name: name,
  };
  try {
    const resp = commonAxios.get("/users", params);
    return resp.data;
  } catch (error) {
    return [];
  }
};
