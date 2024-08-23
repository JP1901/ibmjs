const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'Javascript'},
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python'},
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'C#' },
    { id: 4, name: 'Jefferson Farfan', age: 26, department: 'IT', salary: 45000, specialization:'Javascript'},
    { id: 5, name: 'Paolo Guerrero', age: 23, department: 'Industry', salary: 15000, specialization:'Javascript'},
    { id: 6, name: 'George Forsyth', age: 40, department: 'HR', salary: 80000,specialization:'Python'}
    //... More employee records can be added here
  ];

 // Function to display all employees
 function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
 }


 function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc,employee) => acc+employee.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
 }

 function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}

function filterBySpecializationJs(){
  const jsSpec = employees.filter(employe => employe.specialization === 'Javascript');
  const jsSpecDisplay = jsSpec.map((employee,index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.specialization}</p>`).join('');
  document.getElementById('employeesDetails').innerHTML = jsSpecDisplay;

    // const foundEmpEsp = employees.find(employee => employee.specialization === employeeEsp);
    // if(foundEmpEsp){
    //   document.getElementById('employeesDetails').innerHTML = `<p>${foundEmpEsp.id}: ${foundEmpEsp.name} - ${foundEmpEsp.department} - ${foundEmpEsp.specialization}</p>`;
    // } else {
    //   document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    
    // }


}