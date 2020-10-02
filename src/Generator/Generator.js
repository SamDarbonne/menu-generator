import React from 'react';
import './Generator.scss'
import { samStyle, bigJuicyBootiesData, pyFieriData } from './constants.js'

const generator = (data) => {
    return () => {
        return Object.keys(data).map(key => data[key][Math.floor(Math.random() * data[key].length)]).join(' ')
    }
}

const GeneratorMap = {
    'Sam Style': generator(samStyle),
    'Big Juicy Booties': generator(bigJuicyBootiesData),
    'Py Fieri': generator(pyFieriData),
    
}
const GeneratorMapLength = Object.keys(GeneratorMap).length

export class Generator extends React.Component {
    constructor(props) {
        super(props);
        
        const defaultStyle = 'Sam Style'
        
        this.state = {
            currentStyleIndex: 0,
            message: GeneratorMap[defaultStyle](),
            style: defaultStyle,
        };
    }

    refresh = (style) => {
        return () => {
            this.setState({
                message: GeneratorMap[style]()
            })
        }
    }

    changeStyle = (indexDelta) => {
        const { currentStyleIndex } = this.state;
        return () => {
            if (currentStyleIndex + indexDelta === -1) {
                this.setState({ currentStyleIndex: GeneratorMapLength - 1 });
            } else if (currentStyleIndex + indexDelta === GeneratorMapLength) {
                this.setState({ currentStyleIndex: 0});
            } else {
                this.setState({ currentStyleIndex: currentStyleIndex + indexDelta})
            }
        }
    }

    render() {

        const {
            currentStyleIndex,
            message,
            style,
        } = this.state;
        return (
            <div className="generator-wrapper">
                <div className="generator-menu-item-text">
                    {message}
                </div>
                <div className="generator-refresh-button">
                    <div className={'style-switcher-section'}>
                        <button onClick={this.changeStyle(-1)}>{'<'}</button>
                        <span>{Object.keys(GeneratorMap)[currentStyleIndex]}</span>
                        <button onClick={this.changeStyle(1)}>{'>'}</button>
                    </div>
                    <button className="generator-refresh-button-btn" onClick={this.refresh(Object.keys(GeneratorMap)[currentStyleIndex])}>New Item</button>
                </div>
            </div>
        )
    }
}
