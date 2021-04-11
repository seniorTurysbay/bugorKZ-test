window.addEventListener("DOMContentLoaded", function () {

    let btns = document.querySelectorAll(".main_block_button")

    btns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.currentTarget.parentNode.remove();
        });
    });

});

