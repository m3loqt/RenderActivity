import { Router } from "express";

const router = Router();

const FN = 'MEL ANGELO';
const LN = 'CORTES';
const AGE = '20';
const SE = 'mees.cortes.swu@phinmaed.com';



router.get('/firstname', (req, res) => {
    res.status(200).send(FN)
})


router.get('/lastname', (req, res) => {
    res.status(200).send(LN)
})

router.get('/age', (req, res) => {
    res.status(200).send(AGE)
})

router.get('/schoolemail', (req, res) => {
    res.status(200).send(SE)
})

router.get('/mydata', (req, res) => {
    res.status(200).send({"first_name": FN,  "last_name": LN, "age": AGE, "school_email": SE})
})

export default router;