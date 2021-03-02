
var avloa,segPrint;
//avloa = AvonAnalyticsObjex.Profile.loa;
avloa = '7';

if (avloa <= '6') {
    segPrint = '<a href="/REPSuite/circulo_estelar.page" target="_parent" class="av-card-link">'+
                        '<div class="av-card">'+
                        '<div class="av-card-image"><img class="w-100 av-fallback" src="/REPSuite/static/images/home/circulo_estelar.jpg" ></div>'+
                        '<div class="av-card-text">'+
                        '<h4 class="av-card-title">Círculo estelar</h4>'+
                        '<p class="av-text">Es el programa que te guía hacia el éxito, reconociendo tu constancia y tu esfuerzo desde tu primera campaña.</p>'+
                        '<span class="av-button-tertiary">VER MÁS</span>'+
                        '</div></div></a>';
} else {
    segPrint = '<a href="/REPSuite/circulo_estelar.page" target="_parent" class="av-card-link">'+
    '<div class="av-card">'+
    '<div class="av-card-image"><img class="w-100 av-fallback" src="/REPSuite/static/images/home/circulo_estelar.jpg" ></div>'+
    '<div class="av-card-text">'+
    '<h4 class="av-card-title">Círculo estelar</h4>'+
    '<p class="av-text">Es el programa que te guía hacia el éxito, reconociendo tu constancia y tu esfuerzo desde tu primera campaña.</p>'+
    '<span class="av-button-tertiary">VER MÁS</span>'+
    '</div></div></a>';
}
document.getElementById('repHomeLoaSeg').innerHTML = segPrint;