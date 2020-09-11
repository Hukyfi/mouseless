// https://helpx.adobe.com/illustrator/using/default-keyboard-shortcuts.html
module.exports = {
    id = 'adobeillustrator',
    title = 'Adobe Illustrator',
    category = 'Design',
    description = null,
    sets = [
        {
            title: 'Essentials',
            id: 'essentials',
            version: 1,
            shortcuts: [
                {
                    title: 'Undo',
                    keys: ['Meta','z'],
                },
                {
                    title: 'Redo',
                    keys: ['Shift','Meta','z'],
                },
                {
                    title: 'Cut',
                    keys: ['Meta','x'],
                },
                {
                    title: 'Copy',
                    keys: ['Meta','c'],
                },
                {
                    title: 'Paste',
                    keys: ['Meta','v'],
                },
                {
                    title: 'Paste in front',
                    keys: ['Meta','f'],
                },
                {
                    title: 'Paste at back',
                    keys: ['Meta','b'],
                },
                {
                    title: 'Paste in place',
                    keys: ['Shift','Meta','b'],
                },
                {
                    title: 'Paste on all artboards',
                    keys: ['Alt','Shift','Meta','b'],
                },
                {
                    title: 'Check spelling',
                    keys: ['Meta','i'],
                },
                {
                    title: 'Open the Color Settings dialog box',
                    keys: ['Shift','Meta','k'],
                },
                {
                    title: 'Open the Keyboard Shortcuts dialog box',
                    keys: ['Alt','Shift','Meta','k'],
                },
                {
                    title: 'Open the Preferences dialog box',
                    keys: ['Meta','k'],
                },
            ],
        },
        {
            title: 'Documents',
            id: 'documents',
            version: 1,
            shortcuts: [
                {
                    title: 'Create a document',
                    keys: ['Meta','n'],
                },
                {
                    title: 'Create a document from a template',
                    keys: ['Shift','Meta','n'],
                },
                {
                    title: 'Create a document without opening the New Document dialog box',
                    keys: ['Alt','Meta','n'],
                },
                {
                    title: 'Open a document',
                    keys: ['Meta','o'],
                },
                {
                    title: 'Place a file in the document',
                    keys: ['Shift','Meta','p'],
                },
                {
                    title: 'Open the File Information dialog box',
                    keys: ['Alt','Shift','Meta','i'],
                },
                {
                    title: 'Open the Document Setup dialog box',
                    keys: ['Alt','Meta','p'],
                },
                {
                    title: 'Browse in Adobe Bridge',
                    keys: ['Alt','Meta','o'],
                },
                {
                    title: 'Close the document window',
                    keys: ['Meta','w'],
                },
                {
                    title: 'Save changes made to document',
                    keys: ['Meta','s'],
                },
                {
                    title: 'Open Save As dialog box',
                    keys: ['Shift','Meta','s'],
                },
                {
                    title: 'Save a copy of the document',
                    keys: ['Alt','Meta','s'],
                },
                {
                    title: 'Save the document as script files',
                    keys: ['Meta','F12']
                },
            ],
        },
    ],

}
