AOS.init();

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(90, 1900 / 1000, 1, 1000);
camera.position.z = 200;

renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setClearColor(0x000000, 0);
renderer.setSize(2900, 1520);

renderer.domElement.setAttribute("id", "Planet");
document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040, 3.2);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 3.2);
pLight.position.set(0, -3, 7);
scene.add(pLight);

// const helper = new THREE.PointLightHelper(pLight);
// scene.add(helper);

let loader = new THREE.GLTFLoader();
let obj = null;


if (window.innerWidth > 768) {
    loader.load('3d/scene.gltf', function(gltf) {
        obj = gltf;
        obj.scene.scale.set(0.8, 0.8, 0.8);
        scene.add(obj.scene);
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function() {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
    })
} else {
    loader.load('3d/scene.gltf', function(gltf) {
        obj = gltf;
        obj.scene.scale.set(0.3, 0.3, 0.3);
        scene.add(obj.scene);
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function() {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
    })
}

function animate() {
    requestAnimationFrame(animate);

    if (obj) {
        obj.scene.rotation.y += 0.001;
        obj.scene.rotation.x += 0.001;
    }

    renderer.render(scene, camera);
}

animate();


document.addEventListener("DOMContentLoaded", function() {

    var amount = 130;
    var body = document.querySelector('body');
    var i = 0;

    while (i < amount) {
        var node = document.createElement("i");
        var posX = Math.floor(Math.random() * window.innerWidth);
        var posY = Math.floor(Math.random() * $(document).height());
        var rotation = Math.random() * 180;
        var delay = Math.random() * 20;
        var scale = Math.random() * 0.2;
        node.style.left = posX + 'px';
        node.style.top = posY + 'px';
        node.style.transform = 'rotate(' + rotation + 'deg) scale(' + scale + ')';
        node.style.animationDelay = delay + 's';
        body.appendChild(node);
        i++;
    }

});

window.onload = function() {

}

$(document).ready(function() {
    var options = {
        animateClass: 'animate__animated',
        animateThreshold: 10,

    }
    $('.aniview').AniView(options);
});

const swiper = new Swiper('.swiper', {

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


$('.faq_item').click(function() {

    $(this).children('.answer').toggle();
    $(this).children('.d_flex').children('img').toggleClass('transformImg');
})

$('.menu_open').click(function() {

    $('.header_menu').toggle();
    $(this).toggle();
    $('.menu_close').toggle();
    $('.logo_blur').toggle();
})

$('.menu_close').click(function() {

    $('.header_menu').toggle();
    $(this).toggle();
    $('.menu_open').toggle();
    $('.logo_blur').toggle();
})