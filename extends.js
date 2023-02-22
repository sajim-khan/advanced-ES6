class TeamMember{
     name;
     location;
     constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name}, thank you for your valuable feedback.`);
    } 
}

// Instructor Class
class Instructor extends TeamMember{
    designation = "Web instructor";
    team = "WEb Team";
    constructor(name, location){
        super(name, location);
    }
    
    startSupportSession(time){
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Create quiz for module ${module}`);
    }
} 

const teacher = new Instructor('jhankar', 'USA')
console.log(teacher);
teacher.provideFeedback();


// Developer Class
class Developer extends TeamMember{
    designation = "Web instructor";
    team = "WEb Team";
    tech;
    constructor(name, location, tech){
        super(name, location);
        this.tech = tech;
    }
    
    developTheFeature(feature){
        console.log(`Please develop the ${feature} in our project.`);
    }
    
    release(version){
        console.log(`Please release the ${version}`);
    }
    
} 
 
const sajim = new Developer('Sajim', 'Dhaka', 'React')
console.log(sajim);
sajim.provideFeedback();


// JobPlacement Class
class JobPlacement extends TeamMember{
    designation = "Job Placement Commando";
    team = "WEb Team";
    region;
    constructor(name, location, region){
        super(name, location);
        this.region = region;
    }
    
    provideResume(resume){
        console.log(`Please update your ${resume}`);
    }
    
    prepareStudent(students){
        console.log(`Please train our${students}`);
    }   
} 

const khan = new JobPlacement('Sajim', 'Dhaka', 'Asia')
console.log(khan);
khan.provideResume('Resume');
