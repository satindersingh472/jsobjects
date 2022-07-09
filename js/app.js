let company = {
     company_name: `random`,
     yearly_revenue: 5000000,
     ceo: `satinder`,
     number_of_employees: 100
};
if(company[`yearly_revenue`] >= 1000000){
    console.log(`congratulations ${company[`company_name`]} ${(company[`ceo`])}`);
} else {
    console.log(`keep working hard`);
}