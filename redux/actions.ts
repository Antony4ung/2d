import axios from "axios";
import { Action, Dispatch } from "redux";

export const liveResultFetch = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "LIVE_RESULT_REQUEST",
    });

    const { data } = await axios.get(`${process.env.NEXT_BASE_URL}/live`);

    // console.log(data)

    dispatch({
      type: "LIVE_RESULT_SUCCESS",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "LIVE_RESULT_FAIL",
      payload: error?.message,
    });
  }
};

export const twoDResultFetch = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "2D_RESULT_REQUEST",
    });

    const { data } = await axios.get(`${process.env.NEXT_BASE_URL}/2d_result`);


    dispatch({
      type: "2D_RESULT_SUCCESS",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "2D_RESULT_FAIL",
      payload: error?.message,
    });
  }
};

export const hsitoryFetch = () => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: "HISTORY_REQUEST",
    });

    const { data } = await axios.get(`${process.env.NEXT_BASE_URL}/history`);


    dispatch({
      type: "HISTORY_SUCCESS",
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: "HISTORY_FAIL",
      payload: error?.message,
    });
  }
};
