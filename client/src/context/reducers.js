import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  TOGGLE_SIDEBAR,
} from "./actions";
import { initialState } from "./AppContext";

export const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertType: "error",
        alertText: "Please provide all fields",
      };
    }
    case CLEAR_ALERT: {
      return { ...state, showAlert: false, alertText: "", alertType: "" };
    }
    case REGISTER_USER_BEGIN: {
      return { ...state, isLoading: true };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: "success",
        alertText: "User Created! Redirecting...",
      };
    }
    case REGISTER_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "error",
        alertText: action.payload.msg,
      };
    }
    case LOGIN_USER_BEGIN: {
      return { ...state, isLoading: true };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful! Redirecting...",
      };
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "error",
        alertText: action.payload.msg,
      };
    }
    case TOGGLE_SIDEBAR: {
      return { ...state, showSidebar: !state.showSidebar };
    }
    case LOGOUT_USER: {
      return {
        ...initialState,
        user: null,
        token: null,
        userLocation: null,
        jobLocation: null,
      };
    }
    default: {
      throw new Error(`no matching action ${action.type}`);
    }
  }
};
