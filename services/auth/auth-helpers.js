const bcrypt = require('bcrypt.js')
function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword)
}

module.exports = {
    comparePass
}