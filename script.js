document.addEventListener('DOMContentLoaded', function() {
    const marker1 = document.querySelector('#marker1');
    const marker2 = document.querySelector('#marker2');
    let lastMarker1Position = new THREE.Vector3();
    let lastMarker2Position = new THREE.Vector3();

    function checkMarkerMovement() {
        const marker1Position = marker1.object3D.position;
        const marker2Position = marker2.object3D.position;

        if (marker1Position.distanceTo(lastMarker1Position) > 0.001 ||
            marker2Position.distanceTo(lastMarker2Position) > 0.001) {
            alert("Os marcadores estão se movendo!");
        }

        lastMarker1Position.copy(marker1Position);
        lastMarker2Position.copy(marker2Position);

        requestAnimationFrame(checkMarkerMovement); // Verificar a cada quadro renderizado
    }

    checkMarkerMovement();
});




















