import React from "react";
import { Segment, Button, Grid, Header } from "semantic-ui-react";

function PostTypeSelector({ setPostType }) {
  return (
    <Segment placeholder>
      <Header as="h2" textAlign="center">
        Choose Post Type:
      </Header>
      <Grid columns={2} stackable textAlign="center">
        <Grid.Row inline>
          <Grid.Column>
            <Button
              color="yellow"
              content="Question"
              size="medium"
              onClick={() => setPostType("question")}
            />
          </Grid.Column>
          <Grid.Column>
            <Button
              color="green"
              content="Article"
              size="medium"
              onClick={() => setPostType("article")}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default PostTypeSelector;
