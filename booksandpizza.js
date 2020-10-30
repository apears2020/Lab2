$(document).ready(
    function () {
        //event handlers
        $("#button1").click(bookTime);
        $("#button2").click(pizzaTime);
        //other functions
        function bookTime(){
            var lateBooksDays = $("#lateDaysBooks").val();
            lateBooksDays = parseFloat(lateBooksDays);
            var lateBooks= $("#lateBooksAmount").val();
            lateBooks= parseFloat(lateBooks);
            var lateDVDsDays = $("#lateDaysDVDs").val();
            lateDVDsDays = parseFloat(lateDVDsDays);
            var lateDVDsAmount = $("#lateDVDAmount").val();
            lateDVDsAmount = parseFloat(lateDVDsAmount);

            var lateFeesAllBooks = ((lateBooksDays * lateBooks * 0.25) + (lateDVDsDays * lateDVDsAmount * 0.50));

            $("#bookP").append("Your library fees are $" + (lateFeesAllBooks));

        }

        function pizzaTime(){
            var pizzaAmount = $("#howManyPizzas").val();
            pizzaAmount = parseFloat(pizzaAmount);
            var toppingAmount = $("#howManyToppings").val();
            toppingAmount = parseFloat(toppingAmount);
            var crewAmount = $("#howManyCrew").val();
            crewAmount = parseFloat(crewAmount);

            var pizzasOrdered = (pizzaAmount * 15.00);
            var toppingsOrdered = (toppingAmount * 1.25);

            var pizzasForAll = ((pizzasOrdered + toppingsOrdered)/crewAmount);
            $("#pizzaP").append("Your pizza order will cost $" +pizzasForAll+ " per person.");
        }
    }
);