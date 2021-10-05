'use babel';

import FocusButton from "./focus-button-message-dialog"

module.exports = {
  activate() {
    inkdrop.components.registerClass(FocusButton)
    inkdrop.layouts.insertComponentToLayoutBefore('editor-floating-actions', 'toolbar-item-preview','FocusButton')
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout('editor-floating-actions', 'FocusButton')
    inkdrop.components.deleteClass(FocusButton)
  }

};

