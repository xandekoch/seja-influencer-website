var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    // slidesPerGroup: 1,
    freeMode: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: "auto",
    spaceBetween: 15,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    spaceBetween: 20,
    // slidesPerGroup: 1,
    freeMode: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function openLightbox() {
    document.body.classList.add("video");
}


function closeLightbox() {
    document.body.classList.remove("video");
}


function playVideo() {
    let video = document.getElementById("video");
    
    video.contentWindow.postMessage( '{"event":"command", "func":"playVideo", "args":""}', '*');
}


function pauseVideo() {
    let video = document.getElementById("video");

    video.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*');
}


function openCard(card) {
    classes = card.classList

    if ('opened' == card.classList[1]) {
    card.classList.remove("opened");
    }
    else {
        card.classList.add("opened")
    }
}


// Set the date we're counting down to
var countDownDate = new Date("Oct 14, 2022 23:55:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("hour").innerHTML = (days * 24)  + hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hour").innerHTML = "EXPIRED";
  }
}, 1000);
