const { Router } = require("express");
const router = Router();

const jobCategoryController = require("../../controllers/jobcategorycontroller/jobCategoryController");

// categoryUpdateController,
// categoryDeleteController,

router.post("/admin/job-category/register", jobCategoryController.addCategoryController);
router.get("/job-category/category-list", jobCategoryController.categoryListController);

module.exports = router;
