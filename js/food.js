class Food{
    constructor() {
        this.foodStock = 0;
        this.milk = addImage("images/Milk.png");
        this.lastFeed;
    }

    upadateFoodStock(foodStock){
        this.foodStock = foodStock;
    }

    getFedTime(lastFed){
        this.lastFeed = lastFed;
    }

    deductFood(){
        if(this.foodStock > 0){
            this.foodStock = this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }

    display()
    {
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock; i++){
                if(1%10==0) {
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}