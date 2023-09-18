import data from './data';
import { useState } from 'react';
import Title from "./components/Title";
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState(Array.from(allCategories));

  const filterCategory = (category) => {
    if(category === 'all'){
      setMenu(data);
      return;
    }
    const filteredDishes = data.filter((dish) => category === dish.category);
    setMenu(filteredDishes);
  }

  return (
    <main>
      <section className="menu">
        <Title text={'Our Menu'} />
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu menu={menu} />
      </section>
    </main>
  )

};
export default App;