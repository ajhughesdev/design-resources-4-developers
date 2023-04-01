import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ResourceCard from './../../components/ResourceCard/ResourceCard'

import css from './category.module.css'

interface Resource {
  id: number
  name: string
  link: string
  description: string
  category_name: string
}

const Category = (): JSX.Element => {
  const { category: categoryParam } = useParams<{ category: string }>()
  const [resourceList, setResourceList] = useState<Resource[]>([])

  const getResourceList = async () => {
    const response = await axios.get<Resource[]>(
      `http://127.0.0.1:8000/api/categories/${categoryParam}/`
    )
    setResourceList(response.data)
  }

  useEffect(() => {
    getResourceList()
  }, [categoryParam])

  return (
    <>
      <h2 className={css.resources}>
        <span data-text={categoryParam}>{categoryParam}</span>
      </h2>
      <div className={css.container}>
        <div className={css.items}>
          {resourceList.map((item) => (
            <ResourceCard
              key={item.id}
              name={item.name}
              link={item.link}
              description={item.description}
              category={item.category_name}
            />
          ))}
        </div>
      </div>
      <a href='https://clearbit.com'>Logos provided by Clearbit</a> |{' '}
      <a href='https://companyurlfinder.com'>provided by CUF Services</a>
    </>
  )
}

export default Category
