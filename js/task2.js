const data = "sensor_data.json";

var debuger = document.getElementById('debug');
var debuger_2 = document.getElementById('debug-2');

fetch(data)
        .then(response =>{
        return response.json();
        })
        .then(responseJson => {
            console.log(responseJson);

            //NILAI MAX HUMIDITY
            const sortByHumidMax = responseJson.array.sort(
                function(a,b){
                    return parseFloat(b['humidity']
                    ) - parseFloat(a['humidity']);
                }
            ) [0]
            //NILAI MIN HUMIDITY
            const sortByHumidMin = responseJson.array.sort(
                function(a,b){
                    return parseFloat(a['humidity']
                    ) - parseFloat(b['humidity']);
                }
            ) [0]

            //NILAI MAX TEMPERATURE
            const sortByTempMax = responseJson.array.sort(
                function(a,b){
                    return parseFloat(b['temperature']
                    ) - parseFloat(a['temperature']);
                }
            ) [0]
            //NILAI MIN TEMPERATURE
            const sortByTempMin = responseJson.array.sort(
                function(a,b){
                    return parseFloat(a['temperature']
                    ) - parseFloat(b['temperature']);
                }
            ) [0]

            //NILAI AVERAGE HUMIDITY
            const averageHumid = Object
            .values(responseJson.array)
            .reduce((avg, { humidity }, _, { length }) => avg + humidity / length, 0);
            
            //NILAI AVERAGE TEMPERATURE
            const averageTemp = Object
            .values(responseJson.array)
            .reduce((avg, { temperature }, _, { length }) => avg + temperature / length, 0);
            
            //FUNGSI MEDIAN
            const arr = responseJson.array
            const arrSort = arr.sort();
            const len = data.length;
            const mid = Math.ceil(len / 2);
            //MEDIAN HUMIDITY
            const medianHumid = len % 2 == 0 ? (arrSort[mid].humidity + arrSort[mid - 1].humidity) / 2 : arrSort[mid - 1].humidity;
            //MEDIAN TEMPERATURE
            const medianTemp = len % 2 == 0 ? (arrSort[mid].temperature + arrSort[mid - 1].temperature) / 2 : arrSort[mid - 1].temperature;
           
            //NILAI MAX HUMIDITY
            console.log(sortByHumidMax);
            //NILAI MIN HUMMIDITY
            console.log(sortByHumidMin)

            //NILAI MAX TEMPERATURE
            console.log(sortByTempMax);
            //NILAI MIN TEMPERATURE
            console.log(sortByTempMin);

            //NILAI AVERAGE HUMIDIY
            console.log(averageHumid);
            //NILAI AVERAGE TEMPERATURE
            console.log(averageTemp)

            //NILAI MEDIAN HUMIDITY
            console.log("Humidity Median : ", medianHumid);
            //NILAI MEDIAN TEMPERATURE
            console.log("Temperature Median : ", medianTemp);

            debuger.innerHTML += 'Max Value Humidity : ' + (sortByHumidMax.humidity.toFixed(2)) + '<br>'
             + 'Min Value Humidity : ' + (sortByHumidMin.humidity.toFixed(2)) + '<br><br>' + 
             'Max Value Temperature : ' + (sortByTempMax.temperature.toFixed(2)) + '<br>' +
             'Min Value Temperature : ' + (sortByTempMin.temperature.toFixed(2)) + '<br><br>' +
             'Average Value Humidity : ' + (averageHumid.toFixed(2)) + '<br>' + 
             'Average Value Temperature : ' + (averageTemp.toFixed(2)) + '<br><br>' +
             'Median Value Humidity : ' + (medianHumid.toFixed(2)) + '<br>' + 
             'Median Value Temperature : ' + (medianTemp.toFixed(2));
            
            //JIKA INGIN MEMPRINT SELURUH DATA KE TABLE UNCOMMAND SOURCE CODE DIBAWAH
            //DAN div pada file .html nya
            /* 
            debuger_2.innerHTML = "";
            let sensor = responseJson.array;
            sensor.forEach(item => {
                debuger_2.innerHTML += `
                <table style="width:100%">
                <tr>
                  <th>ID</th>
                  <th>Temperature</th>
                  <th>Humidity</th>
                  <th>RoomArea</th>
                  <th>Timestamp</th>
                </tr>
                <tr>
                <td>${item.id}</td>
                <td>${item.temperature.toFixed(2)}</td>
                <td>${item.humidity.toFixed(2)}</td>
                <td>${item.roomArea}</td>
                <td>${item.timestamp}</td>
              </tr>
              </table>`
            })*/
        })

        //group by roomarea
            // var objGroupByroomArea = {};
            // for (var key in data){
            //     var roomArea = data[key].roomArea;
            // if (!objGroupByroomArea[roomArea]){
            //     objGroupByroomArea[roomArea] = [];
            // }
            //     objGroupByroomArea[roomArea].push(data[roomArea]);
            // }
            // console.log(objGroupByroomArea);
      /*  .then(() => {

            //Average
            var Avg_Temp = data.reduce( (acc, cur, idx, arr )=> {
                let
                sum = acc.temperature + cur.temperature,
                no = idx +1;
                if (no === arr.length) { sum = sum / no };
                return { 'temp': cur.temp, 'temp': sum }
            });

            var Avg_Humid = data.reduce( (acc, cur, idx, arr )=> {
            let
                sum = acc.humidity + cur.humidity,
                no = idx +1;
            if (no === arr.length) { sum = sum / no };
            return { 'Humidity': cur.humidity, 'Humidity': sum }
            });;
            console.log ('Avg temp =', JSON.stringify(Avg_Temp));
            console.log ('Avg temp =', JSON.stringify(Avg_Humid));
        })
        */
// const arr1 = data.filter(d => d.roomArea > 'roomArea1');
// console.log('arr1', arr1);

// const arr2 = data.filter(d => d.roomArea > 'roomArea2');
// console.log('arr2', arr2);

// const arr3 = data.filter(d => d.roomArea > 'roomArea3');
// console.log('arr3', arr3);

