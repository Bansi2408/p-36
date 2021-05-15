//Create variables here
var database;
var dog,happyDog,sadDog;
var foodS,foodStock;
var feed,addFood;
var fedTime,lastFed,addFood;
var foodObj;

function preload()
{
	//load images here
  sadDog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happy dog.png");
}

function setup() {
 
  createCanvas(800,700);
  
  database = firebase.database();

  foodObj = new Food();

  foodStock=database.ref('food');
  foodStock.on("value",readstock);

  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale = 0.15;

  fed = createButton("feed the dog");
  fed.position(700,95);
  fed.mousePressed(fedDog);

  addFood = createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}


function draw() {
  backgroung(46,139,87);

  foodObj.display();

  fedTime = database.ref('FedTime');
  fedTime.on("value", function(database){
    lastFed = data.val();
  });

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("last feed : " + lastFed%12 + "PM" , 350,30);
  }else if(lastFed==0){
    text("last feed : 12 AM",350,30);
  }else{
    text("last feed : " + lastFed + "Am", 350,30);
  }
}

function readStock(data)
{
  foodS.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog ()
{
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref("/").update({
     Food:foodObj.getFoodStock(),
     FeedTime:hour()
  });
}

function addFood ()
{
  foodS++;
  database.ref("/").update({
    Food:foodS
  });
}
