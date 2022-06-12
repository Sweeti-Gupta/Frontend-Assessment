import route from "./route";

export async function usersCountFetchMiddleWare(dispatch) {
  try {
    dispatch({ type: "USER_COUNT_LOADING" });
    const response = await fetch(route);
    const data = await response.json();
    dispatch({
      type: "USER_COUNT_COMPLETE",
      payload: { response: data },
    });
  } catch (error) {
    dispatch({ type: "USER_COUNT_ERROR", payload: { error } });
  }
}

export async function userFetchMiddleWare(dispatch, userId) {
  try {
    dispatch({ type: "LOADING" });
    const response = await fetch(`${route}/${userId}`);
    const { data } = await response.json();

    dispatch({
      type: "RESPONSE_COMPLETE",
      payload: { response: data },
    });
  } catch (error) {
    dispatch({ type: "ERROR", payload: { error } });
  }
}
