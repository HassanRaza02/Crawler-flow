const templatesHelper = require('../helpers/templates.helper');

module.exports.findGenesisBalls = async (req, res, next) => {

    result = await templatesHelper.updateGenesisBallsRecords();
    
   if (result.error) res.status(400).json({success: false, error} )
   else
   res.status(200).json({message: "Successfully Updated Records"});

}

module.exports.getAllGenesisRecords = (req, res, next) => {
    
}

module.exports.generateGenesisRecordCsv = (req, res, next) => {
    
}