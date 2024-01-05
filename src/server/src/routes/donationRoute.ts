
import { getAllDonations, getOneDonation, createDonations, editDonation, deleteDonation } from '../controllers/donationController';

const express  = require('express');
const router = express.Router();


console.log('Donation route is available');

router.get('/', getAllDonations);
router.get('/:id', getOneDonation);
router.post('/create', createDonations);
router.patch('/edit/:id', editDonation);
router.delete('/delete/:id', deleteDonation);



module.exports = router;
