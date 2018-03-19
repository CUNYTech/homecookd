import React from 'react'
import { Divider, Image } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const src = '/assets/images/wireframe/image.png'

const ImageUpload = () => (
  <div>
    <Image.Group size='small'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Divider hidden />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Divider hidden />
    </Image.Group>
  </div>
)

export default ImageUpload;




  <Button.Group>
    <Button>Cancel</Button>
    <Button.Or />
    <Button positive>Save</Button>
  </Button.Group>
