 // ################################################
 // ######## Assignment 01 (Chapter 1) #############
 // ################################################
 alert("Assignment 01 (Chapter 1 )");
 // Q1.
alert("Helo Word!");

// Q2.
alert("Error! Please enter a valid password");

// Q3.
alert("Welcome to JS land..."+"\n"+"Happy Coding");

// Q4.
alert("Welcome to JS land...");
alert("Happy Coding");

// Q5.
console.log("Hello...I can run JS hrough my web browser's consol");

// ################################################
// ######## Assignment 02 (Chapter 2) #############
// ################################################
alert("Assignment 02 (Chapter 2)");
// Q1.
var username;

// Q2.
var myname = "RASHID ALI";

// Q3.
var message = "Hellow Word!";
alert(message);

// Q4.
var student_name = "John Doe";
var student_age = 15;
var course = "Certified Mobile Application Development";
alert(student_name);
alert(student_age+" years Old");
alert(course);

// Q5.
var pizza = "";
pizza =  "PIZZA"+"\n"+"PIZZ"+"\n"+"PIZ"+"\n"+"PI"+"\n"+"P";
alert(pizza);

// Q6.
var email = "rashidali@gmail.com";
alert("My email address is " + email);

// Q7.
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book);

// Q8.
var js = "Yah! I can write HTML content through Java Script"
document.write(js);

// Q9.
var abc = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(abc);

// ################################################
// ######## Assignment 03 (Chapter 3) #############
// ################################################
alert("Assignment 03 (Chapter 3)");
// Q1.
var age = 15;
alert("I am "+age+" years old");

// Q2.
var visit_counter = 0;
visit_counter = visit_counter +1;
alert("You have visited this site "+visit_counter+"Times");

// Q3.
var birthYear = 1990;
document.write("My birth year is "+birthYear+"<br>");
document.write("Data type of my declared variable is number");

// Q4.
var visitor_name 
var order_prod
var order_qty
var visitor_name = prompt("Please enter your name");
var order_prod = prompt("Please enter product");
var order_qty = prompt("Please enter quanity");
document.write(visitor_name+" ordered "+order_qty+" "+order_prod+"XYZ Clothing store");

// ################################################
// ######## Assignment 04 (Chapter 4) #############
// ################################################
alert("Assignment 04 (Chapter 4)");
// Q1.
var variable1 = "Hello World!",variable2 = "Testing...",variable3 = 42;

// Q2.
// Declaraton of legal Vaibale

var xyz = "legal Variable";
var num1;
var c = a+b;
var emp_name;
var $xyz;

// Declaraton of Illegal Vaibale

