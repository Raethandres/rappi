import { Router } from 'express';

const routes = Router();
var Cub=Array()


/**
 * GET home page
 */

 const generate=(Ini,End)=>{

  let M=Array()

  let st=Object.assign({},Ini)
  let en=Object.assign({},End)
  let sta=Object.assign({},st)

  while(true){
    M.push({x:sta.x,y:sta.y,z:sta.z,v:sta.v})
    if(sta.z<en.z){
      sta.z+=1

    }else if(sta.y<en.y){
      sta=Object.assign(sta,{z:st.z})
      sta.y+=1
    }else if(sta.x<en.x){
      sta=Object.assign(sta,{z:st.z})
      sta=Object.assign(sta,{y:st.y})
      sta.x+=1
    }else{

      break
    }
  }
    return M

 }

routes.get('/', (req, res) => {
  res.end("binvenido. <br> use los routes: /generate :para generar el cubo donde recive por post x=<Dimencion en x>, y=<Dimencion en y>,z=<Dimencion en z> <br> /update :para actulizar una posicion donde recive por post x=<Dimencion en x>, y=<Dimencion en y>,z=<Dimencion en z> ,v=<Valor por asignar> <br> /querry : ra generar el cubo donde recive por post xi=<Dimencion en x inicial>, yi=<Dimencion en y inicial>,zi=<Dimencion en z inicial> xe=<Dimencion en x final>, ye=<Dimencion en y final>,ze=<Dimencion en z final>") 
});

routes.post('/generate', (req, res) => {
  console.log(req.body)
  Cub=generate({x:1,y:1,z:1,v:0},{x:req.body.x,y:req.body.y,z:req.body.z})
  console.log(Cub)
  res.end(JSON.stringify({cub:Cub}))
});

routes.post('/update', (req, res) => {
  let r=Cub.findIndex((element)=>{if(element.x==req.body.x && element.y==req.body.y && element.z==req.body.z){return element}})
  Cub[r]=Object.assign(Cub[r],{v: parseInt(req.body.v)})
  res.end(JSON.stringify({cub:Cub}))
});

routes.post('/querry', (req, res) => {
  let subCub=Cub.slice(Cub.findIndex((element)=>{if(element.x==req.body.xi && element.y==req.body.yi && element.z==req.body.zi){return element}}),Cub.findIndex((element)=>{if(element.x==req.body.xe && element.y==req.body.ye && element.z==req.body.ze){return element}})+1)
  let count=0
 for (var i = 0, len = subCub.length; i < len; i++) {
  count+=subCub[i].v
  console.log(subCub[i])
}
  res.end(JSON.stringify({valor:count}))
});

export default routes;
