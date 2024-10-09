const fs = require("fs"); // fs sendo importado do node
fs.readFile("./introducao.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
