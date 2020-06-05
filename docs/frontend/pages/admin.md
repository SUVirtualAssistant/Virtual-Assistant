# Admin
The admin page of the virtual assistant is integrated with API gateway, to get results from
lambda functions representing usage data. 

#Data aquisition
Data is provided for the data-charts and data-cards from Lambda functions that call Cloudwatchlog insights. 
Currently, the page polls information on verified vs unverified users, usage over the past 
week, errors over the past week, and average lambda function latency. 

#Update Limit
In order to prevent excessive lambda function calls, all metrics lambdas (Beggining with
prefix 'MET_') store a copy of the data, and only poll for new results if the cached data is more than 5 minutes old. 

