import { proxy } from 'valtio';

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './griddycustoms.png',
    fullDecal: './griddycustoms.png',

});

export default state;