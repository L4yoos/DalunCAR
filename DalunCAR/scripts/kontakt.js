const nazwa = document.getElementById("imie");
const nazwisko = document.getElementById("nazwisko");
const mail = document.getElementById("email");
const nrtel = document.getElementById("nrtele");
const wiadomosc = document.getElementById("message");
const myform1 = document.getElementById("myform")
const bladtelefon = document.getElementById("bladtelefon")

nazwa.addEventListener("input", function()
{
    if(nazwa.value.length < 4 ) 
    {
        nazwa.style.cssText = `
        border: 1px solid red
    `;
    }
    else
    {
        nazwa.style.cssText = `
        border: 1px solid green
    `;
    }
})

nazwisko.addEventListener("input", function()
{
    if(nazwisko.value.length < 7 ) 
    {
        nazwisko.style.cssText = `
        border: 1px solid red
    `;
    }
    else
    {
        nazwisko.style.cssText = `
        border: 1px solid green
    `;
    }
})

mail.addEventListener("input", function()
{
    if(!mail.value.includes("@")) 
    {
        mail.style.cssText = `
        border: 1px solid red
    `;
    }
    else
    {
        mail.style.cssText = `
        border: 1px solid green
    `;
    }
})

nrtel.addEventListener("input", function()
{
    if(isNaN(nrtel.value) || nrtel.value.length == 0 || nrtel.value.length <= 8 || nrtel.value.length > 9) 
    {
        nrtel.style.cssText = `
        border: 1px solid red
    `;
    myform1.addEventListener("submit", (tel) => {
        tel.preventDefault();
        bladtelefon.style.cssText = `display: block;`;
     });
    }
    else
    {
        nrtel.style.cssText = `
        border: 1px solid green
    `;
    bladtelefon.style.cssText = `display: none;`;
    myform1.addEventListener("submit", (event) => {
        event.preventDefault();
        bladtelefon.style.cssText = `display: none;`;
        alert("Dziękujemy! Za skontaktowanie się z Nami!");
        window.location.replace("http://daluncar.netlify.app/kontakt.html");
     });
    }
})

wiadomosc.addEventListener("input", function()
{
    if(wiadomosc.value.length <= 30) 
    {
        wiadomosc.style.cssText = `
        border: 1px solid red
    `;
    }
    else
    {
        wiadomosc.style.cssText = `
        border: 1px solid green
    `;
    }
})
