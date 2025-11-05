document.addEventListener('DOMContentLoaded', () => {
  const filterIcon = document.querySelector('.buscador img[alt="filter"]');
  const filtersAside = document.querySelector('.filters');

  if (!filterIcon || !filtersAside) return;

  // Crear overlay y botón de cierre
  const overlay = document.createElement('div');
  overlay.classList.add('filters-overlay');
  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-filters');
  closeBtn.innerHTML = 'x';

  // Insertar overlay al body (vacío)
  document.body.appendChild(overlay);

  // Guardar referencia al contenedor original (para restaurarlo)
  const originalParent = filtersAside.parentElement;

  // Abrir popup
  filterIcon.addEventListener('click', () => {
    // Mover el aside dentro del overlay (solo si no está ya)
    if (!overlay.contains(filtersAside)) {
      filtersAside.prepend(closeBtn);
      overlay.appendChild(filtersAside);
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // desactiva scroll fondo
  });

  // Cerrar popup
  const closePopup = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Restaurar aside a su sitio original
    originalParent.insertBefore(filtersAside, originalParent.firstChild);
    if (filtersAside.contains(closeBtn)) closeBtn.remove();
  };

  // Eventos de cierre
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === closeBtn) closePopup();
  });
});