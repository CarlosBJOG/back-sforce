const { response } = require('express');

const validateFile = (req, res = response, next) => {
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.archivo) return  res.status(400).json({msg: 'no hay archivos que subir - archivo'});
    next();
}

module.exports = {
    validateFile
}