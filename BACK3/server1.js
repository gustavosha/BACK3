//criando o primeiro servidor http

const http=require("http");
const server=http.createServer((req,res)=>{
    console.log("Efetuando pedido");
    res.setHeader("content-type","text/html")
    res.write("<h1>Pedido Aceito</h1>");
    res.write("<h2>Olá entendi que o pedido foi aceito</h2>")
    res.end();
});
server.listen(3000,"localhost",()=>{
    console.log("servidor iniciado");
})
