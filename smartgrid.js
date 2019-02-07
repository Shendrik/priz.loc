const smartgrid = require('smart-grid');

const settings = {
    columns: 24,
    offset: '10px',

    container: {
        maxWidth: '1280px',
        fields: '30px'
    },
    breakPoints: {
        lg: {
            width: '1200px',
            fields: '30px'
        },
        md: {
            width: '992px',
            fields: '15px'
        },
        sm: {
            width: '720px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '15px'
        },
        xxs: {
            width: "380px",
            fields: "5px"
        }
    },
    // container: {
    //     maxWidth: '960px',
    //     fields: '30px'
    // },
    // breakPoints: {
    //     md: {
    //         width: "992px",
    //         fields: "20px"
    //     },
    //     sm: {
    //         width: "720px",
    //         fields: "10px"
    //     },
    //     xs: {
    //         width: "576px",
    //         fields: "5px"
    //     },
    //     xxs: {
    //         width: "380px",
    //         fields: "5px"
    //     }
    // },
    
    oldSizeStyle: false,
    properties: [
        'justify-content'
    ]
}

smartgrid('./src/precss', settings);