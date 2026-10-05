const canvas =
    document.getElementById("canvas");

const ctx =
    canvas.getContext("2d");


/* ==========================================
   PALET WARNA
========================================== */

const palettes = {

    sogan: {
        background: "#ead7ae",
        light: "#d7a85c",
        main: "#9b5d32",
        dark: "#61321d",
        outline: "#351b12"
    },

    indigo: {
        background: "#e7dfc9",
        light: "#8ba9b5",
        main: "#507486",
        dark: "#294d5c",
        outline: "#172e38"
    },

    hijau: {
        background: "#e3dfc3",
        light: "#9abc89",
        main: "#508064",
        dark: "#2c5845",
        outline: "#19382e"
    },

    merah: {
        background: "#efd5b2",
        light: "#d99462",
        main: "#a94e3e",
        dark: "#6d3030",
        outline: "#351b1c"
    },

    klasik: {
        background: "#e8e0d0",
        light: "#b7aa98",
        main: "#756a5e",
        dark: "#48413b",
        outline: "#292522"
    }

};


/* ==========================================
   ELEMENT
========================================== */

const motifInput =
    document.getElementById("motif");

const iterationInput =
    document.getElementById("iteration");

const scaleInput =
    document.getElementById("scale");

const spacingInput =
    document.getElementById("spacing");

const paletteInput =
    document.getElementById("palette");


const iterationText =
    document.getElementById("iterationText");

const scaleText =
    document.getElementById("scaleText");

const spacingText =
    document.getElementById("spacingText");

const status =
    document.getElementById("status");


/* ==========================================
   LABEL
========================================== */

function updateLabels() {

    iterationText.textContent =
        iterationInput.value;

    scaleText.textContent =
        scaleInput.value;

    spacingText.textContent =
        spacingInput.value;
}


/* ==========================================
   BACKGROUND KAIN
========================================== */

function drawBackground(colors) {

    ctx.fillStyle =
        colors.background;

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    /*
       Tekstur kain sederhana
    */

    ctx.globalAlpha = 0.08;

    ctx.strokeStyle =
        colors.dark;

    ctx.lineWidth = 0.5;


    for (
        let x = 0;
        x < canvas.width;
        x += 7
    ) {

        ctx.beginPath();

        ctx.moveTo(x, 0);

        ctx.lineTo(
            x,
            canvas.height
        );

        ctx.stroke();
    }


    for (
        let y = 0;
        y < canvas.height;
        y += 7
    ) {

        ctx.beginPath();

        ctx.moveTo(0, y);

        ctx.lineTo(
            canvas.width,
            y
        );

        ctx.stroke();
    }


    ctx.globalAlpha = 1;
}


/* ==================================================
   MOTIF KAWUNG DASAR
================================================== */

function drawKawung(
    x,
    y,
    size,
    colors
) {

    ctx.save();

    ctx.translate(x, y);


    /*
       Empat oval Kawung
    */

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        ctx.save();

        ctx.rotate(
            i * Math.PI / 2
        );


        ctx.beginPath();

        ctx.ellipse(
            0,
            -size * 0.30,

            size * 0.22,
            size * 0.34,

            0,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            i % 2 === 0
                ? colors.light
                : colors.main;

        ctx.fill();


        ctx.strokeStyle =
            colors.outline;

        ctx.lineWidth = 2;

        ctx.stroke();


        ctx.restore();
    }


    /*
       Belah ketupat pusat
    */

    ctx.beginPath();

    ctx.moveTo(
        0,
        -size * 0.13
    );

    ctx.lineTo(
        size * 0.13,
        0
    );

    ctx.lineTo(
        0,
        size * 0.13
    );

    ctx.lineTo(
        -size * 0.13,
        0
    );

    ctx.closePath();


    ctx.fillStyle =
        colors.dark;

    ctx.fill();


    ctx.strokeStyle =
        colors.outline;

    ctx.lineWidth = 2;

    ctx.stroke();


    ctx.restore();
}


/* ==================================================
   MOTIF CEPLOK
================================================== */

