api1 = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog";
api2 = "https://dog.ceo/api/breeds/image/random";

function setup() {
    noCanvas();
    TextPhoto().then(results=>{
        console.log(results);
        createP(results.sentence);
        createImg(results.imgURL);
    }).catch(err=>console.err(err))
}


async function TextPhoto(){
   let response=await fetch(api1);
   let json = await response.json();
   let photo= await fetch(api2);//ideally need variable just assined,so need to await
   let Photojson=await photo.json();

   return{
       sentence:json.text,
       imgURL:Photojson.message
   }

}