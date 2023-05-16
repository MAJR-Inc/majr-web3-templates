const express = require("express");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../docs");

const PORT = process.env.PORT || 3000;
const app = express();
const router = express.Router();

const creatorMembershipAPI = require("./routes/creatorMembership");

router.use("/membership", creatorMembershipAPI);

app.use("/api-docs", swaggerUi.serveFiles(swaggerDocs));
app.get("/api-docs", swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
