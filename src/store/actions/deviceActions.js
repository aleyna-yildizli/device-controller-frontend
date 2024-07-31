import API from "../../api";


export const SET_SELECTED_DEVICE = 'SET_SELECTED_DEVICE';
export const GET_DEVICES = 'GET_DEVICES';
export const ADD_DEVICE = 'ADD_DEVICE';
export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export const DELETE_DEVICE = 'DELETE_DEVICE';




export const setSelectedDevice = (device) => ({
  type: SET_SELECTED_DEVICE,
  payload: device
});


export const getDevices = () => async (dispatch) => {
  try {
    const { data } = await API.get('/devices');
    dispatch({
      type: GET_DEVICES,
      payload: data,
    });
  } catch (error) {
    console.error('Error getting devices:', error);
  }
};


export const addDevice = (device) => async (dispatch) => {
  try {
    console.log('API Object:', API); // Burada API nesnesini kontrol edin
    const { data } = await API.post('/devices', device);
    dispatch({
      type: ADD_DEVICE,
      payload: data,
    });
  } catch (error) {
    console.error('Error adding device:', error);
  }
};

export const updateDevice = (device) => async (dispatch) => {
  try {
    const { data } = await API.put(`/devices/${device.id}`, device);
    dispatch({
      type: UPDATE_DEVICE,
      payload: data,
    });
  } catch (error) {
    console.error('Error updating device:', error);
  }
};

export const deleteDevice = (id) => async (dispatch) => {
  try {
    await API.delete(`/devices/${id}`);
    dispatch({
      type: DELETE_DEVICE,
      payload: id,
    });
    dispatch(getDevices());
  } catch (error) {
    console.error('Error deleting device:', error);
  }
};