// console.log('Provera');

var meni_vrednosti_niz = ['Home', 'Our Menus', 'Author', 'Contact Us'];
var meni_linkovi = ['index.html', 'menu.html', 'author.html', 'contact.html'];

var mainNav = ``;
for(var i = 0; i < meni_linkovi.length; i++) {
    mainNav += `<li><a href="${meni_linkovi[i]}"> ${meni_vrednosti_niz[i]}</a></li>`;
}
document.querySelector('#meniLista').innerHTML = mainNav;


var linkoviSlike = ['assets/img/cook_breakfast.png', 'assets/img/cook_lunch.png', 'assets/img/cook_dinner.png', 'assets/img/cook_dessert.png'];
var altAtributi = ['Breakfast', 'Lunch', 'Dinner', 'Desserts'];

var serviceContainer = document.createElement('div');

for (var i = 0; i < linkoviSlike.length; i++) {
    var servicesDiv = document.createElement('div');
    servicesDiv.classList.add('col-md-3', 'col-sm-6', 'col-xs-12');

    servicesDiv.innerHTML = `
        <div class="service-item">
            <a href="menu.html">
                <img src="${linkoviSlike[i]}" alt="${altAtributi[i]}"/>
                <h4>${altAtributi[i]}</h4>
            </a>
        </div>
    `;

    serviceContainer.appendChild(servicesDiv);
}

document.querySelector('.services .container').appendChild(serviceContainer);


var daniUNedelji = ['Select Day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var sati = ['Select Hour', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
var satiValue = [' ', '10-00', '12-00', '14-00', '16-00', '18-00', '20-00', '22-00'];
var persons = ['How Many People', '1 Person', '2 Persons', '3 Persons', '4 Persons', '5 Persons', '6 Persons'];
var personsValue = [' ', '1-Person', '2-Persons', '3-Persons', '4-Persons', '5-Persons', '6-Persons']

var select = '';
for (var i = 0; i < daniUNedelji.length; i++) {
    select += `<option value="${daniUNedelji[i]}"> ${daniUNedelji[i]} </option>`;
}
document.getElementById('sel1').innerHTML = select;

var select1 = '';
for (var i = 0; i < sati.length; i++) {
    select1 += `<option value="${satiValue[i]}"> ${sati[i]} </option>`;
}
document.getElementById('sel2').innerHTML = select1;
     
var select2 = '';
for (var i = 0; i < persons.length; i++) {
    select2 += `<option value="${personsValue[i]}"> ${persons[i]} </option>`;
}
document.getElementById('sel3').innerHTML = select2;


function validacija(event) {
    event.preventDefault();
    provera();
    provera1();
    
    if(provera() && provera1()) {
        var success = document.getElementById('success');
        success.textContent = "You sent the information successfully!";
        success.classList.add('success');
        document.getElementById('success').classList.add('success');
    }
}

function provera() {
    var regIme = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{4,20})?$/;
    var ime = document.getElementById('name').value;

    if (regIme.test(ime)) {
        document.getElementById('error').textContent = "";
        document.getElementById('name').classList.remove('err');
        return true;
    } else {
        var error = document.getElementById('error');
        error.textContent = "Name must start with a capital and have minimal 3 letters!";
        error.classList.add('err');
        document.getElementById('name').classList.add('err');
        return false;
    }
}

function provera1() {
    var regTel = /^(06)[\d]{8,15}/
    var tel = document.getElementById('phone').value;

    if(regTel.test(tel)) {
        document.getElementById('error1').textContent = "";
        document.getElementById('phone').classList.remove('err');
        return true;
    }
    else {
        var error1 = document.getElementById('error1');
        error1.textContent = "Phone number must start with '06' and have 8-15 digits!";
        error1.classList.add('err');
        document.getElementById('phone').classList.add('err');
        return false;
    }
}


var foodsH2 = ['Breakfast', 'Lunch', 'Dinner'];
var foodsPrice = ['$4.50', '$7.50', '$12.50'];
var foodsH4 = ['Kale Chips Art Party', 'Taiyaki Gastro Tousled', 'Batch Squid Jean Shorts'];
var foodsP = ['A delightful mix of flavors that will tantalize your taste buds.', 'A perfect blend of culinary artistry and rich flavors.', 'Savor the evening with our Batch Squid Jean Shorts dinner option.'];
var foodsSlikaLink = ['assets/img/breakfast_item.jpg', 'assets/img/lunch_item.jpg', 'assets/img/dinner_item.jpg'];

var foodsKontejner = '';

for(var i = 0; i < foodsH2.length; i++) {
    var foodEl = document.createElement('div');
    foodEl.className = 'col-md-4';
    foodEl.innerHTML = `
        <div class="food-item">
            <h2>${foodsH2[i]}</h2>
            <img src="${foodsSlikaLink[i]}" alt="${foodsH2[i]}"/>
            <div class="price">${foodsPrice[i]}</div>
            <div class="text-content">
                <h4>${foodsH4[i]}</h4>
                <p>${foodsP[i]}</p>
            </div>
        </div>
    `
    foodsKontejner += foodEl.outerHTML; 
}

document.getElementById('food-cont').innerHTML = foodsKontejner;


