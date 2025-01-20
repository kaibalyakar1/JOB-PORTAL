import { Webhook } from "svix";

import User from "../models/user.model.js";

//API CONTROLER FUNCTION TO MANAGE CLERK USER WITH DATABASE

export const clerWebHook = async (req, res) => {
  try {
    const whook = new Webhook(process.env.WEBHOOK_SECRET);
    await whook.verify(JSON.stringify(req.body), {
      svix_id: req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    //getting data from req.body

    const { data, type } = req.body;

    //switch case for webhook type
    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          enail: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };

        await User.create(userData);
        res.json({ success: true, message: "User created successfully" });
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({ success: true, message: "User deleted successfully" });
        break;
      }

      case "user.updated": {
        const userData = {
          enail: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
        };

        await User.findOneAndUpdate(data.id, userData);
        res.json({ success: true, message: "User updated successfully" });
        break;
      }

      default: {
        break;
      }
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};
