const { Router } = require('express');
const { validateFile } = require('../middlewares/validateFile');
const { uploadFileController } = require('../controllers/uploads');

const router = Router();


router.post('/', validateFile, uploadFileController);



module.exports = router;