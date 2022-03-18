document.querySelectorAll('.tabs li').forEach((ele) => {
    ele.addEventListener("click", () => {
        document.querySelector('.tabs li.active').classList.remove("active")
        ele.classList.add("active");

        document.querySelectorAll(".about .row").forEach(ele => {
            ele.classList.add("hide");
            ele.classList.remove("show");

            console.log(ele)
        })
        document.querySelectorAll(`${ele.dataset.show}`).forEach((ele) => {
            ele.classList.add("show");
        })

        // ele.textContent.toLocaleLowerCase()
    })
})



$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        margin:30,
        loop:true,
        nav:true,
        dots:true,
        dotsEach:true,

        dotsData:true,
        autoplay:true,
        responsive :{
            0:{
                items:1
            },
            450: {
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })

});



