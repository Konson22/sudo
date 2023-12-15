import Carousel from 'react-elastic-carousel'

export default function Header2() {

  const items = [
    {id: 1, title: 'item #1'},
    {id: 2, title: 'item #2'},
    {id: 3, title: 'item #3'},
    {id: 4, title: 'item #4'},
    {id: 5, title: 'item #5'}
  ]
  return (
    <Carousel>
      {items.map(item => (
        <div key={item.id} className='py-14 bg-red-200 w-full'>{item.title}</div>
      ))}
    </Carousel>
  )
}
