//basic pizza costs $15.00
var basicPizza = 15.00;
//toppings cost $1.25 per extra topping
var topping = 1.25;
function allAboutPizzas()
{
    //ask the user how many pizzas they are ordering
    var askPizzas = parseInt(prompt("How many pizzas are you ordering?"));
    //ask them how many extra toppings they want per pizza
    var askToppings = parseInt(prompt("How many extra toppings do you want?"));
    //ask how many people are ordering pizzas
    var askPeople = parseInt(prompt("How many people are ordering?"));
    //tell them how much it is going to cost for all pizzas with toppings
    var pizzaTotal = (askPizzas*basicPizza + askToppings*topping)/askPeople;
    alert(`Your pizza will cost $${pizzaTotal.toFixed(2)}`);


}