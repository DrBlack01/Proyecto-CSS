

// FUNCIÓN PRINCIPAL: MOSTRAR DETALLE DEL CURSO

function mostrarDetalleCurso(cursoId) {
    const curso = cursosData[cursoId];
    
    if (!curso) {
        Swal.fire({
            icon: 'error',
            title: 'Curso no encontrado',
            text: 'Lo sentimos, no pudimos cargar la información de este curso.'
        });
        return;
    }

    // HTML del contenido del modal
    const contenidoHTML = `
        <div class="modal-curso">
            <!-- Header del Modal -->
            <div class="modal-curso__header" style="border-left: 5px solid ${curso.color};">
                <div class="modal-curso__icono" style="background-color: ${curso.color};">
                    <i class="fas ${curso.icono}"></i>
                </div>
                <div class="modal-curso__info-principal">
                    <div class="modal-curso__badges">
                        <span class="badge-modal" style="background-color: ${curso.color};">
                            <i class="fas fa-signal"></i> ${curso.nivel}
                        </span>
                        ${curso.certificado ? '<span class="badge-modal badge-certificado"><i class="fas fa-certificate"></i> Certificado</span>' : ''}
                    </div>
                    <p class="modal-curso__modalidad">
                        <i class="fas fa-video"></i> ${curso.modalidad}
                    </p>
                </div>
            </div>

            <!-- Descripción -->
            <div class="modal-curso__descripcion">
                <p>${curso.descripcion}</p>
            </div>

            <!-- Info Rápida -->
            <div class="modal-curso__stats">
                <div class="stat-item">
                    <i class="fas fa-clock" style="color: ${curso.color};"></i>
                    <div>
                        <strong>Duración</strong>
                        <p>${curso.duracion}</p>
                    </div>
                </div>
                <div class="stat-item">
                    <i class="fas fa-users" style="color: ${curso.color};"></i>
                    <div>
                        <strong>Estudiantes</strong>
                        <p>${curso.estudiantes} inscritos</p>
                    </div>
                </div>
                <div class="stat-item">
                    <i class="fas fa-calendar-alt" style="color: ${curso.color};"></i>
                    <div>
                        <strong>Horarios</strong>
                        <p>${curso.horarios}</p>
                    </div>
                </div>
            </div>

            <!-- Requisitos -->
            <div class="modal-curso__seccion">
                <h3><i class="fas fa-check-circle"></i> Requisitos</h3>
                <ul class="lista-requisitos">
                    ${curso.requisitos.map(req => `<li><i class="fas fa-chevron-right"></i> ${req}</li>`).join('')}
                </ul>
            </div>

            <!-- Temario -->
            <div class="modal-curso__seccion">
                <h3><i class="fas fa-book"></i> Temario del Curso</h3>
                <div class="modulos-grid">
                    ${curso.temas.map((tema, index) => `
                        <div class="modulo-card" style="border-left: 3px solid ${curso.color};">
                            <div class="modulo-numero" style="background-color: ${curso.color};">${index + 1}</div>
                            <div>
                                <strong>${tema.modulo}</strong>
                                <p>${tema.contenido}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Instructor -->
            <div class="modal-curso__instructor">
                <i class="fas fa-chalkboard-teacher"></i>
                <div>
                    <strong>Instructor:</strong> ${curso.instructor}
                </div>
            </div>

            <!-- Precio -->
            <div class="modal-curso__precio" style="background-color: ${curso.color};">
                <div>
                    <span class="precio-label">Inversión:</span>
                    <span class="precio-valor">${curso.precio}</span>
                </div>
                <small>* Consulta por descuentos y facilidades de pago</small>
            </div>
        </div>
    `;

    // Mostrar SweetAlert2 con animación personalizada
    Swal.fire({
        title: curso.titulo,
        html: contenidoHTML,
        width: '900px',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: '<i class="fas fa-graduation-cap"></i> Inscribirme Ahora',
        cancelButtonText: '<i class="fas fa-share-alt"></i> Compartir',
        confirmButtonColor: curso.color,
        cancelButtonColor: '#6b7280',
        customClass: {
            popup: 'modal-curso-popup',
            title: 'modal-curso-title',
            confirmButton: 'modal-curso-btn-confirmar',
            cancelButton: 'modal-curso-btn-cancelar'
        },
        showClass: {
            popup: 'animate__animated animate__zoomIn animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__zoomOut animate__faster'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            inscribirseCurso(curso);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            compartirCurso(curso);
        }
    });
}


// FUNCIÓN: INSCRIBIRSE AL CURSO

function inscribirseCurso(curso) {
    Swal.fire({
        title: '¡Excelente decisión! ',
        html: `
            <div class="inscripcion-form">
                <p>Estás a un paso de inscribirte en:</p>
                <h3 style="color: ${curso.color}; margin: 15px 0;">${curso.titulo}</h3>
                <form id="formInscripcion">
                    <input type="text" id="nombre" placeholder="Nombre completo" required>
                    <input type="email" id="email" placeholder="Correo electrónico" required>
                    <input type="tel" id="telefono" placeholder="Teléfono / WhatsApp" required>
                    <select id="horario" required>
                        <option value="">Selecciona tu horario preferido</option>
                        <option value="manana">Mañana (9am - 12pm)</option>
                        <option value="tarde">Tarde (2pm - 5pm)</option>
                        <option value="noche">Noche (6pm - 9pm)</option>
                    </select>
                </form>
            </div>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Enviar Solicitud',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: curso.color,
        preConfirm: () => {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const horario = document.getElementById('horario').value;

            if (!nombre || !email || !telefono || !horario) {
                Swal.showValidationMessage('Por favor completa todos los campos');
                return false;
            }

            return { nombre, email, telefono, horario };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Simulación de envíos para futuro cuando haya backend
            Swal.fire({
                icon: 'success',
                title: '¡Solicitud Enviada! ✅',
                html: `
                    <p>Gracias <strong>${result.value.nombre}</strong>,</p>
                    <p>Nos pondremos en contacto contigo en las próximas 24 horas al:</p>
                    <p><strong>${result.value.email}</strong></p>
                    <br>
                    <p>También te enviaremos información sobre métodos de pago y descuentos disponibles.</p>
                `,
                confirmButtonText: 'Entendido',
                confirmButtonColor: curso.color
            });
        }
    });
}



