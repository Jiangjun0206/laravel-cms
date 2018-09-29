$(function () {
    /* For demo purposes */
    var demo = $("<div />").css({
        position: "fixed",
        top: "120px",
        right: "0",
        background: "rgba(0, 0, 0, 0.7)",
        "border-radius": "5px 0px 0px 5px",
        padding: "3px",
        "z-index": "999999",
        cursor: "pointer",
        color: "#ddd"
    }).html('  <i class="fa fa-gears"></i>').addClass("no-print");

    var demo_settings = $("<div />").css({
        "padding": "10px",
        position: "fixed",
        top: "100px",
        right: "-210px",
        background: "#fff",
        border: "3px solid rgba(0, 0, 0, 0.7)",
        "width": "210px",
        "z-index": "999999"
    }).addClass("no-print");
    demo_settings.append(
        "<h4 style='margin: 0 0 5px 0; border-bottom: 1px dashed #ddd; padding-bottom: 3px;'>Skins</h4>"

        + "<div class='well'>"
        + "<div class='skin_btn' onclick='loadjscssfile(\"primary_skin.css\",\"css\")'>"
        + "<div class='primary_skin skin_size'></div>"
        + "</div>"

        + "<div class='skin_btn' onclick='loadjscssfile(\"danger_skin.css\",\"css\")'>"
        + "<div class='danger_skin skin_size'></div>"
        + "</div>"

        + "<div class='skin_btn' onclick='loadjscssfile(\"success_skin.css\",\"css\")'>"
        + "<div class='success_skin skin_size'></div>"
        + "</div>"
        + "<div class='skin_btn' onclick='loadjscssfile(\"warning_skin.css\",\"css\")'>"
        + "<div class='warning_skin skin_size'></div>"
        + "</div>"
        + "<div class='skin_btn' onclick='loadjscssfile(\"purple_skin.css\",\"css\")'>"
        + "<div class='purple_skin skin_size'></div>"
        + "</div>"
        + "<div class='skin_btn' onclick='loadjscssfile(\"turquoise_skin.css\",\"css\")'>"
        + "<div class='turquoise_skin skin_size'></div>"
        + "</div>"
        + "<div class='skin_btn' onclick='loadjscssfile(\"asbestos_skin.css\",\"css\")'>"
        + "<div class='asbestos_skin skin_size'></div>"
        + "</div>"
        + "<div class='skin_btn' onclick='loadjscssfile(\"hoki_skin.css\",\"css\")'>"
        + "<div class='hoki_skin skin_size'></div>"
        + "</div>"
        + "</div>"
    );

    demo.click(function () {
        if (!$(this).hasClass("open")) {
            $(this).css("right", "210px");
            demo_settings.css("right", "0");
            $(this).addClass("open");
        } else {
            $(this).css("right", "0");
            demo_settings.css("right", "-230px");
            $(this).removeClass("open")
        }
    });

    $("body").append(demo);
    $("body").append(demo_settings);
});
function loadjscssfile(filename, filetype) {
    if (filetype == "css") {
        var fileref = document.createElement("link");
        fileref.href = "assets/css/frontend/skins/"+filename;
        fileref.rel = "stylesheet";
        fileref.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(fileref)
    }
}