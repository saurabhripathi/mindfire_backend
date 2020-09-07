const express = require('express');
const mastercontroller = require('../controllers/master')
const router = express.Router();
router.get('/v1/vegetables',mastercontroller.vegetable_details);
router.post('/v1/vegetables',mastercontroller.save_veg_master);
router.post('/v1/upload_image/:id',mastercontroller.upload.single('pics'),mastercontroller.upload_image);
router.get('/v1/get_image/:id',mastercontroller.get_image);
router.post('/v1/add_variant/:id',mastercontroller.add_varient);
router.post('/v1/change_availabilty',mastercontroller.change_availability);
router.post('/v1/edit_varient',mastercontroller.edit_varient);
router.post('/v1/edit_vegetable',mastercontroller.edit_vegetable);

module.exports = router;