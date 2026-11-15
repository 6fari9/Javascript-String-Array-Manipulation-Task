// 1
const rawInput = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const trimmed = rawInput.trim();

const namesArray = trimmed.split(",");

const cleanedNames = namesArray.map((name) => name.trim().toLowerCase());

const result = cleanedNames.join(" | ");

console.log("=== Case 1: User Data Cleaner ===");
console.log("Input mentah :", JSON.stringify(rawInput));
console.log("Setelah trim :", JSON.stringify(trimmed));
console.log("Array nama   :", namesArray);
console.log("Array bersih :", cleanedNames);
console.log("Hasil akhir  :", result);

// 2
const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

const activeProducts = products.filter((product) => product.active === true);

const upperCaseNames = activeProducts.map((product) =>
  product.name.toUpperCase()
);

const totalPrice = activeProducts.reduce(
  (total, product) => total + product.price,
  0
);

console.log("\n=== Case 2: E-Commerce Product Filter ===");
console.log("Produk aktif      :", activeProducts);
console.log("Nama kapital      :", upperCaseNames); // ['LAPTOP', 'KEYBOARD']
console.log("Total harga aktif :", totalPrice); // 1050
