import czml from './czml';

describe('createdocument()', () => {
    it('creates a document czml element', () => {
        let doc = czml.createDocument();
        console.log('Document: ' + JSON.stringify(doc));
    });
});
