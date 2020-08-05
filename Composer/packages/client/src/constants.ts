// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import formatMessage from 'format-message';

export const BASEPATH = process.env.PUBLIC_URL || '/';
export const BASEURL = `${process.env.PUBLIC_URL || ''}/api`;

//the count about the undo/redo
export const UNDO_LIMIT = 10;
/**
 * Global ActionTypes Defination Instruction.
 * For unification consideration, please follow the naming pattern below
 * You may not need all of this types. but the type must be one of them.
 * Shortly, a good ActionType name should be:
 * <DO_WHAT_STATUS> or <DO_WHAT>
 *
 * <DO>
 * e.g. 'GET' / 'SET' / 'FETCH' / 'UPDATE' / 'CREATE' etc.
 *
 * <DO_WHAT>
 * usage example, 'GET_DATA' / 'UPDATE_FILE' / 'SET_STATE'
 *
 * <STATUS>
 * START ---> SUCCESS || FAILURE ---> COMPLETE
 * it's a status flow, <STATUS> must be one of them
 * complete is fired no mater it's success or failure.
 * usage example, 'GET_DATA_SUCCESS' / 'UPDATE_FILE_FAILURE' / 'SET_STATE_COMPLETE'
 *
 * Bad Practices:
 * - Reversed <WHAT_DO>, e.g. 'DATA_GET', 'FILE_SET'
 * - ACTION use as ACTION_SUCCESS
 * - Have SUCCESS but no FAILURE
 * - Overdesign, unused types
 */

