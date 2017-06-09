function CalculateSalary() {
    
    var GrossSalary, NetSalary;
    var ValueAfterTax, ValueAfterPension, Tax, Pension;


    var employeName = document.forms["calculate"].getElementsById("EmpName");
   var Category = document.forms["calculate"].getElementsById ("EmpCategory").value;
   var month = document.forms["calculate"].getElementsById ("EmpMonth").value;

   var Deduction = document.forms["calculate"].getElementsById ("EmpDeduction");

   if (isNaN(Deduction) === true){
   	alert ("Put a figure in Deductions");
   } 
   
   else if (Category === "Interns"){

   	GrossSalary = 20000;
   	
   } else if (Category === "Directors"){

   	GrossSalary = 100000;

   }else if (Category === "Associates"){
   	GrossSalary = 50000;

   }else if (Category === "Executives"){
   		GrossSalary = 70000;
   }
   else {
   	alert ("Wrong input!!!");
   }


	ValueAfterPension = GrossSalary- (GrossSalary * 0.15);
   	ValueAfterTax = GrossSalary - (GrossSalary * 0.01);
   	NetSalary = GrossSalary - (ValueAfterPension + ValueAfterTax);
   	Tax =  GrossSalary * 0.01 ;
   	Pension = GrossSalary * 0.15 ; 


   	document.getElementById("Invoice").innerHTML = "NAME:" + " " + employeName + "<\br>" + "GrossSalary:" + " " + "N"+GrossSalary + "<\br>" + "Tax 1%:" +" " + "N"+Tax + "<\br>" + "Pension 15%:" + " " + "N"+Pension + "<\br>" + "<\hr>" + "NetSalary: "+ " " + "N"+NetSalary ;

}

