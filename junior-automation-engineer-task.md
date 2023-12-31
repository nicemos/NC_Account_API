# Interview Task - Junior Automation Engineer

## Objective:

Explain how you would approach automating some key tasks that form part of the Northcoders bootcamp Entry Challenge (EC) booking system. The overall goal being to improve the EC booking process and communication of information to the different Northcoders teams involved. This should take into account the data available, the stakeholders, and the platforms involved.

## Background:

Over the past 12 months we have implemented a new system for handling EC bookings, where applicants to Northcoders courses make a booking on [Setmore](https://www.setmore.com/) (you may have already used this during your own application process!), which triggers an automated workflow on [Zapier](https://zapier.com/), a low-code platform that allows us to connect together a number of different services and platforms across Northcoders through automation. (You can make a Zapier account for free if you want to try it out!)

## Data Sample:

Below is an example of the data available to Zapier from a Setmore booking for an EC. Consider this data format when considering the below [Tasks for Automation](#tasks-for-automation).

```json
{
  "key": "8c9e6a49-0063-4537-ad6b",
  "start": "2023-11-14T10:00:00Z",
  "startTime": 1699956000000,
  "endTime": 1699961400000,
  "end": "2023-11-14T11:30:00Z",
  "notes": null,
  "consumers_address_country": "GBR",
  "consumers_booking_code": 1234567890,
  "consumers_name": "Sally Jones",
  "consumers_pronouns": "she/her",
  "consumers_key": "c7f171665c73b3389f42f70da7830b8fd",
  "consumers_email": "sally@jones.com",
  "providers_address_country": "GBR",
  "providers_name": "Northcoders Classroom",
  "providers_key": "r3be41663760878108",
  "providers_email": "northcoders@classroom.com",
  "services_duration": 90,
  "services_cost": 0,
  "services_title": "Northcoders Entry Challenge",
  "services_descriptions": "Your Northcoders Entry Challenge! The first 60 minutes will be your Challenge, with time after for a chat with one of our Tutors.",
  "services_key": "05451ab7-be63-4cff-9965-7cd1ae3"
}
```

_Note: the `consumers_booking_code` is a unique ID number for each individual person - it is how we know who the booking relates to throughout our various platforms._

## Tasks for Automation:

Using the data available, tell us how we could achieve the following tasks:

1. Notifying the **NC Onboarding Team** when a booking is made (and any relevant details about the booking), so that they can keep track of the person’s application progress,
2. Informing the **NC Classroom Team** about the booking (and any relevant details), so they know who to contact on Slack when the person’s Entry Challenge finishes.
3. Updating the **applicant**’s Northcoders Account with the details of the Entry Challenge they have just booked, so we can display the relevant details to them when they log in to their Account.

We're interested in knowing:

1. Which Platforms/Services ([see below\*](#platformsservices-we-use-already)) you would use for each task, and why,
2. Which pieces of the data you would use/share and how they would be formatted.

You are welcome to present your ideas in any way that works best for you - a series of bullet points to talk through, a flowchart, a slideshow, whatever works best.

_Please note: There isn’t necessarily one ‘right answer’ to this task - we are interested in seeing your thought process, what sorts of considerations you make, and how you came to those considerations! The Junior Automation Engineer role will focus more toward implementation than design, but since many of our different platforms and services are closely integrated, it is important that the successful candidate is able to consider how what we are implementing might be important to, and/or impact, different stakeholders across the business._

We look forward to seeing what you come up with!

> ## Platforms/Services we use already:
>
> \* Here are some platforms/services we already use for the above automation, so you may want to consider how you would use them (but we welcome your thoughts on any others that you think would be suitable!):
>
> - **Setmore**, to take EC bookings
> - **Zapier**, to integrate all of these platforms
> - **Google Calendar**, used by the Classroom & Onboarding teams (each team has their own calendar, plus both teams have access to a joint calendar)
> - **Slack**, used by the entire business
> - **Hubspot** (a Customer Relationship Management platform used by the Onboarding team, that records key information about applicants and which stage they are at in the application process)
> - **The Northcoders Account API** (which contains information about applicants such as their name, contact details, application progress and so on. This is then shown to the applicant on their Account Dashboard, where they can see what’s coming up next in their application process)
