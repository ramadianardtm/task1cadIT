const data = "sensor_data.json";

fetch(data)
        .then(response =>{
        return response.json();
        })
        .then(responseJson => {
        console.log(responseJson);
        const {createServer} = require('task3');
        const {stat, createReadStream} = require('fs');
        const {promisify} = require('util');
        const filename = 'sensor_data.json';
        const fileInfo = promisify(stat);
        
        createServer(async(req, res) => {
            const{size} = await fileInfo(responseJson.array);
            res.writeHead(200, {
                'Content-Length' : size,
                'Content-Type' : 'sensor_data/json'
            });
        
            createReadStream(responseJson.array).pipe(res);
        }).listen(5500, () => console.log('server running on port 5500'));
        })

// oboe(data)
//     .done (function(things){
//         console.log(data);
//     })
//     .fail(function(){

//     })
