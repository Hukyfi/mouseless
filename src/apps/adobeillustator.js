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
                {
                    title: 'Open Export for screens dialog box',
                    keys: ['Alt','Meta','e'],
                },
                {
                    title: 'Open the Save for web dialog box',
                    keys: ['Alt','Shift','Meta','s'],
                },
                {
                    title: 'Package the document',
                    keys: ['Alt','Shift','Meta','p'],
                },
                {
                    title: 'Print',
                    keys: ['Meta','p'],
                },
                {
                    title: 'Exit Illustrator',
                    keys: ['Meta','q'],
                },
            ],
        },
        {
            title: 'Tools',
            id: 'tool',
            version: 1,
            shortcuts: [
                {
                    title: 'Artboard tool',
                    keys: ['Shift','o'],
                },
                {
                    title: 'Selection tool',
                    keys: ['v'],
                },
                {
                    title: 'Direct Selection tool',
                    keys: ['a'],
                },
                {
                    title: 'Magic Wand tool',
                    keys: ['y'],
                },
                {
                    title: 'Lasso tool',
                    keys: ['q'],
                },
                {
                    title: 'Pen tool',
                    keys: ['p'],
                },
                // Check tilde symbol
                // {
                //     title: 'Curvature tool',
                //     keys: ['Shift','\~'],
                // },
                {
                    title: 'Blob Brush tool',
                    keys: ['Shift','b'],
                },
                {
                    title: 'Add Anchor Point tool',
                    keys: ['+'],
                },
                {
                    title: 'Delete Anchor Point tool',
                    keys: ['-'],
                },
                {
                    title: 'Switch to Anchor Point tool',
                    keys: ['Shift','c'],
                },
                {
                    title: 'Type tool',
                    keys: ['t'],
                },
                {
                    title: 'Touch Type tool',
                    keys: ['Shift','t'],
                },
                {
                    title: 'Line Segment tool',
                    keys: ['\\'],
                },
                {
                    title: 'Rectangle tool',
                    keys: ['m'],
                },
                {
                    title: 'Ellipse tool',
                    keys: ['l'],
                },
                {
                    title: 'Paintbrush tool',
                    keys: ['b'],
                },
                {
                    title: 'Pencil tool',
                    keys: ['n'],
                },
                {
                    title: 'Shaper tool',
                    keys: ['Shift','n'],
                },
                {
                    title: 'Rotate tool',
                    keys: ['r'],
                },
                {
                    title: 'Reflect tool',
                    keys: ['o'],
                },
                {
                    title: 'Scale tool',
                    keys: ['s'],
                },
                {
                    title: 'Warp tool',
                    keys: ['Shift','r'],
                },
                {
                    title: 'Width tool',
                    keys: ['Shift','w'],
                },
                {
                    title: 'Free Transform tool',
                    keys: ['e'],
                },
                {
                    title: 'Shape Builder tool',
                    keys: ['Shift','m'],
                },
                {
                    title: 'Perpective Grid tool',
                    keys: ['Shift','p'],
                },
                {
                    title: 'Perspective Selection tool',
                    keys: ['Shift','v'],
                },
                {
                    title: 'Symbol Sprayer tool',
                    keys: ['Shift','s'],
                },
                {
                    title: 'Column Graph tool',
                    keys: ['j'],
                },
                {
                    title: 'Mesh tool',
                    keys: ['u'],
                },
                {
                    title: 'Gradient tool',
                    keys: ['g'],
                },
                {
                    title: 'Eyedropper tool',
                    keys: ['i'],
                },
                {
                    title: 'Blend tool',
                    keys: ['w'],
                },
                {
                    title: 'Live Paint Bucket tool',
                    keys: ['k'],
                },
                {
                    title: 'Live Paint Selection tool',
                    keys: ['Shift','l'],
                },
                {
                    title: 'Slice tool',
                    keys: ['Shift','k'],
                },
                {
                    title: 'Eraser tool',
                    keys: ['Shift','e'],
                },
                {
                    title: 'Scissors tool',
                    keys: ['c'],
                },
                {
                    title: 'Hand tool',
                    keys: ['h'],
                },
                {
                    title: 'Zoom tool',
                    keys: ['z'],
                },
                {
                    title: 'Switch to Smooth tool while using Blob Brush tool',
                    keys: ['Alt'],
                },
            ],
        },
    ],

}
