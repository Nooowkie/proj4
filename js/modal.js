const modal = document.querySelector('.modal');
const modalOpenButton = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

modalOpenButton.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }};
