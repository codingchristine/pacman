var pos = 0;

    //width of page
    let pageWidth = window.innerWidth;

    const pacArray = [
        ['PacMan1.png', 'PacMan2.png'],
        ['PacMan3.png', 'PacMan4.png']
    ];
    var direction = 0;
    var focus = 0;
    function Run() {
        let img = document.getElementById("PacMan");
        let imgWidth = img.width;
        focus = (focus + 1) % 2;
        direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
        img.src = pacArray[direction][focus];
        if (direction) {
            pos -= 20;
            img.style.left = pos + "px";
        } else {
            pos += 20;
            img.style.left = pos + 'px';
        }
        // Use setTimeout to call Run every 200 millesecs
    }
    setInterval(Run,200);
    function checkPageBounds(direction, imgWidth, pos, pageWidth) {
        //
        // Complete this to reverse direction on hitting page bounds
        pageWidth = pageWidth - (imgWidth + 20);
        if (pos > pageWidth) {
            direction = 1;
        }
        if (pos <= 0) {
            direction = 0;
        }
        // 
        return direction;
    }
