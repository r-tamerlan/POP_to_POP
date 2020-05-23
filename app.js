let div = document.querySelectorAll(".divv");

div.forEach(function(item) {

    item.addEventListener("mouseover", function(e) {
        if (e.target.id.startsWith("balon")) {
            document.getElementById(e.target.id).style.display = 'none';
        }

        if (e.target.parentNode.firstChild.nextElementSibling.id.startsWith("pop")) {
            setTimeout(function() {
                document.getElementById(e.target.parentNode.firstChild.nextElementSibling.id).innerHTML = "POP!"
            }, 100)

            setTimeout(function() {
                document.getElementById(e.target.parentNode.firstChild.nextElementSibling.id).style.display = 'none';
            }, 500);

        }

        console.log(document.getElementById("gvd").childElementCount);

    });

});