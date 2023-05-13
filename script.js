
// window.onload = function () {
//     Particles.init({
//       selector: ".background",
//       maxParticles: 100,
//       sizeVariations: 5,
      
//       number: { value: 80, density: { enable: true, value_area: 800 } },
//       color: { value: "#ffffff" },
//       shape: {
//         type: "circle",
//         stroke: { width: 0, color: "#ffffff" },
//         polygon: { nb_sides: 5 },
//         image: { src: "img/github.svg", width: 100, height: 100 },
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: "#ffffff",
//         opacity: 0.4,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 6,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: { enable: false, rotateX: 600, rotateY: 1200 },
//       },
//       interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: true, mode: "repulse" },
//             onclick: { enable: true, mode: "push" },
//             resize: true,
//           },
//           modes: {
//             grab: { distance: 400, line_linked: { opacity: 1 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
//             repulse: { distance: 200, duration: 0.4 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 },
//           },
//         },
//         retina_detect: true,
//     })
//   }

//  Functionality for adding transparency
  
var slider = document.getElementById("transparency");
var blurRange = document.getElementById("blur");
var oulineRange = document.getElementById("outline");

let backgroundStr = document.getElementById("background"); 
let blurStr = document.getElementById("blur_value"); 
let borderStr = document.getElementById("border_value"); 

//second div for result

let resultBox = document.getElementById("result_box");

  slider.oninput = function() {
    let res = backgroundStr.innerHTML.replace(backgroundStr.innerHTML, `rgba(255, 255, 255, ${slider.value});`);
    backgroundStr.innerHTML = res;
    document.getElementById("result").style.backgroundColor = `rgba(255, 255, 255, ${slider.value})`;
    resultBox.style.backgroundColor = `rgba(255, 255, 255, ${slider.value})`;
  }

  //  Functionality for adding blur
  blurRange.oninput = function() {
    let res = blurStr.innerHTML.replace(blurStr.innerHTML, `blur(${blurRange.value}px);`);
    blurStr.innerHTML = res;
    document.getElementById("result").style.backdropFilter = `blur(${blurRange.value}px)`;
    resultBox.style.backdropFilter = `blur(${blurRange.value}px)`;
  }

    //  Functionality for adding Outline
    oulineRange.oninput = function() {
        let res = borderStr.innerHTML.replace(borderStr.innerHTML, `1px solid rgba(255, 255, 255, ${oulineRange.value});`);
        borderStr.innerHTML = res;
        document.getElementById("result").style.border = `1px solid rgba(255, 255, 255, ${oulineRange.value})`;
      resultBox.style.border = `1px solid rgba(255, 255, 255, ${oulineRange.value})`;
    }

    function Copied(value) {
      navigator.clipboard.writeText(value);
     document.getElementById("text_copy_icon").classList.add("rotate");

     setTimeout(() => {
      document.getElementById("text_copy_icon").classList.remove("rotate");
     }, 3000)
    }
    

    const textCopy = () => {
      var str = $("#text_copy")[0].innerText;
      Copied(str);
    }
