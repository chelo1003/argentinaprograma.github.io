



function ocultar() {
  document.getElementById('foto').style.display = "none";
  document.getElementById('datosPersonales').style.display = "none";
  document.getElementById('estudios').style.display = "none";
  document.getElementById('experienciaLaboral').style.display = "none";
  document.getElementById('otrosConocimientos').style.display = "none";
}

ocultar();

document.getElementById("botonFoto").addEventListener('click', function() {
    ocultar();
      document.getElementById('foto').style.display = "block";
  }
);

document.getElementById("botonDatosPersonales").addEventListener('click', function() {
    ocultar();
      document.getElementById('datosPersonales').style.display = "block";
  }
);

document.getElementById("botonEstudios").addEventListener('click', function() {
    ocultar();
      document.getElementById('estudios').style.display = "block";
  }
);

document.getElementById("botonExperienciaLaboral").addEventListener('click', function() {
    ocultar();
      document.getElementById('experienciaLaboral').style.display = "block";
  }
);

document.getElementById("botonOtrosConocimientos").addEventListener('click', function() {
    ocultar();
      document.getElementById('otrosConocimientos').style.display = "block";
  }
);
