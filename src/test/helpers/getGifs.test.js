import { getGif } from "../../helpers/getGifs";

describe('Pruebas al helper getGif', () => {
    
    
    
    test('debe traer solo 10 elementos', async () => {
        const gifs = await getGif('naruto');
        
        expect( gifs.length ).toBe(10);
    });

    test('debe traer solo 0 elementos', async () => {
        const gifs = await getGif('');
        
        expect( gifs.length ).toBe(0);
    });
    
});
