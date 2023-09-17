import data from './data';
import { useEffect, useState } from 'react';
import Title from "./components/Title";
import Menu from './components/Menu';
import Categories from './components/Categories';

const App = () => {
  const [menu, setMenu] = useState(data);
  const [categories, setCategories] = useState([]);

  const uniqueCategories = () => {
    let categoriesSet = new Set();
    menu.map((dish) => {
      categoriesSet.add(dish.category);
    });
    setCategories(Array.from(categoriesSet));
  }

  const filterCategory = (category) => {
    const filteredDishes = data.filter((dish) => category === dish.category);
    setMenu(filteredDishes);
  }

  const refresh = () => {
    setMenu([...data]);
  }

  useEffect(() => {
    uniqueCategories();
  }, []);

  return (
    <main className='menu'>
      <Title />
      <Categories categories={categories} filterCategory={filterCategory} refresh={refresh}/>
      <Menu menu={menu} />
    </main>
  )

};
export default App;