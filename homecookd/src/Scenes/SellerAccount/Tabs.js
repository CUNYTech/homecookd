import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'

import Bio from '../SellerAccount/SellerInfo';
import ImageUpload from '../SellerAccount/Image';


const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane>  </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='Payment'>Payment Info</Menu.Item>,
    render: () => <Tab.Pane></Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='Page Info'>Page Info</Menu.Item>,
    render: () => <Tab.Pane> <Bio/> </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='Images'>Images</Menu.Item>,
    render: () => <Tab.Pane> <ImageUpload/> </Tab.Pane>,
  },
]

const TabSamples = () => (
  <Tab panes={panes} />
)

export default TabSamples;
