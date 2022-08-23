const fcl = require("@onflow/fcl");
const config = require('../config/config.json');

const {FCL_SCRIPT} = require('../helpers/stats.helper');
fcl.config()
    .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS );

let issuedSupply = {
"Common":0,
"Ovation":0,
"Deluxe":0,
"TotalRecords":0
}

const countIssuedSupplyForAllTiers = async (data) => {
    //reset values
    issuedSupply = {
        "Common":0,
        "Ovation":0,
        "Deluxe":0,
        "TotalRecords":0
        }

    issuedSupply.TotalRecords = data.length;
    await data.map((record)=>{
     
        
              switch(record.tier)
            {
                case 'Common':
                    issuedSupply.Common=issuedSupply.Common+Number(record.IssuedSupply);
                    break;
                case 'Ovation':
                    issuedSupply.Ovation=issuedSupply.Ovation+Number(record.IssuedSupply);
                    break;
                case 'Deluxe':
                    issuedSupply.Deluxe=issuedSupply.Deluxe+Number(record.IssuedSupply);
                    break;
                                      
            }


    })
}

const getStats = async (req,res,next) => {

    const data = await fcl.send(
        [fcl.script(FCL_SCRIPT)]
    ).then(fcl.decode);
    // console.log("Stats: ", data);
       await  countIssuedSupplyForAllTiers(data);
       console.log("Stats", issuedSupply);

    res.status(200).json({issuedSupply});

}

module.exports = {getStats};