export enum ActionTypes {
  GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS',
  GET_PROJECT_PENDING = 'GET_PROJECT_PENDING',
  GET_PROJECT_FAILURE = 'GET_PROJECT_FAILURE',
  REMOVE_PROJECT_SUCCESS = 'REMOVE_PROJECT_SUCCESS',
  GET_RECENT_PROJECTS_SUCCESS = 'GET_RECENT_PROJECTS_SUCCESS',
  GET_RECENT_PROJECTS_FAILURE = 'GET_RECENT_PROJECTS_FAILURE',
  GET_TEMPLATE_PROJECTS_SUCCESS = 'GET_TEMPLATE_PROJECTS_SUCCESS',
  GET_TEMPLATE_PROJECTS_FAILURE = 'GET_TEMPLATE_PROJECTS_FAILURE',
  CREATE_DIALOG_BEGIN = 'CREATE_DIALOG_BEGIN',
  CREATE_DIALOG_CANCEL = 'CREATE_DIALOG_CANCEL',
  CREATE_DIALOG = 'CREATE_DIALOG',
  UPDATE_DIALOG = 'UPDATE_DIALOG',
  REMOVE_DIALOG = 'REMOVE_DIALOG',
  UPDATE_LG = 'UPDATE_LG',
  CREATE_LG = 'CREATE_LG',
  REMOVE_LG = 'REMOVE_LG',
  UPDATE_LU = 'UPDATE_LU',
  CREATE_LU = 'CREATE_LU',
  REMOVE_LU = 'REMOVE_LU',
  UPDATE_QNA = 'UPDATE_QNA',
  CREATE_QNA = 'CREATE_QNA',
  REMOVE_QNA = 'REMOVE_QNA',
  BUILD_SUCCCESS = 'BUILD_SUCCCESS',
  BUILD_FAILED = 'BUILD_FAILED',
  SAVE_TEMPLATE_ID = 'SAVE_TEMPLATE_ID',
  GET_STORAGE_SUCCESS = 'GET_STORAGE_SUCCESS',
  GET_STORAGE_FAILURE = 'GET_STORAGE_FAILURE',
  SET_STORAGEFILE_FETCHING_STATUS = 'SET_STORAGEFILE_FETCHING_STATUS',
  GET_STORAGEFILE_SUCCESS = 'GET_STORAGEFILE_SUCCESS',
  SET_CREATION_FLOW_STATUS = 'SET_CREATION_FLOW_STATUS',
  SET_DESIGN_PAGE_LOCATION = 'SET_DESIGN_PAGE_LOCATION',
  RELOAD_BOT_FAILURE = 'RELOAD_BOT_FAILURE',
  UPDATE_SKILL_SUCCESS = 'UPDATE_SKILL_SUCCESS',
  SYNC_ENV_SETTING = 'SYNC_ENV_SETTING',
  SET_ERROR = 'SET_ERROR',
  REMOVE_RECENT_PROJECT = 'REMOVE_RECENT_PROJECT',
  EDITOR_RESET_VISUAL = 'EDITOR_RESET_VISUAL',
  EDITOR_SELECTION_VISUAL = 'EDITOR_SELECTION_VISUAL',
  EDITOR_CLIPBOARD = 'EDITOR_CLIPBOARD',
  USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE',
  USER_SESSION_EXPIRED = 'USER_SESSION_EXPIRED',
  UNDO = 'UNDO',
  REDO = 'REDO',
  HISTORY_CLEAR = 'HISTORY_CLEAR',
  ONBOARDING_ADD_COACH_MARK_REF = 'ONBOARDING_ADD_COACH_MARK_REF',
  ONBOARDING_SET_COMPLETE = 'ONBOARDING_SET_COMPLETE',
  GET_PUBLISH_TYPES_SUCCESS = 'GET_PUBLISH_TYPES_SUCCESS',
  PUBLISH_SUCCESS = 'PUBLISH_SUCCESS',
  PUBLISH_FAILED = 'PUBLISH_FAILED',
  PUBLISH_FAILED_DOTNET = 'PUBLISH_FAILED_DOTNET',
  GET_PUBLISH_STATUS = 'GET_PUBLISH_STATUS',
  GET_PUBLISH_STATUS_FAILED = 'GET_PUBLISH_STATUS_FAILED',
  GET_PUBLISH_HISTORY = 'GET_PUBLISH_HISTORY',
  UPDATE_BOTSTATUS = 'UPDATE_BOTSTATUS',
  SET_RUNTIME_TEMPLATES = 'SET_RUNTIME_TEMPLATES',
  SET_USER_SETTINGS = 'SET_USER_SETTINGS',
  ADD_SKILL_DIALOG_BEGIN = 'ADD_SKILL_DIALOG_BEGIN',
  ADD_SKILL_DIALOG_END = 'ADD_SKILL_DIALOG_END',
  EJECT_SUCCESS = 'EJECT_SUCCESS',
  SET_MESSAGE = 'SET_MESSAGE',
  SET_APP_UPDATE_ERROR = 'SET_APP_UPDATE_ERROR',
  SET_APP_UPDATE_PROGRESS = 'SET_APP_UPDATE_PROGRESS',
  SET_APP_UPDATE_SHOWING = 'SET_APP_UPDATE_SHOWING',
  SET_APP_UPDATE_STATUS = 'SET_APP_UPDATE_STATUS',
  CREATE_SKILL_MANIFEST = 'CREATE_SKILL_MANIFEST',
  UPDATE_SKILL_MANIFEST = 'UPDATE_SKILL_MANIFEST',
  REMOVE_SKILL_MANIFEST = 'REMOVE_SKILL_MANIFEST',
  DISPLAY_SKILL_MANIFEST_MODAL = 'DISPLAY_SKILL_MANIFEST_MODAL',
  DISMISS_SKILL_MANIFEST_MODAL = 'DISMISS_SKILL_MANIFEST_MODAL',
  SET_PUBLISH_TARGETS = 'SET_PUBLISH_TARGETS',
  SET_CUSTOM_RUNTIME_TOGGLE = 'SET_CUSTOM_RUNTIME_TOGGLE',
  SET_RUNTIME_FIELD = 'SET_RUNTIME_FIELD',
  GET_BOILERPLATE_SUCCESS = 'GET_BOILERPLATE_SUCCESS',
  SET_LOCALE = 'SET_LOCALE',
  ADD_LANGUAGES = 'ADD_LANGUAGES',
  DELETE_LANGUAGES = 'DELETE_LANGUAGES',
  ADD_LANGUAGE_DIALOG_BEGIN = 'ADD_LANGUAGE_DIALOG_BEGIN',
  ADD_LANGUAGE_DIALOG_END = 'ADD_LANGUAGE_DIALOG_END',
  DEL_LANGUAGE_DIALOG_BEGIN = 'DEL_LANGUAGE_DIALOG_BEGIN',
  DEL_LANGUAGE_DIALOG_END = 'DEL_LANGUAGE_DIALOG_END',
  OPEN_RECOGNIZER_DROPDOWN = 'OPEN_RECOGNIZER_DROPDOWN',
  CLOSE_RECOGNIZER_DROPDOWN = 'CLOSE_RECOGNIZER_DROPDOWN',
  SET_QNA_UPDATE_STATUS = 'SET_QNA_UPDATE_STATUS',
}

