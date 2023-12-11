function Product(id, name, price, quantity)
{                                                                                                                             
    this.id=id;
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.bill=function(){
        return this.price*this.quantity;
    }
}
const p1=new Product(101, "Book", 499.99, 2);
const p2=new Product(102, "Pen", 129.99, 5);
let display=function(obj){
    console.log(obj.name);
    console.log(obj.bill());
}
display(p1);
display(p2);