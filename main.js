var form = document.querySelector(".form");
var select = document.querySelector("#select");
var radio1 = document.querySelector(".radio1");
var radio2 = document.querySelector(".radio2");
var radio3 = document.querySelector(".radio3");
var pomidor = document.querySelector(".pomidor");
var kurka = document.querySelector("#kurka");
var zaytun = document.querySelector("#zaytun");
var bodring = document.querySelector("#bodring");
var qoziqorin = document.querySelector("#qoziqorin");
var qazi = document.querySelector("#qazi");
var achchiq = document.querySelector("#achchiq");
varextraka = document.querySelector("#sosiska");
var bread = document.querySelector(".bread");
var breadtype = document.querySelector(".bread__width");
var adding = document.querySelector(".adding");
var extra = document.querySelector(".extra");
select.addEventListener("change", function () {
  bread.innerHTML = select.value
})
radio1.addEventListener("change", function () {
  breadtype.innerHTML = document.querySelector(".label1").innerHTML
})
radio2.addEventListener("change", function () {
  breadtype.innerHTML = document.querySelector(".label2").innerHTML
})
radio3.addEventListener("change", function () {
  breadtype.innerHTML = document.querySelector(".label3").innerHTML
})
pomidor.addEventListener("change", function () {
  if (pomidor.checked) {
    if (pomidor.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".potato").innerHTML;
      if (!adding.innerHTML.includes(text.textContent)) {
        adding.appendChild(text);
      }
    }
  } else {
    adding.innerHTML = adding.innerHTML.replace("Pomidor", " ")
  }
})
kurka.addEventListener("change", function () {
  if (kurka.checked) {
    if (kurka.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".kurka").innerHTML;
    }
    if (!adding.innerHTML.includes(text.textContent)) {
      adding.appendChild(text)
    }
  } else {
    adding.innerHTML = adding.innerHTML.replace("Kurka", " ")
  }
})
zaytun.addEventListener("change", function () {
  if (zaytun.checked) {
    if (zaytun.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".zaytun").innerHTML;
    }
    if (!adding.innerHTML.includes(text.textContent)) {
      adding.appendChild(text)
    }
  } else {
    adding.innerHTML = adding.innerHTML.replace("Zaytun", " ")
  }
})
bodring.addEventListener("change", function () {
  if (bodring.checked) {
    if (bodring.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".bodring").innerHTML;
    }
    if (!adding.innerHTML.includes(text.textContent)) {
      adding.appendChild(text)
    }
  } else {
    adding.innerHTML = adding.innerHTML.replace("Tuzlangan bodring", " ")
  }
})
qoziqorin.addEventListener("change", function () {
  if (qoziqorin.checked) {
    if (qoziqorin.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".qoziqorin").innerHTML;
    }
    if (!adding.innerHTML.includes(text.textContent)) {
      adding.appendChild(text)
    }
  } else {
    adding.innerHTML = adding.innerHTML.replace("Qoziqorin", " ")
  }
})
qazi.addEventListener("change", function () {
  if (qazi.checked) {
    if (qazi.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".qazi").innerHTML;
    }
    if (!adding.innerHTML.includes(text.textContent)) {
      adding.appendChild(text)
    }
  } else {
    adding.innerHTML = adding.innerHTML.replace("Qazi", "")
  }
})
achchiq.addEventListener("change", function () {
  if (achchiq.checked) {
    if (achchiq.checked) {
      var text = document.createElement("span");
      text.innerHTML = document.querySelector(".achchiq").innerHTML;
    }
    if (!extra.innerHTML.includes(text.textContent)) {
      extra.appendChild(text)
    }
  } else {
    extra.innerHTML = extra.innerHTML.replace("Achchiq", "")
  }
})

sosiska.addEventListener("change", function () {
  if (sosiska.checked) {
    var textSpan = document.createElement("span");
    textSpan.innerHTML = document.querySelector(".sosiska").innerHTML;
    if (!extra.innerHTML.includes(textSpan.textContent)) {
      extra.appendChild(textSpan)
    }
  } else {
    extra.innerHTML = extra.innerHTML.replace("Sosiska", " ")
  }
})