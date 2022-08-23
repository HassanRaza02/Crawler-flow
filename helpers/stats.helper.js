const FCL_SCRIPT = `import AFLNFT from 0x8f9231920da9af6d
pub fun main(): [{String:AnyStruct}]{
    let tempates = AFLNFT.getAllTemplates()
    var arr : [{String:AnyStruct}] = []
    var i = 1
    while i< tempates.length {
        let templatedata = AFLNFT.getTemplateById(templateId: UInt64(i))
        let immutableData = templatedata.getImmutableData()
        var nftMetaData : {String:AnyStruct} = {}
        nftMetaData["tier"]= immutableData["tier"]
        nftMetaData["IssuedSupply"] = templatedata.issuedSupply
        arr.append(nftMetaData)
        i = i+1
    }
    return arr
}`;

module.exports = {FCL_SCRIPT}