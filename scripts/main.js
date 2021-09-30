import { dataCourses } from './dataCourses.js';
import { dataStudents } from './dataStudents.js';
var coursesTbody = document.getElementById('courses');
var studentsTbody = document.getElementById('student');
var btnfilterByName = document.getElementById("button-filterByName");
var btnfilterByCredits = document.getElementById("button-filterByCredits");
var inputSearchBox = document.getElementById("search-box");
var inputSearchBoxMinCredits = document.getElementById("minCredits-box");
var inputSearchBoxMaxCredits = document.getElementById("maxCredits-box");
var totalCreditElm = document.getElementById("total-credits");
btnfilterByName.onclick = function () { return applyFilterByName(); };
btnfilterByCredits.onclick = function () { return applyFilterByCredits(); };
renderCoursesInTable(dataCourses);
renderStudentsInTable(dataStudents);
totalCreditElm.innerHTML = "" + getTotalCredits(dataCourses);
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function renderStudentsInTable(students) {
    console.log('Desplegando estudiantes');
    students.forEach(function (student) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + "Nombre" + "</td>\n                           <td>" + student.name + "</td>\n                           ";
        studentsTbody.appendChild(trElement);
        var trElement2 = document.createElement("tr");
        trElement2.innerHTML = "<td>" + "Código" + "</td>\n                           <td>" + student.codigo + "</td>\n                            ";
        studentsTbody.appendChild(trElement2);
        var trElement3 = document.createElement("tr");
        trElement3.innerHTML = "<td>" + "Cédula" + "</td>\n                           <td>" + student.cedula + "</td>\n                           ";
        studentsTbody.appendChild(trElement3);
        var trElement4 = document.createElement("tr");
        trElement4.innerHTML = "<td>" + "Edad" + "</td>\n                           <td>" + student.edad + "</td>\n                           ";
        studentsTbody.appendChild(trElement4);
        var trElement5 = document.createElement("tr");
        trElement5.innerHTML = "<td>" + "Dirección" + "</td>\n                           <td>" + student.direccion + "</td>\n                           ";
        studentsTbody.appendChild(trElement5);
        var trElement6 = document.createElement("tr");
        trElement6.innerHTML = "<td>" + "Teléfono" + "</td>\n                           <td>" + student.telefono + "</td>\n    ";
        studentsTbody.appendChild(trElement6);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function applyFilterByCredits() {
    var min = +inputSearchBoxMinCredits.value;
    var max = +inputSearchBoxMaxCredits.value;
    clearCoursesInTable();
    var coursesFilteredMax = searchCourseByCredits(min, max, dataCourses);
    renderCoursesInTable(coursesFilteredMax);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.match(nameKey);
    });
}
function searchCourseByCredits(min, max, courses) {
    var result = courses.filter(function (course) { return course.credits <= max && course.credits >= min; });
    return result;
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
