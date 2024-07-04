class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT')
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('no report found.')
  }

  set mostRcenetReport(value: string) {
    if (!value) {
      throw new Error('please pase in a a valid value')
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0]
  }

  addEmployee(name: string) {
    if (name === 'Carlos') {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment('d1', ['Max'])

it.addEmployee('Max')
it.addEmployee('Lando')

// it.employees[2] = 'Anna';

it.describe()
it.name = 'NEW NAME'
it.printEmployeeInformation()

console.log(it)

const accounting = new AccountingDepartment('d2', [])
accounting.mostRcenetReport = 'year end'

accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport)
accounting.addEmployee('Max')
accounting.addEmployee('Carlos')

accounting.printReports()
accounting.printEmployeeInformation()
