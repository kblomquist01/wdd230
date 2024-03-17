const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const hideAfterDay = 6;
const meetAndGreetElement = document.getElementById('meetAndGreet');

if (dayOfWeek <= hideAfterDay){
    meetAndGreetElement.style.display = '';
}
else{
    meetAndGreetElement.style.display = 'none';
}
//console.log("Day of the week:", dayOfWeek);