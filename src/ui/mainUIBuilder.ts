import './style.css';

let body = document.querySelector("body");

let mainDiv = document.createElement("div");
mainDiv.classList.add("main");


createButtons();

body.appendChild(mainDiv);

function createInput(buttonContainer : HTMLDivElement) {
    buttonContainer.innerHTML += `<input type="text" class="mainInput" readonly>`; 
}

function createButtons() {
    let buttonsCont = document.createElement("div");
    buttonsCont.classList.add("buttoncontainer");

    createInput(buttonsCont);

    buttonsCont.innerHTML += 

        `<div class="RowButtons"><button>AC</button><button></button><button></button><button>/</button></div>` +
        `<div class="RowButtons"><button>7</button><button>8</button><button>9</button><button>*</button></div>` +
        `<div class="RowButtons"><button>4</button><button>5</button><button>6</button><button>-</button></div>` +
        `<div class="RowButtons"><button>1</button><button>2</button><button>3</button><button>+</button></div>` +
        `<div class="RowButtons"><button>0</button><button>.</button><button>DEL</button><button>=</button></div>`;


    mainDiv.appendChild(buttonsCont);
}