
class Cars {
    constructor(options) {
        this.model = options.model;
        this.color = options.color;
        this.wheels = options.wheels;
    }
    start () {
        console.log('Машина заведена');
    }
}

class Truck extends Cars {
    constructor(options) {
        super(options);
        this.capacity = options.capacity;
    }
}

class SportCars extends Cars {
    constructor(options) {
        super(options);
        this.maxSpeed = options.maxSpeed;
    }
}

class ElectricCar extends Cars {
    constructor(options) {
        super(options);
        this.batteryCapacity = options.batteryCapacity;
    }
}

const truck = new Truck({
    model: "Hyunday",
    color: "yellow",
    wheels: 4,
    capacity: true,
});

const sportCar = new SportCars({
    model: "Porshe 911",
    color: "grey",
    wheels: 4,
    maxSpeed: true,
});

const electricCar = new ElectricCar({
    model: "Tesla",
    color: "red",
    wheels: 4,
    batteryCapacity: true,
});

truck.start();
console.log(truck);

sportCar.start();
console.log(sportCar);

electricCar.start();
console.log(electricCar);





class TrafficLight {
  constructor(redSelector, yellowSelector, greenSelector) {
    this.redLight = document.querySelector(redSelector);
    this.yellowLight = document.querySelector(yellowSelector);
    this.greenLight = document.querySelector(greenSelector);
  }


  changeLight(color) {

    this.resetLights();

    color = color.toLowerCase();


    switch (color) {
      case 'red':
        this.redLight.classList.add('active');
        alert("Stop");
        break;
      case 'yellow':
        this.yellowLight.classList.add('active');
        alert("Wait");
        break;
      case 'green':
        this.greenLight.classList.add('active');
        alert("Go");
        break;
      default:
        alert("Error: Invalid color");
        break;
    }
  }


  resetLights() {
    this.redLight.classList.remove('active');
    this.yellowLight.classList.remove('active');
    this.greenLight.classList.remove('active');
  }
}


const trafficLight = new TrafficLight('.red', '.yellow', '.green');


const userInput = prompt('Enter the traffic light color (red / yellow / green):');
trafficLight.changeLight(userInput);










































