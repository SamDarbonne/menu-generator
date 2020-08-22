import React from 'react';
import './Generator.scss'
// import { generatorMap } from 'src/Generator/constants.js'

const generator = (data) => {
    return Object.keys(data).map(key => data[key][Math.floor(Math.random() * data[key].length)]).join(' ')
}

const fieri = () => {
    return generator(fieriData)
}

const generatorMap = {
    fieri
}

const fieriData = {
    recipeDescriptor: [
        'All-Rounder',
        'Bazooka Joe\'s',
        'Big Bad',
        'Cadillac',
        'Electric Cadillac',
        'Everything But the Kitchen Sink',
        'Slammin\'',
        'Smoke em if you got em',
        'Twistin\' the Night Away',
        'You-kill-it-we-grill-it',
        'Jamaican',
        'Mediterranean',
        'Ocean Inspired',
        'Ayurvedic',
        'Absolutely Insane',
        'Flavor Blasted',
        'Doritos Locos',
        'XXX-tra Spicy',
        'Livestock Guardian Breed',
    ],
    proteinAdjective: [
        'Air-Chilled',
        'Broasted',
        'Brown Basted',
        'Buffalo',
        'Cajun Blackened',
        'Charred',
        'Coca-Cola Glazed',
        'Cold',
        'Heritage Breed',
        'Island Roasted',
        'Machine Washable',
        'Okinawan',
        'Original',
        'Overboard',
        'Spicy',
        'Texas Style',
        'Toasted',
        'Wasabi Marinated',
        'Flavor Injected',
    ],
    protein: [
        'Beef',
        'Pork',
        'Chicken',
        'Chinese Chicken',
        'Carolina Whole Hog',
        'Sausage',
        'Tofu Buger',
        'Burger',
        'Bacon',
        'Spam Cakes',
        'Tuna',
        'Halibut',
        'Tilapia',
        'Wagyu Steak',
        'Brisket',
        'Baby Back Ribs',
        'St. Louis Ribs',
        'Short Ribs',
        'Ground Beef',
        'Chicken of the Sea',
        'Alligator',
    ],
    joiner: [
        'with',
        'Served on top of',
        'Accompanied by',
        'with a side of',
        'alongside',
        'and',
        'plus',
        'next to',
        'beside',
        'Served with'
    ],
    sideAdjective: [
        'Attractive',
        'Garden Fresh',
        'Very Well Cooked',
        'Professionally Designed',
        'a Whopping Pile of',
        'Just the Right Amount of',
        'Blue Themed',
        'Elevated',
        'Deconstructed',
        'Somewhat Off-Balance',
        'a Tower of',
        'Gorgeous',
        'Lukewarm',
        'Tableside',
    ],
    side: [
        'Potatoes',
        'Scallops',
        'Butter',
        'Candied Yams',
        'Prosecco-Infused Pears',
        'Collard Greens',
        'Edamame',
        'Samosas',
        'Lumpia',
        'Broccolini',
        'Broccoli',
        'Peas and Corn',
        'Ambrosia Salad',
        'Waldorf Salad',
        'Potato Skins'
    ],
    priceSeparator: [
        '-'
    ],
    price: [
        '$6.66',
        '$25',
        '$43 (serves two)',
        '$11.28',
        '$6.66',
        'market price',
        '$25',
        '$22',
        '$27',
        '$9.50 (under 12 only)',
        '$24 (no sharing)',
        '$18.40',
        '$32',
        '$5.99 (only on Tuesdays)',
        '$10 (early bird special)'
    ]
}

export class Generator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            message: generatorMap.fieri(),
            style: 'fieri'
        };
    }
    

    refresh = (style) => {
        return () => {
            this.setState({
                message: generatorMap[style]()
            })
        }
    }

    render() {

        const {
            message,
            style,
        } = this.state;
        return (
            <div className="generator-wrapper">
                <div className="generator-menu-item-text">
                    {message}
                </div>
                <div className="generator-refresh-button">
                    <button onClick={this.refresh(style)}>refresh</button>
                </div>
            </div>
        )
    }
}
