## Getting Started

Hi, this is where I tell you about react

## **Overview**
Amazon Lex is a service for building conversational interfaces into any application using voice and text. Our Lex bot is called Mercury.

## **Resources**
Amazon Lex webpage: https://aws.amazon.com/lex/  
Amazon Lex developer guide: https://docs.aws.amazon.com/lex/latest/dg/what-is.html

## **Mercury**
Mercury consists of intents with associated sample utterances, slots, fulfillment action, and responses. 
### Intents
Intents are a set of actions that we want Mercury to fulfill. Mercury has multiple intents: 
#### **Generic**
* **[Greeting](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - respond to a greeting message from a user, such as "Hello"
* **[Farewell](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - respond to a farewell message from a user, such as "Bye"
* **[Affirmations](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to affirmative message from a user, such as "Yes"
* **[Negations](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a negation message from a user, such as "No"
* **[Help](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a generic user request for help, such as "Help me"
* **[Thanks](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to an expression of gratitude form a user, such as "Thank you" 
#### **Off-Topic and small talk**
* **[OT_BadFeedback](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a negative or rude message from a user, such as "You are terrible"
* **[OT_GoodFeeback](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a positive feedback from a user, such as "You are great" 
* **[OT_HowAreYou](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a user small talk, such as "How are you?"
* **[OT_WhatCanYouDo](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a user inquiry into Mercury's functionality, such as "How can you assist me?"
* **[OT_WhatsYourName](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a user asking for Mercury's name
* **[OT_WhoAreYou](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a user asking Mercury to describe itself, such as "Are you a robot?"
* **[OT_WhoMadeYou](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a user's inquiry on who has developed Mercury.
* **[OT_Redirect](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** - responds to a user who wants to talk to a real person. Redirects the user to SU Service Center.
#### **Web scraping for data**
* **[WS_Academics](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)**
  * This intent is fulfilled by [devSUWebscrape2](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/devSUWebscrape2?tab=configuration) lambda fucntion that scrapes the [Seattle U academics webpage](https://www.seattleu.edu/academics/) to match user query in real time.
  * Responds to user's questions on the topic of academics, such as "I need information on Computer Science degree"
  * Requires user input, what they need IT help for, stored in a slot, in order to fulfill the intent 
* **[WS_SearchSU](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)**
  * This intent is fulfilled by [DevSUWebscrape](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/DevSUWebscrape?tab=configuration) lambda function that scrapes the [Seattle U IT Supporting Articles](https://www.seattleu.edu/its/support/support-articles/) to match user query in real time.

#### **DynamoDB for data**
* **[DIR_GetEmailByName](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** 
  * This intent is fulfilled by [VAFacultyDirectoryGet](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/VAFacultyDirectoryGet?tab=configuration) lambda function that connects to DynamoDB for data.
  * Responds to user query on contact information for a faculty member.
  * Requires user input, faculty first name and faculty last name, stored in slots, in order to fulfill the intent.
* **[CAL_UpcomingEvents](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)** 
  * This intent is fulfilled by [CAL_GetUpcomingEvents](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_GetUpcomingEvents?tab=configuration) lambda function that connects to DynamoDB for data.
  * Responds to user query on the upcoming events around the campus.
 


