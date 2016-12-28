import { BehaviourSubject } from 'rxjs/BehaviourSubject'
import { Injectable } from '@angular/core'
import 'rxjs/Rx'

export interface Note {
    color: string
    title: string
    value: string
    id?: string | number
    createdAt?: string
    updatedAt?: string
    userId?: string
}

export interface State {
    notes: Note[]
}

const defaultState: State = {
    notes: []
}

const _store = new BehaviourSubject<State>(defaultState);

@Injectable()
export class Store {
    private store = _store;
    changes = this.store.asObservable().distinctUntilChanged()

    setState(state: State) {
        this.store.next(state);
    }

    getState(): State {
        return this.store.value;
    }

    purge() {
        this.store.next(defaultState);
    }
}
