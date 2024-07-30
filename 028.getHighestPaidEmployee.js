function getHighestPaidEmployee(employees, departmentId) {
    let highestSalary = employees[0].salary
    let highestPaid 

    employees.forEach((employee)=>{
        if (employee.salary>highestSalary && employee.departmentId==departmentId){
            highestPaid = employee.name
        }
    })
    return highestPaid
}

export { getHighestPaidEmployee };