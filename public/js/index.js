// PRIMER MODAL | MENU
const MenuIcon = document.querySelector('.menu'); // Icono de menu
const closeModalIcon = document.querySelector('.close-modal'); // Icono cerrar modal
const backSidebar = document.querySelector('.back-sidebar'); // Modal

// SEGUNDO MODAL | USUARIO
const iconUser = document.querySelector('.user');
const closeModalUser = document.querySelector('.close-user');
const userModal = document.querySelector('.back-user');

// MODALSITO EDITAR
const infoEdit = document.querySelector('.edit-user');
const dotsInfo = document.querySelector('.dots-info');

// MODALSITO EDITAR

// Función para alternar la visibilidad
dotsInfo.addEventListener('click', () => {
    if (infoEdit.style.display === 'flex') {
        infoEdit.style.display = 'none';
    } else {
        infoEdit.style.display = 'flex';
    }
});

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
    infoEdit.classList.remove('opened');
});

userModal.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'opacity' && getComputedStyle(userModal).opacity == '0') {
        userModal.style.display = 'none';
        infoEdit.style.display = 'none';
    }
});

// **********************
// FUNCIONES PARA PETICIONES DE API
const news = () => {
    axios({
        method: 'GET',
        url: `https://gnews.io/api/v4/search?q=example&apikey=d56863e988b7efbcaba1bb454aa72a6e`
    }).then(res => {
        let noticias = res;
        console.log(noticias);
    })
}

news();