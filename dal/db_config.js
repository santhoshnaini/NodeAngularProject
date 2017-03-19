

var dbconfig = {
    user: 'sa',
    password: 'xtreamit@123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'NODE',

    options: {
        encrypt: false // Use this if you're on Windows Azure 
    }
};

function get_db_config() {
    return dbconfig;
}

module.exports.get_db_config = get_db_config;