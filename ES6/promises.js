api1 = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat";
api2 = "https://dog.ceo/api/breeds/image/random";

function setup() {
    noCanvas();
    fetch(api1)
        .then(response => {
            return response.json()
        }).then(json => {
            createP(json.text);
            return fetch(api2);
        }).then(response=>{
            return response.json()
        }).then(imgURL=>{
            console.log(imgURL.message);
            createImg(imgURL.message);
        }).catch(err => console.log(err));//this will catch any error along the way
}
