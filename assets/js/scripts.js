        (function(){
        /**
         * funcion de stiky
        */
            const nav = document.querySelector('nav');
            const logo = document.querySelector('.logo');
            const threshold = 10;
            if(!nav) return;
            function onScroll(){
                if(window.scrollY > threshold){
                    nav.classList.add('nav-sticky');
                    logo.classList.add('logo-sticky');
                } else {
                    nav.classList.remove('nav-sticky');
                    logo.classList.remove('logo-sticky');
                }
            }
            window.addEventListener('scroll', onScroll, {passive:true});
            onScroll();
        })();