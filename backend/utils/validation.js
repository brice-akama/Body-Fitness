export const validateProductData = (formData) => {
  const errors = [];

  // Category
  if (!formData.category || formData.category.trim() === "") {
    errors.push("Category is required.");
  }

  // Name
  if (!formData.name || formData.name.trim() === "") {
    errors.push("Product name is required.");
  }

  // Price
  if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
    errors.push("Price must be a positive number.");
  }

  // Quantity
  if (!formData.quantity || isNaN(formData.quantity) || formData.quantity <= 0) {
    errors.push("Quantity must be a positive number.");
  }

  // Key Features
  if (formData.keyFeatures.length === 0) {
    errors.push("At least one key feature is required.");
  }

  // Warranty Options
  if (formData.warrantyOptions.length === 0) {
    errors.push("At least one warranty option is required.");
  } else {
    formData.warrantyOptions.forEach(option => {
      if (!option.duration || !option.price || option.price <= 0) {
        errors.push("Each warranty option must have a valid duration and price.");
      }
    });
  }

  // Image uploads
  if (!formData.images.mainImage) {
    errors.push("Main image is required.");
  }

  if (formData.images.thumbnailImages.length === 0) {
    errors.push("At least one thumbnail image is required.");
  }

  // Description (using rich text editor)
  if (!formData.description || formData.description.trim() === "") {
    errors.push("Description is required.");
  }

  // Return all errors, or an empty array if there are none
  return errors;
};
