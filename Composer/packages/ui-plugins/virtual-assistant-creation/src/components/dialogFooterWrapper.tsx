// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import React from 'react';
import formatMessage from 'format-message';
import { navigate } from '@reach/router';

// -------------------- DialogFooter -------------------- //
type DialogFooterWrapperProps = {
  onDismiss: () => void;
  onSubmit?: () => void;
  prevPath?: string;
  nextPath?: string;
};

export const DialogFooterWrapper: React.FC<DialogFooterWrapperProps> = (props) => {
  const { onDismiss, onSubmit, nextPath, prevPath } = props;

  const buttonText = onSubmit ? formatMessage('Create') : formatMessage('Next');

  const navBack = () => {
    if (prevPath) {
      navigate(prevPath);
    }
  };

  const navForwardOrSubmit = () => {
    if (onSubmit && !nextPath) {
      onSubmit();
    } else if (nextPath) {
      navigate(nextPath);
    }
  };

  return (
    <DialogFooter>
      <DefaultButton text={formatMessage('Cancel')} onClick={onDismiss} />
      {prevPath && <DefaultButton text={formatMessage('Back')} onClick={navBack} />}
      <PrimaryButton text={buttonText} onClick={navForwardOrSubmit} />
    </DialogFooter>
  );
};