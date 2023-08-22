window['ThemeComponent_Quantity'] = () => {
  return {
    quantity: 1,
    init(){
      this.$watch('prQuantity', (value)=>{this.quantity = value});  
    },
    dispatchInputChange() {
      this.$refs.quantityInput.dispatchEvent(new Event('change', {
        bubbles: true
      }));
    },

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }

      this.dispatchInputChange();
      return liveRegion(this.quantity);
    },

    increaseQuantity() {
      this.quantity++;
      this.dispatchInputChange();
      return liveRegion(this.quantity);
    }

  };
};
