import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
  Header,
} from 'semantic-ui-react'

class ArticleForm extends Component {
  render() {
    return (
      <Form>
        <Header as="h2">
          Article Details
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
            label='Form Abstract'
            placeholder='Write an abstract here...'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={TextArea}
            label='Article Text'
            placeholder='Tell us more about your article...'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Input
            control={Input}
            label='Tags'
            placeholder="Please add up to 3 tags about what your article is about."
          />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      )
  }
}

export default ArticleForm