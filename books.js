//the cost of a late book is $0.25
//var lateBookFee = 0.25;
function allAboutFees() {

//ask the user how many books they have out that are late
    var lateBookAmount = parseInt(prompt("How many books do you have that are late?"));
//ask the user how many days late they are with their books
    var bookLateDays = parseInt(prompt("How many days late are your book(s)?"));
//tell the user how much their late fee is with the total amount of books
    var lateBookTotal = alert(`You have taken out ${lateBookAmount} books and are ${bookLateDays} day(s) late. Your total in late fees for books is $${lateBookAmount * 0.25 * bookLateDays}`);
//ask about their DVDS
    var lateDVDAmount = parseInt(prompt("How many DVDs do you have that are late?"));
//ask about how many days late they are
    var lateDVDDays = parseInt(prompt("How many days late are your DVD(s)?"));
//tell them how much they owe for DVDs
    var lateDVDTotal = alert(`You have taken out ${lateDVDAmount} DVDs and are ${lateDVDDays} day(s) late. Your total in late fees for DVDs is $${lateDVDAmount * 0.50 * lateDVDDays}.`);
}