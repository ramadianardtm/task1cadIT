const data = "sensor_data.json";

fetch(data)
        .then(response =>{
        return response.json();
        })
        .then(responseJson => {
        console.log(responseJson);
            var jsonStream = new EventSource('https://example.com/yourstreamingservice')
            jsonStream.onmessage = function (e) {
               var message = JSON.parse(e.data);
               // handle message
               console.log(message);
            };
        })
