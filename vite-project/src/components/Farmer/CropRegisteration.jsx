import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input.jsx";
import Button from "../Button.jsx";
import useCrop from "../../Customhooks/crops.jsx";

const CropRegisteration = () => {

  const { cropRegister } = useCrop();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ cropname, area, cultivation, timeforharvest, yieldperacre }) => {
    await cropRegister(cropname, area, cultivation, timeforharvest, yieldperacre);
  };

  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-full h-full blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className=" z-10 relative overflow-hidden">
        <div className="flex justify-center py-5  px-12 items-center w-full">
          <div className="w-4/5">
            <div className="flex justify-center items-center text-xl">
              <div className="font-bold text-4xl">Crop Registeration</div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cropname" className="font-bold">
                      Crop Name
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cropname"
                      placeholder="Enter crop name"
                      {...register("cropname", {
                        required: true,
                      })}
                    />
                    {errors.cropname && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="area" className="font-bold">
                      Plot/Land Address
                    </label>
                    <Input
                      className="bg-green-100"
                      id="area"
                      placeholder="Enter Address"
                      {...register("area", {
                        required: true,
                      })}
                    />
                    {errors.area && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="cultivation" className="font-bold">
                      Specify the area of cultivation in acres
                    </label>
                    <Input
                      className="bg-green-100"
                      id="cultivation"
                      placeholder="Enter no of acres of cultivation area"
                      {...register("cultivation", {
                        required: true,
                      })}
                    />
                    {errors.cultivation && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="timeforharvest" className="font-bold">
                      Time required till harvest
                    </label>
                    <Input
                      className="bg-green-100"
                      id="timeforharvest"
                      placeholder="Enter here"
                      {...register("timeforharvest", {
                        required: true,
                      })}
                    />
                    {errors.timeforharvest && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="yieldperacre" className="font-bold">
                      Expected yield per Acre
                    </label>
                    <Input
                      className="bg-green-100"
                      id="yieldperacre"
                      placeholder="Enter here"
                      {...register("yieldperacre", {
                        required: true,
                      })}
                    />
                    {errors.yieldperacre && (
                      <span className="text-red-500">
                        Pls enter all details
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex my-4">
                  <Button type="submit">Submit</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CropRegisteration;
