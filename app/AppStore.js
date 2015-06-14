'use strict';

import { Store } from 'flummox';

import AppActions from './AppActions';

import {HomepageConfig, SessionStorageMethods} from './AppConstants';

window.console.log(HomepageConfig);

const watches = require('./assets/json/watches.json');

import axios from 'axios'

const popupBox = {
    boxName: 'Welcome to my site!',
    boxTitle: 'Here, Read This!',
    colorShift: {
        begin: 'F00',
        end: 'FF9600'
    }
};

const NoResults = [null, ''];


export default class AppStore extends Store {

    static ID = 'AppStore';
    static LAST_PATH_KEY = 'lastPath';

    constructor(flux) {
        super();

        this.state = {
            watches,
            popupBox,
            timestamp: {},
            ninetiesImg: [],
            hitCounterFigures: HomepageConfig.hitCounterFigures
        };

        const appActionsIds = flux.getActionIds(AppActions.ID);

        this.registerAsync(appActionsIds.fetchTimestamp, this.fetchTimestamp);
        this.registerAsync(appActionsIds.fetch90sImage, this.fetch90sImage);
        this.register(appActionsIds.recordLastPath, this.recordLastPath);
    }

    fetchTimestamp() {
        axios.get('/timestamp.json')
            .then((response) => {
                this.setState({
                    timestamp: response.data
                })
            })
    }

    fetch90sImage() {
        let url = 'http://redwall.herereadthis.com/api/banner_image/?sort=hits';
        axios.get(url)
            .then((response) => {
                this.setState({
                    ninetiesImg: response.data
                })
            })
    }

    recordLastPath(path) {
        window.console.log(path);
        if (NoResults.indexOf(path) === -1) {
            window.console.log(path);
            SessionStorageMethods.set(AppStore.LAST_PATH_KEY, path);
        }
    }
}

