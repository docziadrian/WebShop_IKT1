

export default async function Muanyag(){

    let Muanyag = []

    function PassData(data){
        data.map(info => {
            Muanyag.push(new Termek(info.id, info.nev, info.ar, info.leiras, info.kep));
        });


    }

    class Termek{
        constructor(id, nev, ar, leiras, img){
            this.id = id;
            this.nev = nev;
            this.ar = ar;
            this.leiras = leiras;
            this.img = img;
        }

        

        PlaceThisItemToTheCart() {
            const itemId = this.id;
            const existingItem = cart.find(item => item.id === itemId); //true - false
    
            if (existingItem) { //ELEKTRONIKUSBÓL VÁR MEGOLDÁT MÉG
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: itemId,
                    quantity: 1,
                    img: this.img,
                    ar: this.ar,
                    nev: this.nev
                });
            }
            saveTheCart();
        }

    }

    try {
        await fetch("/Src/Javascript/Products/Muanyag/products.json")
        .then(res => res.json())
        .then(data => PassData(data))
    } catch (error) {
        console.log(error)
    }

    return Muanyag
}
