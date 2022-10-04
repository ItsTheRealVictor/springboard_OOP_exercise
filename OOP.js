class Vehicle {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    honk(){
        return 'Beep.'
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from the year ${this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }

    revEngine(){
        return 'VROOM!!!'
    }
}

class Bike{
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity
        this.theGarage = []

        
    }
    
    addToGarage(newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return 'Only vehicles allowed in here!'
        }
        if (this.theGarage.length >= this.capacity){
            return 'Sorry, we are full'
        }

        this.theGarage.push(newVehicle)
        return 'vehicle added!'

    }
}

const firstCar = new Car('honda', 'fit', 2020)
console.log(firstCar.honk())
console.log(firstCar.toString())
console.log(firstCar.numWheels)

const secondCar = new Car('Toyota', 'Tacoma', 1995)
console.log(secondCar.honk())
console.log(secondCar.toString())
console.log(secondCar.numWheels)

const firstMoto = new Motorcycle('Yamaha', 'SuperMoto', 1983)
console.log(firstMoto.honk())
console.log(firstMoto.toString())
console.log(firstMoto.numWheels)
console.log(firstMoto.revEngine())

const myGarage = new Garage(3)
console.log(myGarage.addToGarage(firstCar))
console.log(myGarage.addToGarage(firstMoto))
console.log(myGarage.addToGarage(secondCar))
console.log(myGarage.addToGarage(new Bike('Trek', 'Madone', 2009)))