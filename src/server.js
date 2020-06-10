const axios  =  require("axios");
const MockAdapter = require("axios-mock-adapter");

const mock = new MockAdapter(axios);



mock.onGet("/users").reply(200, {
    users:[
        {
          "id": 1,
          "name": "Mike Test",
          "username": "Mike",
          "email": "mike@test.com",
          "address": {
            "street": "Testaphonic Str.",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
          {
          "id": 2,
          "name": "Shiela Try",
          "username": "ST",
          "email": "shiela@try.com",
          "address": {
            "street": "Experiment Blv.",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
          {
          "id": 3,
          "name": "Pat Hypothesis",
          "username": "Pathype",
          "email": "pat@hype.nl",
          "address": {
            "street": "Theorem Dr.",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        }
      ]
});

mock.onGet("/projects").reply(200, {
  projects:[
      {
        "id": 1,
        "projectName": "Project 22",
        "description": "Fake Project 1",
        "supervisor": "Mike",
        "startDate": "2016-04-05T00:00:00.000Z",
        "endDate": null
      },
        {
          "id": 2,
          "projectName": "Project 23",
          "description": "Fake Project 2",
          "supervisor": "Raghu Rayapudi",
          "startDate": "2016-04-05T00:00:00.000Z",
          "endDate": null
      }
    ]
});

const usersUri = "/users";
const url = new RegExp(`${usersUri}/*`);
 
mock.onGet(url).reply(200, {
  user: {
      "id": 3,
      "name": "Pat Hypothesis",
      "username": "Pathype",
      "email": "pat@hype.nl",
      "address": {
        "street": "Theorem Dr.",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
  }
});

export default axios;