class testClass{
    constructor(props){
        this.props = props;
    }
};

let newObj = new testClass("sucessful");

console.log(newObj.props);

function jsClass(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
}

var newClass = new jsClass(1,2,3);

console.log(newClass.x);