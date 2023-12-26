class Hamburger {
    size;
    stuffing;
    toppings;
    
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    static get SIZE_SMALL() {
        return { name: 'SIZE_SMALL', price: 50, calories: 20 };
    }

    static get SIZE_HUGE() {
        return { name: 'SIZE_HUGE', price: 100, calories: 40 }
    }

    static get STUFFING_CHEESE() {
        return { name: 'STUFFING_CHEESE', price: 10, calories: 20 }

    }

    static get STUFFING_SALAD() {
        return { name: 'STUFFING_SALAD', price: 20, calories: 5 };
    }

    static get STUFFING_POTATOES() {
        return { name: 'STUFFING_POTATOES', price: 15, calories: 10 };
    }

    static get TOPPING_SAUCE() {
        return { name: 'TOPPING_SAUCE', price: 15, calories: 0 };
    }

    static get TOPPING_MAYO() {
        return { name: 'TOPPING_MAYO', price: 20, calories: 5 };
    }

    addTopping(topping) {
        this.toppings.push(topping);
        return this;
    }

    calculateCalories() {
        const toppingCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
        return this.size.calories + this.stuffing.calories + toppingCalories;
    }

    calculatePrice() {
        const toppingPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        return this.size.price + this.stuffing.price + toppingPrice;
    }
}


// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories:" + hamburger.calculateCalories());

// скільки коштує
console.log("Price:" + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce:" + hamburger.calculatePrice());

const secondBurger = new Hamburger(Hamburger.SIZE_HUGE, Hamburger.STUFFING_SALAD);
secondBurger.addTopping(Hamburger.TOPPING_SAUCE);
// запитаємо скільки в другому бургері калорій
console.log("Calories:" + hamburger.calculateCalories());

// скільки коштує другій бургер
console.log("Price:" + hamburger.calculatePrice());