import React from "react";
import { Card, Icon } from "semantic-ui-react";
import { CSSTransition } from "react-transition-group";


export default function LocationCard(props) {
  return (
    <div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={9000}
        classNames="fade"
        unmountOnExit
        >
        <Card>
          <Card.Content header={props.location.name} />
          <Card.Content
            description={`${props.location.type}: ${props.location.dimension}`}
        />
        <Card.Content extra>
          <Icon name="user"/>
          Residents: {props.location.residents.length}
        </Card.Content>
      </Card>
      </CSSTransition>
    </div>
  );
};
