function createDogTable(dogs = []) {
        /**
         * the form needs to be sent to "/filter-by-breed".
         * the info sent in this format: 
                {breed: "dogs breed"}
         */
        return (`
                ${dogs.length ?
                        `<table>
                                <tr>
                                        <th>name</th>
                                        <th>breed</th>
                                </tr>
                                ${dogs.map(item => `
                                        <tr>
                                                <td> ${item.name}   </td>
                                                <td> ${item.breed}  </td>
                                        </tr>
                                        `).join('')
                        }
                        </table>`
                        :
                        '<h3>no dogs </h3>'
                }
                <style>
                        body {
                                padding: 50px;
                                font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
                                background-color: thistle;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                        }
                        
                        h1 {
                                text-align: center;
                                border-radius: 4px;
                        }
                        
                        a {
                                color: #00b7ff;
                        }
                        
                        input {
                                border-radius: 15px;
                                margin-bottom: 5vh;
                                height: 6vh;
                                text-indent: 3px;
                                background-color: white;
                        }
                        
                        select {
                                border-radius: 15px;
                                margin-bottom: 5vh;
                                height: 6vh;
                                background-color: white;
                        }
                        
                        button{
                                border-radius: 15px;
                                margin-bottom: 5vh;
                                height: 6vh;
                                background-color: white;
                                margin-top: -11vh;
                        }
                </style>
                     
                
                <h3>filter by breed</h3>`
                //to make it work add to here
                `<form action="/filter-by-breed" method="GET">
                        <select id="breeds" name="breed">
                                <option value="all">All</option>
                                <option value="German Shepherd">German Shepherd</option>
                                <option value="Poodle">Poodle</option>
                                <option value="Rottweiler">Rottweiler</option>
                                <option value="Bulldog">Bulldog</option>
                        </select>
                        <input type='submit' value='filter'>
                </form>

                <form action='/addDog.html'>
                        <input type='submit' value='add new dog'>
                </form>`
        )

}

module.exports = {
        createDogTable: createDogTable
}
