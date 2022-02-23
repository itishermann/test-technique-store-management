import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { AddArticleForm, ArticleList, Navbar } from './components';
import { Article } from './interfaces';

function App() {
  const [articles, setArticles] = React.useState<Article[]>([]);

  const addArticle = (article: Article) => {
    setArticles(prev=>prev.concat(article));
  };
  const removeArticle = (id: number) => {
    setArticles(prev => prev.filter(article => article.id !== id));
  };
  const decrementArticle = (id: number) => {
    setArticles((prev) => prev.map((article) => (article.id===id?{...article, quantity: article.quantity-1}:article)));
  };
  const incrementArticle = (id: number) => {
    setArticles((prev) => prev.map((article) => (article.id===id?{...article, quantity: article.quantity+1}:article)));
  };


  return (
    <div className="App">
      <Navbar />
      <ArticleList article={articles} increment={incrementArticle} decrement={decrementArticle} remove={removeArticle} />
      <AddArticleForm add={addArticle} />
    </div>
  );
}

export default App;
