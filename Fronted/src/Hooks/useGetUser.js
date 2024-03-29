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
        console.log(res);
        dispatch(getProfile(res.data.user));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [id, dispatch]);
};
export default useGetUser;
