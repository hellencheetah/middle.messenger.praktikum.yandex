

export function initForm () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log(form)
    })
}
