const JobCategory = require("../../models/jobCategoryModel");

/* ================================
   CREATE CATEGORY
================================ */
const addCategoryController = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const exists = await JobCategory.findOne({ categoryName });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Category already exists",
      });
    }

    await JobCategory.create({ categoryName });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
    });
  } catch (error) {
    console.error("Add Category Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================================
   GET ALL CATEGORIES
================================ */
const categoryListController = async (req, res) => {
 
  try {
    const categories = await JobCategory.find().sort({ createdAt: -1 });

    
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    console.error("Category List Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================================
   UPDATE CATEGORY
================================ */
const categoryUpdateController = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        message: "Category name is required",
      });
    }

    const updatedCategory = await JobCategory.findByIdAndUpdate(
      req.params.id,
      { categoryName },
      { new: true },
    );

    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Update Category Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================================
   DELETE CATEGORY
================================ */
const categoryDeleteController = async (req, res) => {
  try {
    const deletedCategory = await JobCategory.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Delete Category Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  addCategoryController,
  categoryListController,
  categoryUpdateController,
  categoryDeleteController,
};
