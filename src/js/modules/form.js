const form = () => {
    const modal = document.querySelector(".modal-container")
    const form = document.querySelectorAll('form'); 
    const modalForm = document.querySelector('.modal_form');

    form.forEach(item => {
        item.addEventListener('submit', () => {
        const title = document.createElement('h2');
        title.innerHTML = "Спасибо, заявка принята";
        modalForm.append(title);

        setTimeout(() => {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = '';
        }, 1500)
        })
    })
}

export default form;