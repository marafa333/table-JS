let students=[

];
table(students);
function table(data){
    document.getElementById("tbl").innerHTML="";
    let id=0;
    data.forEach(element => {
        document.getElementById("tbl").innerHTML +=`
        <tr>
        <td>${++id}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.job}</td>
        <td><button onclick="edit(${id})">Edit</button></td>
        <td><button onclick="del(${id})">Delete</button></td>
        </tr>
    `;
    });
};
function add(){
    let name= document.getElementById("name").value;
    let age= document.getElementById("age").value;
    let job= document.getElementById("job").value;
    if(name && age && job){
        let student= {name:name, age:age, job:job};
            students.push(student);
            table(students);
            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("job").value="";
    }else{
        alert("Please enter your data")
    }
};
function del(id){
    id=id-1;
    let temp=[];
    for(const key in students){
        if(key != id){
            temp.push(students[key]);
        }
    }
    students=temp;
    table(students);
};
function edit(id){
    let index=id-1;
    document.getElementById("name").value=students[index].name;
    document.getElementById("age").value=students[index].age;
    document.getElementById("job").value=students[index].job;
    document.getElementById("btn").innerHTML=`<button onclick="update(${id})">Update</button>`
};
function update(id){
    let index=id-1;
    let name= document.getElementById("name").value;
    let age= document.getElementById("age").value;
    let job= document.getElementById("job").value;
    if(name && age && job){
        let student= {name:name, age:age, job:job};
            students[index]=student;
            table(students);
            document.getElementById("name").value="";
            document.getElementById("age").value="";
            document.getElementById("job").value="";
    }else{
        alert("Please enter your data")
    }
    document.getElementById("btn").innerHTML=`<button onclick="add()">Add</button>`

}