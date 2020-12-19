class Food{
    constructor(){
      this.image = loadImage("images/Milk.png");
      this.lastFeed;
      this.foodstock;   
 }
   getFoodStock(){
    return this.foodstock;
  }

   updateFoodStock(foodstock){
    this.foodstock = foodstock;
   }

   deductFood(){
    if (this.foodstock > 0) {
        this.foodstock = this.foodstock - 1;
    
    }
   }
   
display() {
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image, 20, 220, 70, 70);

        if (this.foodstock != 0) {
            for (var i = 0; i < this.foodstock; i++) {
                if (i % 30 == 0) {
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}