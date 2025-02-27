
document.querySelectorAll('.oyuncu').forEach((oyuncu)=>{
    oyuncu.addEventListener('click', (e)=>{
        let shiftX = e.clientX - oyuncu.getBoundingClientRect().left;
        let shiftY = e.clientY - oyuncu.getBoundingClientRect().top;
        console.log
        function onMouseMove(e) {
            oyuncu.style.left = e.clientX - shiftX + 'px';
            oyuncu.style.top = e.clientY - shiftY + 'px';
        }

        document.addEventListener('mousemove', onMouseMove);

        
        oyuncu.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        });

        oyuncu.addEventListener('mouseleave', function() {
            document.removeEventListener('mousemove', onMouseMove);
        });

    })
})

oyuncu.ondragstart = function() {
    return false;
};