export const Tips = {
  PROJECT_NAME: formatMessage(
    `Create a name for the project which will be used to name the application: (projectname-environment-LUfilename)`
  ),
  ENVIRONMENT: formatMessage(
    `When multiple people are working with models you want to be able to work with models independently from each other tied to the source control.`
  ),
  AUTHORING_KEY: formatMessage('An authoring key is created automatically when you create a LUIS account.'),
  SUBSCRIPTION_KEY: formatMessage('A subscript key is created automatically when you create a QnA account.'),
  AUTHORING_REGION: formatMessage('Authoring region to use (e.g. westus, westeurope, australiaeast)'),
  DEFAULT_LANGUAGE: formatMessage(
    `Configures default language model to use if there is no culture code in the file name (Default: en-us)`
  ),
};

export const Links = {
  LUIS: 'https://docs.microsoft.com/en-us/azure/cognitive-services/luis/luis-concept-keys?tabs=V2',
};

export const Text = {
  LUISDEPLOY: formatMessage(
    `Your bot is using LUIS and QNA for natural language understanding. If you already have a LUIS account, provide the information below. If you do not have an account yet, create a (free) account first.`
  ),
  LUISDEPLOYSUCCESS: formatMessage('Congratulations! Your model is successfully published.'),
  LUISDEPLOYFAILURE: formatMessage('Sorry, something went wrong with publishing. Try again or exit out of this task.'),
  CONNECTBOTFAILURE: formatMessage('Sorry, something went wrong with connecting bot runtime'),
  DOTNETFAILURE: formatMessage('Composer needs .NET Core SDK'),
};

export enum LuisConfig {
  STORAGE_KEY = 'luisConfig',
  AUTHORING_KEY = 'authoringKey',
  ENVIRONMENT = 'environment',
  PROJECT_NAME = 'name',
  REGION = 'authoringRegion',
  LANGUAGE = 'defaultLanguage',
}

export enum QnaConfig {
  SUBSCRIPTION_KEY = 'subscriptionKey',
}

export const FileTypes = {
  FOLDER: 'folder',
  FILE: 'file',
  BOT: 'bot',
  UNKNOWN: 'unknown',
};

export const OpenStatus = {
  NEW: 'New',
  SAVEAS: 'Save as',
  OPEN: 'Open',
  CLOSE: '',
};

export enum BotStatus {
  connected = 'connected',
  unConnected = 'unConnected',
  publishing = 'publishing',
  published = 'published',
  reloading = 'loading',
  pending = 'pending',
  failed = 'failed',
}

export enum CreationFlowStatus {
  NEW = 'New',
  NEW_FROM_SCRATCH = 'Scratch',
  NEW_FROM_TEMPLATE = 'Template',
  SAVEAS = 'Save as',
  OPEN = 'Open',
  CLOSE = 'Close',
}

export const Steps = {
  CREATE: 'CREATE',
  DEFINE: 'DEFINE',
  LOCATION: 'LOCATION',
  NONE: 'NONE',
};

export const DialogCreationCopy = {
  CREATE_NEW_BOT: {
    title: formatMessage('Create bot from template or scratch?'),
    subText: formatMessage('You can create a new bot from scratch with Composer, or start with a template.'),
  },
  DEFINE_CONVERSATION_OBJECTIVE: {
    title: formatMessage('Define conversation objective'),
    subText: formatMessage(
      `What can the user accomplish through this conversation? For example, BookATable, OrderACoffee etc.`
    ),
  },
  SELECT_LOCATION: {
    title: formatMessage('Select a Bot'),
    subText: formatMessage('Which bot do you want to open?'),
  },
  SELECT_DESTINATION: {
    title: formatMessage('Set destination folder'),
    subText: formatMessage('Choose a location for your new bot project.'),
  },
};

export const DialogDeleting = {
  NO_LINKED_TITLE: formatMessage('This will delete the Dialog and its contents. Do you wish to continue?'),
  TITLE: formatMessage('Warning!'),
  CONTENT: formatMessage(
    `The dialog you have tried to delete is currently used in the below dialog(s). Removing this dialog will cause your Bot to malfunction without additional action.`
  ),
  CONFIRM_CONTENT: formatMessage('Do you wish to continue?'),
};

