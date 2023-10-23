import commonAxios from "./../../../lib/coomAxios";
export const getUsers = (id, name) => {
  const params = {
    id: id,
    name: name,
  };
  try {
    const resp = commonAxios.get("/users", {
      params: params,
    });
    return resp.data;
  } catch (error) {
    return [];
  }
};
