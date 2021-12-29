<template>
<div id="particles-js" class="c-HomeHero">

  <div class="c-HomeHero--textBox">
    <h1 class="c-HomeHero--title">Gregory Zucchero</h1>
    <h3 class="c-HomeHero--subtitle">Web & Crypto Enthusiast</h3>
  </div>
  <no-ssr>
    <vue-particles color="#dedede" :hoverEffect="false" :particlesNumber="150"></vue-particles>
  </no-ssr>
</div>
</template>

<style>
.particles-js-canvas-el{
  position: absolute!important;
}
</style>


<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

export default {
  data() {
    return{

    }
  },

  mounted() {
    // initTypeAnimation()
    console.log(this)
    // initParticles()
  },


  methods:{
    initTypeAnimation(){
      var i = 0;
      var a = 0;
      var isBackspacing = false;
      var isParagraph = false;

      // Typerwrite text content.
      var textArray = [
        "Enthusiast",
        "Developer",
        "Follower",
        "Programmer",
        "Wizard"
      ];

      // Speed (in milliseconds) of typing.
      var speedForward = 100; //Typing Speed
      var speedWait = 1000; // Wait between typing and backspacing
      var speedBetweenLines = 1000; //Wait between first and second lines
      var speedBackspace = 25; //Backspace Speed

      //Run the loop
      typeWriter("output", textArray);

      function typeWriter(id, ar) {
        var element = $("#" + id),
        aString = ar[a],
        eHeader = element.children("h1"), //Header element
        eParagraph = element.children("p"); //Subheader element

        // Determine if animation should be typing or backspacing
        if (!isBackspacing) {

          // If full string hasn't yet been typed out, continue typing
          if (i < aString.length) {

              if (!isParagraph) {
                eHeader.text(eHeader.text() + aString.charAt(i));
              } else {
                eParagraph.text(eParagraph.text() + aString.charAt(i));
              }
              i++;
              setTimeout(function(){ typeWriter(id, ar); }, speedForward);

        // If full string has been typed, switch to backspace mode.
        } else if (i == aString.length) {

          isBackspacing = true;
          setTimeout(function(){ typeWriter(id, ar); }, speedWait);

        }

        // If backspacing is enabled
      } else {

        // If either the header or the paragraph still has text, continue backspacing
        if (eHeader.text().length > 0 || eParagraph.text().length > 0) {

          // If paragraph still has text, continue erasing, otherwise switch to the header.
          if (eParagraph.text().length > 0) {
            eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
          } else if (eHeader.text().length > 0) {
            eParagraph.removeClass("cursor");
            eHeader.addClass("cursor");
            eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
          }
          setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);

          // If neither head or paragraph still has text, switch to next quote in array and start typing.
        } else {

          isBackspacing = false;
          i = 0;
          isParagraph = false;
          a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
          setTimeout(function(){ typeWriter(id, ar); }, 50);

        }
      }
    }
      }
    }

  }
</script>
