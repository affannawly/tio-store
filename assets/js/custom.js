

/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        main_fun: function () {
            /*====================================
             CUSTOM LINKS SCROLLING FUNCTION 
            ======================================*/

            $('a[href*=#]').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
               && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        var targetOffset = $target.offset().top;
                        $('html,body')
                        .animate({ scrollTop: targetOffset }, 800); //set scroll speed here
                        return false;
                    }
                }
            });

// Temukan tombol toggle tema
var themeToggleBtn = document.getElementById('theme-toggle-btn');

// Periksa tema yang disimpan di localStorage
var currentTheme = localStorage.getItem('theme');

// Tetapkan tema default jika tidak ada tema yang disimpan
if (currentTheme === null) {
    currentTheme = 'light-mode';
}

// Atur tema pada tag HTML
document.getElementById('theme-switcher').className = currentTheme;

// Fungsi untuk mengganti tema
function toggleTheme() {
    if (currentTheme === 'light-mode') {
        currentTheme = 'dark-mode';
    } else {
        currentTheme = 'light-mode';
    }
    // Simpan preferensi tema di localStorage
    localStorage.setItem('theme', currentTheme);
    // Atur tema pada tag HTML
    document.getElementById('theme-switcher').className = currentTheme;
}

// Tambahkan event listener untuk tombol toggle tema
themeToggleBtn.addEventListener('click', toggleTheme);

            /*====================================
               WRITE YOUR SCRIPTS BELOW 
           ======================================*/


        },

        initialization: function () {
            mainApp.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));