// FUNCIÓN: COMPARTIR CURSO

function compartirCurso(curso) {
    const texto = `¡Mira este curso increíble! ${curso.titulo} - ${curso.duracion}`;
    const url = window.location.href;

    Swal.fire({
        title: 'Compartir Curso',
        html: `
            <div class="compartir-opciones">
                <button class="btn-compartir btn-whatsapp" onclick="compartirEnWhatsApp('${texto}', '${url}')">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </button>
                <button class="btn-compartir btn-facebook" onclick="compartirEnFacebook('${url}')">
                    <i class="fab fa-facebook-f"></i> Facebook
                </button>
                <button class="btn-compartir btn-twitter" onclick="compartirEnTwitter('${texto}', '${url}')">
                    <i class="fab fa-twitter"></i> Twitter
                </button>
                <button class="btn-compartir btn-copiar" onclick="copiarEnlace('${url}')">
                    <i class="fas fa-link"></i> Copiar Link
                </button>
            </div>
        `,
        showConfirmButton: false,
        showCloseButton: true
    });
}

function compartirEnWhatsApp(texto, url) {
    window.open(`https://wa.me/?text=${encodeURIComponent(texto + ' ' + url)}`, '_blank');
}

function compartirEnFacebook(url) {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function compartirEnTwitter(texto, url) {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(texto)}&url=${encodeURIComponent(url)}`, '_blank');
}

function copiarEnlace(url) {
    navigator.clipboard.writeText(url).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Enlace copiado!',
            text: 'El enlace se copió al portapapeles',
            timer: 2000,
            showConfirmButton: false
        });
    });
}



// SISTEMA DE FILTROS DE CURSOS

document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtro-btn');
    const tarjetas = document.querySelectorAll('.curso-card');

    filtros.forEach(filtro => {
        filtro.addEventListener('click', function() {
            // Remover clase activo de todos
            filtros.forEach(f => f.classList.remove('activo'));
            // Agregar clase activo al seleccionado
            this.classList.add('activo');

            const categoria = this.getAttribute('data-filtro');

            tarjetas.forEach(tarjeta => {
                if (categoria === 'todos') {
                    tarjeta.style.display = 'block';
                    setTimeout(() => {
                        tarjeta.style.opacity = '1';
                        tarjeta.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    const categoriaTarjeta = tarjeta.getAttribute('data-categoria');
                    if (categoriaTarjeta === categoria) {
                        tarjeta.style.display = 'block';
                        setTimeout(() => {
                            tarjeta.style.opacity = '1';
                            tarjeta.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        tarjeta.style.opacity = '0';
                        tarjeta.style.transform = 'translateY(30px)';
                        setTimeout(() => {
                            tarjeta.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
});


        //Sirve para darle un evento al boton de informacion
    document.querySelectorAll(".curso-card__boton").forEach((boton, index) => {
  const cursosKeys = ["fullstack", "uxui", "datascience", "mobile", "robotica", "backend"];
  boton.addEventListener("click", () => mostrarDetalleCurso(cursosKeys[index]));
});

