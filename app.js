$(document).ready(function () {

    displayStudents('all');

    
    $('#citButton').click(function () {
        displayStudents('CIT');
    });

    
    $('#busButton').click(function () {
        displayStudents('BUS');
    });
});


var jsonData = [
    {"name": "Alice", "major": "CIT", "midterm": 78, "final": 87},
    {"name": "Aaron", "major": "CIT", "midterm": 68, "final": 81},
    {"name": "Abbie", "major": "BUS", "midterm": 75, "final": 87},
    {"name": "Abner", "major": "CIT", "midterm": 85, "final": 77},
    {"name": "Agnes", "major": "CIT", "midterm": 98, "final": 77},
    {"name": "Alfie", "major": "BUS", "midterm": 53, "final": 61},
    {"name": "Alisa", "major": "BUS", "midterm": 93, "final": 92},
    {"name": "Alvin", "major": "BUS", "midterm": 88, "final": 56},
    {"name": "Angie", "major": "CIT", "midterm": 79, "final": 64},
    {"name": "Artie", "major": "CIT", "midterm": 89, "final": 80},
    {"name": "Audry", "major": "CIT", "midterm": 85, "final": 70},
    {"name": "Armin", "major": "BUS", "midterm": 73, "final": 77},
    {"name": "April", "major": "CIT", "midterm": 74, "final": 70},
    {"name": "Butch", "major": "CIT", "midterm": 40, "final": 82},
    {"name": "Chloe", "major": "CIT", "midterm": 70, "final": 93},
    {"name": "Chuck", "major": "BUS", "midterm": 80, "final": 54},
    {"name": "Darla", "major": "BUS", "midterm": 88, "final": 61},
    {"name": "David", "major": "CIT", "midterm": 99, "final": 80},
    {"name": "Ellen", "major": "CIT", "midterm": 71, "final": 77},
    {"name": "Eldon", "major": "CIT", "midterm": 98, "final": 99}
    
];

function displayStudents(majorFilter) {
    
    let data = jsonData;

    
    let filteredData;
    if (majorFilter !== 'all') {
        filteredData = data.filter(student => student.major === majorFilter);
    } else {
        filteredData = data;
    }

    
    let source = $('#studentTemplate').html();
    let template = Handlebars.compile(source);
    let html = template({ students: filteredData });

    
    $('#studentTable').html(html);
}
