// Check Login State
        if(localStorage.getItem("loggedIn") !== "true"){
            window.location.href = "login.html";
        }

        // Logout function
        function logout(){
            localStorage.removeItem("loggedIn");
            window.location.href = "login.html";
        }

        // Inactivity Auto-Logout (5 Mins)
        let timer;
        function resetTimer(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                localStorage.removeItem("loggedIn");
                window.location.href = "login.html";
            }, 300000);
        }
        document.addEventListener("mousemove", resetTimer);
        document.addEventListener("keypress", resetTimer);
        document.addEventListener("click", resetTimer);
        resetTimer();

        // Preloader Handling
        window.addEventListener("load", () => {
            const loader = document.getElementById("loader");
            if (loader) {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
                setTimeout(() => loader.remove(), 500);
            }
        });

        // Hero Image Slider
        const slides = document.querySelectorAll(".slide");
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }, 5000);

        // Background Video Speed
        const video = document.getElementById("bgVideo");
        if(video) {
            video.playbackRate = 0.8;
        }

        // Typing Effect
        const text = "Welcome To My Gallery";
        let i = 0;
        function typing(){
            const typingEl = document.getElementById("typing");
            if(typingEl) {
                if(i < text.length){
                    typingEl.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, 100);
                } else {
                    setTimeout(() => {
                        typingEl.innerHTML = "";
                        i = 0;
                        typing();
                    }, 2000);
                }
            }
        }
        typing();

        // Trending Slider Auto Scroll
        const slider = document.querySelector(".trending-slider");
        if(slider) {
            setInterval(() => {
                slider.scrollBy({ left: 330, behavior: "smooth" });
                if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10){
                    slider.scrollTo({ left: 0, behavior: "smooth" });
                }
            }, 3500);
        }

        // Progress Bar & Back to Top Button
        window.onscroll = function(){
            let scrollTop = document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (scrollTop / height) * 100;
            const pBar = document.getElementById("progressBar");
            if(pBar) pBar.style.width = scrolled + "%";

            const topBtn = document.getElementById("topBtn");
            if(topBtn){
                if(window.scrollY > 300){
                    topBtn.style.display = "block";
                } else {
                    topBtn.style.display = "none";
                }
            }
        };

        document.getElementById("topBtn").onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        /*==========================
SCROLL REVEAL
==========================*/

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(box=>{

const top=box.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

box.classList.add("active");

}

});

});