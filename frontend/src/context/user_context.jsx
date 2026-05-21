import React, { useContext, useReducer, useEffect } from "react";
import customFetch from "../utils/customFetch"
import reducer from "../reducers/user_reducer";
import axios from "axios";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: true,
  errorMessage: null,
  authError: null,
  authLoading: false
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const fetchUser = async () => {
    try {
      const res = await customFetch().get("/api/v1/auth/get-user")
      if (res.statusText === "OK") {
        dispatch({ type: "GET_USER", payload: res.data.user })
      } else {
        dispatch({ type: "GET_USER", payload: null })
      }
      } catch (err) {
        dispatch({ type: "GET_USER", payload: null })
      } finally {
        dispatch({ type: "TOGGLE_LOADING" });
      }

    }

  const registerUser = async (userInfo) => {

   try {
      await axios.post("http://localhost:5000/api/v1/auth/register", userInfo, {withCredentials: true}).then((response) => {
        const {user, accessToken} = response.data;
        dispatch({ type: "REGISTER_USER", payload: user });
        localStorage.setItem("user", JSON.stringify({...user, accessToken}));
        
      })  
   } catch (error) {
    console.log(error)
    return null
   }
  }

  // this handles the information from the form and decides whether to login or register the user based on the mode
  const authAction = async ({ request }) => {

    const formData = await request.formData();
    const mode = formData.get('mode')

    if (mode === 'login') {
      // login logic
      const email = formData.get("email")
      const password = formData.get("password");
      if(email !== "" && password !== "") {
        try {
          await loginUser({ email, password })
          return null
        } catch (error) {
          console.log("hello")
          return null;
        }
      } else {
        dispatch({type: "SET_AUTH_ERROR", payload: "Please enter both email and password" });
        return null
      }
     
    } else if (mode === 'register') {

      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const email = formData.get("email");
      const password = formData.get("password");

      if(!firstName || !lastName || !email || !password) {
        console.log("invalid credentials")
        return null
      } else {
        await registerUser({firstName, lastName, email, password})
        return null;
      } 
    }
  }

  const updateUserProfile = async (userInfo) => {
    try {
      const response = await customFetch(state.user.accessToken).post(
        "/api/v1/profile",
        userInfo,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  const loginUser = async (userInfo) => {
    try {
      await axios.post("http://localhost:5000/api/v1/auth/login", userInfo, {withCredentials: true}).then((response) => {
        const {user, accessToken} = response.data;
        dispatch({ type: "LOGIN_USER", payload: user });
        localStorage.setItem("user", JSON.stringify({...user, accessToken}));
      })  
      return redirect("/")
   } catch (error) {
      return dispatch({ type: "SET_AUTH_ERROR", payload: "Invalid email or password" });    
   }
  }

  const logoutUser = async () => {
    try {
      await axios.post("http://localhost:5000/api/v1/auth/logout", {}, {withCredentials: true}).then((response) => {
        if (response.status === 202) {
          dispatch({ type: "LOGOUT_USER" });
          localStorage.removeItem("user");
        }
      })

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UserContext.Provider value={{ ...state, fetchUser, registerUser, authAction, loginUser, updateUserProfile, logoutUser }}>
      {children}
    </UserContext.Provider>
  );

}

export const useUserContext = () => {
  return useContext(UserContext);
};