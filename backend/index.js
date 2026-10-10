// server/index.js
const express = require('express');
const cors = require('cors');
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 5000;

const UUID = crypto.randomUUID();

app.use(cors());
app.use(express.json());

// Sample API Endpoint
app.get('/api/products', (req, res) => {
//   res.json({ message: "Hello from the Node.js + Express backend!" });
const data = fs.readFileSync("./data/Products.json", "utf-8");
const products = JSON.parse(data);
res.json(products);
});

app.post("/api/products", (req, res => {
    const data = fs.readFileSync("./data/Products.json", "utf-8");
    const database = JSON.parse(data);

    const newProduct = {
        id: UUID,
        phonename: "Apple 18",
        brand: "Apple"
    }
    database.products.push(newProduct);
    fs.writeFileSync("./data/Products.json", JSON.stringify(database, null, 2));

    res.statusCode(201).json({
        message: "Product added successfully",
        product: newProduct
    })
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
