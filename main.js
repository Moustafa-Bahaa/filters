var studentsArray = [
  {
    id: "1",
    name: "moustafa",
    grade: "50",
    address: "zagazig",
    status: "passed",
  },
  {
    id: "2",
    name: "mohamed",
    grade: "47",
    address: "zagazig",
    status: "passed",
  },
  {
    id: "3",
    name: "mahmoud",
    grade: "45",
    address: "cairo",
    status: "passed",
  },
  {
    id: "4",
    name: "ahmed",
    grade: "40",
    address: "giza",
    status: "passed",
  },
  {
    id: "5",
    name: "abdelrahman",
    grade: "38",
    address: "mansora",
    status: "passed",
  },
  {
    id: "6",
    name: "yasser",
    grade: "35",
    address: "giza",
    status: "failed",
  },
  {
    id: "7",
    name: "essam",
    grade: "37",
    address: "luxor",
    status: "failed",
  },
  {
    id: "8",
    name: "abdallah",
    grade: "42",
    address: "aswan",
    status: "failed",
  },
];


function showStudents(array) {
  var table = document.getElementById("students-table");
  table.innerHTML = `
        <thead>
              <tr>
                 <th>No.</th>
                 <th>Student Name</th>
                 <th>Grades</th>
                 <th>Address</th>
                 <th>status</th>
              </tr>
        </thead>
    `;
    if(array.length){
        for (var i = 0; i < array.length; i++) {
            table.innerHTML += `
                <tbody >
                     <td>${array[i].id}</th>
                     <td>${array[i].name}</th>
                     <td>${array[i].grade}</th>
                     <td>${array[i].address}</th>
                     <td>${array[i].status}</th>
                 </tbody> 
                 `;
         }
    }else{
        table.innerHTML = ` <h1> no students to show</h1>`
    }
 
}
showStudents(studentsArray);


var newArray = [...studentsArray]

var search = document.getElementById("search-input")

var sort = document.getElementById("sort")


search.addEventListener("keyup" , function(){

    var searchValue = search.value.toLowerCase()
    newArray = studentsArray.filter(function(value) { 
        if(value.id.includes(searchValue) || value.name.includes(searchValue)  || value.address.includes(searchValue) || value.status.includes(searchValue) ){
            var newObj = {id: value.id , name : value.name , status:value.status ,  address :value.address}
            return newObj
        }
    })
    sortItem = { reversed: true }
    showStudents(newArray);
})

var sortItem = {  reversed: true  }
  sort.addEventListener("click" , function(){

    newArray.sort((userA, userB) => {
        if (sortItem.reversed) {
            return userA.grade - userB.grade;
        }
        return userB.grade - userA.grade;
    });
    
     sortItem = {  reversed: !sortItem.reversed }
    showStudents(newArray);
})


