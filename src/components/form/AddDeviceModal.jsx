import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedDevice,
  addDevice,
  updateDevice,
} from "../../store/actions/deviceActions";

const AddDeviceModal = ({ isOpen, toggle, isEdit }) => {
  const dispatch = useDispatch();
  const selectedDevice = useSelector((state) => state.devices.selectedDevice);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      serialNumber: "",
      brand: "",
      model: "",
      purchaseDate: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      if (isEdit && selectedDevice) {
        setValue("serialNumber", selectedDevice.serialNumber);
        setValue("brand", selectedDevice.brand);
        setValue("model", selectedDevice.model);
        setValue("purchaseDate", selectedDevice.purchaseDate);
      } else {
        reset({
          serialNumber: "",
          brand: "",
          model: "",
          purchaseDate: "",
        });
      }
    }
  }, [isOpen, isEdit, selectedDevice, setValue, reset]);

  const onSubmit = async (data) => {
    if (isEdit && selectedDevice) {
      const deviceToUpdate = { ...data, id: selectedDevice.id };
      dispatch(updateDevice(deviceToUpdate));
    } else {
      dispatch(addDevice(data));
    }
    toggle();
  };

  return (
    <Modal show={isOpen} onHide={toggle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Device" : "Add New Device"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="serialNumber" className="form-label">
                Serial Number*
              </label>
              <input
                type="text"
                id="serialNumber"
                placeholder="Cihazın seri numarasını giriniz"
                className="w-full p-2 border rounded bg-gray-50"
                {...register("serialNumber", {
                  required: "Seri numarası gereklidir",
                })}
              />
              {errors.serialNumber && (
                <p className="form-error">{errors.serialNumber.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="brand" className="form-label">
                Brand*
              </label>
              <input
                id="brand"
                type="text"
                className="w-full p-2 border rounded bg-gray-50"
                placeholder="Cihazın markasını giriniz"
                {...register("brand", {
                  required: "Cihaz markası gereklidir",
                })}
              />
              {errors.brand && (
                <p className="form-error">{errors.brand.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="model" className="form-label">
                Model*
              </label>
              <input
                id="model"
                type="text"
                className="w-full p-2 border rounded bg-gray-50"
                placeholder="Cihazın modelini giriniz"
                {...register("model", {
                  required: "Model bilgisi gereklidir",
                })}
              />
              {errors.model && (
                <p className="form-error">{errors.model.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="purchaseDate" className="form-label">
                Purchase Date*
              </label>
              <input
                id="purchaseDate"
                type="date"
                className="w-full p-2 border rounded bg-gray-50"
                {...register("purchaseDate", {
                  required: "Alış tarihi gereklidir",
                })}
              />
              {errors.purchaseDate && (
                <p className="form-error">{errors.purchaseDate.message}</p>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="px-3 py-2 bg-sky-500 text-white rounded-md hover:scale-105"
            type="submit"
          >
            {isEdit ? "Update" : "Add"}
          </button>
          <button
            className="px-3 py-2 bg-gray-500 text-white rounded-md hover:scale-105"
            onClick={toggle}
          >
            Cancel
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddDeviceModal;
