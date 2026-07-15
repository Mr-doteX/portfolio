var setVanta = () => {
    if (window.VANTA) window.VANTA.GLOBE({
        el: document.getElementById("animeGlobe"),
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x3fbbff,
        backgroundColor: 0xdbdbdb
    });
}
setVanta();
