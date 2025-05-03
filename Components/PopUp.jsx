import React, { useState, useEffect } from "react";

const PopUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState([]);

  const createDonation = async () => {
    try {
      const data = await donateFunction(donate.pId, amount);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const donationData = await getDonations(donate.pId);
      setAllDonationData(donationData);
    };
    fetchDonations();
  }, [donate.pId, getDonations]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{donate.title}</h3>
              <button
                className="text-black text-2xl font-bold ml-auto"
                onClick={() => setOpenModel(false)}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {donate.description}
              </p>
              <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                placeholder="Amount in ETH"
                required
                type="number"
                className="w-full h-12 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              {allDonationData.map((d, i) => (
                <p key={i} className="text-slate-600 text-base mb-2">
                  {i + 1}: {d.donation} ETH from{" "}
                  {d.donator.slice(0, 35)}...
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 font-bold uppercase px-6 py-2 text-sm mr-2 transition-all duration-150"
                type="button"
                onClick={() => setOpenModel(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-600 text-white font-bold uppercase text-sm px-6 py-2 rounded hover:bg-emerald-700 transition-all duration-150"
                type="button"
                onClick={createDonation}
              >
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background overlay */}
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default PopUp;
