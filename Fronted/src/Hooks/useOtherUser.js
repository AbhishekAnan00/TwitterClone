import axios from "axios";
import { USER_API_END_POINT } from "../Utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUser } from "../Redux/UserSlice";

const useOtherUser = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/otheruser/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getOtherUser(res.data.otherUser));
      } catch (error) {
        console.error(error);
      }
    };
    fetchOtherUser();
  }, [id,dispatch]);
};
export default useOtherUser;
