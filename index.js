function goToQuiz(iD){
    console.log(iD);
    localStorage.setItem('quiz', iD)
    window.location.href = "quiz.html";
}

async function run(){
    console.log("wait")
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("done")
    $('img').each(function(){
    $(this).on('mouseenter', function(x){
        let iD = x.target.id;
        switch (iD){
            case 'bank':
                console.log("eneterd", iD)
                $("#title").text("")
                $("#title").text("BANK OF MATH")
                $("#title").attr("style",'font-size: 7em; top: 75%')
                break

            case 'museum':
                $("#title").text("")
                $("#title").text("MUSEUM OF THE PASS")
                $("#title").attr("style",'font-size: 7em; top: 75%')
                break

            case 'science':
                $("#title").text("")
                $("#title").text("SCIENCE CENTER")
                $("#title").attr("style",'font-size: 7em; top: 75%')
                break

            case 'university':
                $("#title").text("")
                $("#title").text("QUIZ UNIVERSITY")
                $("#title").attr("style",'font-size: 7em; top: 75%')
                break
        }
        })

        $(this).on('mouseleave', function(x){
                $("#title").text("QUIZ TOWN")
                $("#title").attr("style",'font-size: 10em')
            })

        $(this).on('click', function(x){
            console.log("clicked")
            let iD = x.target.id;
            goToQuiz(iD);
        })
    })

    $('head').append("<style> img:hover{filter: brightness(1.2);} </style>")
}

run()