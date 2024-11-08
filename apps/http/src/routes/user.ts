import { Router } from "express";
import { incidentRouter } from "./reporting.js";
import { contactRouter } from "./contacts.js";

export const router = Router();  


router.post("/signup", (req, res) => {
  
});

router.post("/signin", (req, res) => {
  
});


router.use('/' , incidentRouter)

router.use('/' , contactRouter)








// router.get("/location/tracking/:userId" , (req,res) =>{

// })

// router.post("/location/share" , (req,res) =>{

// })