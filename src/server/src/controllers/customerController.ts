// const Customer = require('../models/customerModel');


// export async function createCustomerController(req : any, res : any) {
//   try {

//     const existingCustomer = await Customer.findOne({
//       email: req.body.email.toLowerCase()
//     });

//     if (existingCustomer) {
//       return res.status(400).json({ message: 'Customer already exists' });
//     }

//     const result = await Customer.create(req.body);

//     if (result.acknowledged) {
//       res.status(201).json({ message: 'Customer created' });
//     } else {
//       throw new Error('Customer not created');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error });
//   }
// }




// export async function getCustomerController(req: any, res: any) {
//   try {
//     const {id} = req.params;
//     const result = await Customer.findById(id);

//     res.status(200).json({
//       message: "Customer retrieved",
//       customer: result
//     });

//   }
//  catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }




// export async function getCustomersController(req: any, res: any) {
//   try {

//     const result = await Customer.find({});
//     res.status(200).json({
//       message: "Customers retrieved",
//       customers: result
//     });

//   }
// catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }


