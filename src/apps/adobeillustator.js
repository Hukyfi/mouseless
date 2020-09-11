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
                    keys: ['Meta','Shift','z'],
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
            ],
        },
    ],

}
