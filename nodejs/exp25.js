let empolyees = [];
function addEmployee() {
    let name = document.getElementById("name").value;
    let empolyees id = document.getElementById("employees id").values;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;
    if (name === "" || empolyees id === "" || isNaN(salary) || department === ""){
        alert("Please fill all fields properly")
        return;
    }
    let employees = {
        name: names,
        id : empolyees id,
        salary : salary,
        department : department
    };
    employees.push(employee);
    alert("Employee Added Successfully");
    document.getElementById("employees id").value = "";
     document.getElementById("salary").value = "";
      document.getElementById("department").value = "";
}
function displayAll(){
      let output = <h3> All Employee</h3>
      employees.forEach(emp => { 
      output +=
      Name : ${emp.name} |
      ID : ${emp.id}
      salary : ${emp.salary} | 




      })
}