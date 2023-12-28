const NewCard = ({newNewsData})=>{
  const {author, title, url}= newNewsData
  return <li>
  <a href={url} target="_blank">{title}</a>
  <br />
  <span>Author: {author}</span>
  </li>
}
export default NewCard