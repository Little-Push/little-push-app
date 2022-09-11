import { Client } from "./client.js";

class StateModel {
    constructor (data, component, stateProperty) {
        this.component = component;
        this.stateProperty = stateProperty;
        this.data = data;
    }

    _set (field, value) {
        this.data[field] = value;
        this.component.setState({
            [this.stateProperty]: this.data
        });
    }

    _time (value) {
        if (!value) {
            return value;
        }
        const date = new Date();
        const [ hours, minutes ] = value.split(':');
        date.setHours(hours);
        date.setMinutes(minutes);
        return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit' });
    }

    save () {
        const slug = this.constructor.name.replace(/Model$/, '').replaceAll(/([A-Z])/g, '-$1').replace(/^-/, '').toLowerCase()
        if (this.data.id) {
            return Client.put(slug, this.data)
        } else {
            return Client.post(slug, this.data)
        }
    }
}

export { StateModel };
