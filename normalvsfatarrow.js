1> argument objects are not availbale in fat arrow

const test = (x,y)=>{
  console.log(arguments)
  
  return x+y;

}

test(3,6)


2> we can't make contrustor in fat arrow function

const test = (name) =>{

  this.fname=name
}

let myname = new test("arif")

3> they dont have their own this

4> implicitly return by the arrow function

