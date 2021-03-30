const express = require("express");
const app = express();
const ingredients = require("./routes/routes");

app.use(express.json());
app.use("/recipe", ingredients);

const port = 3000;

app.listen(port, () => {
  console.log(`Funcionando na porta ${port}`);
});
