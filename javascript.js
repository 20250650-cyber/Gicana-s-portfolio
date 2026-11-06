var darkMode = document.getElementById("darkMode");

darkMode.onclick = function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        darkMode.innerHTML = "☀️ Light Mode";

    } else {

        darkMode.innerHTML = "🌙 Dark Mode";

    }

};
