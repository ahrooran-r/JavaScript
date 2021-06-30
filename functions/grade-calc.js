const result = function (studentScore, possibleScore = 100){
    const percentage = studentScore / possibleScore * 100
    let letterGrade = ''

    if (percentage >= 90 && percentage <= 100){
        letterGrade = 'A'
    } else if (percentage >= 80 && percentage <= 89){
        letterGrade = 'B'
    } else if (percentage >= 70 && percentage <= 79){
        letterGrade = 'C'
    } else if (percentage >= 60 && percentage <= 69){
        letterGrade = 'D'
    } else if (percentage >= 0 && percentage <= 59){
        letterGrade = 'F'
    } else {
        letterGrade = 'Invalid input'
    }

    console.log (`Your grade is ${letterGrade}`)
}

const marks = 85
const maxMarks = 100
result (marks, maxMarks)