'use babel';

import FocusButton from "./focus-button-message-dialog"

const CONFIG_ICON_COLOR = 'focus-button.iconColor';
const CONFIG_VISIBLE = 'focus-button.visible';

const updateColor = () => {
  const iconColor = inkdrop.config.get(CONFIG_ICON_COLOR)
  document.documentElement.style.setProperty('--button-color', iconColor)
}

const updateTime = () => {
  const timeVisible = inkdrop.config.get(CONFIG_VISIBLE)
  document.documentElement.style.setProperty('--visible', timeVisible)
}

module.exports = {
  activate() {
    inkdrop.components.registerClass(FocusButton)
    inkdrop.layouts.insertComponentToLayoutBefore('editor-floating-actions', 'toolbar-item-preview','FocusButton')
    inkdrop.config.observe(CONFIG_ICON_COLOR, updateColor)
    inkdrop.config.observe(CONFIG_VISIBLE, updateTime)
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout('editor-floating-actions', 'FocusButton')
    inkdrop.components.deleteClass(FocusButton)
   },

  config: {
    iconColor: {
      title: 'Icon Color',
      type: 'string',
      description: 'Color for icons',
      default: 'blueviolet'
    },
    visible: {
      title: 'Transition Duration',
      type: 'string',
      description: 'Length of time that the Floating Actions Editor is visible',
      default: '6s'
    }
  }

};
