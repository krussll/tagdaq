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
                    selectedPortfolio.portfolio = selectedPortfolio.portfolios[0];
                    if (selectedPortfolio.portfolio)
                    {
                        id = selectedPortfolio.portfolio.id;
                    }else {
                        id = 0;
                    }

                }
            }else
            {
                selectedPortfolio.portfolio = selectedPortfolio.portfolios[0];
                id = selectedPortfolio.portfolio.id;
            }

            if(id > 0)
            {
               selectedPortfolio.setPortfolioId(id);
            }
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

        selectedPortfolio.boughtPortfolioValue = function(portfolioId, value)
        {
          for (var i = 0; i < selectedPortfolio.portfolios.length; i++) {
              if (selectedPortfolio.portfolios[i].id == portfolioId)
              {
                  selectedPortfolio.portfolio = selectedPortfolio.portfolios[i];
                  selectedPortfolio.portfolio.balance = selectedPortfolio.portfolio.balance - value;
                  break;
              }
          }
        }

        selectedPortfolio.soldPortfolioValue = function(portfolioId, value)
        {
          for (var i = 0; i < selectedPortfolio.portfolios.length; i++) {
              if (selectedPortfolio.portfolios[i].id == portfolioId)
              {
                  selectedPortfolio.portfolio = selectedPortfolio.portfolios[i];
                  selectedPortfolio.portfolio.balance = parseInt(selectedPortfolio.portfolio.balance) + parseInt(value);
                  break;
              }
          }
        }

        return selectedPortfolio;
    }]);

})();
