import React from "react"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
