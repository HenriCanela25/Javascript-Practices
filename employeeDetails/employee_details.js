const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    ];

function displayEmployees(){
    const output = employees.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = output
}

function calculateTotalSalaries(){
    const output = employees.reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${output}`);
}

function displayHREmployees(){
    const employees_filtered = employees.filter(employee => employee.department === 'HR');
    const output = employees_filtered.map((employee) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = output;
}

function findEmployeeById(employeeId){
    const employees_filtered = employees.find((e) => e.id === employeeId);
    if (employees_filtered) {
        const output = `<p>${employees_filtered.id}: ${employees_filtered.name}: ${employees_filtered.name} - ${employees_filtered.department} - $${employees_filtered.salary}</p>`;
        document.getElementById('employeesDetails').innerHTML = output;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
}