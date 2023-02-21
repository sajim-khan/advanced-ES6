const user = [{name: 'John', email: 'jon@gmail.com', salary: '$500'}]
//console.log(user[0].salary);

const data = {
    count : 100,
    data : [
            {
            id: 1, name: 'John',
            email: 'jon@gmail.com', 
            salary: {
                first : 'First : $500',
                second : 'Second : $800',
                third : 'Third : $1500'
            },
            },
            
            {
            id: 2, name: 'John sina', 
            email: 'jonsina@gmail.com', 
            salary: '$800'
            }
    ]
}
console.log(data.data[0].salar?.first);  //Output => First : $500