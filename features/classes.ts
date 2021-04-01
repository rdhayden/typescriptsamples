class Vehicle {
  // color: string;

  //by adding the public modifier to the parameter we don't need to declare and assign the field seperately
  constructor(public color: string) {
    // this.color = color;
  }

  protected drive(): void {
    console.log('chugga chugga');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  protected drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car('Red');

car.startDrivingProcess();
console.log(car.color);
