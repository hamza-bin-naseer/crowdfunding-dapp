import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";

const Hero = ({ titleData }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const { createCampaign } = useContext(CrowdFundingContext);

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(campaign);
      window.location.reload(); // This will refresh the page after successful creation
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="relative">
      <div className="relative h-[600px]">
        <img
          src="https://images.pexels.com/photos/3228766/pexels-photo-3228766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          className="object-cover w-full h-full"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col items-center justify-between xl:flex-row w-full">
              <div className="w-full max-w-xl mb-10 xl:mb-0 xl:pr-16 xl:w-7/12 text-white">
                <h2 className="text-4xl font-bold mb-4">Crypto King</h2>
                <p className="text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque.
                </p>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-center">Create Campaign</h3>
                <form onSubmit={createNewCampaign}>
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, title: e.target.value })
                    }
                    placeholder="Title"
                    required
                    type="text"
                    className="w-full h-12 px-4 mb-3 border rounded"
                  />
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, description: e.target.value })
                    }
                    placeholder="Description"
                    required
                    type="text"
                    className="w-full h-12 px-4 mb-3 border rounded"
                  />
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, amount: e.target.value })
                    }
                    placeholder="Target Amount"
                    required
                    type="text"
                    className="w-full h-12 px-4 mb-3 border rounded"
                  />
                  <input
                    onChange={(e) =>
                      setCampaign({ ...campaign, deadline: e.target.value })
                    }
                    required
                    type="date"
                    className="w-full h-12 px-4 mb-4 border rounded"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700"
                  >
                    Create Campaign
                  </button>
                  <p className="mt-2 text-sm text-gray-600 text-center">
                    Create your campaign to raise funds
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
