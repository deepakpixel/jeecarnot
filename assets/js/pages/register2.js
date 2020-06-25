function registerMentee() {
    let isValid = 0, e, allset = 1, mailtest;

    // set help block content to <br>
    e = document.getElementsByClassName('help-block');
    for (i = 0; i < e.length; i++) {
        e[i].innerHTML = '<br>';
    }

    // name
    let name;
    name = document.getElementById("name").value;
    if (!name.length) {
        document.getElementById("help-block-name").innerHTML = "Please enter your name";
        allset = 0;
    }

    // email
    let email;
    email = document.getElementById("email").value;
    mailtest = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    if (!email.length) {
        document.getElementById("help-block-email").innerHTML = "Dont worry we won't spam you";
        allset = 0;
    }
    else
        if (mailtest == false) {
            document.getElementById("help-block-email").innerHTML = "Please enter a valid email id";
            allset = 0;
        }

    // phone
    let phone;
    phone = document.getElementById("phone").value;
    if (phone.length == 0) {
        document.getElementById("help-block-phone").innerHTML = "Your phone is required";
        allset = 0;
    }
    else
        if (isNaN(phone) || phone.length != 10) {
            document.getElementById("help-block-phone").innerHTML = "Enter a valid phone number";
            allset = 0;
        }

    // phone2
    let phone2;
    phone2 = document.getElementById("phone2").value;
    if (phone2.length != 0)
        if (isNaN(phone2) || phone2.length != 10) {
            document.getElementById("help-block-phone2").innerHTML = "Enter a valid phone or leave empty";
            allset = 0;
        }

    // parent
    let parent;
    parent = document.getElementById("parent").value;
    if (!parent.length) {
        document.getElementById("help-block-parent").innerHTML = "Please enter parent's name";
        allset = 0;
    }

    // parentphone
    let parentphone;
    parentphone = document.getElementById("parentphone").value;
    if (isNaN(parentphone) || parentphone.length == 0 || parentphone.length != 10) {
        document.getElementById("help-block-parentphone").innerHTML = "Parent's phone number is required";
        allset = 0;
    }

    // class
    let class2;
    class2 = document.getElementById("class").value;


    // percentile
    let percentile;
    percentile = document.getElementById("percentile").value;
    if (percentile.length != 0)
        if (isNaN(percentile)) {
            document.getElementById("help-block-percentile").innerHTML = "Enter valid percentile or leave empty";
            allset = 0;
        }

    // target
    let target;
    target = document.getElementById("target").value;

    // mode
    let mode;
    isValid = 0;
    e = document.getElementsByName('mode');
    for (i = 0; i < e.length; i++) {
        if (e[i].checked) {
            mode = e[i].value;
            isValid = 1;
        }
    }
    if (isValid == 0) {
        document.getElementById("help-block-mode").innerHTML = "Please choose mode of preparation";
        allset = 0;
    }

    // target2
    let target2;
    target2 = document.getElementById("target2").value;
    // info

    let info;
    isValid = 0;
    e = document.getElementsByName('info');
    for (i = 0; i < e.length; i++) {
        if (e[i].checked) {
            info = e[i].value;
            isValid = 1;
        }
    }
    if (isValid == 0) {
        document.getElementById("help-block-info").innerHTML = "This field is required";
        allset = 0;
    }
    else
        if (info == "other") {
            info = document.getElementById("info2").value;
            if (!info.length) {
                document.getElementById("help-block-info2").innerHTML = "This field is required";
                allset = 0;
            }
        }



    // info = document.getElementsByName("info").value;
    // // if (!info.length) {
    // //     document.getElementById("help-block-info").innerHTML = "This field is required";
    // //     allset = 0;
    // // }
    // if (info == "other") {
    //     info = document.getElementById("info2").value;
    //     if (!info.length) {
    //         document.getElementById("help-block-info2").innerHTML = "This field is required";
    //         allset = 0;
    //     }
    // }

    // let info = "";
    // let all = document.querySelectorAll('input[name="info"]:checked');
    // if (all.length == 0) {
    //     document.getElementById("help-block-info").innerHTML = "This field is required";
    //     allset = 0;
    // }
    // for (let i = 0; i < all.length; i++) {
    //     if (all[i].value !== "other")
    //         info = info + " " + all[i].value + ",";
    // }

    // if (document.getElementById("info-other").checked) {
    //     let info2 = document.getElementById("info2").value;
    //     if (!info2.length) {
    //         document.getElementById("help-block-info2").innerHTML = "This field is required";
    //         allset = 0;
    //     }
    //     else
    //         info = info + " " + document.getElementById("info2").value + ",";

    // }
    // if (info[info.length - 1] == ",")
    //     info = info.slice(0, info.length - 1);

    // language
    let language;
    isValid = 0;
    e = document.getElementsByName('language');
    for (i = 0; i < e.length; i++) {
        if (e[i].checked) {
            language = e[i].value;
            isValid = 1;
        }
    }
    if (isValid == 0) {
        document.getElementById("help-block-language").innerHTML = "Please choose you language for JEE";
        allset = 0;
    }
    // material
    let material;
    material = document.getElementById("material").value;
    // suggestion
    let suggestion;
    suggestion = document.getElementById("suggestion").value;

    // refno
    let refno;
    refno = document.getElementById("refno").value;
    // if (!refno.length) {
    //     document.getElementById("help-block-refno").innerHTML = "Please enter payment refrence number";
    //     allset = 0;
    // }

    // promocode
    let promocode;
    promocode = document.getElementById("promocode").value;

    // from where you came to know about us




    // screenshot
    if (document.getElementById("chooseFile").files.length == 0) {
        if (refno.length) {
            document.getElementById("help-block-proof").innerHTML = "Please upload payment proof for the entered reference number.";
            allset = 0;
        }
    }



    // alert(param)
    // alert(name);

    // if validate

    if (allset == 1) {
        // Swal.fire({
        //     title: 'Please wait!',
        //     html: 'Processing your request, it won\'t take long<br><br><br>',
        //     imageUrl: './assets/images/loading.gif',
        //     imageWidth: 150,
        //     imageHeight: 150,
        //     imageAlt: 'Loading...',
        //     allowEscapeKey: false,
        //     allowOutsideClick: false,
        //     allowEnterKey: false,// default value
        //     showConfirmButton: false // There won't be any confirm button

        // });


        swal.fire({
            onOpen: () => {
                swal.showLoading();
            },
            title: 'Registering...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            footer: "Hold on, this won't take long",
            allowEnterKey: false,// default value

        });

        changeRegisterLook(1);
        // var form = $('form')[0]; // You need to use standard javascript object here

        let regtime = new Date();
        regtime = regtime.toString();
        let google = new XMLHttpRequest();
        let param = "name=" + name + "&email=" + email + "&phone=" + phone + "&phone2=" + phone2 + "&parentname=" + parent + "&parentphone=" + parentphone + "&class=" + class2 + "&percentile=" + percentile + "&target=" + target + "&mode=" + mode + "&target2=" + target2 + "&info=" + info + "&language=" + language + "&material=" + material + "&suggestion=" + suggestion + "&regtime=" + regtime + "&paymentref=" + refno + "&promocode=" + promocode;
        let googleapp = "https://script.google.com/macros/s/AKfycbzGJqL8ylBWQFZ-dc0_jJvciqypwZXqPqlDU6xSpSPEsk4vJ7sL/exec?" + param;
        google.open("GET", googleapp, true);
        google.send();

        $.ajax({
            url: "register-mentee.php",
            type: "POST",

            data: jQuery.param({
                name: name,
                email: email,
                phone: phone,
                phone2: phone2,
                parent: parent,
                parentphone: parentphone,
                class: class2,
                mode: mode,
                target: target,
                target2: target2,
                language: language,
                material: material,
                info: info,
                promocode: promocode,
                suggestion: suggestion,
                percentile: percentile,
                refno: refno,

            }),
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',


            // data: new FormData(form),
            // contentType: false,
            cache: false,
            processData: false,
            dataType: "json",
            beforeSend: function () {
                //$("#preview").fadeOut();
                // $("#err").fadeOut();
                console.log("beforesend")
            },
            success: function (data) {
                console.log(data);
                if (data.data == 'success') {

                    // let tempEl = document.getElementsByTagName("input");
                    // for (let e of tempEl) { e.value = ""; };
                    $("#form")[0].reset();
                    $(".file-upload").removeClass('active');
                    $("#noFile").text("No file chosen...");
                    // document.getElementById('lang-en').checked = false;
                    // document.getElementById('lang-hi').checked = false;
                    // document.getElementById('mode1').checked = false;
                    // document.getElementById('mode2').checked = false;
                    Swal.fire({
                        icon: 'success', title: 'Thanks for registering!', html: 'Our team will contact you soon.<br> Please check your mail for futher updates in future.', footer: 'NOTE: Priority will be given to JEE 2020 aspirants.'

                    });
                    changeRegisterLook(0);

                    // send to google form

                    // let regtime = data.time;
                    // let google = new XMLHttpRequest();
                    // let param = "name=" + name + "&email=" + email + "&phone=" + phone + "&phone2=" + phone2 + "&parentname=" + parent + "&parentphone=" + parentphone + "&class=" + class2 + "&percentile=" + percentile + "&target=" + target + "&mode=" + mode + "&target2=" + target2 + "&info=" + info + "&language=" + language + "&material=" + material + "&suggestion=" + suggestion + "&regtime=" + regtime + "&paymentref=" + refno + "&promocode=" + promocode;
                    // let googleapp = "https://script.google.com/macros/s/AKfycbzGJqL8ylBWQFZ-dc0_jJvciqypwZXqPqlDU6xSpSPEsk4vJ7sL/exec?" + param;
                    // google.open("GET", googleapp, true);
                    // google.send();
                }

                else if (data.data == 'error') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Unable to connect to server!',
                        footer: 'Please contact us via chatbox or&nbsp<a href="mailto:hello@jeecarnot.com?Subject=Unable%20to%20register&Body=Server%20Response:%20\'server_response_error\'" target="_top">mail us</a> '
                    });
                    changeRegisterLook(0);
                }
                else if (data.data == 'duplicate') {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Already submitted!',
                        text: 'You have already submitted the payment proof.',
                        footer: 'If thats not the case please contact us via&nbsp<a href="mailto:hello@jeecarnot.com?Subject=Unable%20to%20register&Body=Server%20Response:%20\'payment_proof_already_submitted\'" target="_top">mail</a>&nbspor&nbsp<a href="tel:+918949219529">call us</a>'
                    });
                    changeRegisterLook(0);
                }
                else if (data.data == 'duplicate') {
                    Swal.fire({
                        icon: 'warning',
                        title: 'File size exceeds!',
                        text: 'Maximum accepted file size is 5MB'
                    });
                    changeRegisterLook(0);
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Unable to connect to server!',
                        footer: 'Please contact us via chatbox or&nbsp<a href="mailto:hello@jeecarnot.com?Subject=Unable%20to%20register&Body=Server%20Response:%20\'unexpected_response_from_server\'" target="_top">mail us</a>'
                    });
                    changeRegisterLook(0);
                }
            },
            error: function () {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Unable to connect to server!',
                    footer: 'Please contact us via chatbox or&nbsp<a href="mailto:hello@jeecarnot.com?Subject=Unable%20to%20register&Body=Server%20Response:%20\'unable_to_connect_to_server\'" target="_top">mail us</a>'
                });
                changeRegisterLook(0);
            }
        });


    }
    else {
        // something is wrong
        Swal.fire({
            icon: 'warning', title: "Something\'s missing!", text: 'Please make sure to fill all the required fields'
        });
    }
}