var student name; (space)
var alert; (JavaScript's keywords)
var marks%;
var 2rollnum;
var ?x;

// Q3.
document.write("<h2>"+"Rules for naming JS variables"+"</h2>"+"<br>");
document.write("Variable names can only contain letters, numbers, dollar sign and underscores. For example $my_1stVariables"+"<br>");
document.write("Variables must begin with a letters, dollar sign or underscore. For example $name, _name or name"+"<br>");
document.write("Variable names should not be JS keywords");

// ################################################
// ######## Assignment 05 (Chapter 5) #############
// ################################################
alert("Assignment 05 (Chapter 5)");
// Q1.
var num1 = 3;
var num2 = 5;
var num  = 0;

num = num1 + num2;
document.write(Sum of "+num1+" and "+num2+" is "+num);

// Q2.
num = num2 - num1;
document.write("Subtraction of "+num2+" and "+num1+" is "+num);

num = num1 * num2;
document.write("Multiplication of "+num1+" and "+num2+" is "+num);

num = num2 / num1;
document.write("Division of "+num2+" and "+num1+" is "+num);

num = num2 % num1;
document.write("Moduls of "+num2+" and "+num1+" is "+num);

// Q3.
var num;
document.write("Value after variable declaration is: "+num+"<br>");
var num = 5;
document.write("Initial value: "+num+"<br>");
num =++ num;
document.write("Value after increment is: "+num+"<br>");
num = num+7;
document.write("Value after addition is: "+num+"<br>");
num =-- num;
document.write("Value after decrement is: "+num+"<br>");
num = num % 3;
document.write("The remainder is : "+num);
 
// Q4.
var ticket_price = 600;
var total_cost = 0;
var no_of_tickets = 5;
total_cost = ticket_price * no_of_tickets;
document.write("Toal cost to buy "+no_of_tickets+" tickets to a movie is "+total_cost+"PKR");

// Q5. 
var a = 4;
var b = 1;
var c = 0;
document.write("Table of 4"+"<br>");
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");
b =b +1;
c= a*b;
document.write(a+"X"+b+"="+c+"<br>");

// Q6. 
var celsius = 25;
var fahrenheit = 70;
var celsius_temp =0;
var fahrenheit_temp = 0;
fahrenheit_temp=(celsius*(9/5)) + 32;
celsius_temp=(fahrenheit-32)*5/9;
document.write(celsius+"<sup>o</sup>"+"C is "+fahrenheit_temp+"<sup>o</sup>"+"F"+"<br>");
document.write(fahrenheit+"<sup>o</sup>"+"F is "+celsius_temp+"<sup>o</sup>"+"C"+"<br>");

// Q7. 
var price_item1 = 650;
var price_item2 = 100; 
var order_qty_item1 = 3;
var order_qty_item2 = 7;
var shipping_charges = 100;
var total_cost = 0;

total_cost = (((price_item1*order_qty_item1) + (price_item2*order_qty_item2)) + shipping_charges);

document.write("<h1>"+"Shopping Cart"+"</h1>"+"<br><br>");

document.write("Price of item 1 is "+price_item1+"<br>");
document.write("Order quantity of item 1 is "+order_qty_item1+"<br>");
document.write("Price of item 2 is "+price_item2+"<br>");
document.write("Order quantity of item 2 is "+order_qty_item2+"<br>");
document.write("Shipping charges "+shipping_charges+"<br><br>");
document.write("Total cost of your order is "+total_cost);

// Q8. 
var total_marks = 980;
var marks_obtained  = 804; 
var percentage =0;

percentage = (marks_obtained * 100)/total_marks;
document.write("<h1>"+"Marks Sheet"+"</h1>"+"<br><br>");
document.write("Total Marks:"+total_marks+"<br>");
document.write("Marks Obtained:"+marks_obtained+"<br>");
document.write("Percentage:"+percentage+"%");

// Q9. 
var cur_usa = 10;
var cur_ksa = 25;
var cur_pak = 0; 

cur_pak = (cur_usa * 104.80) + (cur_ksa *  28 );
document.write("<h1>"+"Currency in PKR"+"</h1>"+"<br><br>");
document.write("Total currencty in PKR:"+cur_pak);

// Q10. 
var num = 20;
var result = 0;
var cur_pak = 0; 

result = ((num +5) * 10)/2;

// Q11. 
var current_year = 2016;
var birth_year = 1992;
var age = 0; 

age = current_year - birth_year;

document.write("<h1>"+"Age Calculator"+"</h1>"+"<br><br>");
document.write("Current Year:"+current_year+"<br>");
document.write("Birth Year:"+birth_year+"<br>");
document.write("Your Age is :"+age);


// // Q12. 
var radius = prompt("Enter Radius of circle:");
var circumference = 0;
var area = 0;
var pi = 3.142;

circumference =  (2 * pi * radius);
area = pi * (Math.pow(radius, 2));

document.write("<h1>"+"The Geometrizer"+"</h1>"+"<br><br>");
document.write("Radius of a circle:"+radius+"<br>");
document.write("The Circumference is:"+circumference+"<br>");
document.write("The Area is:"+area);

// Q13. 
var favorite_snack = prompt("Enter your favorite snack:");
var cur_age        = prompt("Enter your current age:");
var max_age        = 65;
var amount_snack_day = prompt("Enter an estimated amount per day:");
var total_snack    = 0;

total = (max_age- cur_age) * amount_snack_day;

document.write("<h1>"+"The Lifetime Supply Calculator"+"</h1>"+"<br><br>");
document.write("Favorite Snack:"+favorite_snack+"<br>");
document.write("Current Age:"+cur_age+"<br>");
document.write("Estimated Maximum Age:"+max_age+"<br>");
document.write("Amount of snaks per day:"+amount_snack_day+"<br>");
document.write("You will need "+total+" to last you until the ripe old age of "+max_age);

// ################################################
// ######## Assignment 06 (Chapter 6-9 ) ##########
// ################################################
alert("Assignment 06 (Chapter 6-9)");
// Q1.
var a = prompt("Enter Number");
document.write("Result: <br>");
document.write("The value of a is: " + a + "<br><br>");
++a;
document.write("The value of ++a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + a + "<br>");
a++;
document.write("Now the value of a is: " + a + "<br><br>");

--a;
document.write("The value of --a is: " + a + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + a + "<br>");
a--;
document.write("Now the value of a is: " + a + "<br><br>");

// Q2.
var a = 2,b = 1;
--a;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of b is: "+ b +"<br><br>");
--a - --b;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b is: "+ b +"<br><br>");
--a - --b + ++b;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b+ ++b is: "+ b +"<br><br>");
var result = --a - --b + ++b + b--;
document.write("The value of --a is: " + a +"<br>"+ " and now the value of --b+ ++b + b-- is: "+ b +"<br><br>");
document.write("Now Result is: " + result + "<br><br>");

// Q3.
var input = prompt("Enter Name");
document.write("<h1>Welcome to " + input +" </h1>")

// Q4.
var num = prompt("Enter number");
if (num == "") {
    for(var i=1; i<=10; i++){
        document.write("5"+ "x" + i + "=" + i*5 + "<br>");
    }
} else {
    for(i=1; i<=10; i++){
        document.write(num + "x" + i + "=" + i*num + "<br>");
    } 
}

// Q5.
var subject1 = prompt("Enter 1st subject name");
var subject2 = prompt("Enter 2nd subject name");
var subject3 = prompt("Enter 3rd subject name");
var marks = 100;
var obtained_marks1 = prompt("Enter Obtained Marks of subject "+subject1);
var obtained_marks2 = prompt("Enter Obtained Marks of subject "+subject2);
var obtained_marks3 = prompt("Enter Obtained Marks of subject "+subject3);

var total_obtained_marks = (+obtained_marks1)+(+obtained_marks2)+(+obtained_marks3);

var percentage1 = (obtained_marks1/marks)*100;
var percentage2 = (obtained_marks2/marks)*100;
var percentage3 = (obtained_marks3/marks)*100;

var per = (total_obtained_marks/300)*100;

document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+subject1+"</td><td>"+marks+"</td><td>"+obtained_marks1+"</td><td>"+percentage1+"%"+"</td></tr> <tr><td>"+subject2+"</td><td>"+marks+"</td><td>"+obtained_marks2+"</td><td>"+percentage2+"%"+"</td></tr> <tr><td>"+subject3+"</td><td>"+marks+"</td><td>"+obtained_marks3+"</td><td>"+percentage3+"%"+"</td></tr><tr><td></td><td>"+"<B>"+"300"+"</B>"+"</td><td>"+total_obtained_marks+"</td><td>"+per+"%"+"</td></tr>");

// ################################################
// ######## Assignment 07 (Chapter 9-11 ) #########
// ################################################
alert("Assignment 07 (Chapter 9-11)");
// Q1.
var city = prompt("Enter City","Karachi,Islamabad,Lahore");
if (city === "Karachi") {
    document.write("Welcome to city of light")}
else if(city === "Lahore") {
    document.write("Welcome to city of gardens")} 
else if(city === "Islamabad") {
    document.write("Capital city of Pakistan")} 
else {
    document.write("City not found")
}

// Q2.
var gender = prompt("Enter Gender");
if (gender === "Male") {
    document.write("Good Morning Sir")
} else {
    document.write("Good Morning Mam")
}

// Q3.
var color = prompt("Enter color of road traffic signal");
if (color === "red") {
    document.write("Must Stop")
} else if(color === "yellow"){
    document.write("Ready to move")
} else if(color === "green"){
    document.write("Move Now")
}

// Q4.
var fuel = prompt("Enter fuels in liters");
if (fuel <= 0.25) {
    document.write("Please refill the fuel in your car")
} else {
    document.write("Move on")
}

// Q5.
var a = 4;
if(++a === 5){
    alert("Given condition for variable a is true"); // Alert Message Displayed
}

var b = 82;
if(b++ === 83){
    alert("Given condition for variable b is true"); // Alert Message is not Displayed
}

var c = 12;
if(c++ === 13){
    alert("Given condition 1 for variable c is true"); // Alert Message is not Displayed
}

if(c === 13){
    alert("Condition 2 for variable c is true"); // Alert Message is Displayed
}
if(++c < 14){
    alert("Condition 3 for variable c is true"); // Alert Message is not Displayed
}
if(c === 14){
    alert("Condition 4 for variable c is true"); // Alert Message is Displayed
}

var a = 4;
if(++a === 5){
    alert("Given condition for variable a is true"); // Alert Message Displayed
}

var b = 82;
if(b++ === 83){
    alert("Given condition for variable b is true"); // Alert Message is not Displayed
}

var c = 12;
if(c++ === 13){
    alert("Given condition 1 for variable c is true"); // Alert Message is not Displayed
}

if(c === 13){
    alert("Condition 2 for variable c is true"); // Alert Message is Displayed
}
if(++c < 14){
    alert("Condition 3 for variable c is true"); // Alert Message is not Displayed
}
if(c === 14){
    alert("Condition 4 for variable c is true"); // Alert Message is Displayed
}

var materialCost = 20000;
var labourCost = 2000;
var TotalCost = materialCost + labourCost;
if(TotalCost === labourCost + materialCost){
    alert("Cost Equals");
}

if(true){
    alert("true");
}
if(false){
    alert("false");
}

var car = prompt("Enter any number for car");
var cat = prompt("Enter any number for cat");
if (car < cat ) {
    alert("car is smaller than cat");
} else {
    alert("cat is smaller than car");
}

// Q6.
var tot_marks = prompt("Enter Total marks");
var obt_marks = prompt("Enter obtained marks");
var perc = (obt_marks/tot_marks)*100;

document.write("<h1>"+"Marks Sheet"+"</h1>"+"<br><br>");
document.write("Total Marks: "+ tot_marks +"<br>");
document.write("Marks Obtained: "+ obt_marks +"<br>");
document.write("Percentage: "+ perc +"%"+"<br>");
if(perc >= "90"){
    document.write("Grade : A <br>")
    document.write("Remarks : Excellent Performance  <br>")
}
else if(perc >= "80" && perc <= "89"){
    document.write("Grade : B <br>")
    document.write("Remarks : Good <br>")
}
else if(perc <= "79"){
    document.write("Grade : C <br>")
    document.write("Remarks : You Need To Improve <br>")
}

// Q7.
var game_num = 5;
var guess_num = prompt("Guess number from 1 to 10");
if(guess_num == game_num){
    document.write("Bingo! Correct Answer");
}
else if((guess_num >= (game_num - 1)) && (guess_num <= (game_num + 1))){
    document.write("Close enough to the Correct Answer");}
else 
   {document.write("Far to the correct answer");
   }  


// Q8.
var divisible = prompt("Enter number");
var calculate = divisible%3;
if (calculate === 0) {
    document.write("This number is divisible by 3")
} else {
    document.write("This number is not divisible by 3")
}

// Q9.
var divisible = prompt("Enter number");
var calculate = divisible%2;
if (calculate === 0) {
    document.write("This number is Even Number")
} else {
    document.write("This number is Odd Number")
}

// Q10.
var temp = prompt("Enter Temperature","0 to 50");
if (temp > 40) {
    document.write("It is too hot outside")
} 
else if(temp > 30) {
    document.write("The weather today is normal")
}
else if(temp > 20) {
    document.write("Today weather is Cool")
}
else if(temp > 10) {
    document.write("OMG! Today weather is so Cool")
}

// Q11.
var num1 = prompt("Enter 1st number");
var num2 = prompt("Enter 2nd number");
var operator = prompt("Enter Operator");
if (operator === "+") {
    document.write((+num1)+(+num2))
} 
else if(operator === "-") {
    document.write(+num1)-(+num2)
}
else if(operator === "*") {
    document.write(+num1)*(+num2)
}
else if(operator === "/") {
    document.write(+num1)/(+num2)
}
else if(operator === "%") {
    document.write(+num1)%(+num2)
}

// ################################################
// ######## Assignment 08 (Chapter 12-13 ) ########
// ################################################

alert("Assignment 08 (Chapter 12-13)");
// Q1.
var ch = prompt("Enter any characer and number");
var ascii = ch.charCodeAt(0);

if (ascii>=65 && ascii<=90){
   document.write("Character is a upper case");
}
else if (ascii>=97 && ascii<=122){
   document.write("Character is a lower case");
}
else if (ascii>=48 && ascii<=57){
    document.write("Character is a numaric");
}

// Q2.
var num1, num2;
num1 = prompt("Input the First integer", "0");
num2 = prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  document.write("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  document.write("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   document.write("The values "+ num1+ " and "+num2+ " are equal.");
  }
  
// Q3.

var num = prompt("Input the number", "0");
  if (num > 0) {
    document.write("Number is positive");
  } 
  else if (num < 0) {
    document.write("Number is Nagative");
  }
  else if (num == 0) {
    document.write("Number is Zero");
  }

// Q4.
var ch = prompt("Input the character", "A-Z OR a-z");
if (ch === 'A'||'E'||'I'||'O'||'U'||'a'||'e'||'i'||'o'||'u') {
    document.write("The character is a Vowel");
}
else
{document.write("The character is a Consonant");
}

// Q5.
var pw = "ABC123";
var pw1 = prompt("Enter password");
var pw2 = prompt("Enter confirm password");

if (pw === pw1 && pw === pw2) {
  document.write("Correct! The password you entered matches the original password");
}
else{
    document.write("Incorrect password");
} 

// Q6. 
var greeting; 
var hour = 13; 
if (hour < 18) {
  greeting = "Good day";
  document.write(greeting);
} 
else {
   greeting = "Good evening"; 
   document.write(greeting);
} 

// Q7.
var time = prompt("Enter time in 24HHSS format");

if (time >= 0000 && time < 1200) {
  document.write("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    document.write("Good Afternoon");
  }
  else if (time >= 1700 && time < 2100) {
    document.write("Good Evening");
  }
  else if (time >= 2100 && time < 2359) {
    document.write("Good Night");
  }

// ################################################
// ######## Assignment 09 (Chapter 14-16 ) ########
// ################################################
alert("Assignment 09 (Chapter 14-16)");
// Q1.
var student_name = [];
student_name[0] = prompt("Enter first student Name");
student_name[1] = prompt("Enter second student Name");
document.write(student_name);

// Q2.
var student_name = [];
student_name[0] = "RASHID";
student_name[1] = "BILAL";
student_name[2] = "WAJID";
document.write(student_name);

// Q3.
var string_array = ["Apple","Mango","Banana"];
document.write(string_array);

// Q4.
var num_array = ["1","2","3","4","5"];
document.write(num_array);

// Q5.
var  boolean_array = ["True","False","True"];
document.write(boolean_array);

// Q6.
var mixed_array = ["1","Ali","Rashid","True"];
document.write(mixed_array);

// Q7.
var qual_arr = ["SSC","HSC","BCS","BS","BCOM","MS","MPHIL","PHD"];
document.write("Qualification <br>");
document.write("1) "+ qual_arr[0] + "<br>");
document.write("2) "+ qual_arr[1] + "<br>");
document.write("3) "+ qual_arr[2] + "<br>");
document.write("4) "+ qual_arr[3] + "<br>");
document.write("5) "+ qual_arr[4] + "<br>");
document.write("6) "+ qual_arr[5] + "<br>");
document.write("7) "+ qual_arr[6] + "<br>");
document.write("8) "+ qual_arr[7] + "<br>");

// Q8.
var array1 = ["Bilal","Amna","Khadija"];
var array2 = ["320","230","480"];
var per0 = (array2[0]/500)*100;
var per1 = (array2[1]/500)*100;
var per2 = (array2[2]/500)*100;
document.write("Score of " + array1[0] + " is " + array2[0] + ". Percentage:" + per0 + " % <br>");
document.write("Score of " + array1[1] + " is " + array2[1] + ". Percentage:" + per1 + " % <br>");
document.write("Score of " + array1[2] + " is " + array2[2] + ". Percentage:" + per2 + " % <br>");

// Q9.
var colorname = ["Red","Green","Blue","White","Black"];
document.write("Original Array: "+colorname+ "<br>");

var addbgcolor = prompt("Enter color which you want to add begining of array");
colorname.unshift(addbgcolor);
document.write("Add beginnig: "+colorname+ "<br>");

var addendcolor = prompt("Enter color which you want to add End of array");
colorname.push(addendcolor);
document.write("Add End: "+colorname+ "<br>");

var add1stcolor = prompt("Enter 1st color");
var add2ndcolor = prompt("Enter Color color");
colorname.unshift(add1stcolor);
colorname.unshift(add2ndcolor);
document.write("Add Two more colors at beginning: "+colorname+ "<br>");

colorname.shift(add2ndcolor);
document.write("Remove beginnig: "+colorname+ "<br>");

colorname.pop(addendcolor);
document.write("Remove End: "+colorname+ "<br>");

var index = prompt("Enter Index Where you want to add color");
var color = prompt("Enter Colorname");
colorname.splice(index,1,color);
document.write("Add particular position: "+colorname+ "<br>");

var index1 = prompt("Enter Index Where you want to delete color");
colorname.splice(index1,1);
document.write("Remove particular position: "+colorname+ "<br>");

// Q10.
var score = [320,230,480,120];
var arr;
document.write("Student score is: "+ score);
for(var i=0; i<score.length; i++){
    for(var j=i+1; j<score.length; ++j){
        if(score[i] > score[j]){
            arr = score[i];
            score[i] = score[j];
            score[j] = arr;
        }
    }
}
document.write("<br> The asscending order is: ");
for(i=0; i<score.length; ++i)
document.write("<br>"+ score[i]);

// Q11.
var city_array = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
document.write("Cities List <br>"+city_array+"<br>");
array2 = arrcity_array.slice(2,4);
document.write("Selected Cities List <br>"+array2);

// Q12.
var arr = ["This","is","my","cat"];
document.write("Array is: <br>"+arr+"<br>");
var join = arr[0]+" "+arr[1]+" "+arr[2]+" "+arr[3];
document.write("String: <br>"+join);

// Q13.
var devices = [];
var length = prompt("Enter the length of array");
for(var i=0; i<length; i++){
    var add = devices.push(prompt("Enter Devices"));
}
document.write("Devices: <br>"+devices+"<br>");
for(var j=0; j<i; j++){
    var out = devices.shift();
    document.write("Out: <br>"+out+"<br>");
}

// Q14.
var devices = [];
var length = prompt("Enter the length of array");
for(var i=0; i<length; i++){
    var add = devices.push(prompt("Enter Devices"));
}
document.write("Devices: <br>"+devices+"<br>");
for(var j=0; j<i; j++){
    var out = devices.pop();
    document.write("Out: <br>"+out+"<br>");
}

// Q15.
var phone = ["Apple","Samsung","Motorola","Nolia","Sony","Haier"];
document.write(<select>
    <option>Apple</option>
    <option>Samsung</option>
    <option>Motorola</option>
    <option>Nokia</option>
    <option>Sony</option>
    <option>Haier</option>
</select>);

// ################################################
// ######## Assignment 10 (Chapter 17-20 ) ########
// ################################################
alert("Assignment 10 (Chapter 17-20)");
// Q1.
var arr = [];

// Q2.
var arr1 = [0,1,2,3];
var arr2 = [1,0,1,2];
var arr3 = [2,1,0,1];
arr = document.write(arr1+"<br>");
arr = document.write(arr2+"<br>");
arr = document.write(arr3+"<br>");

// Q3.
for(var j=1; j<=10; j++){
    document.write(j+"<br>");
}

// Q4.
var tab_name = prompt("Enter a number to show its multiplication table");
var tab_length = prompt("Enter Length of your table");
for(var i=1; i<=tab_length; i++){
    document.write(tab_name + "x" + i + "=" + i*tab_name + "<br>");
}

// Q5.
var fruits = ["Apple","Banana","Mango","Orange","Strawbwry"];
for(var i=0; i<fruits.length; i++){
    document.write(fruits[i]+"<br>");
}
for(var i=0; i<fruits.length; i++){
    document.write("Elements at index "+ i + " is "+ fruits[i]+"<br>");
}

// Q6.
document.write("Counting <br>")
for(var i=1; i<=15; i++){
    document.write(i+",");
}
document.write("<br>Reverse Counting <br>")
for(var i=10; i>=1; i--){
    document.write(i+",");
}
document.write("<br>Even <br>")
for(var i=0; i<=20; i++){
    for(var j=i; j%2==0; j++)
    document.write(j+",");
}
document.write("<br>Odd <br>")
for(var i=0; i<=20; i++){
    for(var j=i; j%2!=0; j++)
    document.write(j+",");
}
document.write("<br>Series <br>")
for(var i=2; i<=20; i++){
    for(var j=i; j%2==0; j++)
    document.write(j+"k,");
}

// Q7.
var arr = ["cake","Apple pie","cookie","chips","patties"];
var bakery = prompt("Welcome to ABC Bakery, What do you want to order Sir/Mam");
for(var i=0; i<=arr.length; i++){
    if(arr[i]==bakery){
        document.write(bakery +" is available at index "+ i );
    }
}

// Q8.
var score = [24,53,78,91,12];
document.write("Array items <br>"+score);
for(var i=0; i<score.length; i++){
    for(var j=i+1; j<score.length; j++){
        if(score[j] > score[i]){
            
        }
        else{
            document.write("<br> The Largest number is: "+ score[i]);
        }
        break
    }
    
}

// Q9.
var score = [24,53,78,91,12];
document.write("Array items <br>"+score);
for(var i=0; i<score.length; i++){
    for(var j=i; j<score.length; j++){
        if(score[i] > score[j]){
            document.write("<br> The Smallest number is: "+ score[j]);
        } 
    }
    break
}

// Q10.
for(var i=1; i<=100; i++){
    for(var j=i; j%5==0; j++)
    document.write(j+" ,");
}