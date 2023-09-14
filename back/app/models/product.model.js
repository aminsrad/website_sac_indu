module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      image: String,
      title: String,
      description: String,
    },
    { timestamps: true }
  );

  const Product = mongoose.model("Product", schema);
  return Product;
};
