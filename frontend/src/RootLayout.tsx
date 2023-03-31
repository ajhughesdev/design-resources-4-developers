import { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header/Header'

type Category = {
  category: string
}

const RootLayout = () => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState('')

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/categories/')
      setCategories(response.data)
      console.log(categories)
    }
    fetchCategories()
  }, [])

  const handleChange = (e: any) => {
    const selectedCategory = e.target.value
    if (categories.some((item) => item.category === selectedCategory)) {
      setCategory(selectedCategory)
      navigate(`/${selectedCategory}`)
    }
  }

  return (
    <div className="app dark">
      <Header />
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
        </ul>
        <select onChange={handleChange} value={category}>
          <option value=''>Select a category</option>
          {categories.map((item) => (
            <option key={item.category} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      </nav>
      <Outlet />
    </div>
  )
}

export default RootLayout
