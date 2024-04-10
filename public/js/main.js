console.log('hi this is safra');




//I am not comfortable doing two cards, so I have decided to settle for one. 

//This took me several days. I accomplished my goal, which was to at least learn how to push data to html. 

//fetch await function 

async function getData() {

    //There is a repeat object at the top of html, not sure how to remove this.

    try {



        const response = await fetch('data/content.json')
        const data = await response.json();

        //console.log('data', data.dashboard);

        const statfolder = document.getElementById('card1')

        data.dashboard.forEach(dashboardStats => {
            //console.log(dashboardStats);

            let statData = document.createElement('div');
            statData.classList.add("col");

            statData.innerHTML =
                `${data.dashboard}<p>${dashboardStats.ticket}</p> <h1>${dashboardStats.amount}</h1>`

            statfolder.appendChild(statData);

            //console.log(statData)
        })
    } catch (error) {
        //console.log('error:', error);
    }
}
getData();


