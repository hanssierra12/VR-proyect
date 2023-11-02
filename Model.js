const modelViewer = document.querySelector('model-viewer');
modelViewer.addEventListener('load', () => {
    // Mueve el objeto a una nueva posición
    modelViewer.cameraOrbit = '0deg 45deg 2m';
});
