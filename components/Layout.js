import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import style from '../static/Style';

class Layout extends Component {
    
    render(){
        return(<div>
            {style}
            <Header header={this.props.header}
            title={this.props.title} />
            {this.props.children}
            <Footer footer="copyright SOU-Bara." />
        </div>);
    }
}
export default Layout;
