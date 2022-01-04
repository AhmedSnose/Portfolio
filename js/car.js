var Example = Example || {};
var di =document.getElementById('ruinuer')
var show_project = document.querySelector('.show_project h2')

Example.sprites = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        Composite = Matter.Composite,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: di,
        engine: engine,
        options: {
            width:600,
            height: 600,
            showAngleIndicator: false,
            wireframes: false,
            // strokeStyle:"#999"
        }
    });
    // render.canvas.width = di.offsetWidth 
    // render.canvas.height = di.offsetHeight
    // render.options.wireframes = 'transparent'



    Render.run(render);

    // backGround
    // var myCanves = render.canvas
    // var ctx = myCanves.getContext('2d');
    // ctx.strokeRect(75, 140, 150, 110);
    // console.log(ctx);
    
    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var offset = 10,
        options = { 
            isStatic: true,
        };
     
    // these static walls will not be rendered in this sprites example, see options
    Composite.add(world, [
        Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 1, options),
        Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 1, options),
        Bodies.rectangle(800 + offset, 300, 400, 600.5 + 2 * offset, options),
        Bodies.rectangle(-offset, 300, 1, 600.5 + 2 * offset, options)
    ]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });


    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    
    var stack = [Bodies.rectangle(50, 10, 100, 100, {
        id: "Git",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/Git.png',
            }
        }
    }), 
    Bodies.rectangle(400, 10, 160, 450, {
        id: "Gulp",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/Gulp.png'
            }
        }
    }) , 
    Bodies.rectangle(400, 10, 130, 150, {
        id: "tialwind",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/tialwind.png'
            }
        }
    }) , 
    Bodies.rectangle(400, 10, 100, 170, {
        id: "Angular",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/angular.png'
            }
        }
    }) , 
    Bodies.rectangle(400, 10, 100, 170, {
        id: "firebase",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/firebase.png'
            }
        }
    }) , 
    
    Bodies.rectangle(400, 10, 130, 150, {
        id: "sass",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/sass.png'
            }
        }
    }) , 
    
     
    Bodies.rectangle(400, 10, 100, 100, {
        id: "NEXT.js",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/next.svg'
            }
        }
    }) , 
    Bodies.rectangle(500, 10, 100, 100, {
        id: "Js",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/Js.png'
            }
        }
    }) , 
    Bodies.rectangle(10, 10, 100, 100, {
        
        id: "Html",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/Html.png'
            }
        }
    }) , 
     
    Bodies.rectangle(10, 10, 100, 100, {
        id: "css",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/css.png'
            }
        }
    }) , 
     
    Bodies.rectangle(300, 10, 100, 100, {
        id: "Redux",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/Redux.png'
            }
        }
    }) , 
     
    Bodies.rectangle(200, 10, 100, 100, {
        id: "JQuery",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/JQuery.png'
            }
        }
    }) , 
    Bodies.rectangle(10, 10, 100, 100, {
        id: "React",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/React.png'
            }
        }
    }) ,
    Bodies.rectangle(500, 10, 80, 80, {
        id: "BootStap",
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: './img/BootStap.png'
            }
        }
    })

]

    Composite.add(world, stack);


    // fit the render viewport to the scene


    // some handel functions
    window.onclick = _=> mouseConstraint.body.id ? changeSection(mouseConstraint.body.id) : console.log(`undefined`)

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

Example.sprites.title = 'Sprites';
Example.sprites.for = '>=0.14.2';

if (typeof module !== 'undefined') {
    module.exports = Example.sprites;
}

Example.sprites()
function changeSection(data){
    show_project.innerHTML=data
}

