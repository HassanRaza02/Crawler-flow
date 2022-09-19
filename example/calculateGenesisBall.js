const fcl = require("@onflow/fcl");
const t = require("@onflow/types");
const config = require("../config/config.json")

const connect = () => {
    fcl.config()
        .put("accessNode.api", config.ACCESS_NODE_API_ADDRESS_CURRENT)
    // .put("sdk.transport", transportGRPC)
    console.log("FCl connected .........");

}
connect();

let templateArrayCount = []
let genesisTemplateId = '129';
let templateCount = 0
const doGenesisTemplateId = async () => {

    var i = 1;
    var j = 1;

    do {
        do {
            let templateId = await getGenesisTemplateId(i)

            // if (templateId === genesisTemplateId) {
            //     templateCount++;
            // }

            i++;

        } while (i < 100)
        j++;
        i = 1;

    } while (j < 10);
    console.log(templateArrayCount);
    // console.log("total Genesi ball:", templateCount);

}

const getGenesisTemplateId = async (nftId) => {
    const script = await fcl.send([
        fcl.script(
            `
            import AFLNFT from 0x8f9231920da9af6d

            pub fun main(nftId: UInt64): [UInt64] {
                let templateAraay: [UInt64] = []
                    let nftData =  AFLNFT.getNFTData(nftId:nftId)
                    let templateId = nftData.templateId
                    templateAraay.append(templateId)
                return templateAraay
            } 
            `
        ),
        fcl.args([
            fcl.arg(String(nftId), t.UInt64)
        ])
    ]).then(fcl.decode)
    templateArrayCount.push(script[0])
}

doGenesisTemplateId();