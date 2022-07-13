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
                <h3>filter by breed</h3>
                <form action="/filter-by-breed" method="GET">
                        <select id="breeds" name="breed">
                                <option value="all">All</option>
                                <option value="American Shorthair">American Shorthair</option>
                                <option value="Bengal">Bengal</option>
                                <option value="Siamese">Siamese</option>
                                <option value="Toyger">Toyger</option>
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