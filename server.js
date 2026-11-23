import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.dirname(fileURLToPath(import.meta.url));
const pub=path.join(root,"public");
const assets=path.join(root,"assets");
const types={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml"};
http.createServer(async(req,res)=>{
  if(!["GET","HEAD"].includes(req.method||"GET")){res.writeHead(405,{"Allow":"GET, HEAD"}).end();return;}
  try{
    const pathname=decodeURIComponent(new URL(req.url||"/","http://localhost").pathname);
    const base=pathname.startsWith("/assets/")?assets:pub;
    const relative=pathname==="/"?"/index.html":pathname.startsWith("/assets/")?pathname.slice(7):pathname;
    const file=path.resolve(base,"."+relative);
    if(!file.startsWith(base+path.sep)){res.writeHead(403).end("Forbidden");return;}
    const data=await readFile(file);
    res.writeHead(200,{"Content-Type":types[path.extname(file)]||"application/octet-stream","X-Content-Type-Options":"nosniff","Cache-Control":"no-store"});
    res.end(req.method==="HEAD"?undefined:data);
  }catch{res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"}).end("Not found");}
}).listen(Number(process.env.PORT)||4173,"127.0.0.1",()=>console.log("Open http://127.0.0.1:"+(process.env.PORT||4173)));