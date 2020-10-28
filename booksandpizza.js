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
            lateDVDsDays = $
            var lateDVDsAmount = $("#lateDVDAmount").val();

        }
        function pizzaTime(){
            var pizzaAmount = $("#howManyPizzas").val();
            var toppingAmount = $("#howManyToppings").val();
            var crewAmount = $("#howManyCrew").val();
        }
    }
);