import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Midterm from "../../Customhooks/Midterm";
import { toast } from "react-toastify";

const MidtermVerification = () => {
  const [midTerms, setmidTerms] = useState([]);
  const [state, setState] = useState([]);
  const { getMidTerms } = Midterm();

  useEffect(() => {
    const fetchData = async () => {
      const midTerms = await getMidTerms();
      setmidTerms(midTerms);
    }

    fetchData();
  }, []);
  const productContract = useSelector(state => state.addContract.productContract);
  return (
    <>
      <img
        src="/images/Bg.jpg"
        className="w-screen h-screen blur-lg opacity-60 fixed z-0"
        alt=""
      ></img>
      <div className="flex flex-col place-items-center gap-4 p-8 z-10 relative ">
        <div className="font-bold text-6xl">Midterm verification</div>
        <table className=" w-full mx-2  h-auto rounded-lg overflow-hidden">
          <thead className=" text-white text-xl bg-black border-green-800 border-2">
            <tr>
              <th>ID</th>
              <th>Progress</th>
              <th>Months</th>
              <th>Applied</th>
            </tr>
          </thead>
          <tbody className="text-center font-semibold bg-white">
            {midTerms.map((midTerm) => (
              <tr key={midTerm.id} className="border-2 border-green-800">
                <td>{midTerm.id}</td>
                <td>{midTerm.progress}</td>
                <td>{midTerm.timeofApplied}</td>
                <td>
                  {midTerm.isApproved ? (
                    <button disabled>Approved</button>
                  ) : (
                    <button onClick={async () => {
                      const date = new Date();
                      const time = date.toLocaleString();
                      await productContract.approveMidTerm(midTerm.id, time);
                      productContract.once("approveMidTermEvent", () => {
                        setState("Approved")
                        toast.success("MidTerm approved successfully");
                      });
                    }}>{state}</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MidtermVerification;
