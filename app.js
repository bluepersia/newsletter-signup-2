const form = document.getElementById ('cmp__form');
const email = document.getElementById ('cmp__email');
const cmp = document.getElementById ('cmp');

form.addEventListener ('submit', submit);

function submit (e)
{
    e.preventDefault ();

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test (email.value))
    {
        email.parentElement.classList.add ('invalid');
        return;
    }

    email.parentElement.classList.remove ('invalid');

    const html = `
    <img src="./assets/images/icon-success.svg" alt="Success"/>
    <h1 id="cmp__title">Thanks for subscribing!</h1>
    <p id="cmp__body">A confirmation email has been sent to <strong>ash@loremcompany.com</strong>. Please open it and click the button inside to confirm your subscription.</p>
    <button id="cmp__btn">Dismiss message</button>
    `

    cmp.classList.add ('thanks');
    cmp.innerHTML = html;
    document.getElementById ('cmp__btn').addEventListener ('click', () => document.body.removeChild (cmp));
}