function drawCeplok(
    x,
    y,
    size,
    colors
) {

    ctx.save();

    ctx.translate(x, y);


    for (
        let i = 0;
        i < 4;
        i++
    ) {

        ctx.save();

        ctx.rotate(
            i * Math.PI / 2
        );


        ctx.beginPath();

        ctx.moveTo(
            0,
            -size * 0.42
        );

        ctx.lineTo(
            size * 0.18,
            -size * 0.15
        );

        ctx.lineTo(
            size * 0.13,
            size * 0.12
        );

        ctx.lineTo(
            0,
            size * 0.25
        );

        ctx.lineTo(
            -size * 0.13,
            size * 0.12
        );

        ctx.lineTo(
            -size * 0.18,
            -size * 0.15
        );

        ctx.closePath();


        ctx.fillStyle =
            i % 2 === 0
                ? colors.main
                : colors.light;

        ctx.fill();


        ctx.strokeStyle =
            colors.outline;

        ctx.lineWidth = 2;

        ctx.stroke();


        ctx.restore();
    }


    ctx.beginPath();

    ctx.arc(
        0,
        0,
        size * 0.13,
        0,
        Math.PI * 2
    );


    ctx.fillStyle =
        colors.dark;

    ctx.fill();


    ctx.restore();
}


/* ==================================================
   MOTIF PARANG
================================================== */

function drawParang(
    x,
    y,
    size,
    colors
) {

    ctx.save();

    ctx.translate(x, y);

    ctx.rotate(
        -Math.PI / 5
    );


    /*
       Bentuk utama parang
    */

    ctx.beginPath();

    ctx.moveTo(
        -size * 0.50,
        0
    );


    ctx.quadraticCurveTo(
        -size * 0.15,
        -size * 0.38,
        size * 0.50,
        0
    );


    ctx.quadraticCurveTo(
        size * 0.15,
        size * 0.38,
        -size * 0.50,
        0
    );


    ctx.closePath();


    ctx.fillStyle =
        colors.main;

    ctx.fill();


    ctx.strokeStyle =
        colors.outline;

    ctx.lineWidth = 2;

    ctx.stroke();


    /*
       Garis dalam
    */

    ctx.beginPath();

    ctx.moveTo(
        -size * 0.32,
        0
    );

    ctx.quadraticCurveTo(
        0,
        -size * 0.18,
        size * 0.32,
        0
    );


    ctx.strokeStyle =
        colors.light;

    ctx.lineWidth = 3;

    ctx.stroke();


    ctx.restore();
}


/* ==================================================
   FRAKTAL KAWUNG
================================================== */

function fractalKawung(
    x,
    y,
    size,
    depth,
    colors
) {

    /*
       BASE CASE

       Jika depth = 0,
       berhenti melakukan rekursi.
    */

    if (
        depth <= 0 ||
        size < 4
    ) {

        return;
    }


    /*
       Gambar Kawung saat ini
    */

    drawKawung(
        x,
        y,
        size,
        colors
    );


    /*
       UKURAN MOTIF ANAK

       Inilah bagian fraktalnya.
       Motif yang sama dibuat lebih kecil.
    */

    const child =
        size * 0.32;


    /*
       Empat posisi anak
       mengikuti empat arah Kawung.
    */

    const positions = [

        [0, -size * 0.30],

        [size * 0.30, 0],

        [0, size * 0.30],

        [-size * 0.30, 0]

    ];


    /*
       REKURSI
    */

    for (
        const [dx, dy]
        of positions
    ) {

        fractalKawung(
            x + dx,
            y + dy,
            child,
            depth - 1,
            colors
        );

    }

}


/* ==================================================
   FRAKTAL CEPLOK
================================================== */

function fractalCeplok(
    x,
    y,
    size,
    depth,
    colors
) {

    if (
        depth <= 0 ||
        size < 4
    ) {

        return;
    }


    drawCeplok(
        x,
        y,
        size,
        colors
    );


    const child =
        size * 0.32;


    /*
       Empat arah rekursif
    */

    const positions = [

        [0, -size * 0.30],

        [size * 0.30, 0],

        [0, size * 0.30],

        [-size * 0.30, 0]

    ];


    for (
        const [dx, dy]
        of positions
    ) {

        fractalCeplok(
            x + dx,
            y + dy,
            child,
            depth - 1,
            colors
        );

    }

}


/* ==================================================
   FRAKTAL PARANG
================================================== */

