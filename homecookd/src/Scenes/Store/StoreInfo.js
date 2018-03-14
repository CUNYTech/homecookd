import React, { Component } from 'react';
import { Card, Feed } from 'semantic-ui-react'

class StoreInfo extends Component{
  constructor(props) {
    super(props);
    this.state = {
      times : {
        Monday : {
          open: '8:00 AM',
          close: "10:00 PM"
        },
        Tuesday : {
          open: '8:00 AM',
          close: "10:00 PM"
        },
        Wednesday : {
          open: '8:00 AM',
          close: "10:00 PM"
        },
        Thursday : {
          open: '8:00 AM',
          close: "10:00 PM"
        },
        Friday : {
          open: '8:00 AM',
          close: "10:00 PM"
        },
        Saturday : {
          open: '8:00 AM',
          close: "10:00 PM"
        },
        Sunday : {
          open: '8:00 AM',
          close: "10:00 PM"
        }
      }
    };
  }
  render(){
    return(
      <Card size='medium'>
        <Card.Content>
          <Card.Header>
            About
          </Card.Header>
          </Card.Content>
          <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Content>
                      <Feed.Summary>
                        <Feed.Label>
                          Availability
                        </Feed.Label>
                        <Feed.Date>
                        Monday : {this.state.times.Monday.open} - {this.state.times.Monday.close}
                        </Feed.Date>
                        <Feed.Date>
                        Tuesday : {this.state.times.Tuesday.open} - {this.state.times.Tuesday.close}
                        </Feed.Date>
                        <Feed.Date>
                        Wednesday :{this.state.times.Wednesday.open} - {this.state.times.Wednesday.close}
                        </Feed.Date>
                        <Feed.Date>
                        Thursday : {this.state.times.Thursday.open} - {this.state.times.Thursday.close}
                        </Feed.Date>
                        <Feed.Date>
                        Friday : {this.state.times.Friday.open} - {this.state.times.Friday.close}
                        </Feed.Date>
                        <Feed.Date>
                        Saturday : Closed
                        </Feed.Date>
                        <Feed.Date>
                        Sunday : Closed
                        </Feed.Date>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
      </Card>
    )
  }
}
export default StoreInfo;
