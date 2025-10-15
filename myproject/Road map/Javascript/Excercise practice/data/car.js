
class Car {
  brand;
  model;
  speed = 0;
  isTrunkSpeed;
  
  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.isTrunkSpeed = carDetails.isTrunkSpeed
  }
  displayInfo(){
    //console.log(`${this.brand} //${this.model}`)
    
    console.log(
    `${this.brand} ${this.model}, Speed: ${this.speed} km/h`)
        console.log(
      `${this.brand} ${this.model}, Speed: ${this.speed} km/h ${this.isTrunkSpeed}`)
  }
  
  go(){
  this.speed += 5;
  
  // Limit the speed to 200.
  if (this.speed > 200) {
    this.speed = 200;
  }
}

brake() {
  this.speed -= 5;
  
  // Limit the speed to 0.
  if (this.speed < 0) {
    this.speed = 0;
  }
}

open(){
  this.isTrunkSpeed += 5
  if(isTrunkSpeed < 40 ){

  }
}
close(){}


}


const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3'
});

car1.displayInfo();
car1.open();
//console.log(car2);
/**car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.brake();
car1.displayInfo();

car2.displayInfo();
car2.go();
car2.brake();
car2.brake();
car2.displayInfo();



/**car1.displayInfo()
console.log(car1);
console.log(car2);

**/



