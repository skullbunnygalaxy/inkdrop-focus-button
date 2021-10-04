'use babel';

import FocusButtonMessageDialog from './focus-button-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(FocusButtonMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'FocusButtonMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'FocusButtonMessageDialog'
    )
    inkdrop.components.deleteClass(FocusButtonMessageDialog);
  }

};
