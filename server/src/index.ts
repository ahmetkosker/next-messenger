import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("hey there!!");
});

app.listen(8080, () =>
  console.log("Server listening on http://localhost:8080")
);
