// 1. BUSCAMOS LOS ELEMENTOS EN EL HTML
// =====================================
const menuBtn = document.getElementById('menuBtn');      // ← El botón 👤
const menuContent = document.getElementById('menuContent'); // ← El menú oculto

// 2. ABRIR/CERRAR AL HACER CLIC EN EL BOTÓN
// ==========================================
menuBtn.addEventListener('click', function(event) {
  event.stopPropagation(); // ← Evita que el clic "rebote" al documento
  menuContent.classList.toggle('show'); // ← Añade/quita la clase "show"
});

// 3. CERRAR AL HACER CLIC FUERA DEL MENÚ
// =======================================
document.addEventListener('click', function(event) {
  // Si el menú está ABIERTO (tiene clase "show")
  if (menuContent.classList.contains('show')) {
    
    // Y si el clic NO fue en el botón NI en el menú...
    if (!menuBtn.contains(event.target) && !menuContent.contains(event.target)) {
      menuContent.classList.remove('show'); // ← ¡CIÉRRALO!
    }
  }
});