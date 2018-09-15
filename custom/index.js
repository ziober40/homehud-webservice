/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

// alexa ask hello
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'This is Raspberry PI home controller, welcome.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello', speechText)
      .getResponse();
  },
};

// zmienic na alexa pc activate
const ActivatePCIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'ActivatePCIntent';
  },
  handle(handlerInput) {
    const speechText = 'I am turning on your pc!';
    
    //request handler to wake on lan

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Turning on', speechText)
      .getResponse();
  },
};

// zmienic na alexa pc deactivate
const DeactivatePCIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DeactivatePCIntent';
  },
  handle(handlerInput) {
    const speechText = 'I am turning off your pc!';
    
    //request handler to turn off pc, raspberry pi is sending request to windows service on pc

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Turning off', speechText)
      .getResponse();
  },
};

const SwitchScreenPCIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'SwitchScreenPCIntent';
  },
  handle(handlerInput) {
    const speechText = 'I am switching source to the leaving room!';
    
    //request handler to turn off pc, raspberry pi is sending request to windows service on pc

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Switching screen', speechText)
      .getResponse();
  },
};

const SwitchPCMasterPCIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'SwitchPCMasterPCIntent';
  },
  handle(handlerInput) {
    const speechText = 'I am switching screen to the office!';
    
    //request handler to turn off pc, raspberry pi is sending request to windows service on pc

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Switching office', speechText)
      .getResponse();
  },
};



const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say hello to me!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    ActivatePCIntentHandler,
    DeactivatePCIntentHandler,
    SwitchScreenPCIntentHandler,
    SwitchPCMasterPCIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
