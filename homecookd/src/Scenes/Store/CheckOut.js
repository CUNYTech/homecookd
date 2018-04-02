import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const RightAlignPage = {

  width: 'auto',
  marginRight: 50,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  flexDirection: 'column'


}

const ButtonExampleLabeledIcon = () => (
  <div style={RightAlignPage}>
    <Button>
      Check Out
      <Icon name='shopping cart' />
    </Button>
  </div>
)

export default ButtonExampleLabeledIcon
