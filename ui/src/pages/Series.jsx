import { SeriesList } from '../containers/SeriesList'
import { Button } from '../components/Button'

export const Series = () => {
    return (
        <section className="max-w-screen-xl mx-auto px-4 py-8">
            <Button type={'anchor'} link={'/series/create'}>
                Create serie
            </Button>

            <SeriesList />
        </section>
    )
}
