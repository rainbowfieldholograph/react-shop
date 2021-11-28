import { makeAutoObservable } from 'mobx'

class CollectionsData {
  data = [
    {
      title: 'snale',
      products: [
        {
          title: 'real capybara hours t-shirt',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
          sizes: ['S', 'M', 'L', 'XL'],
          descr: 'Design by Fooyepont & Ambient Bird',
          benefits: [
            '100% organic ring-spun cotton',
            'Fabric weight: 5.3 oz/yd² (180 g/m²)',
            'Single jersey',
          ],
        },
        {
          title: 't-shirt',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt1',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt2',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt3',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
      ],
    },
    {
      title: 'another',
      products: [
        {
          title: 'VDSVSDVSDVSDV',
          price: '$228.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt5',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt6',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt7',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt8',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
      ],
    },
    {
      title: 'Dismiss Yourself',
      products: [
        {
          title: 'real capybara hours t-shirt',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt1',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt2',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
        {
          title: 't-shirt3',
          price: '$35.0',
          image:
            'https://cdn.shopify.com/s/files/1/0550/3225/0526/products/unisex-organic-cotton-t-shirt-black-front-6195768cf117b_1024x1024@2x.png?v=1637186606',
        },
      ],
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }
}

export default new CollectionsData()
