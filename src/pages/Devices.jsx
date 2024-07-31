import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddDeviceModal from "../components/form/AddDeviceModal";
import {
  setSelectedDevice,
  getDevices,
  deleteDevice,
} from "../store/actions/deviceActions";

const Devices = () => {
  const devices = useSelector((state) => state.devices.devices) || [];
  const selectedDevice = useSelector((state) => state.devices.selectedDevice);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevices());
  }, [dispatch]);

  const handleShow = () => {
    setIsEdit(false);
    dispatch(setSelectedDevice(null));
    setShow(true);
  };

  const handleEditShow = (device) => {
    console.log("Selected device:", device); // Ekleyin
    setIsEdit(true);
    dispatch(setSelectedDevice(device));
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    if (selectedDevice) {
      dispatch(setSelectedDevice(null));
    }
  };

  const handleDelete = (device) => {
    dispatch(deleteDevice(device.id));
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-4xl font-bold my-6">Devices</h1>
      <div className="w-full max-w-4xl flex flex-wrap justify-between gap-4 mb-4">
        <div className="w-full bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col justify-between items-center">
            <FontAwesomeIcon
              icon={faPlus}
              className="text-sky-500 cursor-pointer"
              onClick={handleShow}
            />
            <h2 className="text-xl text-sky-500 font-semibold">
              Add New Device
            </h2>
          </div>
        </div>
        {devices.map((device) => (
          <div
            key={device.id}
            className="w-full bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">
                {device.brand} {device.model}
              </h2>
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faEdit}
                  className="text-sky-500 cursor-pointer"
                  onClick={() => handleEditShow(device)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-sky-500 cursor-pointer"
                  onClick={() => handleDelete(device)}
                />
              </div>
            </div>
            <p>Serial Number: {device.serialNumber}</p>
            <p>Purchase Date: {device.purchaseDate}</p>
            <p>Warranty Status: {device.warrantyStatus}</p>
          </div>
        ))}
      </div>
      <AddDeviceModal
        isOpen={show}
        toggle={handleClose}
        isEdit={isEdit}
        selectedDevice={selectedDevice}
      />
    </div>
  );
};

export default Devices;
