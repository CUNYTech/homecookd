import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Upload Picture</Button.Content>
      <Button.Content hidden>
        <Icon name='upload' />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonExampleAnimated
