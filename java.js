
$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS
    AOS.init({
        duration: 1000,
        once: false, // Agar animasi terulang setiap kali elemen muncul
    });

    // Animasi Progress Bar
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        progressBars.forEach(bar => {
            // Jika progress bar muncul di viewport
            if (bar.getBoundingClientRect().top < window.innerHeight) {
                bar.style.width = '0%'; // Reset progress bar ke 0
                const targetWidth = bar.getAttribute('aria-valuenow') + '%'; // Ambil nilai dari aria-valuenow
                setTimeout(() => {
                    bar.style.width = targetWidth; // Mulai animasi lebar
                }, 100);
            }
        });
    }

    // Animasi Angka
    function animateNumbers() {
        const counters = document.querySelectorAll('[id^="projects-count"], [id^="kajem-count"]');
        counters.forEach(counter => {
            if (counter.getBoundingClientRect().top < window.innerHeight) {
                let startValue = 0;
                let endValue = parseInt(counter.innerText);
                let duration = 2000; // Durasi hitung angka (2 detik)

                let increment = endValue / duration * 100;
                let interval = setInterval(function() {
                    startValue += increment;
                    if (startValue >= endValue) {
                        startValue = endValue;
                        clearInterval(interval);
                    }
                    counter.innerText = Math.floor(startValue);
                }, 1);
            }
        });
    }

    // Jalankan animasi ketika halaman pertama kali dimuat
    animateProgressBars();
    animateNumbers();

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', function() {
        animateProgressBars();
        animateNumbers();
    });
});

    // Inisialisasi AOS
    AOS.init({
        duration: 1000, // Durasi animasi
        once: false, // Animasi ulang setiap kali elemen muncul
    });

    // Animasi pengetikan untuk intro (tidak ada perubahan)
    $(document).ready(function () {
        new Typed('.type-it', {
            strings: ['Web Developer', 'UI/UX Designer'],
            typeSpeed: 100,
            loop: true
        });
    });

    // Inisialisasi AOS
    AOS.init({
        duration: 1000, // Durasi animasi
        once: false, // Animasi ulang setiap kali elemen muncul
    });

    // Menghandle pengiriman form (untuk demo)
    $(document).ready(function () {
        // Menampilkan modal popup saat tombol "Contact Now" di header diklik
        $('#navbar-collapse-toggle .nav-link').on('click', function (e) {
            if ($(this).text() === 'Contact') {
                $('#contactModal').modal('show');
            }
        });

        // Menangani pengiriman form dari popup
        $('#contact-popup-form').on('submit', function (e) {
            e.preventDefault(); // Menghindari form dikirim
            alert('Message Sent!');
            $('#contactModal').modal('hide'); // Menutup modal setelah submit
        });

        // Menangani pengiriman form dari halaman contact biasa
        $('#contact-form').on('submit', function (e) {
            e.preventDefault(); // Menghindari form dikirim
            alert('Message Sent!');
        });
    });
    
    // Menampilkan modal popup saat tombol "Contact Now" diklik
    $(document).ready(function () {
        $('#contact-now-button').on('click', function () {
            $('#contactModal').modal('show');
        });
    });