var blogSrc = ['assets/img/blog_post_01.jpg', 'assets/img/blog_post_02.jpg', 'assets/img/blog_post_03.jpg', 'assets/img/blog_post_04.jpg'];
var blogAlt = ['Blog', 'Post', 'Blog Post', 'Blog1'];
var blogDate = ['26 Oct 2023', '21 Oct 2023', '11 Oct 2023', '03 Oct 2023'];
var blogH4 = ['Stumptown Tofu Schlitz', 'Succulents Hashtag Folk', 'Knaus Sriracha Pinterest', 'Crucifix Selvage Coat'];
var blogSpan = ['Branding / Admin', 'Branding / Admin', 'Dessert / Chef', 'Plate / Chef'];
var blogP = [
    'Learn about Stumptown Tofu Schlitz unique flavors and the branding process behind this meal.',
    'Here at Victory, explore with us the fascinating world of Succulents Hashtag Folk.',
    'Dive into the world of Knaus Sriracha Pinterest, a dessert crafted by our skilled chefs.',
    'Experience the flavors of Crucifix Selvage Coat. Our chefs present a culinary tradition on a plate.'
];
var blogContinueReading = ``;

var blog = '';

for (var i = 0; i < blogAlt.length; i++) {
    var blogCont = document.createElement('div');
    blogCont.className = 'col-md-6';
    blogCont.innerHTML = `
        <div class="blog-post">
            <img src="${blogSrc[i]}" alt="${blogAlt[i]}"/>
            <div class="date">${blogDate[i]}</div>
            <div class="right-content">
                <h4>${blogH4[i]}</h4>
                <span>${blogSpan[i]}</span>
                <p>${blogP[i]}</p>
                ${blogContinueReading}
            </div>
        </div>
    `
    blog += blogCont.outerHTML;
}

document.getElementById('blog').innerHTML = blog;


var SignUpReg = /^[a-z]{4,}[0-9]*(@gmail.com|@yahoo.com|@ict.edu.rs)$/;

function provera2(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    if(SignUpReg.test(email)) {
        document.getElementById('emailSpan').textContent = "You successfully signed up!";
        document.getElementById('emailSpan').classList.add('signup');
        document.getElementById('emailSpan').classList.remove('signupFailed');
    }  
    else {
        document.getElementById('emailSpan').textContent = "Use lowercase letters and '@gmail.com' or '@ict.edu.rs' at the end";
        document.getElementById('emailSpan').classList.add('signupFailed');
    } 
}


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    clearErrors();

    var isValid = true;

    var regIme = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{4,20})?$/;
    if (!regIme.test(name)) {
        document.getElementById('errorName').textContent = "Name must start with a capital and have minimal 3 letters!";
        document.getElementById('name').classList.add('error-border');
        isValid = false;
    }

    var SignUpReg = /^[a-z]{4,}[0-9]*(@gmail.com|@yahoo.com|@ict.edu.rs)$/;
    if (!SignUpReg.test(email)) {
        document.getElementById('errorEmail').textContent = "Use lowercase letters, without '.' and '@gmail.com' or '@ict.edu.rs' at the end.";
        document.getElementById('email').classList.add('error-border');
        isValid = false;
    }

    var regTel = /^(06)[\d]{8,15}/
    if (!regTel.test(phone)) {
        document.getElementById('errorPhone').textContent = "Phone number must start with '06' and have 8-15 digits!";
        document.getElementById('phone').classList.add('error-border');
        isValid = false;
    }
    
    if (message.length < 10) {
        document.getElementById('errorMessage').textContent = "Message should be at least 10 characters long.";
        document.getElementById('message').classList.add('error-border');
        isValid = false;
    }


    return isValid;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = "";
    }

    var formElements = document.getElementsByClassName('form-control');
    for (var i = 0; i < formElements.length; i++) {
        formElements[i].classList.remove('error-border');
    }
}


  $(document).ready(function() {
    $(".prvoDugme").mouseover(function() {
        $(this).css({backgroundColor: "#f05e44" });
    });

    $(".prvoDugme").mouseout(function() {
        $(this).css({ backgroundColor: "#f2745f" });
    });
  });

  $(document).ready(function() {
    $(".drugoDugme").mouseover(function() {
        $(this).css({backgroundColor: "#f05e44", color: "#fff"});
    });

    $(".drugoDugme").mouseout(function() {
        $(this).css({ backgroundColor: "#fff", color: "#f2745f" });
    });
  });

    
  $(document).ready(function() {{
    $(".treceDugme").mouseover(function() {
        $(this).css({ backgroundColor: "#f2745f", border: "1px solid #f2745f" });
    });

    $(".treceDugme").mouseout(function() {
        $(this).css({ backgroundColor: "transparent", border: "1px solid #fff"  });
    });

    $(document).ready(function() {
        $("#meniLista li a").hover(
            function() {
                $(this).css({
                    borderBottom: "1px solid #fff",
                });
            },
            function() {
                $(this).css({
                    borderBottom: "1px solid transparent",
                });
            }
        );
    });

    $(document).ready(function() {
        $(".services .service-item img").mouseover(function() {
            $(this).css({
                "border": "15px solid #f2f6ff",
                "transition": "0.3s ease"
            });
        });
    
        $(".services .service-item img").mouseout(function() {
            $(this).css({
                "border": "15px solid transparent",
                "transition": "0.3s ease"
            });
        });
    });
    
    
    $(document).ready(function() {
        $(".featured-food .food-item").mouseover(function() {
            $(this).find(".price").css({
                "color": "#f2745f",
                "backgroundColor": "rgba(250, 250, 250, 0.9)",
            });
        });
    
        $(".featured-food .food-item").mouseout(function() {
            $(this).find(".price").css({
                "color": "transparent",
                "backgroundColor": "transparent",
            });
        });
    });
    

    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scrollToTopBtn').removeClass('hidden');
            } else {
                $('#scrollToTopBtn').addClass('hidden');
            }
        });
    
        $('#scrollToTopBtn').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
    

}});




