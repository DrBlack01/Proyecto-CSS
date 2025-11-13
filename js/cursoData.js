const cursosData = {
    fullstack: {
        titulo: 'Desarrollo Full Stack',
        icono: 'fa-code',
        color: '#4f46e5',
        duracion: '12 semanas',
        nivel: 'Intermedio',
        estudiantes: '250+',
        precio: 'S/. 1,200',
        descripcion: 'Conviértete en un desarrollador completo capaz de crear aplicaciones web desde cero.',
        requisitos: [
            'Conocimientos básicos de programación',
            'HTML y CSS fundamental',
            'Ganas de aprender y dedicación'
        ],
        temas: [
            { modulo: 'Frontend Moderno', contenido: 'React, Redux, Hooks, Context API' },
            { modulo: 'Backend Robusto', contenido: 'Node.js, Express, API REST' },
            { modulo: 'Bases de Datos', contenido: 'MongoDB, PostgreSQL, Prisma' },
            { modulo: 'Deployment', contenido: 'Docker, AWS, Vercel, CI/CD' }
        ],
        instructor: 'Carlos Mendoza',
        certificado: true,
        modalidad: 'Online en vivo',
        horarios: 'Lunes y Miércoles 7pm - 9pm'
    },

    uxui: {
        titulo: 'Diseño UX/UI Profesional',
        icono: 'fa-palette',
        color: '#9333ea',
        duracion: '8 semanas',
        nivel: 'Básico',
        estudiantes: '180+',
        precio: 'S/. 900',
        descripcion: 'Aprende a diseñar experiencias digitales memorables y centradas en el usuario.',
        requisitos: [
            'No se requiere experiencia previa',
            'Computadora con conexión a internet',
            'Creatividad y atención al detalle'
        ],
        temas: [
            { modulo: 'Fundamentos UX', contenido: 'Research, Personas, User Journey' },
            { modulo: 'Diseño UI', contenido: 'Teoría del color, Tipografía, Layouts' },
            { modulo: 'Herramientas', contenido: 'Figma, Adobe XD, Prototipado' },
            { modulo: 'Portfolio', contenido: 'Caso de estudio, Presentación' }
        ],
        instructor: 'Ana Rodríguez',
        certificado: true,
        modalidad: 'Online en vivo',
        horarios: 'Martes y Jueves 6pm - 8pm'
    },

    frontend: {
        titulo: 'Desarrollo Frontend',
        icono: 'fa-laptop-code',
        color: '#0ea5e9',
        duracion: '10 semanas',
        nivel: 'Básico',
        estudiantes: '320+',
        precio: 'S/. 950',
        descripcion: 'Domina las tecnologías fundamentales del desarrollo web moderno.',
        requisitos: [
            'Conocimientos básicos de computación',
            'Lógica de programación (deseable)',
            'Dedicación de 10-15 horas semanales'
        ],
        temas: [
            { modulo: 'HTML5 Semántico', contenido: 'Estructura, Accesibilidad, SEO' },
            { modulo: 'CSS3 Avanzado', contenido: 'Flexbox, Grid, Animaciones, SASS' },
            { modulo: 'JavaScript ES6+', contenido: 'DOM, Eventos, Fetch, Async/Await' },
            { modulo: 'Frameworks', contenido: 'React o Vue.js, Componentes' }
        ],
        instructor: 'Luis Fernández',
        certificado: true,
        modalidad: 'Online en vivo',
        horarios: 'Sábados 9am - 12pm'
    },

    datascience: {
        titulo: 'Ciencia de Datos e Inteligencia Artificial',
        icono: 'fa-brain',
        color: '#10b981',
        duracion: '14 semanas',
        nivel: 'Avanzado',
        estudiantes: '190+',
        precio: 'S/. 1,500',
        descripcion: 'Aprende análisis de datos, machine learning y visualización con herramientas modernas.',
        requisitos: [
            'Conocimientos de Python',
            'Matemáticas y estadística básica',
            'Inglés técnico (lectura)'
        ],
        temas: [
            { modulo: 'Python para Datos', contenido: 'Pandas, NumPy, Matplotlib' },
            { modulo: 'Machine Learning', contenido: 'Scikit-learn, Regresión, Clasificación' },
            { modulo: 'Deep Learning', contenido: 'TensorFlow, Redes Neuronales' },
            { modulo: 'Proyectos Reales', contenido: 'NLP, Visión Computacional' }
        ],
        instructor: 'Diana Sofía Medina',
        certificado: true,
        modalidad: 'Online en vivo',
        horarios: 'Miércoles y Viernes 8pm - 10pm'
    },

robotica: {
  titulo: 'Robótica y Programación',
  icono: 'fa-robot',
  color: '#ef4444',
  duracion: '9 semanas',
  nivel: 'Básico',
  estudiantes: '180+',
  precio: 'S/. 980',
  descripcion: 'Aprende a diseñar, programar y controlar robots educativos con Arduino y sensores.',
  requisitos: [
      'Conocimientos básicos de electricidad o programación',
      'Gusto por la mecánica y la tecnología'
  ],
  temas: [
      { modulo: 'Fundamentos', contenido: 'Componentes, Sensores, Actuadores' },
      { modulo: 'Arduino', contenido: 'Programación básica, control digital y analógico' },
      { modulo: 'Proyectos', contenido: 'Robots seguidores de línea, brazos mecánicos' },
      { modulo: 'Integración', contenido: 'Bluetooth, IoT y control remoto' }
  ],
  instructor: 'Andrés Pacheco',
  certificado: true,
  modalidad: 'Online en vivo',
  horarios: 'Viernes 7pm - 9pm'
},

backend: {
  titulo: 'Backend y Bases de Datos',
  icono: 'fa-server',
  color: '#3b82f6',
  duracion: '13 semanas',
  nivel: 'Intermedio',
  estudiantes: '230+',
  precio: 'S/. 1,100',
  descripcion: 'Aprende a construir servidores robustos, APIs REST y manejar bases de datos SQL/NoSQL.',
  requisitos: [
      'Conocimientos de JavaScript o Python',
      'Fundamentos de lógica de programación'
  ],
  temas: [
      { modulo: 'Fundamentos', contenido: 'HTTP, JSON, REST APIs' },
      { modulo: 'Bases de Datos', contenido: 'MySQL, PostgreSQL, MongoDB' },
      { modulo: 'Autenticación', contenido: 'JWT, OAuth, Seguridad' },
      { modulo: 'Deploy', contenido: 'Docker, Nginx, AWS' }
  ],
  instructor: 'Gabriela Morales',
  certificado: true,
  modalidad: 'Online en vivo',
  horarios: 'Lunes y Miércoles 8pm - 10pm'
}

};
