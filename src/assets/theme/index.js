export const theme = {
    color:{
        primaryColor:'#ff385c',
        secondColor:'#fff'
    },
    textColor:{
       primaryColor: "#484848",
       secondaryColor: "#222"
    },
    mixin: {
        boxShadow: `
        transition: box-shadow 200ms ease;
        &:hover {
            box-shadow: 0 2px 4px rgba(0,0,0,.18);
        }
        `  
    },
    boxShadow:'box-shadow: 0 2px 4px rgba(0,0,0,.18)'
}