'use babel'

import * as React from 'react'

export default function FocusButton() {
  return (
    <button 
    onClick={() =>
        inkdrop.commands.dispatch(document.body, 'view:toggle-distraction-free')
    }
      title='Focus' className='focus-button fas fa-square mde-toolbar-item'
    ></button>
  )
}




