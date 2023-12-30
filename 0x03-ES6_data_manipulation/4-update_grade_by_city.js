export default function updateStudentGradeByCity(studentList, city, newGrades) {
    let arr1 = [];
    studentList.filter((obj) => obj.location === city).map((obj) => {
        for (let grade of newGrades) {
            if (obj.id === grade["studentId"]){
                obj.grade = grade.grade;
                arr1.push(obj);
                break
            }
            else {
                obj.grade = "N/A";
                arr1.push(obj);
            }
        }
    });
    return arr1;
};