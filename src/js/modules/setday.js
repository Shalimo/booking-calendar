// как получить динамически созданные дивы и работать с их value?

const setDay = () => {
    let elem = document.querySelector('#day');
    const dayyys = document.querySelectorAll('.cost');
    elem.setAttribute("value", dayyys.forEach((item) => {
        item.getAttribute('value')
    }))
}

export default setDay;
