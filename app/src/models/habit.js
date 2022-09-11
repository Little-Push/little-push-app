import { StateModel } from "./state-model.js";

class HabitModel extends StateModel {
    constructor (...args) {
        super(...args);
        this.name = this.data.name ?? ''
        this.description = this.data.description ?? ''
        this.intervalCount = this.data.intervalCount ?? 1
        this.intervalType = this.data.intervalType ?? 'Days(s)';
        this.time = this.data.time ?? ''
    }

    set name (value) {
        this._set('name', value);
    }

    get name () {
        return this.data.name;
    }

    set description (value) {
        this._set('description', value);
    }

    get description () {
        return this.data.description;
    }

    set intervalCount (value) {
        this._set('intervalCount', parseInt(value, 10));
    }

    get intervalCount () {
        return this.data.intervalCount;
    }

    set intervalType (value) {
        this._set('intervalType', value);
    }

    get intervalType () {
        return this.data.intervalType;
    }

    set time (value) {
        this._set('time', this._time(value));
    }

    get time () {
        return this.data.time;
    }

    set userId (value) {
        this._set('userId', value);
    }

    get userId () {
        return this.data.userId;
    }
}

export { HabitModel };
