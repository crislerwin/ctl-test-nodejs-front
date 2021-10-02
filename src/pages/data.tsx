import { useFetch } from '../hooks/useFetch'

export default function API() {
  const { data } = useFetch('/subscription')
  console.log(data)
  return <> {JSON.stringify(data)}</>
 
}