import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

useEffect(() => {
  // data fetching logic here
  fetch(url)
   .then((answer) => {if (!answer.ok) {
    throw new Error(
      `This is a HTTP error ${answer.status}`
    );
  }
  
   return answer.json()})
   .then((data) => {
    setLoading(true)
    setData(data);
    setError(null);
  } )
   .catch((error) => {
    setError(error.message);
    setData(null);
   })
   .finally(()=>{
    setLoading(false)
   });
 

 }, [url]);

  return [loading, data, error]
}

export default useFetch