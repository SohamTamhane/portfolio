// ----------- Typing Effect --------------
class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }
    tick() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    }
}


window.onload = function() {
    
    var preloader = document.getElementById('loading');
    preloader.style.display = 'none';

    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


var name_input = document.getElementById('input-name');
name_input.addEventListener('click', function(){
    document.getElementById('cname').focus();
})

var email_input = document.getElementById('input-email');
email_input.addEventListener('click', function(){
    document.getElementById('cemail').focus();
})

var message_input = document.getElementById('input-message');
message_input.addEventListener('click', function(){
    document.getElementById('cmessage').focus();
})


// Navbar Responsive
var hamburger_icon = document.getElementById('hambuger-icon');
var nav_ul = document.getElementById('nav-ul');
nav_status = 0;
hamburger_icon.addEventListener('click', function(){
    if(nav_status==0){
        nav_ul.style.display = 'grid';
        nav_status = 1;
    }
    else{
        nav_ul.style.display = 'none';
        nav_status = 0;
    }

});

// Disable Right Click
document.addEventListener('contextmenu', event => event.preventDefault());