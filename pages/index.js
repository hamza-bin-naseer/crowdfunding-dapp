import React, {useEffect,useState,useContext} from "react";
//Internal Imports
import { CrowdFundingContext } from "../Context/CrowdFunding";
import {Hero,Card,PopUp} from "../Components";
const index =()=>{
  const {
    titlData,
    getCampaigns,
    creatCampaign,
    donate,
    getUserCampaigns,
    getDonations,
  } =useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign]=useState();
  const [usercampaign, setUsercampaign]=useState();
  useEffect(()=>{
    const getCampaignsData =getCampaigns();
    const userCampaignsData =getUserCampaigns();
    return async ()=>{
      const allData =await getCampaignsData;
      const userData = await userCampaignsData;
      setAllcampaign(allData);
      setUsercampaign(userData);

    };
  },[]);

  const [openModel,setOpenModel] =useState(false);
  const [donateCampaign, setDonatecampaign] = useState();

  console.log(donateCampaign);
  return(
    <>
      <Hero titlData={titlData} createCampaign= {creatCampaign}/>
      <Card
        title ="All Listed Campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate ={setDonatecampaign}
        />
      <Card 
        title="your Created campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonatecampaign}
        />
      {openModel &&(
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
          />
      )}
    </>

  );

};
export default index;