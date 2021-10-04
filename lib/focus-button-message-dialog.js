'use babel';

import React, { useEffect, useCallback } from 'react'
import { logger, useModal } from 'inkdrop'

const FocusButtonMessageDialog = (props) => {
  const modal = useModal()
  const { Dialog } = inkdrop.components.classes

  const toggle = useCallback(() => {
    modal.show()
    logger.debug('FocusButton was toggled!')
  }, [])

  useEffect(() => {
    const sub = inkdrop.commands.add(document.body, {
      'focus-button:toggle': toggle
    })
    return () => sub.dispose()
  }, [toggle])

  return (
    <Dialog {...modal.state} onBackdropClick={modal.close}>
      <Dialog.Title>FocusButton</Dialog.Title>
      <Dialog.Content>FocusButton was toggled!</Dialog.Content>
      <Dialog.Actions>
        <button className="ui button" onClick={modal.close}>
          Close
        </button>
      </Dialog.Actions>
    </Dialog>
  )
}

export default FocusButtonMessageDialog
