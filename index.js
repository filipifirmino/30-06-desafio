const express = require("express");
const app = express();
const ingredients = require("./routes/routes");
const errorMiddleware = require('./middleware/index');

app.use(express.json());
app.use("/recipe", ingredients);
app.use(errorMiddleware);

const port = 3000;

app.listen(port, () => {
  console.log(`Funcionando na porta ${port}`);
});
