import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { Article } from '../interfaces';

interface Props {
  add: (article: Article) => void;
}

const AddArticleForm: React.FC<Props> = ({add}) => {
  const [name, setName] = React.useState<string | undefined>();
  const [price, setPrice] = React.useState<number | undefined>();
  const [quantity, setQuantity] = React.useState<number | undefined>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name || !price || !quantity) {
      return;
    }
    const article: Article = {
      id: Date.now().valueOf(),
      name,
      price,
      quantity
    };
    add(article);
    setName(undefined);
    setPrice(undefined);
    setQuantity(undefined);
  }

  return (
    <form onSubmit={handleSubmit}>
    <InputGroup className="mb-3" style={{padding: "8px"}} >
      <InputGroup.Text id="article-name">Article</InputGroup.Text>
      <FormControl
        required
        placeholder="Name"
        aria-label="Name"
        aria-describedby="article-name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormControl
      required
        placeholder="Quantity"
        aria-label="Quantity"
        aria-describedby="article-Quantity"
        value={quantity}
        type='number'
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <FormControl
        required
        placeholder="Price"
        aria-label="Price"
        aria-describedby="article-Price"
        value={price}
        type='number'
        step=".01"
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <Button type='submit' >Add</Button>
    </InputGroup>
  </form>
  )
}

export default AddArticleForm