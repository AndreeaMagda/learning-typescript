"use strict";
class Team {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string
        //   private name: string
        this.drivers = [];
        // this.name = n
    }
    describe() {
        console.log(`Team (${this.id}): (${this.name})`);
    }
    addDriver(driver) {
        this.drivers.push(driver);
    }
    printDriverInfo() {
        console.log(this.drivers.length);
        console.log(this.drivers);
    }
}
const ferrari = new Team('t1', 'Ferrari');
ferrari.addDriver('Charles');
ferrari.addDriver('Carlos');
//ferrari.drivers[2] = 'Hamilton' --error
ferrari.describe();
ferrari.printDriverInfo();
