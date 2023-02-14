// tady je místo pro náš program

// 1

let title = 'Beauty and the Beast';

console.log(title.length);

console.log(title.toUpperCase());

console.log(title.slice(0, 5));

console.log(title.slice(-5));

// 2

let email = prompt('Zadej svůj e-mail', '@');
let atIndex = email.indexOf('@');

let nameInput = email.slice(0, atIndex);
let domainInput = email.slice(atIndex + 1, email.length + 1);

let user = {
    userName: nameInput,
    domain: domainInput
}

let { userName, domain } = user;

document.querySelector('.uzivatelEmail').innerHTML = (
    '<p>Přihlašovací jméno: ' + userName + '</p>' +
    '<p>Doména: ' + domain + '</p>'
);

// 3

let streetInput = prompt('Zadej ulici');
let numberInput = prompt('Zadej číslo domu');
let cityInput = prompt('Zadej město');
let postalCodeInput = prompt('Zadej psc');

let eshopUser = {
    street: streetInput,
    number: numberInput,
    city: cityInput,
    postalCode: postalCodeInput
}

let { street, number, city, postalCode } = eshopUser;

document.querySelector('.adresaEshop').innerHTML = `
    <address>
        <h2>Adresa:</h2>
        <p>${street} ${number}</p>
        <p>${postalCode} ${city}</p>
    </address>
`



