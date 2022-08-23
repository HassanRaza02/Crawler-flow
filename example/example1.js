const fcl = require("@onflow/fcl")
fcl.config()
    .put("accessNode.api", "https://flow-access-mainnet.portto.io")

const templateIssuedSupply = async () => {

    var tScript = await fcl.send([
        fcl.script(`
            import AFLNFT from 0x8f9231920da9af6d

            pub fun main():{UInt64:AnyStruct}{
            let tempates = AFLNFT.getAllTemplates()

            var dict:{UInt64:AnyStruct}= {}
            
            for template in tempates.length{
                let templatedata = AFLNFT.getTemplateById(templateId: template)
                let immutableData = templatedata.getImmutableData()
                var nftMetaData: {String:AnyStruct}={}

                nftMetaData["tier"]= immutableData["tier"]
                nftMetaData["IssuedSupply"] = templatedata.issuedSupply
                dict.insert(key: template, nftMetaData)
            }

            return dict

        }`
        )
    ]).then(fcl.decode);
    // console.log(tScript);
    console.log(tScript);


}
templateIssuedSupply()