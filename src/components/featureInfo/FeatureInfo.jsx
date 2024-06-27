import React from 'react'
import './featureInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';


function FeatureInfo(){

    return (
      <div className='featureInfo'>
        <div className="featuredItem">
            <span className="featuredTitle">
                    Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>


                <span className="featuredMoneyRate">-3.4 <ArrowDownward className='featuredIcon Negetive'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>



        <div className="featuredItem">
            <span className="featuredTitle">
                    Sale
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>


                <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon Negetive'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        


        <div className="featuredItem">
            <span className="featuredTitle">
                    Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2,415</span>


                <span className="featuredMoneyRate">+2.4 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        
        
      </div>
    )

}
export default FeatureInfo;