import types from '../types'

const ping = () => (
    {
        type: types.PING
    });

export default {
    ping
}