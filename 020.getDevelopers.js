function getDevelopers(employees) {
   
    function checkDev(employees){
        return employees.job==="developer"
    }
     return employees.filter(checkDev);
}

export { getDevelopers };
