import { useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error = useRouteError() as Error

  return (
    <div>
      <h1>Not Found</h1>
      <p>{error.message}</p>
    </div>
  )
}

export default NotFound
