const topsell = {

    fakeDB_category :[],
    
    
init ()
{
    this.fakeDB_category.push({title:'Captain America`s Shield',
    description:`It is the primary defensive and offensive piece of equipment used by and emblematic of Captain America.
    `,price:`1349.99`});

    this.fakeDB_category.push({title:'Funko Pop Hulk',
    description:`Hulk Collectible`,
    price:`19.99`});

    this.fakeDB_category.push({title:'Funko Pop thor',description:`Thor Collectible.`,
    price:`19.99`});

},
getAllTopsells ()
{
        return this.fakeDB_category;

}


}
topsell.init();
module.exports = topsell;