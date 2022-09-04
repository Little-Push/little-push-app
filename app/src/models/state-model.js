class StateModel {
    constructor (component, stateProperty) {
        this.component = component;
        this.stateProperty = stateProperty;
        this.data = {};
    }

    _set (field, value) {
        console.log({ field, value });
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
        return date.toLocaleTimeString('en-US', { hour12: false });
    }
}

export { StateModel };
