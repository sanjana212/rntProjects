// for this kind of exports we have to add type:"module" in package.json;
// and whre you want to import it give that file name as .mjs to identify
//.mjs i.e. we are importing es6 features here.
export function simple(){
    console.log('simple is complex');
}
// module.exports=simple;