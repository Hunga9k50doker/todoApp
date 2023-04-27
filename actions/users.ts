import { fectUsers } from "@/apis";
export const getusers = async () => {
  try {
    const { data } = await fectUsers();
    return data;
  } catch (error) {
    console.log(error);
  }
};
