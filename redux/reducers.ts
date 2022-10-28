import { ActionType } from "../types";

export const liveResultReducer = (
  state = {
    data: null,
    loading: false,
    error: null,
  },
  action: ActionType
) => {
  const { type, payload } = action;

  switch (type) {
    case "LIVE_RESULT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LIVE_RESULT_SUCCESS":
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case "LIVE_RESULT_FAIL":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const TWODResultReducer = (
  state = {
    data: null,
    loading: false,
    error: null,
  },
  action: ActionType
) => {
  const { type, payload } = action;

  switch (type) {
    case "2D_RESULT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "2D_RESULT_SUCCESS":
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case "2D_RESULT_FAIL":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const historyReducer = (
  state = {
    data: null,
    loading: false,
    error: null,
  },
  action: ActionType
) => {
  const { type, payload } = action;

  switch (type) {
    case "HISTORY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "HISTORY_SUCCESS":
      return {
        ...state,
        data: payload,
        loading: false,
      };
    case "HISTORY_FAIL":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
