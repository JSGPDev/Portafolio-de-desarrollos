import data from "../constants/data/data.json";

const GetData = async () => {
  try {
    console.log({ error: false, data: data });
    return { error: false, data: data };
  } catch (error) {
    console.error({ error: true, data: error.message });
    return { error: true, data: error.message };
  }
};

export default GetData;
