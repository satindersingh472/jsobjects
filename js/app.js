let company = {
     name: `random`,
     yearly_revenue: 5000000,
     ceo: `satinder`,
     number_of_employees: 100,
     managers: [
        {
            name: "nav",
            salary: 5000,
            is_senior: true
        },
        {
            name: `sam`,
            salary: 4000,
            is_senior: false
        },
        {
            name: `nit`,
            salary: 4500,
            is_senior: true
        }
     ]
};
let list_manager = 0;
while(list_manager < company[`managers`].length){
    console.log(`${company[`managers`][list_manager][`name`]}`);
    list_manager++;
}

if(company[`yearly_revenue`] >= 1000000){
    console.log(`congratulations ${company[`name`]} ${(company[`ceo`])}`);
} else {
    console.log(`keep working hard`);
}
