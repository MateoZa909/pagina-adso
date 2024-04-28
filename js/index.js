// PRIMER MODAL | MENU
const MenuIcon = document.querySelector('.menu');
const closeModalIcon = document.querySelector('.close-modal');
const backSidebar = document.querySelector('.back-sidebar');

// SEGUNDO MODAL | USUARIO
const iconUser = document.querySelector('.user');
const closeModalUser = document.querySelector('.close-user');
const userModal = document.querySelector('.back-user');

// Función para cerrar cualquier modal abierto
function closeAnyOpenModal() {
    if (backSidebar.classList.contains('open')) {
        backSidebar.classList.remove('open');
    }
    if (userModal.classList.contains('opened')) {
        userModal.classList.remove('opened');
    }
}

// PRIMER MODAL | MENU
MenuIcon.addEventListener('click', () => {
    closeAnyOpenModal();  // Cierra cualquier modal abierto
    backSidebar.style.display = 'flex';
    setTimeout(() => {
        backSidebar.classList.add('open');
    }, 7);
});

closeModalIcon.addEventListener('click', () => {
    backSidebar.classList.remove('open');
});

backSidebar.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'opacity' && getComputedStyle(backSidebar).opacity == '0') {
        backSidebar.style.display = 'none';
    }
});

// SEGUNDO MODAL | USUARIO
iconUser.addEventListener('click', () => {
    closeAnyOpenModal();  // Cierra cualquier modal abierto
    userModal.style.display = 'flex';
    setTimeout(() => {
        userModal.classList.add('opened');
    }, 10);
});

closeModalUser.addEventListener('click', () => {
    userModal.classList.remove('opened');
});

userModal.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'opacity' && getComputedStyle(userModal).opacity == '0') {
        userModal.style.display = 'none';
    }
});
