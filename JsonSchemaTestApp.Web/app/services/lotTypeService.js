angular.module('app')
    .service("lotTypeService", function lotTypeService($http) {

        this.getLotTypeSchema = function () {
            $http.get("/api/LotTypeApi/" + 0)
                .then(function (result) {
                    return result.data;
                });
        }

        this.saveLotType = function (model) {
            $http.post("/api/LotTypeApi/SaveLotType", model)
                .then(function () {
                    console.log("success");
                });
            
        }
    });