const form = document.getElementById ('cmp__form');
const email = document.getElementById ('cmp__email');

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
}