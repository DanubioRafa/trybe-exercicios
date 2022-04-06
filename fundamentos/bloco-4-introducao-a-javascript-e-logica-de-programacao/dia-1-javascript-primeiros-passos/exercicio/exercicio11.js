const salary = 3000;
let inss = 0;
let ir;

let salaryBase;
let liquidSalary;

if (salary <= 1556.94){
    inss = salary * 8/100;
}else if (salary <= 2594.92){
    inss = salary * 9/100;
}else if (salary <= 5189.82){
    inss = salary * 11/100;
}else{
    inss = 570.88;
}

salaryBase = salary - inss;
console.log(salaryBase)

if (salaryBase > 4664.68){
    liquidSalary = salaryBase - ((salaryBase * 27.5/100) - 869.36);
}else if (salaryBase < 4664.68 && salaryBase > 3751.05){
    liquidSalary = salaryBase - ((salaryBase * 22.5/100) - 636.13);
}else if (salaryBase < 3751.05 && salaryBase > 2826.66){
    liquidSalary = salaryBase - ((salaryBase * 15/100) - 354.80);
}else if (salaryBase < 2826.66 && salaryBase > 1903.98){
    liquidSalary = salaryBase -((salaryBase * 7.5/100) - 142.80);
}

console.log(liquidSalary)