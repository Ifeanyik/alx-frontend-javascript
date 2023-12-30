export default function getStudentIdsSum(student_list) {
    let init_value = 0;
    let sum = student_list.reduce((accumulator, current_obj) => {
        if (current_obj.hasOwnProperty("id")) {
            if (typeof current_obj["id"] === "number")
                return accumulator + current_obj["id"];
        }
    }, init_value);
    return sum;
};