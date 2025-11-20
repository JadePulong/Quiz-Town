//element variables
let quizStart = $("#quizStart")
let quizTitle= $("#quizTitle")
let startButton = $("#start")
let mainQuizId = $("#mainQuizId")
let scoreScreen = $("#scoreScreen")
let style = document.createElement("style");
let y = 3

//Q&A Variables
let question = [
    //MATH
    ['What is 2 + 2?', 'If Sally has 5 pencils and gives 2 to her friend, how many pencils does Sally have left?', ' What is 5 x 3?', "If a book costs $10 and there's a 20% discount, how much will you pay?", 'What is 7 - 3?', 'If a pizza has 8 slices and you eat 2, how many slices are left?'],

    //SCIENCE
    ['What is the biggest star in our solar system?', 'What do plants need to grow?', 'What is the process called when animals move from one place to another?', 'What is the largest mammal on Earth?', 'What is the scientific word for the study of animals?', 'The Earth is the Center of the Solar System. True or False?'],

    //HISTORY
    ['Who is the National Hero of the Philippines?', 'Where did Magellan and Lapu-Lapu fought?', 'What is Capital City of the Philippines?', 'The American teachers who came to the Philippines in the early years of the American?', 'Who is the Father of Philippine Revolution?'],

    //ALL
    ['What is 2 + 2?', 'If Sally has 5 pencils and gives 2 to her friend, how many pencils does Sally have left?', ' What is 5 x 3?', "If a book costs $10 and there's a 20% discount, how much will you pay?", 'What is 7 - 3?', 'If a pizza has 8 slices and you eat 2, how many slices are left?', 'What is the biggest star in our solar system?', 'What do plants need to grow?', 'What is the process called when animals move from one place to another?', 'What is the largest mammal on Earth?', 'What is the scientific word for the study of animals?', 'The Earth is the Center of the Solar System. True or False?', 'Who is the National Hero of the Philippines?', 'Where did Magellan and Lapu-Lapu fought?', 'What is Capital City of the Philippines?', 'The American teachers who came to the Philippines in the early years of the American?', 'Who is the Father of Philippine Revolution?'],
]

let answers = [
    //MATH
    ['4', '3', '15', '8', '4', '6'],

    //SCIENCE
    ['The Sun', 'Water, sunlight, air, and soil', 'Migration', 'Blue whale', 'Zoology', 'False'],

    //HISTORY
    ['Jose Rizal', 'Cebu', 'Manila', 'Thomasites', 'Andres Bonifacio'],
]

let dummyAns = [
    // SCIENCE
    [
        ['Siruis', 'Vega', 'Betelgeuse', 'Altair'],
        ['Wealth, Fame, Power', 'Smarphone, Laptop, Electricity', 'Atoms, Proteins, Cells, oxygen', 'Meat, FIber, Sodium'] ,
        ['Breeding', 'Colonization', 'Warfare', 'Hybernation'],
        ['Trex', 'Elephant', 'Megalodon', 'Your Mom'],
        ['Biology', 'Geography', 'Anatomy', 'Sociology'],
        ['TRUE', 'BOTH TRUE', 'BOTH WRONG', 'LOL'],
    ],

    // HISTORY
    [
        ['Andres Bonifacio', 'Jose Burgos', 'Emilio Aguinaldo', 'Antonio Luna'],
        ['Davao', 'Manila', 'Montalban', 'Leyte'] ,
        ['Davao', 'Quezon City', 'Cebu', 'Baguio'],
        ['US Navy', 'Jerrysites', 'Capitalist', 'Niggers'],
        ['Jose Rizal', 'Jose Burgos', 'Emilio Aguinaldo', 'Antonio Luna'],
        ['Trex', 'Elephant', 'Megalodon', 'Your Mom'],
    ],
    
]

//SCORE MENU
function scoreScreenOn(score){
    $("#again").before(`<h1>Total Score: ${score}</h1>`)
}

$("#again").on('click', function(){
    scoreScreen.attr('style','display:none;')
    quizStart.attr('style','display:flex;')
    $("#again").prev().remove()
})

$("#home").on('click', function(){
    window.location.href = "index.html"
})


