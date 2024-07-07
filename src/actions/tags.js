import * as api from "../api";

export const getTagsList = (language, navigate, first) => async (dispatch) => {
    try {
      const response = await api.getTagsList(language);
      dispatch({ type: "FETCH_TAGS_LIST", payload: response.data });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.fromAccessControl) {
        if (first) {
          if(error.response.data.isMobileDevice) {
            var currentTime = new Date();
            var currentHour = currentTime.getHours();
            var currentMinute = currentTime.getMinutes();
            if(currentHour>=10 && currentHour<13 || currentHour === 13 && currentMinute === 0) {
              console.log('Error:', error.response.data.message);
              navigate("/AccessAuth");
            }
            else{
              console.log('No access for mobile outside 10 AM to 1 PM.');
            }
          }
          else {
            console.log('Error:', error.response.data.message);
            navigate("/AccessAuth");
          }
        }
      } else {
        console.log(error);
      }
    }
};
  
export const getAllTags = (language) => async(dispatch) => {
    try {
        const response = await api.getAllTags(language);
        dispatch({ type: "FETCH_TAGS", payload: response.data });
    } catch (error) {
        console.log(error);
    }
}