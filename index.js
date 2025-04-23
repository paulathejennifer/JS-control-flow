//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
//QUESTION 1
const getDeliveryType=(days)=>{
    days.forEach(day=>{
        switch(day){
            case "Monday":
                console.log(`${day}:Courier services`);
                break;
                case "Tuesday":
                console.log(`${day}:Local delivery`);
                break;
                case "Wednesday":
                    console.log(`${day}:Freight transportation`);
                    break;
                    case "Thursday":
                        console.log(`${day}:Online shopping & delivery`);
                        break;
                        case "Friday":
                            console.log(`${day}:Food delivery`);
                            break;
                            case "Saturday":
                                console.log(`${day}:Parcel delivery"${day}`);
                                break;
                                case "Sunday":
                                    console.log(`${day}:Luggage delivery`);
                                    break;
                    
                
        }
    })
}

const shoppingDays = ["Monday", "Tuesday", "Wednesday", "Sunday"]
getDeliveryType(shoppingDays)

//QUESTION 2
//Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".
const getBookStatus=(statuses)=>{
    statuses.forEach(status=>{
        switch(status){
            case "available":
                console.log("Ready to lend");
                break;


                case "borrowed":
                    console.log("Checked out");
                    break;
                    
                
        }
    })
}

const bookStatuses = ["available","borrowed","available"]
getBookStatus(bookStatuses)

//QUESTION 3
//Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.
const checkAdults=(ages)=>{
    for(let i = 0; i < ages.length; i++){
        if(ages[i]>= 18){
            console.log("Adult");
            
        }else if(ages[i]< 18){
            console.log("Minor");
            
        }
    }
    return ages
}

const customerAges = [18,12,2,89]
console.log(checkAdults(customerAges));

//QUESTION 4
//Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
const getLivesLeft=()=>{
    let lives = 5;
    while (lives > 0){
        console.log(`You have ${lives} lives left`);
        lives--;
        
        
    }
}
getLivesLeft()

//QUESTION 5
//Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
const printUserFeedback=(comments)=>{
    for(comment of comments){
        do{
            console.log(`User Comment: ${comment}`);
            comments++
            break;
            
        }
        while(comments < comments.length){
    
        }
    }

}
const userFeedback = ["I ampleased by the new app","The website is not responsive", "Wow! What an amazing app"]
printUserFeedback(userFeedback);


//QUESTION 6
//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
const goToHomePage=(loginStatuses)=>{
    loginStatuses.forEach(status=>{
        switch(status){
            case "logged in":
                console.log("Welcome Back");
                break;
                default:
                    console.log("Please log in");
                    break;
                    

                
        }
    })
}

const loginStatuses = ["logged in", "not logged in", "user not found", "logged in"]
goToHomePage(loginStatuses)

//QUESTION 7
//Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
const supportTicketPriorities=(priorities)=>{
    priorities.forEach(priority=>{
        switch(priority){
            case "high":
                console.log(`${priority} priority: address before Midnight`);
                break;

                case "medium":
                    console.log(`${priority} priority: address within 24 hours`);
                    break;

                    case "low":
                        console.log(`${priority} priority: address within 1 week`);
                        break;
                        
                    
        }
    })
}
const priorities = ["high","medium", "low", "low"]
supportTicketPriorities(priorities)


//QUESTION 8
//Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
const getQuizCountdown=()=>{
    let seconds = 10;
    while(seconds >= 0){
        console.log(`You have ${seconds} seconds left`);
        seconds--;
        
    }
}
getQuizCountdown()
