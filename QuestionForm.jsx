import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
  Header,
} from 'semantic-ui-react'

class QuestionForm extends Component {
  render() {
    return (
      <Form>
        <Header as="h2">
          Question Details
        </Header>
        <Header as="h3">
          What do you want to ask or share
        </Header>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Title: '
            placeholder='Enter title here'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={TextArea}
            label='Question Text'
            placeholder='Tell us more about your question...'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Input
            control={Input}
            label='Tags'
            placeholder="Please add up to 3 tags about what your question is about."
          />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      )
  }
}

export default QuestionForm