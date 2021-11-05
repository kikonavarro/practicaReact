import React from 'react';
import { Redirect} from 'react-router'
import Layout from '../layout/Layout';
import { getAdvert } from '../service';


class AdvertPage extends React.Component {
    
    constructor (props) {
        super (props)
        this.state = {
            tweet: null,
            error: null,
        }
    }
    handleGetAdvert = advertId => {
        getAdvert(advertId)
        .then(advert => this.setState({ advert}))
        .catch(error => this.setState({ error}))

    }
    componentDidMount() {
        const {match} = this.props
        this.handleGetAdvert(match.params.advertId)
    }
    
 
    render()   { 
        const { advert, error} = this.state
        if (error && error.status === 404) {
            return <Redirect to = "/404" />
        }
        return (
            // no meter objeto en el div
            <Layout title="terceraprueba">

            
                <div>AddPage {JSON.stringify(advert)}
    
                </div>
    
            </Layout>
          );
    
    }
}

// const AdvertPage = () => {
//     return (
//         <Layout title="terceraprueba">
//             <div>

//             </div>

//         </Layout>
//       );
// }
 
export default AdvertPage;