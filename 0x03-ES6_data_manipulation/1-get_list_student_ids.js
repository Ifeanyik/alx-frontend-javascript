export default function getListStudentIds(arr){
    if (!Array.isArray(arr))
        return [];
    let arr1 = [];
    arr.map((obj) => {
        if (obj.hasOwnProperty("id")){
          arr1.push(obj["id"]);
        }
    });
    return arr1;
};