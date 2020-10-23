class employee{
    constructor(id,name,address){
        this.empid=id;
        this.empname=name;
        this.empAddress=address;
    }
    display(){
        alert("The name is"+this.empname);
        alert("The Address is"+this.empAddres);
        alert("The ID is"+this.empid);
    }
}
const empobj = new employee(123,"Harsha C.A","Kolar");
console.log(empobj);
console.log(JSON.stringify(empobj));