// Write your solution in this file!

const employee = Object.assign({}, {name: "james", streetAddress: "122 M NE"})


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
	employee[key] = value;
	return employee;
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
	const newObj = {...employee};
	newObj[key] = value;
	return newObj;
}



function deleteFromEmployeeByKey(employee, key) {
	const tmp = {
		...employee
	}
	console.log(tmp);
	delete tmp[key];
	
	return tmp;
}



function destructivelyDeleteFromEmployeeByKey(employee, key) {
	employee[key] = undefined;
	return employee;
}

