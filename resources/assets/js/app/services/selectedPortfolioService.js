(function () {

'use strict';

angular.module('appMain')
    .service('selectedPortfolioService', ['$cookies', 'portfoliosService', function($cookies, portfoliosService) {
        var selectedPortfolio = {};

        selectedPortfolio.portfolioId = -1;
        selectedPortfolio.portfolio = null;

        portfoliosService.then(function(service)
        {
            selectedPortfolio.portfolios = service.data;

            if($cookies.tagdaqportfolio > 0)
            {
                var useId = false;
                var id = $cookies.tagdaqportfolio;

                for (var i = 0; i < selectedPortfolio.portfolios.length; i++) {
                    if (selectedPortfolio.portfolios[i].id == id)
                    {
                        selectedPortfolio.portfolio = selectedPortfolio.portfolios[i];
                        useId = true;
                        break;
                    }
                }

                if (useId === false)
                {
                    selectedPortfolio.portfolio = selectedPortfolio.portfolios[i];
                    id = selectedPortfolio.portfolios[0].id;
                }
            }else
            {
                selectedPortfolio.portfolio = selectedPortfolio.portfolios[i];
                var id = selectedPortfolio.portfolios[0].id;
            }
        
            selectedPortfolio.setPortfolioId(id);
        });

        selectedPortfolio.setPortfolioId = function(id)
        {
            selectedPortfolio.portfolioId = id;
            
            $cookies.tagdaqportfolio = id;
        }

        selectedPortfolio.getPortfolio = function()
        {
            return selectedPortfolio.portfolio;
        }
        
        selectedPortfolio.getPortfolioId = function()
        {
            return selectedPortfolio.portfolioId;
        }

        return selectedPortfolio;
    }]);

})();
