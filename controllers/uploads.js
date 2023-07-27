
const { response } = require('express');
const { uploadFile } = require('../helpers/upload-file');

const uploadFileController = async (req, res = response) => {
    
    try{
        const nombre = await uploadFile(req.files, undefined, 'imgs' );
        res.json({nombre})
    }catch(msg){
        res.status(404).json({msg})
    }  
}

module.exports = {
    uploadFileController
}