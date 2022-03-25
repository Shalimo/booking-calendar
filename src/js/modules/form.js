import { postData } from "../services/post-data";

const form = () => {
    const form = document.querySelectorAll('form');
    // const input = document.querySelectorAll('input');

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const formData = new FormData(item);
            
            postData('src/js/modules/server.php', formData)
                .then(res => console.log(res))
        })
    })
}

export default form;