const GENESIS_BALL = `
    import AFLNFT from 0x8f9231920da9af6d

    pub fun main(account: Address):[UInt64]{
        let account1 = getAccount(account)
        let acct1Capability =  account1.getCapability(AFLNFT.CollectionPublicPath)
                                .borrow<&{AFLNFT.AFLNFTCollectionPublic}>()
                                ??panic("could not borrow receiver reference ")
        let nftIds =  acct1Capability.getIDs()
        var dict :[UInt64] = []
        
        for nftId in nftIds {
            var nftData = AFLNFT.getNFTData(nftId: nftId)
            var templateDataById =  AFLNFT.getTemplateById(templateId: nftData.templateId)
            var nftMetaData : {String:AnyStruct} = {}
            
            nftMetaData["templateId"] = nftData.templateId
            // nftMetaData["templateData"] = templateDataById;
            // dict.insert(key: nftId,nftMetaData)
            dict.append(nftData.templateId)
        }
        return  dict
}
`

module.exports = { GENESIS_BALL };