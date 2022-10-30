const { Router } = require("express");
const { select, create, update, remove } = require("./Student.service");

const studentRouter = Router();

//select
studentRouter.get("/", async(req, res) => {
    const result = await select();
        res.send({data: result});
});    

//create
studentRouter.post("/", async(req, res) => {
    const student = req.body;
    const result = await create(student);
    res.send({data: result});
});

//update
studentRouter.patch("/:id", async(req, res) => {
    const id = req.params.id;
    const student = req.body;
    const result = await update(id, student);
    res.send({data: result});
});

//delete
studentRouter.delete("/:id", async(req, res) => {
    const id = req.params.id;
    const result = await remove(id);
    res.send({data: result});
    
});

module.exports = { studentRouter };