function changeRegisterLook(x) {
    if (x == 1) {
        document.getElementById('register-text').innerHTML = "Registering...";
        document.getElementById('register-button').style.backgroundImage = "linear-gradient(skyblue,skyblue)";
        // disable  button
        document.getElementById("register-button").disabled = true;
    }
    if (x == 0) {
        document.getElementById('register-text').innerHTML = "Register Me";
        document.getElementById('register-button').style.backgroundImage = "none";
        // enable button
        document.getElementById("register-button").disabled = false;
    }

}

showHideOthers();

function showHideOthers() {
    if (document.getElementById("info-other").checked) {
        document.getElementById("info2-container").style.display = "block";
    }
    else
        document.getElementById("info2-container").style.display = "none";

}
function halfSubmit() {

    // name
    let name;
    name = document.getElementById("name").value;
    // email
    let email;
    email = document.getElementById("email").value;

    // phone
    let phone;
    phone = document.getElementById("phone").value;



    // phone2
    let phone2;
    phone2 = document.getElementById("phone2").value;


    // parent
    let parent;
    parent = document.getElementById("parent").value;


    // parentphone
    let parentphone;
    parentphone = document.getElementById("parentphone").value;

    // class
    let class2;
    class2 = document.getElementById("class").value;


    // percentile
    let percentile;
    percentile = document.getElementById("percentile").value;


    // target
    let target;
    target = document.getElementById("target").value;

    // mode
    let mode = "";
    isValid = 0;
    e = document.getElementsByName('mode');
    for (i = 0; i < e.length; i++) {
        if (e[i].checked) {
            mode = e[i].value;
            isValid = 1;
        }
    }


    // target2
    let target2;
    target2 = document.getElementById("target2").value;

    // info
    let info = "";

    // language
    let language = "";
    isValid = 0;
    e = document.getElementsByName('language');
    for (i = 0; i < e.length; i++) {
        if (e[i].checked) {
            language = e[i].value;
            isValid = 1;
        }
    }

    // material
    let material;
    material = document.getElementById("material").value;
    // suggestion
    let suggestion;
    suggestion = document.getElementById("suggestion").value;

    // refno
    let refno;
    refno = document.getElementById("refno").value;


    let req = new XMLHttpRequest();
    param = "name=" + name + "&email=" + email + "&phone=" + phone + "&phone2=" + phone2 + "&parent=" + parent + "&parentphone=" + parentphone + "&class2=" + class2 + "&percentile=" + percentile + "&target=" + target + "&mode=" + mode + "&target2=" + target2 + "&info=" + info + "&language=" + language + "&material=" + material + "&suggestion=" + suggestion;
    let url = "register-inbetween.php?" + param;
    req.open("GET", url, true);
    req.onload = function () {

        let regtime = JSON.parse(this.responseText).time;
        param = "name=" + name + "&email=" + email + "&phone=" + phone + "&phone2=" + phone2 + "&parentname=" + parent + "&parentphone=" + parentphone + "&class=" + class2 + "&percentile=" + percentile + "&target=" + target + "&mode=" + mode + "&target2=" + target2 + "&info=" + info + "&language=" + language + "&material=" + material + "&suggestion=" + suggestion + "&regtime=" + regtime;
        let google = new XMLHttpRequest();
        let googleapp = "https://script.google.com/macros/s/AKfycbwhTgTUpCMNUxTytZnXfmnkyLY9LiH5BW0d3IcnJN_GE8uoO1dS/exec?" + param;
        google.open("GET", googleapp, true);
        google.send();
    }
    req.send();


}




