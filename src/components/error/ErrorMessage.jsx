import React from 'react'
import { Message } from 'semantic-ui-react'

const ErrorMessage = () => (
  <Message negative>
    <Message.Header>An error has occurred</Message.Header>
    <p>Unable to load data from SWAPI</p>
  </Message>
)

export default ErrorMessage