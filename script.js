// FAQ Accordion

document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content')
  faqContainer.addEventListener('click', (e)=> {
   const groupHeader = e.target.closest('.faq-group-header')
   if(!groupHeader) return

   const group = groupHeader.parentElement
   const groupBody = group.querySelector('.faq-group-body')
   const icon = groupHeader.querySelector('i')

   // Toggle Icon

   icon.classList.toggle('fa-plus')
   icon.classList.toggle('fa-minus')

   // Toggle visibility of body
   groupBody.classList.toggle('open')
  })
})

// Mobile Menu

document.addEventListener('DOMContentLoaded', ()=> {
  const hamburgerButton = document.querySelector('.hamburger-button')
  const mobileMenu = document.querySelector('.mobile-menu')
  hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
})