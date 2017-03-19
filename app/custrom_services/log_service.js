(function () {

    angular.module('nodeApp').service('logService', ["$log", "appSetting", function ($log, appSetting) {
        this.log = function (methodName, data) {
            if (appSetting.isDebug) {
                $log.debug('---------' + methodName + '------------');
                $log.debug(data);
            }
          
        }

        this.error = function (methodName, data) {
            if (appSetting.isDebug) {
                $log.error('---------' + methodName + '------------');
                $log.error(data);
            }
        }
    }]
)
})();