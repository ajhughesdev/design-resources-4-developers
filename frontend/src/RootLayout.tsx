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
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/categories/')
      setCategories(response.data)
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
    <div className={`app ${theme}`}>
      <Header />
      <nav>
        <ul>
          <li className='home-btn'>
            <Link to='/' className='button'>
              Home
            </Link>
          </li>
          <li>
            <Link to='about' className='button'>
              About
            </Link>
          </li>
        </ul>
        <select
          onChange={handleChange}
          value={category}
          className='category-select'
        >
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
