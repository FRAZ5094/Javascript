let imageURL="https://view-cache.book118.com/view2/M03/20/0C/wKh2BV6C_yeAOTFFAAC_hgPYYfs486.png";
let testAPI= "https://cat-fact.herokuapp.com/facts/random?animal_type=dog";
let img;
function preload() {
    img = createImage('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
  }



function setup(){
    createCanvas(600,400);
    background(0);
}

function draw(){
    image(img,0,0);
}