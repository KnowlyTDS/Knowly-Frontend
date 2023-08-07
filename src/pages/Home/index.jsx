import homeImage from '@/assets/homeImage.svg'

export const Home = () => {
  return (
    <section className='w-100 bg-violet-100 flex h-96 rounded-full'>
      <div className="w-1/2  flex flex-col items-center pt-32">
        <h1 className='font-bold text-4xl text-red-700'>BIENVENIDOS</h1>
        <h2>Aprende en Knowly</h2>
      </div>
      <div className="w-1/2  flex flex-col items-center justify-center">
        <img src={homeImage} className='max-h-64' alt="" />
      </div>

    </section>

  )
}
