const imie_nazwisko = document.getElementById("imie-nazwisko");
const mail = document.getElementById("Mail");
const telefon = document.getElementById("telefon");
const wiadomosc = document.getElementById("message");
const PIN = document.getElementById("captcha")
const myform = document.getElementById("myform")
const tekst = document.getElementById("tekst")
const bladtelefon = document.getElementById("bladtelefon")

const liczba = Math.floor(1000 + Math.random() * 9000);

document.querySelector("left").innerHTML = liczba

imie_nazwisko.addEventListener("input", function()
{
    if(imie_nazwisko.value.length < 10 ) 
    {
        imie_nazwisko.style.cssText = `
        border: 1px solid red
    `;
    }
    else
    {
        imie_nazwisko.style.cssText = `
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

telefon.addEventListener("input", function()
{
    if(isNaN(telefon.value) || telefon.value.length == 0 || telefon.value.length <= 8 || telefon.value.length > 9) 
    {
        telefon.style.cssText = `
        border: 1px solid red
    `;
        myform.addEventListener("submit", (tel) => {
        tel.preventDefault();
        bladtelefon.style.cssText = `display: block;`;
     });
    }
    else
    {
        telefon.style.cssText = `
        border: 1px solid green
    `;
    myform.addEventListener("submit", (tel) => {
        tel.preventDefault();
        bladtelefon.style.cssText = `display: none;`;
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

PIN.addEventListener("input", function()
{
    if(PIN.value == liczba)
    {
        PIN.style.cssText = `
        border: 1px solid green`;
        tekst.style.cssText = `display: none;`
        myform.addEventListener("submit", (event) => {
            event.preventDefault();
            tekst.style.cssText = `display: none;`
            alert("Dziękujemy! Zostałeś dodany do newslettera!");
            window.location.replace("http://daluncar.netlify.app/auto.html");
         });
    }
    else
    {
        PIN.style.cssText = `
        border: 1px solid red`;
        myform.addEventListener("submit", (event) => {
            event.preventDefault();
            tekst.style.cssText = `display: block;`;
         });
    }
}
)


