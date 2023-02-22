class Instructor{
    name;
    designation = "Web instructor";
    team = "WEb Team";
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Create quiz for module ${module}`);
    }
} 

const teacher = new Instructor('Sajim', 'Dhaka');
console.log(teacher);
teacher.startSupportSession('9.00');
teacher.createQuiz(50);
 
 
const teachers = new Instructor('shahadat', 'Dhaka');
console.log(teachers);
teachers.startSupportSession('9.00');
teachers.createQuiz(50);