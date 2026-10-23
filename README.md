# InnovaDental — web estática

Incluye HTML, CSS, JavaScript y todos los recursos visuales locales. No requiere instalación, compilación, servidor de aplicación ni fuentes externas.

## Publicar en Netlify

1. Descomprime `InnovaDental-Netlify.zip`.
2. Arrastra la carpeta descomprimida (la que contiene `index.html`) al área de despliegue manual de Netlify.
3. En despliegues desde un repositorio, deja vacío el comando de build y utiliza la carpeta de estos archivos como directorio de publicación.

Para revisar localmente, abre `index.html` en un navegador. El JavaScript necesita estar habilitado para el selector de consulta y el menú móvil.

## Datos por confirmar

- Direcciones y horarios de ambas sedes: están marcados como pendientes en la web.
- Los dos contactos se presentan como contactos generales. El visitante elige un número para la consulta; no se presupone su asignación a una sede. Los enlaces de las tarjetas usan el primer contacto general e incluyen la sede en el mensaje.
- No se incluyen años de experiencia, nombres de profesionales, testimonios, resultados garantizados ni perfiles sociales sin confirmar.
- Las fotos de tratamientos y sedes son recortes de la referencia visual proporcionada. La portada panorámica fue reconstruida con IA a partir de esa referencia para retirar los textos incrustados. Todas son referenciales y no documentan pacientes, equipo ni instalaciones reales. Verifica los derechos de uso de la imagen suministrada antes de publicar y sustitúyelas por fotografías autorizadas si corresponde.

## Funcionamiento

La solicitud de cita abre un diálogo accesible para elegir tratamiento, sede y contacto. Después abre WhatsApp con tratamiento y sede en el mensaje. No registra una reserva ni recopila datos en un servidor. La disponibilidad y confirmación se coordinan directamente con la clínica. Los enlaces telefónicos permiten llamar en dispositivos compatibles.

El diseño incluye navegación por teclado, foco visible, etiquetas de formularios, menú móvil y respeto a `prefers-reduced-motion`. La animación de entrada es breve; el contenido permanece visible aunque el navegador no admita animaciones u observadores.

Edita `index.html` para los textos, `fidelity.css` para el diseño y `script.js` para el mensaje de WhatsApp. Las fotografías están en `assets/`.
