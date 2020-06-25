(function ($) {
    "use strict";
    $(function () {
        // AMIMATED NUMBER



        $('.progress-bar-number .num3').appear(function () {
            // setTimeout(function () {
            //     $('.progress-bar-number .num3').countTo();
            // }, 1);
            let counter = document.querySelector('.num3');
            let speed = 200;
            // counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.dataset.target;
                let current = +counter.innerText;
                let inc = Math.ceil(target / speed);


                if (current < target) {
                    // Add inc to count and output in counter
                    counter.innerText = current + inc;
                    // Call function every ms
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount()

            // } )
        });
        $('.progress-bar-number .num1').appear(function () {
            // setTimeout(function () {
            //     $('.progress-bar-number .num1').countTo();
            // }, 1);
            let counter = document.querySelector('.num1');
            let speed = 200;
            // counters.forEach(counter => {
            let updateCount = () => {
                let target = +counter.dataset.target;
                let current = +counter.innerText;
                let inc = Math.ceil(target / speed);


                if (current < target) {
                    // Add inc to count and output in counter
                    counter.innerText = current + inc;
                    // Call function every ms
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount()

            // })
        });

        // $('.pricing .inner-number1').appear(function () {
        //     setTimeout(function () {
        //         $('.pricing .inner-number1').countTo();
        //     }, 100);
        // });
        // $('.pricing .inner-number2').appear(function () {
        //     setTimeout(function () {
        //         $('.pricing .inner-number2').countTo();
        //     }, 100);
        // });
        // $('.pricing .inner-number3').appear(function () {
        //     setTimeout(function () {
        //         $('.pricing .inner-number3').countTo();
        //     }, 100);
        // });

        // -------------------------------------//
        // WFECT FOR SECTION PRICING
        if ($(window).width() > 600) {
            $('.pricing-widget').hover(function () {
                $('.pricing').find('.pricing-widget.main').removeClass('active');
            }, function () {
                $('.pricing-widget.main').addClass('active');
            });
        }
        else {
            $('.pricing').find('.pricing-widget.main').removeClass('active');
        }
        // -------------------------------------//

        // INITIALIZE ISOTOPE WHEN NEWTAB ACTIVE
        $('.picture-gallery-wrapper a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: '.grid-item'
                }
            });
        });

    });

    $(window).load(function () {

        // GALLERY ISSOTOPE
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-item'
            }
        });

        // -------------------------------------//
        // SHOW IMAGE GALLERY
        $(".fancybox-button").fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: false,
            helpers: {
                title: { type: 'inside' },
                buttons: {}
            }
        });
        // -------------------------------------//
        // SET WIDTH - HEIGHT FOR LOADING
        $('.body-2').width($(window).width());
        $('.body-2').height($(window).height());
        // LOADING FOR HOMEPAGE
        setTimeout(function () {
            $('.body-2').removeClass('loading');
            $('.body-2').addClass('loaded');

        }, 800);
        document.getElementById("header").style.visibility = "visible";
        document.getElementById("wrapper-content").style.visibility = "visible";
        document.getElementById("footer").style.visibility = "visible";
        document.getElementById("myModal").style.display = "block";
        // document.getElementById("header").style.display = "block";
        // document.getElementById("wrapper-content").style.display = "block";
        // document.getElementById("footer").style.display = "block";
    });

})(jQuery);


// $(document).ready(function () {

//     var Validation = (function () {
//         var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         var digitReg = /^\d+$/;

//         var isEmail = function (email) {
//             return emailReg.test(email);
//         };
//         var isNumber = function (value) {
//             return digitReg.test(value);
//         };
//         var isRequire = function (value) {
//             return value == "";
//         };
//         var countChars = function (value, count) {
//             return value.length == count;
//         };
//         var isChecked = function (el) {
//             var hasCheck = false;
//             el.each(function () {
//                 if ($(this).prop('checked')) {
//                     hasCheck = true;
//                 }
//             });
//             return hasCheck;
//         };
//         return {
//             isEmail: isEmail,
//             isNumber: isNumber,
//             isRequire: isRequire,
//             countChars: countChars,
//             isChecked: isChecked
//         };
//     })();

//     var required = $('form').find('[data-required]');
//     var numbers = $('form').find('[data-number]');
//     var emails = $('form').find('[data-email]');
//     var once = $('form').find('[data-once]');
//     var radios = $('.form-item-triple');
//     var groups = [];
//     radios.each(function () {
//         groups.push($(this).find('[data-once]'));
//     });
//     var counts = $('form').find('[data-count]');

//     $('#submit').on('click', function () {
//         required.each(function () {
//             if (Validation.isRequire($(this).val())) {
//                 $(this).siblings('small.errorReq').show();
//             }
//         });
//         emails.each(function () {
//             if (!Validation.isEmail($(this).val())) {
//                 $(this).siblings('small.errorEmail').show();
//             }
//         });
//         $.each(groups, function () {
//             if (!Validation.isChecked($(this))) {
//                 $(this).parents('.form-item').find('small.errorOnce').show();
//             }
//         });
//         numbers.each(function () {
//             if (!Validation.isNumber($(this).val())) {
//                 $(this).siblings('small.errorNum').show();
//             }
//         });
//         counts.each(function () {
//             if (!Validation.countChars($(this).val(), $(this).data('count'))) {
//                 $(this).siblings('small.errorChar').show();
//             }
//         });
//     });

//     required.on('keyup blur', function () {
//         if (!Validation.isRequire($(this).val())) {
//             $(this).siblings('small.errorReq').hide();
//         }
//     });
//     emails.on('keyup blur', function () {
//         if (Validation.isEmail($(this).val())) {
//             $(this).siblings('small.errorEmail').hide();
//         }
//     });
//     once.on('change', function () {
//         $.each(groups, function (i) {
//             if (Validation.isChecked(groups[i])) {
//                 groups[i].parents('.form-item').find('small.errorOnce').hide();
//             }
//         });
//     });
//     numbers.on('keyup blur', function () {
//         if (Validation.isNumber($(this).val())) {
//             $(this).siblings('small.errorNum').hide();
//         }
//     });
//     counts.on('keyup blur', function () {
//         if (Validation.countChars($(this).val(), $(this).data('count'))) {
//             $(this).siblings('small.errorChar').hide();
//         }
//     });

// });


function subscribeMailingList() {
    document.getElementById("mailer-message").innerHTML = "";
    let email = document.getElementById("emailForSub").value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        var req = new XMLHttpRequest();
        req.open("GET", "hello.php?email=" + email, true);
        req.onload = function () {
            // alert(this.responseText);
            if (this.responseText == "success") {
                document.getElementById("mailer-message").style.color = "lightgreen";
                document.getElementById("mailer-message").innerHTML = "Thanks for subscribing!";
                document.getElementById("emailForSub").value = "";

            }
            if (this.responseText == "error") {
                document.getElementById("mailer-message").style.color = "orange";
                document.getElementById("mailer-message").innerHTML = "Error while processing!";
            }
        }
        req.send();
        req.onerror = function () {
            document.getElementById("mailer-message").style.color = "orange";
            document.getElementById("mailer-message").innerHTML = "Something went wrong!";
        }

    }
    else {
        document.getElementById("mailer-message").style.color = "orange";
        document.getElementById("mailer-message").innerHTML = "Please enter a valid email!";
    }
}

