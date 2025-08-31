
const ItemList = [
  {
   id:1,
   // ✅ Change the image path to be relative to the public folder, and prepend with the base URL.
   image: `${import.meta.env.BASE_URL}/photo/prakash1.png`,
   price:'10',
   title:'Item1'       
  },
  {
   id:2,
   image: `${import.meta.env.BASE_URL}/photo/prakash2.png`,
   price:'20',
   title:'Items2'
  },
  {
   id:3,
   image: `${import.meta.env.BASE_URL}/photo/prakash3.png`,
   price:'30',
   title:'Item3'
  },
  {
   id:4,
   image: `${import.meta.env.BASE_URL}/photo/prakash4.png`,
   price:'40',
   title:'Item4'
  },
  {
   id:5,
   image: `${import.meta.env.BASE_URL}/photo/prakash5.png`,
   price:'50',
   title:'Item5'
  },
  {
   id:6,
   image: `${import.meta.env.BASE_URL}/photo/prakash6.png`,
   price:'60',
   title:'Item6'
  },
  {
   id:7,
   image: `${import.meta.env.BASE_URL}/photo/prakash7.png`,
   price:'70',
   title:'Item7'
  },
  {
   id:8,
   image: `${import.meta.env.BASE_URL}/photo/prakash8.png`,
   price:'80',
   title:'Item8'
  }
]
export default ItemList;