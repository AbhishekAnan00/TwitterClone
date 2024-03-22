import axios from "axios";
import { USER_API_END_POINT } from "../Utils/Constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfile } from "../Redux/UserSlice";

const useGetUser = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/getprofile/${id}`, {
          withCredentials: true,
        });
        dispatch(getProfile(res.data.user));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);
};
export default useGetUser;
