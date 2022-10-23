import startUp from "./routes/startUp";

let port = "5000"; 

startUp.app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
    
})