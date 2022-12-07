import { Router } from "express";

const pageRouter = Router();

pageRouter.get("", (req, res) => {
    res.sendFile("../");
});

export default pageRouter;
