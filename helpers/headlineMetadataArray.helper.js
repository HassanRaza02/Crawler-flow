const HEADLINE_DATA_ARRAY = `
import AFLNFT from 0x8f9231920da9af6d
pub fun main(address: Address) : [{String:AnyStruct}]{
    let account1 = getAccount(address)
    let acct1Capability =  account1.getCapability(AFLNFT.CollectionPublicPath)
                            .borrow<&{AFLNFT.AFLNFTCollectionPublic}>()
                            ??panic("could not borrow receiver reference ")

    var nftIds =   acct1Capability.getIDs()

    var arr : [{String:AnyStruct}] = []
    

    for nftId in nftIds {
        var nftData = AFLNFT.getNFTData(nftId: nftId)
        var templateData =  AFLNFT.getTemplateById(templateId: nftData.templateId)

        var immutableData = templateData.getImmutableData()

        var nftMetaData : {String:AnyStruct} = {}
        // nftMetaData["templateId"] =nftData.templateID;
        // nftMetaData["mintNumber"] =nftData.mintNumber;
        nftMetaData["headline"] =immutableData["headline"];


        arr.append(nftMetaData)
    }
    return arr

}`

module.exports = { HEADLINE_DATA_ARRAY };