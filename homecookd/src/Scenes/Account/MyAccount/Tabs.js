import React from 'react'
import { Label, Menu, Tab } from 'semantic-ui-react'

import Billing from '../MyAccount/BillingForm';
import AccountPage from '../MyAccount/AccountPage';


const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane>  </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='shipping'>Shipping Info</Menu.Item>,
    render: () => <Tab.Pane>  <Billing /> </Tab.Pane>,
  },
  {
    menuItem: <Menu.Item key='Payment'>Payment Info</Menu.Item>,
    render: () => <Tab.Pane></Tab.Pane>,
  },
]

const TabSample = () => (
  <Tab panes={panes} />
)

export default TabSample;
