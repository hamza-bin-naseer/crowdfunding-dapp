import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title, userWallet }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  console.log("userWallet:", userWallet); // Log user wallet
  console.log("All Campaigns:", allcampaign); // Log all campaigns

  // Filter campaigns created by the user
  const myCampaigns = userWallet
    ? allcampaign?.filter((c) => {
        console.log("Campaign owner:", c.owner, "User Wallet:", userWallet); // Log owner and wallet comparison
        return c.owner?.toLowerCase() === userWallet.toLowerCase();
      })
    : [];

  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 lg:py-12">
      {/* All Campaigns Section */}
      <p className="pb-8 text-3xl font-bold text-gray-800">{title}</p>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allcampaign?.map((campaign, i) => (
          <div
            key={i}
            onClick={() => {
              setDonate(campaign);
              setOpenModel(true);
            }}
            className="cursor-pointer border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-white"
          >
            <img
              src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg"
              className="w-full h-48 object-cover rounded-t-lg"
              alt="Campaign"
            />
            <div className="p-4">
              <p className="text-xs font-semibold text-gray-500 mb-1">
                Days Left: {daysLeft(campaign.deadline)}
              </p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {campaign.title}
              </h2>
              <p className="text-gray-600 mb-2 text-sm">
                {campaign.description.length > 60
                  ? campaign.description.slice(0, 60) + "..."
                  : campaign.description}
              </p>
              <p className="text-sm text-gray-700 font-medium">
                🎯 Target: {campaign.target} ETH
              </p>
              <p className="text-sm text-green-700 font-medium">
                ✅ Collected: {campaign.amountCollected || 0} ETH
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* My Campaigns Section */}
      {myCampaigns?.length > 0 && (
        <>
          <p className="pt-20 pb-8 text-3xl font-bold text-gray-800">
            My Created Campaigns
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myCampaigns.map((campaign, i) => (
              <div
                key={`my-${i}`}
                onClick={() => {
                  setDonate(campaign);
                  setOpenModel(true);
                }}
                className="cursor-pointer border rounded-lg shadow-md transition-transform duration-300 hover:scale-105 bg-white"
              >
                <img
                  src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg"
                  className="w-full h-48 object-cover rounded-t-lg"
                  alt="Campaign"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold text-gray-500 mb-1">
                    Days Left: {daysLeft(campaign.deadline)}
                  </p>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {campaign.title}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm">
                    {campaign.description.length > 60
                      ? campaign.description.slice(0, 60) + "..."
                      : campaign.description}
                  </p>
                  <p className="text-sm text-gray-700 font-medium">
                    🎯 Target: {campaign.target} ETH
                  </p>
                  <p className="text-sm text-green-700 font-medium">
                    ✅ Collected: {campaign.amountCollected || 0} ETH
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
