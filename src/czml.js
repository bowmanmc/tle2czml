
function createDocument() {
    return {
        "id": "document",
        "name": "simple",
        "version": "1.0",
        "clock": {
            "interval": "2012-03-15T10:00:00Z/2012-03-16T10:00:00Z",
            "currentTime": "2012-03-15T10:00:00Z",
            "multiplier": 60,
            "range": "LOOP_STOP",
            "step": "SYSTEM_CLOCK_MULTIPLIER"
        }
    };
}


export default {
    createDocument
};
