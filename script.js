  function toggleSidebar() {
            var sidebar = document.getElementById("mySidebar");
            var content = document.getElementById("main");
            var hamburgerIcon = document.querySelector(".hamburger-icon");

            if (sidebar.style.width === "150px") {
                sidebar.style.width = "0";
                content.style.marginLeft = "0";
                hamburgerIcon.classList.remove("change");
            } else {
                sidebar.style.width = "150px";
                content.style.marginLeft = "150px";
                hamburgerIcon.classList.add("change");
            }
        }





    