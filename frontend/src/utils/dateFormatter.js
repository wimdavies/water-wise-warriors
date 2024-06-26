function formatDate(dateString){
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];

    const date = new Date(dateString);
    const weekday = weekdays[date.getDay()]
    const dayOfMonth = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    return `${hours}:${minutes} on ${weekday} ${dayOfMonth} ${month} ${year} `;
}


export default formatDate;