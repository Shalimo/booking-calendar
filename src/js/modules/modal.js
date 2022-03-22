function showModal() {
    const modal = document.querySelector(".modal-container") 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    const modal = document.querySelector(".modal-container");
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}

function modal() {
    const modal = document.querySelector(".modal-container");
    const btnClose = document.querySelector("[data-close]");
    const openButtons = document.querySelectorAll('.days');

    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showModal();
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('show')) {
            hideModal();
        }
    });

    btnClose.addEventListener('click', () => {
            hideModal();
    });
}

export default modal;

// const testButton = document.querySelector('#submit');

// const getData = async () => {
//     const res = await fetch('http://www.mocky.io/v2/5944e07213000038025b6f30');

//     return await res.json();
// }

// testButton.addEventListener('click', () => {
//     getData()
//      .then(response => console.log(response));
// })

