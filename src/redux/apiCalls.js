import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import toast from "react-hot-toast";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.success("Logged In Successfully")
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
    toast.error("Something went wrong")
  }
};