export const MultiLanguagesDialog = {
  ADD_DIALOG: {
    title: formatMessage('Copy content for translation'),
    subText: formatMessage(
      `Composer cannot yet translate your bot automatically.\nTo create a translation manually, Composer will create a copy of your bot’s content with the name of the additional language. This content can then be translated without affecting the original bot logic or flow and you can switch between languages to ensure the responses are correctly and appropriately translated.`
    ),
    selectDefaultLangTitle: formatMessage(
      'This language will be copied and used as the basis (and fallback language) for the translation.'
    ),
    selectionTitle: formatMessage('To which language will you be translating your bot?'),
    whenDoneText: formatMessage(
      'When done, switch to the newly created language and start the (manual) translation process.'
    ),
  },
  DELETE_DIALOG: {
    title: formatMessage('Select language to delete'),
    subText: formatMessage(
      `When deleting a language, only the content will be removed. The flow and logic of the conversation and dialog will remain functional.`
    ),
  },
};

export const addSkillDialog = {
  SKILL_MANIFEST_FORM: {
    title: formatMessage('Add a skill'),
    subText: formatMessage('Enter a manifest url to add a new skill to your bot.'),
  },
  SKILL_MANIFEST_FORM_EDIT: {
    title: formatMessage('Edit a skill'),
    subText: formatMessage('Enter a manifest url to add a new skill to your bot.'),
  },
};

export const SupportedFileTypes = [
  'accdb',
  'csv',
  'docx',
  'dotx',
  'mpt',
  'odt',
  'one',
  'onepkg',
  'onetoc',
  'pptx',
  'pub',
  'vsdx',
  'xls',
  'xlsx',
  'xsn',
];

export const USER_TOKEN_STORAGE_KEY = 'composer.userToken';

export enum AppUpdaterStatus {
  IDLE,
  UPDATE_AVAILABLE,
  UPDATE_UNAVAILABLE,
  UPDATE_IN_PROGRESS,
  UPDATE_FAILED,
  UPDATE_SUCCEEDED,
}

export const DefaultPublishConfig = {
  name: 'default',
  type: 'localpublish',
};

export const EmptyBotTemplateId = 'EmptyBot';

export const nameRegex = /^[a-zA-Z0-9-_]+$/;

export const adaptiveCardJsonBody =
  '-```\
\n{\
\n      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",\
\n      "version": "1.0",\
\n      "type": "AdaptiveCard",\
\n      "speak": "",\
\n      "body": [\
\n          {\
\n              "type": "TextBlock",\
\n              "text": "${whichOneDidYouMean()}",\
\n              "weight": "Bolder"\
\n          },\
\n          {\
\n              "type": "TextBlock",\
\n              "text": "${pickOne()}",\
\n              "separator": "true"\
\n          },\
\n          {\
\n              "type": "Input.ChoiceSet",\
\n              "placeholder": "Placeholder text",\
\n              "id": "userChosenIntent",\
\n              "choices": [\
\n                           {\
\n                               "title": "${getIntentReadBack()}",\
\n                               "value": "luisResult"\
\n                           },\
\n                           {\
\n                               "title": "${getAnswerReadBack()}",\
\n                               "value": "qnaResult"\
\n                           },\
\n                           {\
\n                               "title": "None of the above",\
\n                               "value": "none"\
\n                           }\
\n             ],\
\n             "style": "expanded",\
\n             "value": "luis"\
\n         },\
\n         {\
\n             "type": "ActionSet",\
\n             "actions": [\
\n                {\
\n                     "type": "Action.Submit",\
\n                     "title": "Submit",\
\n                     "data": {\
\n                   "intent": "chooseIntentCardResponse"\
\n                }\
\n         }\
\n       ]\
\n     }\
\n    ]\
\n}\
```';

export const whichOneDidYouMeanBody = "\
- I'm not sure which one you mean.\n\
- Hmmm, I find that to be ambiguous.\
";

export const pickOne = `
- Can you pick one ?\n\
- Can you help clarify by choosing one ?\
`;

export const getIntentReadBack = `
- SWITCH : \${toLower(dialog.luisResult.intent)}\n\
- CASE : \${'GetUserProfile'}\n\
  - Start filling in your profile(GetUserProfile intent)\n\
- DEFAULT :\n\
- \${dialog.luisResult.intent}\n\
`;

export const getAnswerReadBack = `
- See an answer from the Knowledge Base
`;
