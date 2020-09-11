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
    ],

}
