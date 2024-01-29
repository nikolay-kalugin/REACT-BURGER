// Создаем массив с данными о курсах
let courses = [
    {name: 'Course 1', isCompleted: true},
    {name: 'Course 2', isCompleted: false},
    {name: 'Course 3', isCompleted: true},
    {name: 'Course 4', isCompleted: false},
    {name: 'Course 5', isCompleted: true},
];

// Считаем количество пройденных курсов
let completedCoursesCount = courses.filter(course => course.isCompleted).length;

console.log(`Сумма пройденных курсов: ${completedCoursesCount}`);