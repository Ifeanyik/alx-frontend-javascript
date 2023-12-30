export default function getStudentsByLocation(stud_list, city) {
    if (!Array.isArray(stud_list))
        return [];
    if (typeof city !== "string")   
        return [];    
    let arr1 = [];
    stud_list.filter((obj) => {
        if (obj.hasOwnProperty("location") && obj.location === city){
            arr1.push(obj);
        }
    });
    return arr1;
};