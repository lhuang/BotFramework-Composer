// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx } from '@emotion/core';
import formatMessage from 'format-message';
import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { DialogWrapper, DialogTypes } from '@bfc/ui-shared';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { IAssistant } from '../models/stateModels';
import { AppContext } from './VirtualAssistantCreationModal';
import { DialogFooterWrapper } from './dialogFooterWrapper';
import { RouterPaths } from '../shared/constants';
// -------------------- NewBotPage -------------------- //

type NewBotPageProps = RouteComponentProps<{
  onDismiss: () => void;
}>;

export const NewBotPage: React.FC<NewBotPageProps> = (props) => {
  const { state, setState } = useContext(AppContext);
  const onDismiss = props.onDismiss;
  if (onDismiss === undefined) {
    console.log('invalid props passed to NewBotPage.tsx');
    return null;
  }
  const assistantSelectionChanged = (event: any, option?: IChoiceGroupOption) => {
    var selectedAssistant = state.availableAssistantTemplates.find((assistant: IAssistant) => {
      return assistant.name.toLowerCase() == option?.key.toLowerCase();
    });
    if (selectedAssistant) {
      setState({ ...state, selectedAssistant: selectedAssistant });
    }
  };

  const getAssistantsToRender = (): IChoiceGroupOption[] => {
    var result: IChoiceGroupOption[] = [];
    state.availableAssistantTemplates.forEach((assistant: IAssistant) => {
      result.push({
        key: assistant.name,
        text: `${assistant.name} : ${assistant.description}`,
      });
    });
    return result;
  };

  return (
    <DialogWrapper
      isOpen={true}
      onDismiss={props.onDismiss}
      title={formatMessage('Choose Your Assistant')}
      subText={formatMessage('Create a new bot or choose from Virtual assistant templates.')}
      dialogType={DialogTypes.CreateFlow}
    >
      <Label>{formatMessage('Choose one:')}</Label>
      <ChoiceGroup
        required={true}
        onChange={(event: any, option?: IChoiceGroupOption) => {
          assistantSelectionChanged(event, option);
        }}
        styles={{
          root: {
            width: '100%',
          },
        }}
        defaultSelectedKey={state.selectedAssistant.name}
        options={getAssistantsToRender()}
      />
      <DialogFooterWrapper
        prevPath={RouterPaths.defineConversationPage}
        nextPath={RouterPaths.customizeBotPage}
        onDismiss={onDismiss}
      />
    </DialogWrapper>
  );
};