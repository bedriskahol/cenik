
const selectPlan = (planNumber) => {
    const currentlySelected = document.querySelector('.plan--selected');
    if (currentlySelected) {
        currentlySelected.classList.remove('plan--selected');
    }
 
    const selectedPlan = document.getElementById(`plan${planNumber}`);
    if (selectedPlan) {
        selectedPlan.classList.add('plan--selected');
    }
 };
 
 // verze 1: vyber libovolneho planu dle cisla = () ~ zadny, (1) ~ prvni atd.
 
 selectPlan(3);
 
 
 // verze 2: vyber planu dle najezdu mysi

//  selectPlan();
//  document.getElementById('plan1').addEventListener('mouseover', () => selectPlan(1));
//  document.getElementById('plan2').addEventListener('mouseover', () => selectPlan(2));
//  document.getElementById('plan3').addEventListener('mouseover', () => selectPlan(3));
//  document.getElementById('plan1').addEventListener('mouseout', () => selectPlan(0));
//  document.getElementById('plan2').addEventListener('mouseout', () => selectPlan(0));
//  document.getElementById('plan3').addEventListener('mouseout', () => selectPlan(0));