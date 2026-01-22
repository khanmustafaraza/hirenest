const { Router } = require("express");
const router = Router();

const jobCategoryController = require("../../controllers/jobcategorycontroller/jobCategoryController");

// categoryUpdateController,
// categoryDeleteController,

router.post("/register", jobCategoryController.addCategoryController);
router.post("/category-list", jobCategoryController.categoryListController);

module.exports = router;
