const goTopBtn = document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);
window.addEventListener("scroll", trackscroll);

function trackscroll() {
   const offset = window.pageYOffset;
   const coords = document.documentElement.clientHeight;
   if (offset > coords) {
       goTopBtn.classList.add("go-top--show");
   } else {
       goTopBtn.classList.remove("go-top--show");
   }
}

function goTop() {
   if (window.pageYOffset > 0) {
       window.scrollBy(0, -55);
       setTimeout(goTop, 0);
   }
}

const contactLink = document.querySelector('a[href="#contacts"]');

contactLink.addEventListener('click', function(event) {
   event.preventDefault();
   const contactsSection = document.querySelector('#contacts');
   contactsSection.scrollIntoView({behavior: 'smooth'});
});const locationContactLink = document.querySelector('a[href="#contacts"]');

locationContactLink.addEventListener('click', function(event) {
  event.preventDefault();
  const contactsSection = document.querySelector('#contacts');
  contactsSection.scrollIntoView({behavior: 'smooth'});
});

const sliderLink = document.querySelector('a[href="#steps"]');

sliderLink.addEventListener('click', function(event) {
  event.preventDefault();
  const sliderSection = document.querySelector('#steps');
  sliderSection.scrollIntoView({behavior: 'smooth'});
});


const employmentLink = document.querySelector('a[href="#employment"]');

employmentLink.addEventListener('click', function(event) {
   event.preventDefault();
   const employmentsSection = document.querySelector('#employment');
   employmentsSection.scrollIntoView({behavior: 'smooth'});
});const locationemploymentLink = document.querySelector('a[href="#employment"]');

locationemploymentLink.addEventListener('click', function(event) {
  event.preventDefault();
  const employmentsSection = document.querySelector('#employment');
  employmentsSection.scrollIntoView({behavior: 'smooth'});
});
