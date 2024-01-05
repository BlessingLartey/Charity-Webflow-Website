const express = require('express');
const Donation = require('../models/donationModel');
const app = express();

app.use(express.json());



export async function createDonations(req: any, res: any) {
    try {

        const donation = await Donation.create(req.body)
        return res.status(200).json({
            message: "Donations created successfully",
            donation: donation});

    } catch (error) {
        console.error(error);
        return res.status(500).json({message: error});
    }
}


export async function getAllDonations(req: any, res: any) {
    try {
        const result = await Donation.find({});
        return res.status(200).json({
            message: "Donations retrieved",
            customers: result
      });

    }
  catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  }


  export async function getOneDonation(req: any, res: any) {
    try {
        const {id} = req.params;
        const result = await Donation.findById(id);
        return res.status(200).json({
            message: "Donations retrieved",
            customers: result
      });

    }
  catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  }



  export async function editDonation(req: any, res: any) {
    try {
        const {id} = req.params;
        const result = await Donation.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({message: `Cannot find any donation with id: ${id}` });
        }
        res.status(200).json({
            message: "Donations edited successfully",
            customers: result
      });

    }
  catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
}



export async function deleteDonation(req: any, res: any) {
    try {
        const { id } = req.params;
        const result = await Donation.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: `Cannot find any donation with id: ${id}` });
        }

        return res.status(200).json({
            message: "Donation deleted successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

