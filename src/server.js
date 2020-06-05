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
          "id": 1,
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
          "id": 1,
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

export default axios;