# Lex

Amazon Lex is a service for building conversational interfaces into any application using voice and text. Our Lex bot is called Mercury.

## **Resources**

Amazon Lex webpage: [https://aws.amazon.com/lex/](https://aws.amazon.com/lex/)  
Amazon Lex developer guide: [https://docs.aws.amazon.com/lex/latest/dg/what-is.html](https://docs.aws.amazon.com/lex/latest/dg/what-is.html)

## **Mercury**

Mercury consists of intents with associated sample utterances, slots, fulfillment action, and responses.

### Intents

Intents are a set of actions that we want Mercury to fulfill. Mercury has multiple intents:

#### **Generic**

* [**BOT_BeginConversation**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - greeting displayed on bot launch.
* [**BOT_EndConversation**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - farewell displayed on conversation close.
* [**BOT_Fallback**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - error handling message.
* [**BOT_Feedback**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)
* [**BOT_Recover**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - error recovery.
* [**Greeting**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - respond to a greeting message from a user, such as "Hello"
* [**Farewell**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - respond to a farewell message from a user, such as "Bye"
* [**Affirmations**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to affirmative message from a user, such as "Yes"
* [**Negations**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a negation message from a user, such as "No"
* [**Help**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a generic user request for help, such as "Help me"
* [**Thanks**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to an expression of gratitude form a user, such as "Thank you"

#### **Off-Topic and small talk**

* [**OT\_BadFeedback**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a negative or rude message from a user, such as "You are terrible"
* [**OT\_GoodFeeback**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a positive feedback from a user, such as "You are great" 
* [**OT\_HowAreYou**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a user small talk, such as "How are you?"
* [**OT\_WhatCanYouDo**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a user inquiry into Mercury's functionality, such as "How can you assist me?"
* [**OT\_WhatsYourName**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a user asking for Mercury's name
* [**OT\_WhoAreYou**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a user asking Mercury to describe itself, such as "Are you a robot?"
* [**OT\_WhoMadeYou**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a user's inquiry on who has developed Mercury.
* [**OT\_Redirect**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) - responds to a user who wants to talk to a real person. Redirects the user to SU Service Center.

#### **Web scraping for data**

* [**WS\_Academics**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)
  * This intent is fulfilled by [devSUWebscrape2](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/devSUWebscrape2?tab=configuration) lambda fucntion that scrapes the [Seattle U academics webpage](https://www.seattleu.edu/academics/) to match user query in real time.
  * Responds to user's questions on the topic of academics, such as "I need information on Computer Science degree"
  * Requires user input, what they need IT help for, stored in a slot, in order to fulfill the intent 
* [**WS\_SearchSU**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury)
  * This intent is fulfilled by [DevSUWebscrape](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/DevSUWebscrape?tab=configuration) lambda function that scrapes the [Seattle U IT Supporting Articles](https://www.seattleu.edu/its/support/support-articles/) to match user query in real time.

#### **DynamoDB for data**

* [**DIR\_GetEmailByName**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) 
  * This intent is fulfilled by [VAFacultyDirectoryGet](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/VAFacultyDirectoryGet?tab=configuration) lambda function that connects to DynamoDB for data.
  * Responds to user query on contact information for a faculty member.
  * Requires user input, faculty first name and faculty last name, stored in slots, in order to fulfill the intent.
* [**CAL\_UpcomingEvents**](https://us-west-2.console.aws.amazon.com/lex/home?region=us-west-2#bot-editor:bot=Mercury) 
  * This intent is fulfilled by [CAL\_GetUpcomingEvents](https://us-west-2.console.aws.amazon.com/lambda/home?region=us-west-2#/functions/CAL_GetUpcomingEvents?tab=configuration) lambda function that connects to DynamoDB for data.
  * Responds to user query on the upcoming events around the campus.

