'use strict';
const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.querySelectorAll('[data-treatment]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#treatment').value = link.dataset.treatment;
  });
});
document.querySelector('#appointment').addEventListener('submit', (event) => {
  event.preventDefault();
  const treatment = document.querySelector('#treatment').value;
  const branch = document.querySelector('#branch').value;
  const phone = document.querySelector('#contact-number').value;
  const message = `Hola InnovaDental, quisiera consultar por ${treatment} en la sede ${branch}. ¿Podrían indicarme disponibilidad para una cita y confirmar la dirección y los horarios?`;
  window.location.assign(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
});
document.querySelector('#year').textContent = new Date().getFullYear();
const appointmentDialog = document.querySelector('#appointment-dialog');
document.querySelectorAll('[data-appointment]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    appointmentDialog.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => appointmentDialog.close());
appointmentDialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
