
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");

const app = express();
const PORT = process.env.PORT || 5000;

const productsFile = path.join(__dirname, "data", "Products.json");

app.use(cors());
app.use(express.json());

// GET all products
app.get("/api/products", (req, res) => {
  try {
    const data = fs.readFileSync(productsFile, "utf-8");
    const database = JSON.parse(data);

    res.json(database.products || []);
  } catch (error) {
    res.status(500).json({ message: "Could not load products." });
  }
});

// GET one product
app.get("/api/products/:id", (req, res) => {
  try {
    const data = fs.readFileSync(productsFile, "utf-8");
    const database = JSON.parse(data);

    const product = (database.products || []).find(
      (item) => String(item.id) === req.params.id
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Could not load product." });
  }
});

// POST a new product
app.post("/api/products", (req, res) => {
  try {
    const data = fs.readFileSync(productsFile, "utf-8");
    const database = JSON.parse(data);

    const newProduct = {
      id: randomUUID(),
      ...req.body,
    };

    database.products = database.products || [];
    database.products.push(newProduct);

    fs.writeFileSync(
      productsFile,
      JSON.stringify(database, null, 2)
    );

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({ message: "Could not save product." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
