        var scrollpos = window.scrollY;
      var header = document.getElementById("header");
      var navMenu = document.getElementById("nav-toggle");
      var navcontent = document.getElementById("nav-content");
      var navcontent = document.getElementById("nav-content");
      var navaction = document.getElementById("navAction");
      var brandname = document.getElementById("brandname");
      var toToggle = document.querySelectorAll(".toggleColour");

      document.addEventListener("scroll", function () 
      {
        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;

        if (scrollpos < 10) 
        {
          header.classList.remove("bg-white");
          navaction.classList.remove("gradient");
          navaction.classList.add("bg-white");
          navaction.classList.remove("text-white");
          navaction.classList.add("text-gray-800");
          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) 
          {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
          }

          header.classList.remove("shadow");

          navMenu.classList.remove("text-black");
          navMenu.classList.add("text-white");

          // navcontent.classList.remove("bg-white");
          // navcontent.classList.add("bg-gray-100");
          navcontent.classList.add("lg:text-white");
          navcontent.classList.remove("lg:text-black"); 
        } 
        else 
        {
          header.classList.add("bg-white");
          navaction.classList.remove("bg-white");
          navaction.classList.add("gradient");
          navaction.classList.remove("text-gray-800");
          navaction.classList.add("text-white");
          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) 
          {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
          }
          header.classList.add("shadow");
        
          navMenu.classList.add("text-black");
          navMenu.classList.remove("text-white");

          // navcontent.classList.remove("bg-gray-100");
          // navcontent.classList.add("bg-white");          
          navcontent.classList.remove("lg:text-white");
          navcontent.classList.add("lg:text-black");
        }
      });      
      
      /*Toggle dropdown list*/
      /*https://gist.github.com/slavapas/593e8e50cf4cc16ac972afcbad4f70c8*/

      var navMenuDiv = document.getElementById("nav-content");
     // var navMenu = document.getElementById("nav-toggle");

      document.onclick = check;
      function check(e) {
        var target = (e && e.target) || (event && event.srcElement);

        //Nav Menu
        if (!checkParent(target, navMenuDiv)) {
          // click NOT on the menu
          if (checkParent(target, navMenu)) {
            // click on the link
            if (navMenuDiv.classList.contains("hidden")) {
              navMenuDiv.classList.remove("hidden");
            } else {
              navMenuDiv.classList.add("hidden");
            }
          } else {
            // click both outside link and outside menu, hide menu
            navMenuDiv.classList.add("hidden");
          }
        }
      }
      function checkParent(t, elm) {
        while (t.parentNode) {
          if (t == elm) {
            return true;
          }
          t = t.parentNode;
        }
        return false;
      }