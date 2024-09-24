const inputRed = document.querySelector('#color-red');
const inputGreen = document.querySelector('#color-green');
const inputBlue = document.querySelector('#color-blue');

const textRed = document.querySelector('.text-red');
const textGreen = document.querySelector('.text-green');
const textBlue = document.querySelector('.text-blue');

// hexa
const textHexa = document.querySelector('.text-hexa');

// Valor para definir el RGB inicials
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

// funcion RGB
function updateColor(red, green, blue) {
  const colorRGB = `RGB(${red}, ${green}, ${blue})`;
  document.body.style.background=colorRGB;
  textHexa.textContent = rgbToHex(red, green, blue);
}
// funcion RGB a HEXA
function rgbToHex(red, green, blue) {
  const colorHex = (c) => {
    const hex = parseInt(c).toString(16).padStart(2, '0');
    return hex.toUpperCase(); // Convertir a mayúsculas
  };
  return `#${colorHex(red)}${colorHex(green)}${colorHex(blue)}`;
}

// color rojo
// met. 1
inputRed.addEventListener('change', (e) =>{
  const red = e.target.value; // sin usar la variable global
  textRed.textContent = red;
  updateColor(red, green, blue);
});
// color verde
// met. 2
inputGreen.addEventListener('change', ()=>{
  green = inputGreen.value; // usando la variable global
  textGreen.textContent = green;
  updateColor(red, green, blue);
})

// color azul
inputBlue.addEventListener('change', (e) => {
  blue = e.target.value;
  textBlue.textContent = blue;
  updateColor(red, green, blue);
});


