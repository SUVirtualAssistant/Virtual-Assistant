# Lambda
## **Overview**
    AWS Lambda is a system for creating asynchronous web functions in a variety of 
    languates. These functions can be called by and access many of the resources 
    within AWS, so they make integration very simple.  

## **Use In Virtual Assistant**
    The Virtual Assistnat relies on many Lambda functions to operate. Mostly, these
    functions are used to pull data into and out of the dynamoDB tables, and perform
    web searches. These functions are written in both Python (using the amazon Boto3 
    resource library), or JavaScript (using Node.js and the AWS-SDK). 

## **Testing**
    Each Lambda function has associated tests, which are accessible 
AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running.  

## Resources 

AWS Lambda webpage: https://aws.amazon.com/lambda/  
AWS Lambda developer guide: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html  

## [**DevFacultyDataPush**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/DevFacultyDataPush?tab=configuration)

## [**FacultyDataPush**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/FacultyDataPush?tab=configuration)

## [**CalendarDataPush**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CalendarDataPush?tab=configuration)

## [**DevCalDataPush**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/DevCalDataPush?tab=configuration)

## [**CalendarDataGet**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CalendarDataGet?tab=configuration)

## [**CAL_GetEventByDescription**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_GetEventByDescription?tab=configuration)

## [**CAL_GetUpcomingEvents**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_GetUpcomingEvents?tab=configuration)

## [**DevFacultyDataGet**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/DevFacultyDataGet?tab=configuration)

## [**facstaff_dynamoDB**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/facstaff_dynamoDB?tab=configuration)

## [**devSUWebscrape2**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/devSUWebscrape2?tab=configuration)  

This lambda function is implemented for scraping and searching Seattle U's website for url's carrying information on academics. Function scrapes the Parent url for Childeren urls. Each child url is then scraped for its own children urls. Data is stored in a dictionary mapping { url title : url }  
  
Parent url: www.seattleu.edu/academics/  
Children url's (at time of writing):  
      - www.seattleu.edu/undergraduate-admissions/academics/programs/  
      - www.seattleu.edu/graduate-admissions/programs/  
      - ncs.seattleu.edu/ (not scraped due to different website structure)  
      - www.seattleu.edu/academics/schools-and-colleges/  
      - www.seattleu.edu/cce/  
      - www.seattleu.edu/sas/  
      - www.seattleu.edu/abroad/  
      
   
