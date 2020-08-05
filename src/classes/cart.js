/*
* ××© ××¡××¨ ××ª ×× ×¢× ××× ××ª×©××× ×××©×¨×ª ××¢×ª ×©×× ×× ××¢×××
*
*
*
*/

import _ from 'lodash';
import  { decorate, observable } from 'mobx';
import $ from 'jquery';

class Cart {

    constructor() {
        this.productsInCart = [];
    };

    countProductInCart(){
        return _.size(this.productsInCart) || false;
    }

    totalPriceInCart(){
        if(!this.countProductInCart()) return false;

        let price = 0;
        this.productsInCart.forEach((i) => {
             price += this.getTotalPriceSingelProduct(i.product.id);
        });
        return price;
    }

    addProduct(product, quantity = 1){
        const isHas = this.isHasProductInCart(product.id);
        if(isHas){
            return this.productsInCart[isHas].quantity += quantity;
        }
        this.productsInCart.push({
            product: product,
            quantity: quantity,
        });
    }

    removeProduct(productId){
        const isHas = this.isHasProductInCart(productId);
        if(isHas) delete this.productsInCart[isHas];
    }

    changeQuantityProduct(productId, quantity){
         const isHas = this.isHasProductInCart(productId);
         if(isHas){
             this.productsInCart[isHas].quantity = quantity;
         }
    }

    isHasProductInCart(productId){
        const $return = _.keys(_.pickBy(this.productsInCart, {product:{id:productId}}));
        return !_.isEmpty($return) ? $return[0] : false;
    }

    getTotalPriceSingelProduct(productId){
       const productCart  = _.filter(this.productsInCart, i => i.product.id === productId);
       if (!productCart[0]) return;
       return productCart[0].product.price * productCart[0].quantity;
    }

    //××© ×¢×× ×× ××¡××¨ ×××
    sendToServerSide(productId, quantity, action){
        const url = '/';
        const data = {
            productId: productId,
            quantity: quantity,
            action: 'action', // action in server side
            param: action,
            nonce: 'nonce', //nonce token in server side
        }
        $.post(url, data);
    }

}

decorate( Cart, {
    productsInCart: observable,
});

const cart = new Cart();

export default cart;