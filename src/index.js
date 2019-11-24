import app from "./app";

const PORT = process.env.BACKEND_PORT || 3000;

// listen for requests
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
