let dropdown = document.querySelector(".dropdown");
let menu = document.querySelector(".dropdown-menu");
let qwe = document.querySelectorAll(".content_box > .heart_box_main");
let scetchic_one = document.querySelector(".scetchic_one");


for (let zxc of qwe) {
    zxc.addEventListener("click", function(f) {
        zxc.classList.toggle("active");
        let check = document.querySelectorAll(".active"),
            suball = check.length;
        scetchic_one.innerHTML = suball;
    });
}

dropdown.addEventListener("click", function(e) {
    menu.classList.toggle("show");
});

let to_Card = document.querySelectorAll(".to_card");
let kol_vo = document.querySelectorAll(".kol_vo");
let cart = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
};

document.onchange = (event) => {
    if (event.target.classList.contains("kol_vo")) {
        addFunction(event.target.dataset.id, event.target.value);
        for (let toCard of to_Card) {
            toCard.addEventListener("click", (q) => {
                for (let kolVo of kol_vo) {
                    kolVo.value = "";
                }
            });
        }

        cardFunction();
    }
};

const addFunction = (id, num) => {
    cart[id] += Number(num);
};

const cardFunction = (asd) => {
    let first = document.querySelector(".first");
    let second = document.querySelector(".second");
    let third = document.querySelector(".third");
    let fourth = document.querySelector(".fourth");
    let fiveth = document.querySelector(".fiveth");
    let sixth = document.querySelector(".sixth");
    let kolvoo = document.querySelectorAll("#kolvo");
    let totalPrice = document.querySelectorAll(".Price");
    let begining_price = document.querySelectorAll(".begining_price");
    let info_box = document.querySelector(".info_box");
    let zakaz = document.querySelector(".zakaz");
    let scetchic_two = document.querySelector(".scetchic_two");

    scetchic_two.innerHTML =
        cart.one + cart.two + cart.three + cart.four + cart.five + cart.six;
    if (cart.one <= 0) {
        first.classList.add("d-none");
    } else {
        first.classList.remove("d-none");
        kolvoo[0].innerHTML = cart.one;
        totalPrice[0].innerHTML =
            Number(begining_price[0].innerHTML.replace(/[^+\d]/g, "") * cart.one) +
            "₸";

    }
    if (cart.two <= 0) {
        second.classList.add("d-none");
    } else {
        second.classList.remove("d-none");
        kolvoo[1].innerHTML = cart.two;
        totalPrice[1].innerHTML =
            Number(begining_price[1].innerHTML.replace(/[^+\d]/g, "") * cart.two) +
            "₸";
    }
    if (cart.three <= 0) {
        third.classList.add("d-none");
    } else {
        third.classList.remove("d-none");
        kolvoo[2].innerHTML = cart.three;
        totalPrice[2].innerHTML =
            Number(begining_price[2].innerHTML.replace(/[^+\d]/g, "") * cart.three) +
            "₸";
    }
    if (cart.four <= 0) {
        fourth.classList.add("d-none");
    } else {
        fourth.classList.remove("d-none");
        kolvoo[3].innerHTML = cart.four;
        totalPrice[3].innerHTML =
            Number(begining_price[3].innerHTML.replace(/[^+\d]/g, "") * cart.four) +
            "₸";
    }
    if (cart.five <= 0) {
        fiveth.classList.add("d-none");
    } else {
        fiveth.classList.remove("d-none");
        kolvoo[4].innerHTML = cart.five;
        totalPrice[4].innerHTML =
            Number(begining_price[4].innerHTML.replace(/[^+\d]/g, "") * cart.five) +
            "₸";
    }
    if (cart.six <= 0) {
        sixth.classList.add("d-none");
    } else {
        sixth.classList.remove("d-none");
        kolvoo[5].innerHTML = cart.six;
        totalPrice[5].innerHTML =
            Number(begining_price[5].innerHTML.replace(/[^+\d]/g, "") * cart.six) +
            "₸";
    }
    let total_cicle =
        cart.one + cart.two + cart.three + cart.four + cart.five + cart.six;
    // if (total_cicle <= 0) {
    //   sixth.classList.add("d-none");
    // } else {
    //   sixth.classList.remove("d-none");
    //   kolvoo[5].innerHTML = cart.six;
    //   totalPrice[5].innerHTML =
    //     Number(begining_price[5].innerHTML.replace(/[^+\d]/g, "") * cart.six) +
    //     "₸";
    // }
    if (total_cicle != 0) {
        info_box.classList.add("d-none");
        zakaz.classList.remove("d-none");
    } else if (total_cicle == 0) {
        info_box.classList.remove("d-none");
        zakaz.classList.add("d-none");
    }
};
let totalPrice = document.querySelectorAll(".Price");
let zakaz = document.querySelector(".zakaz");
zakaz.addEventListener("click", () => {
    tof = confirm(
        `Ваш заказ на сумму ${totalPrice[0].innerHTML} вы уверены в покупке ?`
    );
    if (tof === true) {
        cart.one = 0;
        cart.two = 0;
        cart.three = 0;
        cart.four = 0;
        cart.five = 0;
        cart.six = 0;
        if (prompt("Введите ваш пинкод для оплаты (4 цифры)").length == 4) {
            alert("Ожидайте закакз");
            cardFunction();
        } else {
            alert("Ошибка");
        }
    } else {
        alert("Удачных покупок");
    }
});
let plus = document.querySelectorAll(".plus")
let minus = document.querySelectorAll(".minus")
let deletee = document.querySelectorAll(".delete")

plus[0].addEventListener("click", () => {
    cart.one++;
    cardFunction()
})
plus[1].addEventListener("click", () => {
    cart.two++;
    cardFunction()
})
plus[2].addEventListener("click", () => {
    cart.three++;
    cardFunction()
})
plus[3].addEventListener("click", () => {
    cart.four++;
    cardFunction()
})
plus[4].addEventListener("click", () => {
    cart.five++;
    cardFunction()
})
plus[5].addEventListener("click", () => {
    cart.six++;
    cardFunction()
})
minus[0].addEventListener("click", () => {
    cart.one--;
    cardFunction()
})
minus[1].addEventListener("click", () => {
    cart.two--;
    cardFunction()
})
minus[2].addEventListener("click", () => {
    cart.three--;
    cardFunction()
})
minus[3].addEventListener("click", () => {
    cart.four--;
    cardFunction()
})
minus[4].addEventListener("click", () => {
    cart.five--;
    cardFunction()
})
minus[5].addEventListener("click", () => {
    cart.six--;
    cardFunction()
})
deletee[0].addEventListener("click", () => {
    cart.one = 0;
    cardFunction()
})
deletee[1].addEventListener("click", () => {
    cart.two = 0;
    cardFunction()
})
deletee[2].addEventListener("click", () => {
    cart.three = 0;
    cardFunction()
})
deletee[3].addEventListener("click", () => {
    cart.four = 0;
    cardFunction()
})
deletee[4].addEventListener("click", () => {
    cart.five = 0;
    cardFunction()
})
deletee[5].addEventListener("click", () => {
    cart.six = 0;
    cardFunction()
})