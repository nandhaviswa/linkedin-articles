/**
 * 
 * @see 
 * @author nandhakumarviswanaathan@gmail.com.
 * @since Thu July 25, 2019 07:22 AM.
 */
export function Decorator_Type1(constr: any){
    console.log( constr ); // logs User class object.
    constr.foo='bar';
}
export function Decorator_Type2(config: {[key: string]: string}){
    return function(constr: any){
        console.log( constr ); // logs Post class object here.
    }
}