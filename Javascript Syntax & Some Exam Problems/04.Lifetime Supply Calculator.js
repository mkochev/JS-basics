function calcSupply(age,maxAge,food,foodPerDay) {
	var age = age;
	var maxAge = maxAge;
	var food = food;
	var foodPerDay = foodPerDay;

	return (maxAge - age ) * 365  * foodPerDay +"kg of" + food + " would be enough until I am " + maxAge + "old";
}

console.log(calcSupply(30,118,'chocolate',0.5));