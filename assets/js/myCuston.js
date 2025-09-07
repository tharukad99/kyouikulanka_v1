$(function () {
        var $slider = $('.image-slider .owl-courses-item');
        if ($slider.length && typeof $.fn.owlCarousel === 'function' && !$slider.hasClass('owl-loaded')) {
          $slider.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 20,
            nav: true,
            dots: true,
            responsive: { 0:{items:1}, 768:{items:2}, 992:{items:3} }
          });
        }
      });



(function(){
        var panel = document.getElementById('quickContact');
        var btnClose = document.getElementById('qcClose');
        var launcher = document.getElementById('qcLaunch');

        // Hide panel by default
        panel.classList.add('is-hidden');
        launcher.style.display = 'flex';
        launcher.setAttribute('aria-hidden','false');

        function hidePanel(){
          panel.classList.add('is-hidden');
          launcher.style.display = 'flex';
          launcher.setAttribute('aria-hidden','false');
        }

        function showPanel(){
          panel.classList.remove('is-hidden');
          launcher.style.display = 'none';
          launcher.setAttribute('aria-hidden','true');
        }

        btnClose.addEventListener('click', hidePanel);
        launcher.addEventListener('click', showPanel);
      })();


      
(function(){
        // Replace with your actual PUBLIC KEY
        emailjs.init("3nvi8u9AkGeCTkS7K"); 
      })();

      const contactForm = document.getElementById("contact_form");
        if (contactForm) {
          contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_h0lyqtn", "template_bq3i06y", this)
              .then(function () {
                alert("Message sent successfully!");
                contactForm.reset();
              }, function (error) {
                alert("Failed to send message. Error: " + JSON.stringify(error));
              });
          });
        }