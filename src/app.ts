function Logger(logString: string) {
  console.log('LOGGER FACTORY')

  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  console.log('LOGGER TEMPLATE')
  return function (constructor: any) {
    console.log('Rendering template')
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

@Logger('Logging')
@WithTemplate('<h1>My person Object</h1>', 'app')
class Person {
  name = 'Charles'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)

//--
//if you add a decorator to a property
//the decorator function will receive two arguments
//the target and the property name
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator')
  console.log(target, propertyName)
}

class Product {
  @Log
  title: string
  private _price: number

  public set price(val: number) {
    if (val > 0) {
      this._price = val
    } else {
      throw new Error('invalid price')
    }
  }

  constructor(t: string, p: number) {
    this.title = t
    this._price = p
  }
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax)
  }
}
