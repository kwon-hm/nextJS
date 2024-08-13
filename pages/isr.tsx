export async function getStaticProps() {
    console.log('server')
    return {
        props: { time: new Date().toISOString() },
        revalidate: 5,
    }
}

type Time = {
    time: string
}

export default function ISR({ time }: Time) {
    return (
        <>
            <h1>{time}</h1>
        </>
    )
}