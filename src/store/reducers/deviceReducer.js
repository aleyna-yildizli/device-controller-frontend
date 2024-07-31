import { SET_SELECTED_DEVICE, ADD_DEVICE, UPDATE_DEVICE, GET_DEVICES, DELETE_DEVICE } from '../actions/deviceActions';

const initialState = {
  selectedDevice: null,
  devices: [],
};

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_DEVICE:
      return {
        ...state,
        selectedDevice: action.payload,
      };
    case ADD_DEVICE:
      return {
        ...state,
        devices: [...state.devices, action.payload],
      };
    case UPDATE_DEVICE:
      return {
        ...state,
        devices: state.devices.map(device =>
          device.id === action.payload.id ? action.payload : device
        ),
      };
    case GET_DEVICES:
      return {
        ...state,
        devices: action.payload,
      };
    case DELETE_DEVICE:
      return {
        ...state,
        devices: state.devices.filter(device => device.id !== action.payload),
      };
    default:
      return state;
  }
};

export default deviceReducer;