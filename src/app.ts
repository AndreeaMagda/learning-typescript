class Team {
  //   private readonly id: string
  //   private name: string
  private drivers: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.name = n
  }
  describe() {
    console.log(`Team (${this.id}): (${this.name})`)
  }

  addDriver(driver: string) {
    this.drivers.push(driver)
  }

  printDriverInfo() {
    console.log(this.drivers.length)
    console.log(this.drivers)
  }
}

const ferrari = new Team('t1', 'Ferrari')

ferrari.addDriver('Charles')
ferrari.addDriver('Carlos')

//ferrari.drivers[2] = 'Hamilton' --error

ferrari.describe()
ferrari.printDriverInfo()
