// Validación
function validarNumeros() {
  const numero = document.getElementById("num1").value;
  const mensaje = document.getElementById("mensaje");

  if (isNaN(numero) || numero.trim() === "") {
    mensaje.innerHTML = "Debes ingresar un número válido.";
    mensaje.style.color = "red";
  } else {
    mensaje.innerHTML = "El número es válido.";
    mensaje.style.color = "green";
  }
}

// Galería 
const imageUrlInput = document.getElementById("imageUrl");
const addImageBtn = document.getElementById("addImage");
const removeImageBtn = document.getElementById("removeImage");
const gallery = document.getElementById("gallery");
let selectedImage = null;

addImageBtn.addEventListener("click", () => {
  const url = imageUrlInput.value.trim();
  if (!url) {
    alert("Por favor, ingresa una URL válida.");
    return;
  }

  const img = document.createElement("img");
  img.src = url;

  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("selected");
    }
    img.classList.add("selected");
    selectedImage = img;
  });

  gallery.appendChild(img);
  imageUrlInput.value = "";
});

removeImageBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert("Primero selecciona una imagen para eliminar.");
  }
});