function fractalParang(
    x,
    y,
    size,
    depth,
    colors
) {

    if (
        depth <= 0 ||
        size < 4
    ) {

        return;
    }


    drawParang(
        x,
        y,
        size,
        colors
    );


    /*
       Motif berikutnya
       dipindahkan secara diagonal.
    */

    const child =
        size * 0.45;


    fractalParang(
        x + size * 0.32,
        y + size * 0.20,
        child,
        depth - 1,
        colors
    );


    fractalParang(
        x - size * 0.32,
        y - size * 0.20,
        child,
        depth - 1,
        colors
    );

}


/* ==================================================
   MEMBUAT TILE FRAKTAL
================================================== */

function drawFractalTile(
    x,
    y,
    size,
    depth,
    type,
    colors
) {

    if (
        type === "kawung"
    ) {

        fractalKawung(
            x,
            y,
            size,
            depth,
            colors
        );

    }


    else if (
        type === "ceplok"
    ) {

        fractalCeplok(
            x,
            y,
            size,
            depth,
            colors
        );

    }


    else if (
        type === "parang"
    ) {

        fractalParang(
            x,
            y,
            size,
            depth,
            colors
        );

    }

}


/* ==================================================
   POLA KAIN
================================================== */

function generatePattern(
    colors
) {

    const type =
        motifInput.value;


    const depth =
        Number(
            iterationInput.value
        );


    const size =
        Number(
            scaleInput.value
        );


    const distance =
        Number(
            spacingInput.value
        );


    /*
       Pola dibuat memenuhi seluruh canvas.
    */

    let row = 0;


    for (
        let y = -distance;
        y < canvas.height + distance;
        y += distance
    ) {

        /*
           Pergeseran baris
           menciptakan susunan kain.
        */

        const offset =
            row % 2 === 0
                ? 0
                : distance / 2;


        for (
            let x = -distance;
            x < canvas.width + distance;
            x += distance
        ) {

            drawFractalTile(
                x + offset,
                y,
                size,
                depth,
                type,
                colors
            );

        }


        row++;
    }

}


/* ==================================================
   BORDER
================================================== */

function drawBorder(colors) {

    /*
       Border luar
    */

    ctx.strokeStyle =
        colors.outline;

    ctx.lineWidth = 12;

    ctx.strokeRect(
        7,
        7,
        canvas.width - 14,
        canvas.height - 14
    );


    /*
       Border dalam
    */

    ctx.strokeStyle =
        colors.dark;

    ctx.lineWidth = 3;

    ctx.strokeRect(
        22,
        22,
        canvas.width - 44,
        canvas.height - 44
    );

}


/* ==================================================
   GENERATE UTAMA
================================================== */

function generate() {

    const colors =
        palettes[
            paletteInput.value
        ];


    /*
       Background kain
    */

    drawBackground(
        colors
    );


    /*
       Buat pola fraktal
    */

    generatePattern(
        colors
    );


    /*
       Border
    */

    drawBorder(
        colors
    );


    /*
       Status
    */

    status.textContent =
        "✓ Batik fraktal dibuat";


    updateLabels();

}


/* ==================================================
   RANDOM
================================================== */

function randomize() {

    const motifs = [

        "kawung",

        "ceplok",

        "parang"

    ];


    const colors = [

        "sogan",

        "indigo",

        "hijau",

        "merah",

        "klasik"

    ];


    motifInput.value =
        motifs[
            Math.floor(
                Math.random() *
                motifs.length
            )
        ];


    paletteInput.value =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    iterationInput.value =
        Math.floor(
            Math.random() * 4
        ) + 2;


    scaleInput.value =
        Math.floor(
            Math.random() * 35
        ) + 55;


    spacingInput.value =
        Math.floor(
            Math.random() * 50
        ) + 70;


    generate();

}


/* ==================================================
   DOWNLOAD
================================================== */

function downloadPNG() {

    const link =
        document.createElement("a");


    link.download =
        "batik-fraktal.png";


    link.href =
        canvas.toDataURL(
            "image/png"
        );


    link.click();

}


/* ==================================================
   EVENT
================================================== */

document
    .getElementById("generate")
    .addEventListener(
        "click",
        generate
    );


document
    .getElementById("random")
    .addEventListener(
        "click",
        randomize
    );


document
    .getElementById("download")
    .addEventListener(
        "click",
        downloadPNG
    );


iterationInput
    .addEventListener(
        "input",
        updateLabels
    );


scaleInput
    .addEventListener(
        "input",
        updateLabels
    );


spacingInput
    .addEventListener(
        "input",
        updateLabels
    );


/* ==================================================
   START
================================================== */

updateLabels();

generate();