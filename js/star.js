function animate() { 
    var svgns = "http://www.w3.org/2000/svg";
    var container = document.getElementById( 'starfield');
    console.log(container,"svg bu");
    
    let max = 2000;
        container.innerHTML = "";
        for(let i = 0; i < 3600; i++) {
                
                var circle = document.createElementNS(svgns, 'circle');
                
                circle.setAttribute('cx', Math.floor(Math.random() * max));
                circle.setAttribute('cy', Math.floor(Math.random() * max));
                circle.setAttribute('r', Math.floor(Math.random() * 2.5));
                circle.setAttribute('style', 'fill: white;' );
                circle.setAttribute("stdDeviation", "5");
                circle.setAttribute('id', "star" + i);
                circle.setAttribute("filter","url(#blur"+i+")");
                circle.className = "star";
    
                var filter = document.createElement("filter" );
                filter.setAttribute('id','blur' + i);
                var blur = document.createElement("feGaussianBlur");
                blur.setAttribute('in','SourceGraphic');
                filter.appendChild(blur);
                circle.appendChild(filter);
                container.appendChild(circle);
        }
    
    }
    
    
    function ani() {
        for(let i = 0; i < 3600; i++) {
        let rand = Math.floor(Math.random() * 3600);
        if(rand == 1) { 
            let item = document.getElementById("star" + i);
            item.setAttribute('r', Math.floor(Math.random() * 2.5));
            item.setAttribute("stdDeviation", "15");
            }
        }
    }
    
    animate() 
    setInterval(ani,1);