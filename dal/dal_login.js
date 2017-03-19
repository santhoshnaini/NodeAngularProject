
var sql = require('mssql');
var Q = require('q');
var dbConfigModule = require('../dal/db_config');
function getUserData(req) {
    console.log(req.userName);
    var response = {};
    var deferred = Q.defer();
    sql.connect(dbConfigModule.get_db_config()).then(function () {
        new sql.Request().input('userName', sql.VarChar, String(req.userName)).query('select * from tbl_User where FirstName=@userName').then(function (recordset) {

            response = recordset;
            console.log(response);
            deferred.resolve(recordset);
        }).catch(function (err) {
            console.log(err);
            deferred.reject(new Error(err));
        });
    }).catch(function (err) {
        console.log(err);
        deferred.reject(new Error(err));
    })
    return deferred.promise;
};

module.exports.getUserData = getUserData;