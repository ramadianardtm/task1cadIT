//import React, {useEffect, useState} from "react";
//import { render } from "react-dom";
//import axios from "axios";

const data1 = 'http://jsonplaceholder.typicode.com/users';
const data_user = 'data.json';
const data2 = 'salary_data.json';

//const final_data = data1.map(a => Object.assign(a, data2.find(b => b.id == a.id)));

const listEmp = document.querySelector('#emp-list');

const getListEmp = ()=>{
    fetch(data_user)//atau langsung dari link
        .then(response =>{
            return response.json();
        }).then(responseJson =>{
            console.log(responseJson);
            listEmp.innerHTML = "";
            let emp = responseJson;
            emp.forEach(item =>{
                listEmp.innerHTML += `
                    <div class="col s12 m7">
                        <div class="card">
                            <div class="card-title">
                            <span></span>
                            </div>
                            <div class="card-content">
                            <p>
                                ID : ${item.id}<br>
                                Name : ${item.name}<br>
                                Username : ${item.username}<br>
                                Email : ${item.email}<br>
                                Address : ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}<br>
                                Phone : ${item.phone}<br>
                                Salary in IDR : Rp. ${item.salaryInIDR}<br>
                                Salary in USD :<br>
                                Latitude : ${item.address.geo.lat}<br>
                                Longitude : ${item.address.geo.lng}

                            </p>
                            </div>

                        </div>
                    </div>
                `
            });
        }).catch(error =>{
            console.error(error);
        });
}


document.addEventListener('DOMContentLoaded', getListEmp);