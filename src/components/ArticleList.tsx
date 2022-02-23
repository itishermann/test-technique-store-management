//
import React from 'react';
import { Nav, Badge, Button } from 'react-bootstrap';
import { Article } from '../interfaces';

interface Props {
  remove: (id:number) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
  article: Article[];
}

const ArticleList: React.FC<Props> = ({remove, increment, decrement, article}) => {
  return (
    <div>
    {article.map(({id, name, quantity, price}) => (
     <Nav variant="pills" key={id} justify>
      <Nav.Item>
        <h3>
          <Badge pill bg="primary">
            {name}
          </Badge>
        </h3>
      </Nav.Item>
      <Nav.Item>
        <span style={{color: quantity > 0 ? 'black' : 'red' }}>{quantity > 0 ? quantity : 'Out of stock'}</span>
      </Nav.Item>
      <Nav.Item>
        {price} MAD
      </Nav.Item>
      <Nav.Item>
        <Button variant="secondary" onClick={()=>increment(id)}>
          INCREMENT
        </Button>
      </Nav.Item>
      <Nav.Item>
      <Button variant="secondary" onClick={()=>decrement(id)}>
          DECREMENT
        </Button>
      </Nav.Item>
      <Nav.Item>
        <Button variant="danger" onClick={()=>remove(id)}>
          DELETE
        </Button>
      </Nav.Item>
    </Nav>
    ))}
    </div>
  );
};

export default ArticleList;
