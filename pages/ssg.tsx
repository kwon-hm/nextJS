export async function getStaticProps() {
    console.log('static server')
    return {
      props: { time: new Date().toISOString() },
    }
  }
  
  type Time = {
    time: string
  }
  
  export default function SSG({ time }: Time) {
    return (
      <>
        <h1>{time}</h1>
      </>
    )
  }