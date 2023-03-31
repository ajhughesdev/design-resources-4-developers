import css from './resourceCard.module.css'
import defaultImage from './../../assets/code.svg'

interface ResourceCardProps {
  name: string
  link: string
  description: string
  category: string
}

const ResourceCard = ({
  name,
  link,
  description,
  category,
}: ResourceCardProps): JSX.Element => {
  const primaryImageSrc = `https://logo.clearbit.com/${
    link
      .replace('https://', '')
      .replace('http://', '')
      .replace('www.', '')
      .split('/')[0]
  }`
  const secondaryImageSrc = `http://www.google.com/s2/favicons?domain=${
    link
      .replace('https://', '')
      .replace('http://', '')
      .replace('www.', '')
      .split('/')[0]
  }`

  return (
    <div className={css.item}>
      <span className={css.resource}>
        <article className={css['resource-card']}>
          {category !== 'Chrome Extensions' && (
            <div className={css.icon}>
              <img
                src={primaryImageSrc}
                alt='logo'
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.onerror = null
                  if (secondaryImageSrc) {
                    e.currentTarget.src = secondaryImageSrc
                  } else {
                    e.currentTarget.src = defaultImage
                  }
                }}
              />
            </div>
          )}
          <h3>{name}</h3>
          <p>{description}</p>
          <a href={`${link}`} title='new window'>
            Visit Resource{' '}
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
              <polyline points='15 3 21 3 21 9'></polyline>
              <line x1='10' y1='14' x2='21' y2='3'></line>
            </svg>
          </a>
        </article>
      </span>
    </div>
  )
}

export default ResourceCard
