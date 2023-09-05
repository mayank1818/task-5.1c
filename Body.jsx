import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import PostTypeSelector from './PostTypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

function Body() {
  const [postType, setPostType] = useState('question');

  return (
    <Container text>
      <Header as="h2" textAlign="center">
        Create a New Post
      </Header>
      <PostTypeSelector setPostType={setPostType} />
      {postType === 'question' && <QuestionForm />}
      {postType === 'article' && <ArticleForm />}
    </Container>
  );
}

export default Body;
