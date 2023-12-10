var breakfastSrc = ['assets/img/breakfast_item.jpg', 'assets/img/lunch_item.jpg', 'assets/img/dinner_item.jpg'];
var breakfastAlt = ['First Breakfast', 'Second Breakfast', 'Third Breakfast'];
var breakfastPrice = ['$3.50', '$7.25', '$11.50'];
var breakfastH4 = ['Kale Chips Art Party', 'Drink Vinegar Prism', 'Taiyaki Gastro Tousled'];
var breakfastP = ['A rice porridge, garnished with various toppings, century eggs, or beans.',
                  'A bite-sized delights like pork buns, dumplings, and savory pastries.',
                  'Wholesome and flavorful dish that provides a balance of textures to start the day.']

var owlBreakfast = document.getElementById('owl-breakfast');

for (var i = 0; i < breakfastAlt.length; i++) {
    var breakfastEl = document.createElement('div');
    breakfastEl.className = 'item col-md-12';
    breakfastEl.innerHTML = `
        <div class="food-item">
            <img src="${breakfastSrc[i]}" alt="${breakfastAlt[i]}"/>
            <div class="price">${breakfastPrice[i]}</div>
            <div class="text-content">
                <h4>${breakfastH4[i]}</h4>
                <p>${breakfastP[i]}</p>
            </div>
        </div>
    `;

    owlBreakfast.appendChild(breakfastEl);
}

document.getElementById('owl-breakfast').innerHTML = owlBreakfast.innerHTML;


var lunchSrc = ['assets/img/lunch1.jpg', 'assets/img/lunch2.jpg', 'assets/img/lunch3.jpg'];
var lunchAlt = ['First Lunch', 'Second Lunch', 'Third Lunch'];
var lunchPrice = ['$6.50', '$11.75', '$16.50'];
var lunchH4 = ['Lu Rou Fan', 'Char Kway Teow', 'Moo shu pork'];
var lunchP = ['Cooked in a rich broth to a melt-in-your-mouth texture. It is heavenly way to enjoy pork.',
                  'Flat wide rice noodles coated in a salty sweet soy sauce, with pork and Chinese chives.',
                  'This is a stir-fried dish featuring pork, scrambled eggs, and vegetables, in a light sauce.']

var owlLunch = document.getElementById('owl-lunch');

for (var i = 0; i < lunchAlt.length; i++) {
    var lunchEl = document.createElement('div');
    lunchEl.className = 'item col-md-12';
    lunchEl.innerHTML = `
        <div class="food-item">
            <img src="${lunchSrc[i]}" alt="${lunchAlt[i]}"/>
            <div class="price">${lunchPrice[i]}</div>
            <div class="text-content">
                <h4>${lunchH4[i]}</h4>
                <p>${lunchP[i]}</p>
            </div>
        </div>
    `;

    owlLunch.appendChild(lunchEl);
}

document.getElementById('owl-lunch').innerHTML = owlLunch.innerHTML;



var dinnerSrc = ['assets/img/dinner1.jpg', 'assets/img/dinner2.jpg', 'assets/img/dinner3.jpg'];
var dinnerAlt = ['First Dinner', 'Second Dinner', 'Third Dinner'];
var dinnerPrice = ['$8.25', '$12.50', '$16.00'];
var dinnerH4 = ['Bulgogi', 'Filipino Spaghetti', 'Vietnamese Spicy Lemongrass Chicken'];
var dinnerP = ['Spicy and tender pieces of sweetened pan-fried pork and loaded with green and white onions.',
                'Sweet and rich meat sauce swirled in al dente pieces of spaghetti and sprinkled with cheddar.',
                'An aromatic blend of chile sauce, lemongrass, tender chicken, and veggies.']


var owlDinner = document.getElementById('owl-dinner');

for (var i = 0; i < dinnerAlt.length; i++) {
    var dinnerEl = document.createElement('div');
    dinnerEl.className = 'item col-md-12';
    dinnerEl.innerHTML = `
        <div class="food-item">
            <img src="${dinnerSrc[i]}" alt="${dinnerAlt[i]}"/>
            <div class="price">${dinnerPrice[i]}</div>
            <div class="text-content">
                <h4>${dinnerH4[i]}</h4>
                <p>${dinnerP[i]}</p>
            </div>
        </div>
    `;

    owlDinner.appendChild(dinnerEl);
}

document.getElementById('owl-dinner').innerHTML = owlDinner.innerHTML;


var daniUNedelji = ['Select Day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var sati = ['Select Hour', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
var satiValue = [' ', '10-00', '12-00', '14-00', '16-00', '18-00', '20-00', '22-00'];
var persons = ['How Many People', '1 Person', '2 Persons', '3 Persons', '4 Persons', '5 Persons', '6 Persons'];
var personsValue = [' ', '1-Person', '2-Persons', '3-Persons', '4-Persons', '5-Persons', '6-Persons']

var select = '';
for (var i = 0; i < daniUNedelji.length; i++) {
    select += `<option value="${daniUNedelji[i]}"> ${daniUNedelji[i]} </option>`;
}
document.getElementById('s1').innerHTML = select;

var select1 = '';
for (var i = 0; i < sati.length; i++) {
    select1 += `<option value="${satiValue[i]}"> ${sati[i]} </option>`;
}
document.getElementById('s2').innerHTML = select1;
     
var select2 = '';
for (var i = 0; i < persons.length; i++) {
    select2 += `<option value="${personsValue[i]}"> ${persons[i]} </option>`;
}
document.getElementById('s3').innerHTML = select2;


