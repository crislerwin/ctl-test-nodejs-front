import {Head, HeaderTitle} from './styles'


interface TitleProps { 
  title: string
}
export const Header: React.FC<TitleProps> = ({title}) => {
  return (
    
      <Head>
        <HeaderTitle>{title}</HeaderTitle>
      </Head>
    
  )
}