//Quiz Functionality
function random(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

function answerAssign(x, y, quizName){
    console.log(y)
    let a = undefined
    console.log(quizName)
    switch (quizName){
        case 'math':
            a = 3
            break;

        case 'sci':
            a = 0
            break;

        case 'his':
            a = 1
            break;
        
        case 'all':
            a = 2
            break;
    }
    let r = random(1,5)
    if(a === 2){
        for(let f = 1, m = 0; f < 5;f++, m++){
            if(y === 0){
                $(`#ans${f}`).text(random(1,20))
            }
            else{
                y--
                $(`#ans${f}`).text(dummyAns[y][x][m])
                y++
            }   
        }
    }

    else{
        for(let f = 1, m = 0; f < 5;f++, m++){
            if(a === 3){
                $(`#ans${f}`).text(random(1,20))
            }
            else{
                $(`#ans${f}`).text(dummyAns[a][x][m])
            }   
        }
    }

    console.log(answers[y][x])
    $(`#ans${r}`).text(answers[y][x])
    $(`#ans${r}`).attr('value', answers[y][x])
    console.log($(`#ans${r}`).val())

}

function answerRemove(){
    for(let m = 1; m < 5; m++){
        $(`#ans${m}`).text("")
        $(`#ans${m}`).attr('value', '0')
    }
}

function waitForAnswer($buttons) {
    return new Promise(resolve => {
        $buttons.one("click", function(x) {
            x = (x.target.id)
            resolve($(`#${x}`).val()); 
        });
    });
}

async function quizLoop(y){
    let score = 0
    let u = 0
    let r = 0
    let quizName = ''
    if(y === 3){
        u = 0
        r = 3
        y = 0
        quizName = 'all'
    }

    else{
        switch(y){
            case 0:
                quizName = 'math'
                break;

            case 1:
                quizName = 'sci'
                break;

            case 2:
                quizName = 'his'
                break;
        }
        u = 0
        r = 1
    }
    console.log(quizName)
    for(u; u < r; u++){
        for(let x = 0; x < 6; x++){
            console.log(question[y][x])
            console.log(answers[y][x])

            $("#question").append(`<h1>${question[y][x]}</h1>`)
            $("#scoreCheck").append(`<h1>SCORE: ${score}</h1>`)
            let userAns = answerAssign(x, y, quizName)

            const buttons = $('button');
            const clickedButton = await waitForAnswer(buttons);


            console.log(clickedButton)
            if(clickedButton == answers[y][x]){
                console.log('correct')
                score++
            }
            else{
                console.log('incorrect')
            }

            answerRemove()
            $("#question").empty()
            $("#scoreCheck").empty()
        }
        y++
    }
    mainQuizId.attr('style','display:none;')
    scoreScreen.attr('style','display:flex;')
    scoreScreenOn(score)
}

function quizChanger(quizType){
    quizStart.attr('style','display:none;')
    mainQuizId.attr('class', 'mainQuiz')
    mainQuizId.attr('style','display:grid;')

    
    switch (quizType){
        case 'mathQuiz':
            y = 0
            break;
        case 'scienceQuiz':
            y = 1
            break;
        case 'historyQuiz':
            y = 2
            break;
        case 'allQUiz':
            y = 3
            break;
    }

    quizLoop(y)
}


//Title Screen
let quiz = localStorage.getItem('quiz')

function allQUiz(){
    quizTitle.append("<h1>QUIZ UNIVERSITY</h1>")
    startButton.on('click', function(){
        quizChanger('allQuiz')
    })
}

function mathQUiz(){
    quizTitle.append("<h1>BANK OF QUIZ</h1>")
    startButton.on('click', function(){
        quizChanger('mathQuiz')
    })
}

function scienceQUiz(){
    quizTitle.append("<h1>QUIZ LABAROTRY</h1>")
    startButton.on('click', function(){
        quizChanger('scienceQuiz')
    })
}

function historyQUiz(){
    quizTitle.append("<h1>QUIZ OF THE PAST</h1>")
    startButton.on('click', function(){
        quizChanger('historyQuiz')
    })
}

//Style Determine
switch (quiz){
    case 'bank':
        $("body").attr('style','background-image: url("pics/bankInterior.jpg");')
        style.textContent = `
            * {
                font-family: cambria;
            }
            
            .container{
                background-color: rgba(32, 41, 36, 0.705);
            }

            .all div h1{
                font-size: clamp(100px, 10vw, 300px);
                -webkit-text-stroke: 4px rgb(0, 0, 0);
                color: rgb(118, 131, 103);
            }
            
            .all button{
                color: rgba(175, 182, 167, 1);
                border: 6px outset rgb(40, 48, 32);
                background-color: rgb(58, 70, 44);
            }

            .all button:hover{
                border: 6px inset rgb(24, 27, 20);
                background-color: rgb(44, 53, 34);
            }

            .questionBox{
                background-color: rgb(62, 70, 56);
                border: ridge 20px rgb(41, 44, 39);
            }

            .scoreCheck{
                background-color: rgb(62, 70, 56);
                border: ridge 5px rgb(41, 44, 39);
            }

            .scoreCheck h1{
                font-size: clamp(10px, 1.5vw, 50px);
            }


            .choices div{
                background-color: rgb(62, 70, 56);
                border: ridge 20px rgb(41, 44, 39);
            }          
                
            .choices button{
                height: 50%;
                width: 50%;
                color: rgb(0, 0, 0);
                border: 6px outset rgb(126, 146, 107);
                background-color: rgb(113, 129, 97);
            }

            .scoreScreen{
                background-color: rgb(62, 70, 56);
                border: ridge 20px rgb(41, 44, 39);
            }

            .scoreScreen button{
                color: rgb(0, 0, 0);
                border: 6px outset rgb(126, 146, 107);
                background-color: rgb(113, 129, 97);
            }

            .scoreScreen button:hover{
                border: 6px inset rgb(126, 146, 107);
                background-color: rgb(85, 97, 74);
            }
        `;

        document.head.appendChild(style);
        mathQUiz()
        break;

    case 'science':
        $("body").attr('style','background-image: url("pics/scienceInterior.jpg");')
        style.textContent = `
            * {
                font-family: science;
            }

            .container{
                background-color: rgba(108, 128, 139, 0.658);
            }

            .all div h1{
                font-size: clamp(100px, 7vw, 300px);
                -webkit-text-stroke: 4px rgb(59, 56, 56);
                color: rgb(206, 214, 211);
            }
            
            .all button{
                color: rgb(47, 49, 48);
                border: 6px outset rgb(245, 248, 242);
                background-color: rgb(193, 201, 185);
            }

            .all button:hover{
                border: 6px inset rgb(239, 245, 234);
                background-color: rgb(179, 187, 173);
            }

            .questionBox{
                background-color: rgb(202, 210, 228);
                border: solid 20px rgb(77, 70, 90);;
            }

            .scoreCheck{
                border: solid 5px rgb(77, 70, 90);
            }

            .scoreCheck h1{
            font-size: clamp(10px, 1.5vw, 50px);
            }

            .choices div{
                background-color: rgb(202, 210, 228);
                border: solid 20px rgb(77, 70, 90);;
            }          
                
            .choices button{
                height: 50%;
                width: 50%;
                color: rgb(0, 0, 0);
                border: 6px outset rgb(245, 248, 242);
                background-color: rgb(193, 201, 185);
            }

            .choices button:hover{
                border: 6px inset rgb(239, 245, 234);
                background-color: rgb(179, 187, 173);;
            }

            .scoreScreen{
                background-color: rgb(202, 210, 228);
                border: solid 20px rgb(77, 70, 90);;
            }

            .scoreScreen button{
                color: rgb(47, 49, 48);
                border: 6px outset rgb(245, 248, 242);
                background-color: rgb(193, 201, 185);
            }

            .scoreScreen button:hover{
                border: 6px inset rgb(239, 245, 234);
                background-color: rgb(179, 187, 173);
            }
        `;
        
        document.head.appendChild(style);
        scienceQUiz()
        break;

    case 'museum':
        $("body").attr('style','background-image: url("pics/museumInterior.jpg");')
        style.textContent = `
            * {
                font-family: museum;
            
            .container{
                background-color: rgba(255, 238, 190, 0.514);
            }

            .all div h1{
                color: rgb(0, 0, 0);
            }
            
            .all button{
                color: rgb(0, 0, 0);
                border: 6px outset rgb(126, 146, 107);
                background-color: rgb(113, 129, 97);
            }

            .all button:hover{
                border: 6px inset rgb(126, 146, 107);
                background-color: rgb(85, 97, 74);
            }

            .questionBox{
                background-color: rgb(124, 138, 113);
                border: double 20px rgb(41, 44, 39);;
            }

            .scoreCheck{
                border: double 5px rgb(41, 44, 39);;
            }
            
            .scoreCheck h1{
                font-size: clamp(10px, 1.5vw, 50px);
            }

            .choices div{
                background-color: rgb(124, 138, 113);
                border: double 20px rgb(41, 44, 39);;
            }          
                
            .choices button{
                border: 6px outset rgb(126, 146, 107);
                background-color: rgb(113, 129, 97);
            }
                      
            .choices button:hover{
                border: 6px inset rgb(126, 146, 107);
                background-color: rgb(85, 97, 74);;
            }

            .scoreScreen{
                background-color: rgb(124, 138, 113);
                border: double 20px rgb(41, 44, 39);;
            }

            .scoreScreen button{
                color: rgb(0, 0, 0);
                border: 6px outset rgb(126, 146, 107);
                background-color: rgb(113, 129, 97);
            }

            .scoreScreen button:hover{
                border: 6px inset rgb(126, 146, 107);
                background-color: rgb(85, 97, 74);
            }
        `;
        document.head.appendChild(style);
        historyQUiz()
        break;

    case 'university':
        $("body").attr('style','background-image: url("pics/universityInterior.jpg");');
        style.textContent = `
            * {
                font-family: university;
            }
        `;
        document.head.appendChild(style);
        allQUiz();
        break;
}



