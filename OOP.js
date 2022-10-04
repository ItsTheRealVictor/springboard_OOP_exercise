class Vehicle {
    constructor(make, model, year){
        this.make = make
        this.model = model
        this.year = year
    }

    honk(){
        return 'Beep.'
    }
}

let car = new Vehicle('honda', 'fit', '2020')
console.log(car.honk())

