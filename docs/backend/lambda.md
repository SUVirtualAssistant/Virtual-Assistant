# Lambda

## **Overview**

```text
AWS Lambda is a system for creating asynchronous web functions in a variety of 
languates. These functions can be called by and access many of the resources 
within AWS, so they make integration very simple.  
```

## **Use In Virtual Assistant**

```text
The Virtual Assistnat relies on many Lambda functions to operate. Mostly, these
functions are used to pull data into and out of the dynamoDB tables, and perform
web searches. These functions are written in both Python (using the amazon Boto3 
resource library), or JavaScript (using Node.js and the AWS-SDK). 
```

## **Testing**

```text
Each Lambda function has associated tests, which are accessible 
```

AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second. You pay only for the compute time you consume - there is no charge when your code is not running.

## Resources

AWS Lambda webpage: [https://aws.amazon.com/lambda/](https://aws.amazon.com/lambda/)  
AWS Lambda developer guide: [https://docs.aws.amazon.com/lambda/latest/dg/welcome.html](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)

## [**FacultyDataPush**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/FacultyDataPush?tab=configuration)
The FacultyDataPush Lambda is responsible for filling the directory table in DynamoDB. Currently, data must be provided manually to the lambda, 
because we have not yet been able to find a direct and accessible source for this data. The data provided to this function 
needs to match the DynamoDB 'FacultyDirectory' table format (Email, LName, Fname, Address, Aff, Department)

## [**Cal\_DataPush**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_DataPush?tab=configuration)
Cal_DataPush is called once daily, and pulls the calendar events for SU's ICal page. Any events that are not registered in
the DynamoDB table 'Calendar' will be added. 

## [**CAL\_GetEventByDescription**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_GetEventByDescription?tab=configuration)
Cal_GetEventByDescription is a lambda function integrated with Lex. This function requires a targetText slot, which contains a 
string that the user wants to search for in the calendar. The 'Calendar' table in DynamoDB is querired for this string using AWS cloudsearch. 
All results are then returned within the data object of SessionAttributes.

## [**CAL\_GetUpcomingEvents**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_GetUpcomingEvents?tab=configuration)
Cal_GetUpcoming events requires no parameters, and returns all events from the 'Calendar' table
that are scheduled within the next week from today's date. The results are stored in the data object of 
SessionAttributes.

## [**VAFacultyDirectoryGet**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/VAFacultyDirectoryGet?tab=configuration)
This lambda returns an entry from the 'FacultyDirectory' table of DynamoDB when provided with a Fname and LName slot.

## [**WS\_Academics**](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/WS_Academics?tab=configuration)

This lambda function is implemented for scraping and searching Seattle U's website for url's carrying information on academics. Function scrapes the Parent url for Childeren urls. Each child url is then scraped for its own children urls. Data is stored in a dictionary mapping { url title : url }  
It is connected to Lex intent WS\_Academics for fulfillment.  
Web scraping library, beautiful soup, is utilized for gathering data. This lambda function contains in-line comments that serve as a guidance to developers.

Parent url: www.seattleu.edu/academics/  
Children url's \(at time of writing\):

* www.seattleu.edu/undergraduate-admissions/academics/programs/  
* www.seattleu.edu/graduate-admissions/programs/  
* ncs.seattleu.edu/ \(not scraped due to different website structure\)  
* www.seattleu.edu/academics/schools-and-colleges/  
* www.seattleu.edu/cce/  
* www.seattleu.edu/sas/  
* www.seattleu.edu/abroad/  

  Resources: 

  * [**Beautiful Soup documentation**](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

