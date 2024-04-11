console.log("hi this is safra")

// ELEMENTS ARE OBJECTS IN CONSOLE LOG. I MANAGED TO GET TWO CARDS PUSHED TO HTML.
//I DON"T THINK THIS IS WHAT YOU ARE LOOKING FOR BUT I COULD NOT FIND OUT HOW TO USE 
//TO USE A LOOP FROM JSON. FETCH WAS NOT WORKING WITH [0] FOR ME
//I KNOW THERE MUST BE A WAY TO MAKE THE BELOW FORMULA A LOOP BUT I DID NOT HAVE TIME TO FIGURE THIS OUT 
//THIS METHOD SEEMED THE SAFEST. THE VERSION I INITIALLY SENT YOU HAD A FOREACH FUNCTION BUT 
//I HAD THE ISSUE WITH THE OBJECT OBJECT SHOWING UP IN MY HTML AND I DO NOT KNOW HOW TO REMOVE IT. 

const dashboardKit =
{
    "Employee": {
      "fullName": "Safra Ducreay"
    },
    "dashboard": [
      {
        "ticket": "Unresolved",
        "amount": 60
      },
      {
        "ticket": "Overdue",
        "amount": 16
      },
      {
        "ticket": "Open",
        "amount": 43
      },
      {
        "ticket": "On hold",
        "amount": 64
      }
    ],
    "stats": [
      {
        "ticket": "Resolved",
        "amount": 449
      },
      {
        "ticket": "Received",
        "amount": 426
      },
      {
        "ticket": "Average first response time",
        "amount": "33m"
      },
      {
        "ticket": "Average response time",
      "time": "3h 8m"
      },
      {
        "ticket": "Resolution within SLA",
        "percentage": "94%"
      }
    ],
    "tickets": {
      "unresolved": {
        "group": "Support",
        "backlog": [
          {
            "category": "Waiting on Feature Request",
            "amount": 4238
          },
          {
            "category": "Awaiting Customer Response",
            "amount": 1005
          },
          {
            "category": "Awaiting Developer Fix",
            "amount": 914
          },
          {
            "category": "Pending",
            "amount": 281
          }
        ]
      }
    },
    "tasks": {
      "today": [
        {
          "task": "Finish ticket update",
          "status": "Urgent"
        },
        {
          "task": "Create new ticket example",
          "status": "New"
        },
        {
          "task": "Update ticket report",
          "status": "Default"
        }
      ]
    }
  }
console.log('dashboard kit', dashboardKit);

let result = dashboardKit.dashboard[0].ticket;
console.log('result:',result);

const dash1 = document.getElementById('stat1');
dash1.innerHTML = result;

let result2 = dashboardKit.dashboard[0].amount;
const dash2 = document.getElementById('stat2');
dash2.innerHTML = result2;

let result3 = dashboardKit.dashboard[1].ticket;
const dash3 = document.getElementById('stat3');
dash3.innerHTML = result3;

let result4 = dashboardKit.dashboard[1].amount;
const dash4 = document.getElementById('stat4');
dash4.innerHTML = result4;

let result5 = dashboardKit.dashboard[2].ticket;
const dash5 = document.getElementById('stat5');
dash5.innerHTML = result5;

let result6 = dashboardKit.dashboard[2].amount;
const dash6 = document.getElementById('stat6');
dash6.innerHTML = result6;

let result7 = dashboardKit.dashboard[3].ticket;
const dash7 = document.getElementById('stat7');
dash7.innerHTML = result7;

let result8 = dashboardKit.dashboard[3].amount;
const dash8 = document.getElementById('stat8');
dash8.innerHTML = result8;

let result9 = dashboardKit.stats[0].ticket;
const dash9 = document.getElementById('info1');
dash9.innerHTML = result9;

let result10 = dashboardKit.stats[0].amount;
const dash10 = document.getElementById('info2');
dash10.innerHTML = result10;

let result11 = dashboardKit.stats[1].ticket;
const dash11 = document.getElementById('info3');
dash11.innerHTML = result11;

let result12 = dashboardKit.stats[1].amount;
const dash12 = document.getElementById('info4');
dash12.innerHTML = result12;

let result13 = dashboardKit.stats[2].ticket;
const dash13 = document.getElementById('info5');
dash13.innerHTML = result13;

let result14 = dashboardKit.stats[2].amount;
const dash14 = document.getElementById('info6');
dash14.innerHTML = result14;

let result15 = dashboardKit.stats[3].ticket;
const dash15 = document.getElementById('info7');
dash15.innerHTML = result15;

let result16 = dashboardKit.stats[3].time;
const dash16 = document.getElementById('info8');
dash16.innerHTML = result16;

let result17 = dashboardKit.stats[4].ticket;
const dash17 = document.getElementById('info9');
dash17.innerHTML = result17;

let result18 = dashboardKit.stats[4].percentage;
const dash18 = document.getElementById('info10');
dash18.innerHTML = result18;
