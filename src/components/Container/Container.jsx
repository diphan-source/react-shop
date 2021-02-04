import './container.css'
import Nav from '../nav/Nav'
import Query from '../Query/Query'
import Main from '../main/Main'
import Footer from '../footer/Footer'

function Container() {
    return (
        <div className="container">
            <h1>SAMPLE PAGE</h1>
            <Nav />
            <Query />
            <Main />
            <Footer />
        </div>
    )
}

export default Container
