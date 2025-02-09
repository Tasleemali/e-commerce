

export  const navOption =[
    {
        id:'home',
        label:"Home",
        path: "/"

    },
    {
        id:'listing',
        label:"All Products",
        path: "/client-view/all-products"

    },
    {
        id:'listingMen',
        label:"Men",
        path: "/client-view/men"

    },
    {
    
        id:'listingWomen',
        label:"Women",
        path: "/client-view/women"

    },
    {
      
        id:'listingKids',
        label:"kids",
        path: "/client-view/kids"

    },
] 

export const adminOption =[
    {
        id:"adminlisting",
          label:"Manage All Products",
        path: "/admin-view/all-products"
    },
    {
        id:"adminNewProduct",
          label:"Add New Products",
        path: "/admin-view/add-products"
    },
]

export const inputsignup = {

    username:'',
    email:'',
    password:''}


    export const inputlogin = {

      
        email:'',
        password:''}
    
    
    

        export const filechoose =[
          {
            id: "imageUrl",
            type: "file",
            label: "imageUrl",
            componentType: "input",
          },
        ]
    
export const adminAddProductformControls = [
 
    {
      id: "name",
      type: "text",
      placeholder: "Enter name",
      label: "Name",
      componentType: "input",
    },
    {
      id: "price",
      type: "number",
      placeholder: "Enter price",
      label: "Price",
      componentType: "input",
    },
    {
      id: "description",
      type: "text",
      placeholder: "Enter description",
      label: "Description",
      componentType: "input",
    },
    {
      id: "category",
      type: "",
      placeholder: "",
      label: "Category",
      componentType: "select",
      options: [
        {
          id: "men",
          label: "Men",
        },
        {
          id: "women",
          label: "Women",
        },
        {
          id: "kids",
          label: "Kids",
        },
      ],
    },
    {
      id: "deliveryInfo",
      type: "text",
      placeholder: "Enter deliveryInfo",
      label: "Delivery Info",
      componentType: "input",
    },
    {
      id: "onSale",
      type: "",
      placeholder: "",
      label: "OnSale",
      componentType: "select",
      options: [
        {
          id: "yes",
          label: "Yes",
        },
        {
          id: "no",
          label: "No",
        },
      ],
    },
    {
      id: "priceDrop",
      type: "number",
      placeholder: "Enter Price Drop",
      label: "PriceDrop",
      componentType: "input",
    },
  ];
  
  export const AvailableSizes = [
    {
      id: "s",
      label: "S",
    },
    {
      id: "m",
      label: "M",
    },
    {
      id: "l",
      label: "L",
    },
  ];
  
 
 

